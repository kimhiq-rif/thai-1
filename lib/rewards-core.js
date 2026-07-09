/*
 * Thai Trainer — rewards-core
 * Pure, DOM-free logic for the rewards system so it can be unit-tested in node
 * AND used in the browser. No globals, no localStorage, no document access here.
 *
 * Dual-mode: attaches to window.RewardsCore in the browser, and exports via
 * module.exports in node (tools/tests/*). Keep every function pure.
 */
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api; // node
  root.RewardsCore = api; // browser
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  // --- Tier unlocks -------------------------------------------------------
  // A functional reward (premium pen, ink judge, ...) unlocks once the learner
  // has unlocked at least `tier` premium skins. Generalizes the old
  // hasPremiumPen() === unlockedPremiumSkinCount() >= 3 check.
  function hasTierUnlock(unlockedPremiumSkinCount, tier) {
    return (Number(unlockedPremiumSkinCount) || 0) >= (Number(tier) || 0);
  }

  // The tier at which each functional tool becomes available.
  const TIER = { premiumPen: 3, inkJudge: 5, inkReplay: 8, masterMode: 10 };

  // --- Reward tokens ------------------------------------------------------
  // Earned from load challenges. Kept as a flat map so merges stay simple.
  function defaultTokens() {
    return { hint: 0, freeze: 0, boost: 0 };
  }

  // Backward-compatible merge: old cloud/local saves may lack `tokens` or some
  // of its keys. Always return a full token object, never mutate input.
  function mergeTokens(saved) {
    const base = defaultTokens();
    if (saved && typeof saved === 'object') {
      for (const k of Object.keys(base)) {
        const v = Number(saved[k]);
        if (Number.isFinite(v) && v >= 0) base[k] = Math.floor(v);
      }
    }
    return base;
  }

  // Tokens earned for completing a load challenge. Rewards the SKILL, not mere
  // completion: everyone who finishes gets a hint token; a freeze token needs
  // high accuracy; a boost token needs a flawless run.
  function computeChallengeTokens(bonus) {
    const b = bonus || {};
    const total = Number(b.total) || 0;
    const correct = Number(b.correct) || 0;
    const acc = total > 0 ? correct / total : 0;
    const perfect = total > 0 && correct === total;
    return {
      hint: 1,
      freeze: acc >= 0.9 ? 1 : 0,
      boost: perfect ? 1 : 0,
    };
  }

  // Sum two token maps into a fresh object (never mutate inputs).
  function addTokens(a, b) {
    const out = defaultTokens();
    for (const k of Object.keys(out)) {
      out[k] = (Number(a && a[k]) || 0) + (Number(b && b[k]) || 0);
    }
    return out;
  }

  // --- Daily challenges (registry) ---------------------------------------
  // Each challenge is data. Only one runs at a time; each can be completed
  // once per day (enforced in app.js via state.daily.completed).
  //   requiredLevel   — if set, ONLY answers from that level count toward the
  //                     target (sprint). null means every answer counts (load).
  //   requiredLevel12 — minimum Level-1.2 answers required (load only; 0 = off).
  const CHALLENGES = {
    load:   { id: 'load',   target: 50, requiredAccuracy: 0.7, durationMs: 2 * 60 * 60 * 1000, reward: 25, requiredLevel12: 10, requiredLevel: null },
    sprint: { id: 'sprint', target: 30, requiredAccuracy: 0.6, durationMs: 1 * 60 * 60 * 1000, reward: 20, requiredLevel12: 0,  requiredLevel: '3' },
  };

  // Does an answer at `itemLevel` count toward this challenge's target?
  function answerCountsToward(ch, itemLevel) {
    if (!ch || !ch.requiredLevel) return true;
    return String(itemLevel) === String(ch.requiredLevel);
  }

  // Win test for an active challenge snapshot (carries live total/correct/level12).
  function isChallengeWon(ch) {
    if (!ch) return false;
    const total = Number(ch.total) || 0;
    const correct = Number(ch.correct) || 0;
    const acc = total > 0 ? correct / total : 0;
    const targetOk = total >= (Number(ch.target) || 0);
    const accOk = acc > (Number(ch.requiredAccuracy) || 0); // strict, matches legacy
    const need12 = Number(ch.requiredLevel12) || 0;
    const level12Ok = need12 <= 0 || (Number(ch.level12) || 0) >= need12;
    return targetOk && accOk && level12Ok;
  }

  // --- Ink Judge (M3) -----------------------------------------------------
  // Compare two binary masks (0/1 arrays, same length) of the learner's ink vs
  // the target glyph. Coarse grids give natural tolerance for handwriting.
  //   precision = share of your ink that landed on the glyph
  //   recall    = share of the glyph you actually covered
  //   score     = F1(precision, recall) as 0..100
  // Thicken a binary NxN mask by Chebyshev radius r (tolerance band).
  function dilate(mask, N, r){
    if(!r || r <= 0) return mask;
    var out = new Uint8Array(N * N);
    for(var y = 0; y < N; y++) for(var x = 0; x < N; x++){
      if(!mask[y * N + x]) continue;
      for(var dy = -r; dy <= r; dy++) for(var dx = -r; dx <= r; dx++){
        var ny = y + dy, nx = x + dx;
        if(ny >= 0 && ny < N && nx >= 0 && nx < N) out[ny * N + nx] = 1;
      }
    }
    return out;
  }

  // With tol>0 (and N given), near-misses within `tol` cells count — handwriting
  // never pixel-matches a printed font, so a tolerance band keeps scores fair.
  function inkScore(user, target, N, tol){
    tol = tol || 0;
    var len = Math.min(user ? user.length : 0, target ? target.length : 0);
    var dT = (tol > 0 && N) ? dilate(target, N, tol) : target;
    var dU = (tol > 0 && N) ? dilate(user, N, tol) : user;
    var uc = 0, tc = 0, pOverlap = 0, rOverlap = 0;
    for(var i = 0; i < len; i++){
      var u = user[i] ? 1 : 0, t = target[i] ? 1 : 0;
      uc += u; tc += t;
      if(u && dT[i]) pOverlap++;   // your ink near the glyph
      if(t && dU[i]) rOverlap++;   // glyph near your ink
    }
    if(uc === 0) return { precision: 0, recall: 0, score: 0, empty: true };
    if(tc === 0) return { precision: 0, recall: 0, score: 0, empty: false };
    var precision = pOverlap / uc;
    var recall = rOverlap / tc;
    // F-beta with beta=0.5 weights precision (staying on the shape) over recall
    // (covering it), so a big scribble that "covers everything" can't score high.
    var b2 = 0.25;
    var denom = b2 * precision + recall;
    var fb = denom > 0 ? ((1 + b2) * precision * recall) / denom : 0;
    return { precision: precision, recall: recall, score: Math.round(fb * 100), empty: false };
  }

  // Verdict band + palette hook for a given score.
  function inkVerdict(score){
    if(score >= 85) return 'great';
    if(score >= 65) return 'good';
    if(score >= 40) return 'fair';
    return 'low';
  }

  return { hasTierUnlock, TIER, defaultTokens, mergeTokens, computeChallengeTokens, addTokens, CHALLENGES, answerCountsToward, isChallengeWon, inkScore, inkVerdict, dilate };
});
