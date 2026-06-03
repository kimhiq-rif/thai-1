const fs = require('fs');

const appPath = 'app.js';
const tones = JSON.parse(fs.readFileSync('data/tone_autofill_v1_25_5.json', 'utf8'));
let source = fs.readFileSync(appPath, 'utf8');
let changed = 0;

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

for (const [id, tone] of Object.entries(tones)) {
  const pattern = new RegExp(`(\\{id:["']${escapeRegExp(id)}["'][\\s\\S]*?tone:)["'][^"']*["']`);
  if (!pattern.test(source)) {
    console.error(`missing item: ${id}`);
    process.exitCode = 1;
    continue;
  }
  source = source.replace(pattern, `$1'${tone}'`);
  changed += 1;
}

fs.writeFileSync(appPath, source, 'utf8');
console.log(`changed ${changed}`);
