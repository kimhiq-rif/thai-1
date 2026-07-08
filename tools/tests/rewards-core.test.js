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
