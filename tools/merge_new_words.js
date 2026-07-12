// M6 phase 4/5: merge new CEFR-tagged words into app.js WORDS.
// - Dedup against existing words by exact Thai text
// - Assign ids nw_0001..., map CEFR -> level (A1→1, A2→2, B1→3/4, B2→5/6)
// - B1 splits 3/4 and B2 splits 5/6 by word length (longer/compound = harder)
// Usage:
//   node tools/merge_new_words.js --dry   (report only)
//   node tools/merge_new_words.js         (writes app.js)
const fs = require('fs');
const SC = 'C:/Users/User/AppData/Local/Temp/claude/C--Users-User--claude-workforce/374afe8e-0824-4149-a3b5-1a08808626ab/scratchpad';
const DRY = process.argv.includes('--dry');

const files = ['newwords_elem.json', 'newwords_inter.json'].filter(f => fs.existsSync(SC + '/' + f));
let incoming = [];
for (const f of files) incoming = incoming.concat(JSON.parse(fs.readFileSync(SC + '/' + f, 'utf8')));

let s = fs.readFileSync('app.js', 'utf8');
const start = s.indexOf('const WORDS = [');
const arrEnd = s.indexOf('\n];', start);
const body = s.slice(start, arrEnd);

// existing Thai texts (both quote styles)
const existing = new Set();
const thaiRe = /thai:['"]([^'"]+)['"]/g;
let m; while ((m = thaiRe.exec(body))) existing.add(m[1]);

function levelFor(w) {
  if (w.cefr === 'A1') return 1;
  if (w.cefr === 'A2') return 2;
  const len = (w.thai || '').length;
  if (w.cefr === 'B1') return len <= 5 ? 3 : 4;
  return len <= 6 ? 5 : 6;   // B2
}

const clean = [], dups = [], bad = [];
const seenNew = new Set();
for (const w of incoming) {
  if (!w.thai || !w.roman || !w.hebrew || !w.english || !w.tone || !w.cefr) { bad.push(w.thai || '?'); continue; }
  if (/[0-9¹²³⁴⁵]/.test(w.roman)) { bad.push(w.thai + ' (digit in roman)'); continue; }
  if (existing.has(w.thai) || seenNew.has(w.thai)) { dups.push(w.thai); continue; }
  seenNew.add(w.thai);
  clean.push(w);
}

const perLevel = {};
const lines = clean.map((w, i) => {
  const lvl = levelFor(w);
  perLevel[lvl] = (perLevel[lvl] || 0) + 1;
  const id = 'nw_' + String(i + 1).padStart(4, '0');
  const esc = v => String(v).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  return `  {id:"${id}",level:${lvl},cefr:'${w.cefr}',thai:"${esc(w.thai)}",roman:"${esc(w.roman)}",hebrew:"${esc(w.hebrew)}",english:"${esc(w.english)}",tone:'${w.tone}',source:"curriculum-2026-07"},`;
});

console.log('files:', files.join(', ') || '(none)');
console.log('incoming:', incoming.length, '| clean:', clean.length, '| dups skipped:', dups.length, '| bad:', bad.length);
console.log('per level:', JSON.stringify(perLevel));
if (dups.length) console.log('dups:', dups.join(' '));
if (bad.length) console.log('bad:', bad.join(' '));

if (!DRY && clean.length) {
  const insert = '\n' + lines.join('\n');
  s = s.slice(0, arrEnd) + insert + s.slice(arrEnd);
  fs.writeFileSync('app.js', s);
  console.log('WRITTEN to app.js');
} else {
  console.log(DRY ? '(dry run — nothing written)' : '(nothing to write)');
}
