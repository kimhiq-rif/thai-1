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

  return { hasTierUnlock, TIER, defaultTokens, mergeTokens };
});
