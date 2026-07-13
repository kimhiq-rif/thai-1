// Merge a JSON array of new words ({thai,roman,tone,hebrew,english,level}) into app.js WORDS.
// Validates structure, dedups against existing WORDS (by Thai text) and within the batch,
// flags roman/tone syllable-count mismatches for review, and (with --write) inserts.
//
// Usage:
//   node tools/merge_json_words.js <path-to.json>            # dry run (report only)
//   node tools/merge_json_words.js <path-to.json> --write    # apply to app.js
//   node tools/merge_json_words.js <path-to.json> --write --include-review  # also insert mismatch-flagged

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP = path.join(ROOT, 'app.js');
const SRC = process.argv[2];
const WRITE = process.argv.includes('--write');
const INC_REVIEW = process.argv.includes('--include-review');
if (!SRC) { console.error('give a JSON path'); process.exit(1); }

const TONES = new Set(['mid', 'low', 'falling', 'high', 'rising']);
const incoming = JSON.parse(fs.readFileSync(SRC, 'utf8'));

let app = fs.readFileSync(APP, 'utf8');
const start = app.indexOf('const WORDS = [');
const arrEnd = app.indexOf('\n];', start);
const body = app.slice(start, arrEnd);
const existing = new Set();
{ const re = /thai:['"]([^'"]+)['"]/g; let m; while ((m = re.exec(body))) existing.add(m[1]); }

const ready = [], review = [];
const skip = { dup: [], batchDup: [], invalid: [] };
const seen = new Set();

for (const w of incoming) {
  const bad = [];
  for (const k of ['thai', 'roman', 'tone', 'hebrew', 'english', 'level']) {
    if (w[k] === undefined || w[k] === null || w[k] === '') bad.push('missing ' + k);
  }
  if (!bad.length) {
    if (/[0-9¹²³⁴⁵]/.test(w.roman)) bad.push('digit in roman');
    if (!(Number.isInteger(w.level) && w.level >= 1 && w.level <= 6)) bad.push('level not 1-6');
    const tones = String(w.tone).split('-');
    const badTone = tones.find(t => !TONES.has(t));
    if (badTone) bad.push('bad tone token: ' + badTone);
  }
  if (bad.length) { skip.invalid.push(w.thai + ' — ' + bad.join(', ')); continue; }
  if (existing.has(w.thai)) { skip.dup.push(w.thai); continue; }
  if (seen.has(w.thai)) { skip.batchDup.push(w.thai); continue; }
  seen.add(w.thai);

  // quality flag: roman syllable count vs tone syllable count
  const romanSyl = String(w.roman).split('-').length;
  const toneSyl = String(w.tone).split('-').length;
  if (romanSyl !== toneSyl) review.push({ w, note: `roman ${romanSyl} syl vs tone ${toneSyl} syl` });
  else ready.push(w);
}

const toInsert = INC_REVIEW ? ready.concat(review.map(r => r.w)) : ready;

// build lines
const esc = s => String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
const perLevel = {};
const lines = toInsert.map((w, i) => {
  perLevel[w.level] = (perLevel[w.level] || 0) + 1;
  const id = 'jw_' + String(i + 1).padStart(4, '0');
  return `  {id:"${id}",level:${w.level},thai:"${esc(w.thai)}",roman:"${esc(w.roman)}",hebrew:"${esc(w.hebrew)}",english:"${esc(w.english)}",tone:'${w.tone}',source:"batch-2026-07-13"},`;
});

// report
console.log('incoming:', incoming.length, '| existing WORDS:', existing.size);
console.log('READY (clean):', ready.length);
console.log('REVIEW (roman/tone syllable mismatch):', review.length, INC_REVIEW ? '(included in write)' : '(excluded from write)');
console.log('skipped — already in app:', skip.dup.length);
console.log('skipped — duplicate within batch:', skip.batchDup.length);
console.log('skipped — invalid:', skip.invalid.length);
console.log('WILL INSERT:', toInsert.length, '| per level:', JSON.stringify(perLevel));
if (skip.dup.length) console.log('\ndups vs app:\n  ' + skip.dup.join('  '));
if (skip.batchDup.length) console.log('\nbatch dups:\n  ' + skip.batchDup.join('  '));
if (skip.invalid.length) console.log('\ninvalid:\n  ' + skip.invalid.join('\n  '));
if (review.length) console.log('\nreview (mismatch — verify roman vs tone):\n  ' + review.map(r => `${r.w.thai}  roman="${r.w.roman}" tone="${r.w.tone}"  [${r.note}]`).join('\n  '));

if (WRITE && toInsert.length) {
  app = app.slice(0, arrEnd) + '\n' + lines.join('\n') + app.slice(arrEnd);
  fs.writeFileSync(APP, app);
  console.log('\nWRITTEN', toInsert.length, 'words to app.js');
} else {
  console.log('\n' + (WRITE ? '(nothing to write)' : '(dry run — add --write to apply)'));
}
