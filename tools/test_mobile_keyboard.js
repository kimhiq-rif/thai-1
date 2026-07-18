'use strict';

const fs = require('fs');
const assert = require('assert');
const app = fs.readFileSync('app.js', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');
const html = fs.readFileSync('index.html', 'utf8');

assert.match(app, /dir="ltr" class="kb-key/, 'Each Thai key must isolate left-to-right glyph shaping');
assert.match(app, /class="kb-key' \+ \(combining \? ' is-combining'/, 'Combining marks need a dedicated class');
assert.match(app, /class="kb-glyph" aria-hidden="true"/, 'Glyphs need a stable inner layout box');
assert.match(app, /aria-label="' \+ escapeHtml\(label\)/, 'Every key needs an accessible name');
assert.match(app, /title="' \+ escapeHtml\(label\)/, 'Every key needs a visible desktop tooltip');
assert.match(css, /\.kb-key\{[^}]*unicode-bidi:isolate/, 'Keyboard glyph direction must be isolated');
assert.match(css, /\.kb-key\.is-combining\{font-size:40px/, 'Combining marks need a smaller desktop size');
assert.match(css, /max-width:520px[\s\S]*?\.kb-key\.is-combining\{font-size:34px/, 'Combining marks need a mobile-safe size');
assert.match(css, /\.kb-key\{height:76px/, 'Desktop targets must exceed 44px');
assert.match(css, /\.kb-key\{height:66px/, 'Mobile targets must exceed 44px');
assert.match(css, /max-width:390px[\s\S]*repeat\(5,minmax\(0,1fr\)\)/, 'Narrow phones must use five columns for legibility');
assert.strictEqual((html.match(/\?v=1\.25\.36/g) || []).length, 6);
console.log('mobile keyboard contract: OK');
