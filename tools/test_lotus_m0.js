'use strict';

const fs = require('fs');
const assert = require('assert');
const read = file => fs.readFileSync(file, 'utf8');
const app = read('app.js');
const fx = read('lib/skins-fx.js');
const juice = read('lib/juice.js');
const css = read('styles.css');
const html = read('index.html');

assert.match(app, /lotus:\s*\{[\s\S]*?sound:'lotus'/, 'Lotus must have its own success sound profile');
assert.match(app, /lotus:\s*'#[0-9a-f]{6}'/i, 'Lotus must define a light-mode surface color');
assert.match(app, /function animateDexDrawer\(drawer\)/, 'Dex opening animation hook must exist');
assert.match(app, /currentTheme\(\)\.id !== 'lotus'/, 'Dex animation must be scoped to Lotus during M0');
assert.match(fx, /function enterLotus\(\)/, 'Lotus entrance must exist');
assert.match(fx, /themeId === 'lotus'/, 'Lotus must be routed through SkinsFX');
assert.match(fx, /skin-ambient-'\+themeId/, 'Theme-specific ambient layers must exist');
assert.match(fx, /Math\.min\(2, window\.devicePixelRatio/, 'Canvas DPR must be capped at 2');
assert.match(fx, /1000\s*\/\s*30|33/, 'Ambient rendering must be capped near 30fps');
assert.match(fx, /visibilitychange/, 'Ambient must react to tab visibility');
assert.match(fx, /pagehide/, 'FX must clean up on pagehide');
assert.match(juice, /function lotusPetals\(/, 'Lotus must have branded Juice particles');
assert.match(juice, /opts&&opts\.sound==='lotus'/, 'Lotus must have unique WebAudio notes');
assert.match(css, /body\.theme-lotus\.mode-light/, 'Lotus light mode must be styled');
assert.match(css, /\.skin-ambient\{[^}]*pointer-events:none/, 'Ambient layers must not intercept input');
assert.match(css, /\.skin-fx-layer\{[^}]*pointer-events:none/, 'Entrance layers must not intercept input');
assert.match(css, /prefers-reduced-motion:reduce/, 'Reduced motion must be supported');
assert.match(css, /lotusDexCell/, 'Lotus Dex cells must animate on opening');

const versionRefs = html.match(/\?v=1\.25\.34/g) || [];
assert.strictEqual(versionRefs.length, 6, 'All CSS/JS cache-busting references must use v1.25.34');
assert.match(html, /Thai Trainer[^<]*v1\.25\.34/, 'Visible version label must use v1.25.34');
for (const file of ['assets/skins/lotus/character.webp', 'assets/skins/lotus/character-512.webp']) {
  assert.ok(fs.existsSync(file), `${file} must exist`);
  assert.ok(fs.statSync(file).size < 300 * 1024, `${file} must stay below 300KB`);
}
console.log('Lotus M0 contract: OK');
