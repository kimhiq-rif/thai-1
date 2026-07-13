// Regenerate the existing-words reference files from app.js WORDS (source of truth).
// Run this any time you add/change words, so the dedup reference stays fresh:
//   node tools/export_words.js
// Writes:
//   data/existing_words.csv        (UTF-8 + BOM, Excel-friendly; thai,transliteration,tone,hebrew,english,level)
//   data/existing_words_thai_only.txt  (bare Thai list, one per line — quick dedup key)

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP = path.join(ROOT, 'app.js');
const CSV = path.join(ROOT, 'data', 'existing_words.csv');
const TXT = path.join(ROOT, 'data', 'existing_words_thai_only.txt');

const app = fs.readFileSync(APP, 'utf8');
const start = app.indexOf('const WORDS = [');
if (start < 0) { console.error('Could not find `const WORDS = [` in app.js'); process.exit(1); }
const body = app.slice(start, app.indexOf('\n];', start));

const field = (o, k) => { const m = o.match(new RegExp(k + ":\\s*['\"]([^'\"]*)['\"]")); return m ? m[1] : ''; };

const rows = [];
const objRe = /\{[^}]*?\}/g;
let obj;
while ((obj = objRe.exec(body))) {
  const o = obj[0];
  const t = o.match(/thai:['"]([^'"]+)['"]/);
  if (!t) continue;
  const lvl = o.match(/level:\s*(\d+)/);
  rows.push({
    thai: t[1],
    roman: field(o, 'roman'),
    tone: field(o, 'tone'),
    hebrew: field(o, 'hebrew'),
    english: field(o, 'english'),
    level: lvl ? +lvl[1] : 0,
  });
}

// dedup by Thai text (keep first), sort by level then Thai
const seen = new Set();
const uniq = [];
for (const r of rows) { if (seen.has(r.thai)) continue; seen.add(r.thai); uniq.push(r); }
uniq.sort((a, b) => a.level - b.level || a.thai.localeCompare(b.thai));

// CSV (RFC-4180 quoting, CRLF, BOM)
const esc = v => { v = String(v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
let csv = ['thai', 'transliteration', 'tone', 'hebrew', 'english', 'level'].join(',') + '\r\n';
for (const r of uniq) csv += [r.thai, r.roman, r.tone, r.hebrew, r.english, r.level].map(esc).join(',') + '\r\n';
fs.writeFileSync(CSV, '﻿' + csv, 'utf8');
fs.writeFileSync(TXT, uniq.map(r => r.thai).join('\n') + '\n', 'utf8');

const perLevel = uniq.reduce((a, r) => { a[r.level] = (a[r.level] || 0) + 1; return a; }, {});
console.log('exported', uniq.length, 'unique words');
console.log('per level:', JSON.stringify(perLevel));
console.log('->', path.relative(ROOT, CSV));
console.log('->', path.relative(ROOT, TXT));
