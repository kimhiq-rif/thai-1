'use strict';

const assert = require('node:assert/strict');
const SRS = require('../lib/srs.js');
const DAY = 24 * 60 * 60 * 1000;
const start = Date.UTC(2026, 0, 1);

let card = SRS.schedule({}, SRS.RATINGS.GOOD, start);
assert.equal(card.intervalDays, 1);
assert.equal(card.dueAt, start + DAY);

card = SRS.schedule(card, SRS.RATINGS.GOOD, card.dueAt);
assert.equal(card.intervalDays, 3);

card = SRS.schedule(card, SRS.RATINGS.GOOD, card.dueAt);
assert.equal(card.intervalDays, 7.5);
assert.equal(card.box, 3);

const failed = SRS.schedule(card, SRS.RATINGS.AGAIN, card.dueAt);
assert.equal(failed.intervalDays, 10 / 1440);
assert.equal(failed.repetitions, 0);
assert.equal(failed.lapses, 1);
assert.equal(failed.box, 0);

const easy = SRS.schedule({}, SRS.RATINGS.EASY, start);
assert.equal(easy.intervalDays, 4);
assert.ok(SRS.retrievability(easy, start + 4 * DAY) > .899);
assert.ok(SRS.retrievability(easy, start + 4 * DAY) < .901);

const migrated = SRS.schedule({box:4,lastSeen:start,dueAt:start+3*DAY}, SRS.RATINGS.GOOD, start+3*DAY);
assert.ok(migrated.intervalDays >= 7.5);

console.log('SRS scheduler: OK');
