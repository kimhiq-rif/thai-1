/*
 * Thai Trainer — small Anki-style spaced-repetition scheduler.
 * Pure module: no DOM or storage access, so it can be tested in Node.
 */
(function(root, factory){
  const api = factory();
  if(typeof module === 'object' && module.exports) module.exports = api;
  root.SRS = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function(){
  'use strict';

  const DAY_MS = 24 * 60 * 60 * 1000;
  const MIN_EASE = 1.3;
  const MAX_EASE = 3.0;
  const MAX_INTERVAL_DAYS = 3650;
  const RATINGS = Object.freeze({AGAIN:1, HARD:2, GOOD:3, EASY:4});

  function clamp(value, min, max){ return Math.min(max, Math.max(min, value)); }
  function number(value, fallback){ return Number.isFinite(Number(value)) ? Number(value) : fallback; }

  function migratedInterval(stat){
    const stored = number(stat.intervalDays, 0);
    if(stored > 0) return stored;
    if(number(stat.dueAt, 0) > number(stat.lastSeen, 0) && number(stat.lastSeen, 0) > 0){
      return Math.max(10 / 1440, (stat.dueAt - stat.lastSeen) / DAY_MS);
    }
    return [0, 2/24, .5, 1, 3, 7][clamp(number(stat.box, 0), 0, 5)] || 0;
  }

  function boxFor(intervalDays){
    if(intervalDays < 1) return 0;
    if(intervalDays < 3) return 1;
    if(intervalDays < 7) return 2;
    if(intervalDays < 21) return 3;
    if(intervalDays < 60) return 4;
    return 5;
  }

  function schedule(stat, rating, now){
    const previous = stat || {};
    const reviewedAt = number(now, Date.now());
    const choice = clamp(number(rating, RATINGS.GOOD), RATINGS.AGAIN, RATINGS.EASY);
    let interval = migratedInterval(previous);
    let ease = clamp(number(previous.easeFactor, 2.5), MIN_EASE, MAX_EASE);
    const migratedRepetitions = previous.repetitions == null ? number(previous.box, 0) : number(previous.repetitions, 0);
    let repetitions = Math.max(0, migratedRepetitions);
    let lapses = Math.max(0, number(previous.lapses, 0));

    if(choice === RATINGS.AGAIN){
      interval = 10 / 1440;
      repetitions = 0;
      lapses += 1;
      ease = clamp(ease - .2, MIN_EASE, MAX_EASE);
    }else if(choice === RATINGS.HARD){
      interval = repetitions === 0 ? .5 : Math.max(1, interval * 1.2);
      repetitions += 1;
      ease = clamp(ease - .15, MIN_EASE, MAX_EASE);
    }else if(choice === RATINGS.GOOD){
      interval = repetitions === 0 ? 1 : repetitions === 1 ? 3 : Math.max(interval + 1, interval * ease);
      repetitions += 1;
    }else{
      interval = repetitions === 0 ? 4 : Math.max(4, interval * ease * 1.3);
      repetitions += 1;
      ease = clamp(ease + .15, MIN_EASE, MAX_EASE);
    }

    interval = clamp(interval, 10 / 1440, MAX_INTERVAL_DAYS);
    return {
      intervalDays: interval,
      easeFactor: ease,
      repetitions,
      lapses,
      dueAt: reviewedAt + Math.round(interval * DAY_MS),
      lastReviewAt: reviewedAt,
      lastRating: choice,
      box: boxFor(interval)
    };
  }

  function retrievability(stat, now){
    const interval = migratedInterval(stat || {});
    const last = number(stat && (stat.lastReviewAt || stat.lastSeen), 0);
    if(!interval || !last) return 0;
    const elapsedDays = Math.max(0, (number(now, Date.now()) - last) / DAY_MS);
    return Math.pow(.9, elapsedDays / interval);
  }

  return Object.freeze({RATINGS, schedule, retrievability});
});
