// Import words from data/vocab_with_thai_script.json into app.js WORDS.
// Zero agents, zero production tokens — pure local transform + merge.
//
// What it does:
//   1. Reads the curated vocab bank (thai / transliteration / he / english / suggested_level).
//   2. Derives `roman` (digit-free) and `tone` (per-syllable) from normalized_transliteration,
//      using the standard Thai tone-number system verified empirically against existing WORDS:
//        1=mid  2=low  3=falling  4=high  5=rising
//   3. Dedups against existing WORDS by exact Thai text.
//   4. Skips entries that are not question-ready (inactive / no real level / missing tone),
//      unless you opt in with flags. It never guesses a tone.
//   5. In --write mode, inserts clean entries into the WORDS array in app.js.
//
// Usage:
//   node tools/import_vocab_bank.js                 # dry run — report only (default)
//   node tools/import_vocab_bank.js --write         # apply to app.js
//   node tools/import_vocab_bank.js --include-inactive   # also consider active_for_questions:false
//   node tools/import_vocab_bank.js --include-review     # also consider suggested_level:"review_queue" (needs a level guess by length)
//
// Flags combine. Review-queue words with no numeric level are placed by word length
// only when --include-review is set, and are always reported separately.

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'data', 'vocab_with_thai_script.json');
const APP = path.join(ROOT, 'app.js');

const WRITE = process.argv.includes('--write');
const INC_INACTIVE = process.argv.includes('--include-inactive');
const INC_REVIEW = process.argv.includes('--include-review');

const TONE = { '1': 'mid', '2': 'low', '3': 'falling', '4': 'high', '5': 'rising' };

// ---- load source ----
const vocab = JSON.parse(fs.readFileSync(SRC, 'utf8'));

// ---- read app.js and locate WORDS array ----
let app = fs.readFileSync(APP, 'utf8');
const start = app.indexOf('const WORDS = [');
if (start < 0) { console.error('Could not find `const WORDS = [` in app.js'); process.exit(1); }
const arrEnd = app.indexOf('\n];', start);
const body = app.slice(start, arrEnd);

// existing Thai texts (dedup key) + existing id prefixes (avoid collision)
const existing = new Set();
{ const re = /thai:['"]([^'"]+)['"]/g; let m; while ((m = re.exec(body))) existing.add(m[1]); }

// ---- parse roman + tone from normalized_transliteration ----
// Returns { roman, tone } or null if a tone digit is missing (we refuse to guess).
function parseRomanTone(norm) {
  if (!norm) return null;
  const sylls = String(norm).split('-');
  const romanParts = [];
  const toneParts = [];
  for (const syl of sylls) {
    const digits = syl.match(/[1-5]/g) || [];
    if (digits.length !== 1) return null;          // 0 or >1 tone digits → ambiguous, skip
    toneParts.push(TONE[digits[0]]);
    romanParts.push(syl.replace(/[1-5]/g, ''));     // digit-free roman piece
  }
  const roman = romanParts.join('-');
  if (/[0-9¹²³⁴⁵]/.test(roman)) return null;        // safety: merge format forbids digits in roman
  return { roman, tone: toneParts.join('-') };
}

// suggested_level → integer level, or null if not a real level
function levelOf(v) {
  const n = parseInt(v.suggested_level, 10);
  if (n >= 1 && n <= 6) return n;
  if (INC_REVIEW) {                                 // review_queue etc. — place by length
    const len = (v.thai || '').length;
    return len <= 2 ? 1 : len <= 3 ? 2 : len <= 4 ? 3 : len <= 5 ? 4 : 5;
  }
  return null;
}

const ready = [];
const skip = { dup: [], inactive: [], noLevel: [], noTone: [] };

for (const v of vocab) {
  if (existing.has(v.thai)) { skip.dup.push(v.thai); continue; }
  if (v.active_for_questions === false && !INC_INACTIVE) { skip.inactive.push(v.thai); continue; }
  const level = levelOf(v);
  if (level == null) { skip.noLevel.push(v.thai); continue; }
  const rt = parseRomanTone(v.normalized_transliteration || v.transliteration);
  if (!rt) { skip.noTone.push(v.thai + ' (' + (v.normalized_transliteration || v.transliteration || '?') + ')'); continue; }
  if (!v.he || !v.english) { skip.noTone.push(v.thai + ' (missing he/english)'); continue; }
  ready.push({ thai: v.thai, roman: rt.roman, hebrew: v.he, english: v.english, tone: rt.tone, level });
}

// ---- build insert lines ----
const esc = s => String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
const perLevel = {};
const lines = ready.map((w, i) => {
  perLevel[w.level] = (perLevel[w.level] || 0) + 1;
  const id = 'iv_' + String(i + 1).padStart(4, '0');
  return `  {id:"${id}",level:${w.level},thai:"${esc(w.thai)}",roman:"${esc(w.roman)}",hebrew:"${esc(w.hebrew)}",english:"${esc(w.english)}",tone:'${w.tone}',source:"vocab-bank-2026-07"},`;
});

// ---- report ----
console.log('source vocab:', vocab.length, '| existing WORDS (by thai):', existing.size);
console.log('READY to import:', ready.length);
console.log('  per level:', JSON.stringify(perLevel));
console.log('skipped — already in app:', skip.dup.length);
console.log('skipped — inactive (active_for_questions:false):', skip.inactive.length, INC_INACTIVE ? '(included)' : '');
console.log('skipped — no real level (e.g. review_queue):', skip.noLevel.length, INC_REVIEW ? '(included by length)' : '');
console.log('skipped — ambiguous/missing tone or meaning:', skip.noTone.length);
if (skip.noTone.length) console.log('    ' + skip.noTone.join('\n    '));
if (ready.length) {
  console.log('\nwords to add:');
  for (const w of ready) console.log(`  L${w.level}  ${w.thai}  ${w.roman}  [${w.tone}]  ${w.hebrew} / ${w.english}`);
}

// ---- write ----
if (WRITE && ready.length) {
  const insert = '\n' + lines.join('\n');
  app = app.slice(0, arrEnd) + insert + app.slice(arrEnd);
  fs.writeFileSync(APP, app);
  console.log('\nWRITTEN', ready.length, 'words to app.js');
} else {
  console.log('\n' + (WRITE ? '(nothing ready to write)' : '(dry run — pass --write to apply)'));
}
