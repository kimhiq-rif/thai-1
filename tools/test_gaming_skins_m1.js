'use strict';

const fs = require('fs');
const assert = require('assert');
const app = fs.readFileSync('app.js', 'utf8');
const fx = fs.readFileSync('lib/skins-fx.js', 'utf8');
const juice = fs.readFileSync('lib/juice.js', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');
const ids = ['island','lotus','sakura','mango','rainforest','royal'];

for (const id of ids) {
  assert.match(app, new RegExp(`${id}:\\{palette:[\\s\\S]*?sound:'${id}'`), `${id} needs a unique Juice profile`);
  assert.match(fx, new RegExp(`(?:enterLiving\\('${id}'\\)|themeId === '${id}'|${id.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`), `${id} must route through SkinsFX`);
  assert.match(fx, new RegExp(`ambientTheme==='${id}'|\\(${ids.join('|')}\\)`), `${id} needs ambient behavior`);
  assert.match(juice, new RegExp(`sound==='${id}'`), `${id} needs unique WebAudio`);
  assert.match(css, new RegExp(`theme-${id}`), `${id} needs themed CSS`);
  assert.match(css, new RegExp(`skin-ambient-${id}`), `${id} needs living background CSS`);
  if (id !== 'lotus' && id !== 'royal') {
    for (const name of ['character.webp','character-512.webp']) {
      const file = `assets/skins/${id}/${name}`;
      assert.ok(fs.existsSync(file), `${file} must exist`);
      assert.ok(fs.statSync(file).size < 300 * 1024, `${file} must stay below 300KB`);
    }
  }
}

const soundSignatures = ids.map(id => {
  const match = juice.match(new RegExp(`if\\(opts&&opts\\.sound==='${id}'\\)\\{([\\s\\S]*?)return;`));
  assert.ok(match, `${id} sound branch must be inspectable`);
  return match[1].replace(/\s+/g, '');
});
assert.strictEqual(new Set(soundSignatures).size, ids.length, 'Every approved skin must use a distinct note sequence');

for (const id of ['island','sakura','mango','rainforest']) {
  assert.match(css, new RegExp(`theme-${id}\\.mode-light`), `${id} needs light mode`);
  assert.match(css, new RegExp(`@keyframes[^\\n]*${id === 'rainforest' ? 'canopy' : id}`, 'i'), `${id} needs a distinct entrance`);
}

for (const name of ['dexIsland','dexSakura','dexMango','dexForest','dexRoyal']) {
  assert.match(css, new RegExp(`@keyframes ${name}`), `${name} must be distinct`);
}

assert.match(fx, /Math\.min\(2, window\.devicePixelRatio/, 'FX DPR must be capped at 2');
assert.match(fx, /now-ambientLast<33/, 'Ambient must be capped near 30fps');
assert.match(fx, /visibilitychange/, 'Ambient must pause with hidden tabs');
assert.match(fx, /pagehide/, 'FX must clean up on pagehide');
assert.match(css, /prefers-reduced-motion:reduce/, 'Reduced motion must be supported');
console.log('Gaming skins M1 contract: OK');
