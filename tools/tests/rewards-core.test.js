// Tests for lib/rewards-core.js (M0 foundation).
const { test, eq, ok } = require('./harness');
const RC = require('../../lib/rewards-core');

test('hasTierUnlock: boundary is inclusive', () => {
  ok(RC.hasTierUnlock(3, 3), '3 unlocked >= tier 3');
  ok(RC.hasTierUnlock(5, 3), '5 unlocked >= tier 3');
  ok(!RC.hasTierUnlock(2, 3), '2 unlocked < tier 3');
});

test('hasTierUnlock: garbage inputs never throw and default safely', () => {
  ok(!RC.hasTierUnlock(undefined, 5), 'undefined count treated as 0');
  ok(RC.hasTierUnlock(5, undefined), 'undefined tier treated as 0');
  ok(!RC.hasTierUnlock(null, 1), 'null count treated as 0');
});

test('TIER map matches the reward plan', () => {
  eq(RC.TIER.premiumPen, 3);
  eq(RC.TIER.inkJudge, 5);
  eq(RC.TIER.inkReplay, 8);
  eq(RC.TIER.masterMode, 10);
});

test('defaultTokens shape', () => {
  eq(RC.defaultTokens(), { hint: 0, freeze: 0, boost: 0 });
});

test('mergeTokens fills missing keys for old saves', () => {
  eq(RC.mergeTokens(undefined), { hint: 0, freeze: 0, boost: 0 });
  eq(RC.mergeTokens({}), { hint: 0, freeze: 0, boost: 0 });
  eq(RC.mergeTokens({ hint: 2 }), { hint: 2, freeze: 0, boost: 0 });
});

test('mergeTokens rejects bad values and floors decimals', () => {
  eq(RC.mergeTokens({ hint: -3, freeze: 'x', boost: 2.9 }), { hint: 0, freeze: 0, boost: 2 });
});

test('mergeTokens does not mutate its input', () => {
  const input = { hint: 1 };
  RC.mergeTokens(input);
  eq(input, { hint: 1 }, 'input untouched');
});

test('computeChallengeTokens: completion always grants a hint token', () => {
  eq(RC.computeChallengeTokens({ total: 50, correct: 30 }), { hint: 1, freeze: 0, boost: 0 });
});

test('computeChallengeTokens: 90%+ accuracy grants a freeze token', () => {
  eq(RC.computeChallengeTokens({ total: 50, correct: 45 }), { hint: 1, freeze: 1, boost: 0 });
  eq(RC.computeChallengeTokens({ total: 50, correct: 44 }), { hint: 1, freeze: 0, boost: 0 }, '88% is below threshold');
});

test('computeChallengeTokens: a flawless run grants a boost token', () => {
  eq(RC.computeChallengeTokens({ total: 50, correct: 50 }), { hint: 1, freeze: 1, boost: 1 });
});

test('computeChallengeTokens: empty/garbage bonus is safe', () => {
  eq(RC.computeChallengeTokens(undefined), { hint: 1, freeze: 0, boost: 0 });
  eq(RC.computeChallengeTokens({ total: 0, correct: 0 }), { hint: 1, freeze: 0, boost: 0 }, 'no divide-by-zero');
});

test('addTokens: sums maps without mutating inputs', () => {
  const a = { hint: 2, freeze: 1, boost: 0 };
  const b = { hint: 1, freeze: 0, boost: 3 };
  eq(RC.addTokens(a, b), { hint: 3, freeze: 1, boost: 3 });
  eq(a, { hint: 2, freeze: 1, boost: 0 }, 'input a untouched');
});

test('CHALLENGES registry has load and sprint with the agreed params', () => {
  eq(RC.CHALLENGES.load.target, 50);
  eq(RC.CHALLENGES.load.requiredAccuracy, 0.7);
  eq(RC.CHALLENGES.load.reward, 25);
  eq(RC.CHALLENGES.sprint.target, 30);
  eq(RC.CHALLENGES.sprint.requiredAccuracy, 0.6);
  eq(RC.CHALLENGES.sprint.reward, 20);
  eq(RC.CHALLENGES.sprint.requiredLevel, '3');
});

