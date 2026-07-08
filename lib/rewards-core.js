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

  return { hasTierUnlock, TIER, defaultTokens, mergeTokens, computeChallengeTokens, addTokens, CHALLENGES, answerCountsToward, isChallengeWon };
});