test('answerCountsToward: load counts any level, sprint only level 3', () => {
  ok(RC.answerCountsToward(RC.CHALLENGES.load, 1), 'load counts level 1');
  ok(RC.answerCountsToward(RC.CHALLENGES.load, '1.2'), 'load counts level 1.2');
  ok(RC.answerCountsToward(RC.CHALLENGES.sprint, 3), 'sprint counts level 3 (number)');
  ok(RC.answerCountsToward(RC.CHALLENGES.sprint, '3'), 'sprint counts level 3 (string)');
  ok(!RC.answerCountsToward(RC.CHALLENGES.sprint, 2), 'sprint ignores level 2');
  ok(!RC.answerCountsToward(RC.CHALLENGES.sprint, 4), 'sprint ignores level 4');
});

test('isChallengeWon: load needs target + accuracy + level12', () => {
  const base = { ...RC.CHALLENGES.load };
  ok(RC.isChallengeWon({ ...base, total: 50, correct: 40, level12: 10 }), '80% + 10x1.2 wins');
  ok(!RC.isChallengeWon({ ...base, total: 50, correct: 40, level12: 9 }), 'missing 1.2 quota fails');
  ok(!RC.isChallengeWon({ ...base, total: 49, correct: 45, level12: 10 }), 'below target fails');
  ok(!RC.isChallengeWon({ ...base, total: 50, correct: 35, level12: 10 }), '70% is not > 70%');
});

test('isChallengeWon: sprint needs only target + accuracy (no level12)', () => {
  const base = { ...RC.CHALLENGES.sprint };
  ok(RC.isChallengeWon({ ...base, total: 30, correct: 19 }), '63% of 30 wins');
  ok(!RC.isChallengeWon({ ...base, total: 30, correct: 18 }), '60% is not > 60%');
  ok(!RC.isChallengeWon({ ...base, total: 29, correct: 29 }), 'below target fails');
});

test('inkScore: perfect overlap scores 100', () => {
  const g = [0,1,1,0, 1,1,1,1, 0,1,1,0];
  eq(RC.inkScore(g, g), { precision: 1, recall: 1, score: 100, empty: false });
});

test('inkScore: empty ink is flagged and scores 0', () => {
  const target = [1,1,0,0];
  const r = RC.inkScore([0,0,0,0], target);
  eq(r.score, 0); ok(r.empty, 'empty flag set');
});

test('inkScore: partial coverage lands between 0 and 100', () => {
  const target = [1,1,1,1, 0,0,0,0];   // top half
  const user   = [1,1,0,0, 0,0,1,1];   // half-on, half-off
  const r = RC.inkScore(user, target);
  ok(r.score > 0 && r.score < 100, 'partial score, got ' + r.score);
  eq(r.precision, 0.5, 'half your ink was on target');
  eq(r.recall, 0.5, 'you covered half the target');
});

test('inkScore: scribble everywhere has low precision', () => {
  const target = [1,0,0,0, 0,0,0,0];
  const user   = [1,1,1,1, 1,1,1,1];   // covers all
  const r = RC.inkScore(user, target);
  eq(r.recall, 1, 'covered the whole target');
  ok(r.precision < 0.2, 'but most ink was off-target');
  ok(r.score < 40, 'low overall, got ' + r.score);
});

test('inkScore: tolerance gives near-miss ink partial credit', () => {
  // 5x5: target is a vertical bar in column 2; user drew it one column off (column 3).
  const N = 5;
  const target = new Uint8Array(N*N), user = new Uint8Array(N*N);
  for(let y=0;y<N;y++){ target[y*N+2]=1; user[y*N+3]=1; }
  const strict = RC.inkScore(user, target, N, 0);
  const tol1 = RC.inkScore(user, target, N, 1);
  eq(strict.score, 0, 'no overlap without tolerance');
  ok(tol1.score > 80, 'one-cell miss is nearly full credit with tol=1, got ' + tol1.score);
});

test('dilate: expands set cells by radius', () => {
  const N = 5; const m = new Uint8Array(N*N); m[2*N+2] = 1; // center
  const d = RC.dilate(m, N, 1);
  let count = 0; for(let i=0;i<d.length;i++) count += d[i];
  eq(count, 9, '3x3 block around center');
});

test('inkVerdict: bands', () => {
  eq(RC.inkVerdict(92), 'great');
  eq(RC.inkVerdict(70), 'good');
  eq(RC.inkVerdict(50), 'fair');
  eq(RC.inkVerdict(20), 'low');
});
