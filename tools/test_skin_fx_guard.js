'use strict';

const fs = require('fs');
const assert = require('assert');

const source = fs.readFileSync('app.js', 'utf8');
assert.match(source, /let lastFxTheme = null;/, 'lastFxTheme must start empty');

const match = source.match(/if\(typeof SkinsFX !== 'undefined'\)\{\s*const skinChanged = activeTheme\.id !== lastFxTheme;\s*lastFxTheme = activeTheme\.id;\s*if\(skinChanged\)\{[\s\S]*?\n\s*\}\s*\n\s*\}/);
assert.ok(match, 'applyTheme must contain the skin-change FX guard');

const calls = {stop:0, ambient:[], enter:[]};
const SkinsFX = {
  stop(){ calls.stop += 1; },
  ambient(id){ calls.ambient.push(id); },
  enter(id){ calls.enter.push(id); }
};
const applyFx = new Function('SkinsFX', `
  let lastFxTheme = null;
  return function(activeTheme){
    ${match[0]}
  };
`)(SkinsFX);

applyFx({id:'royal'});    // initial skin
applyFx({id:'royal'});    // language toggle: same skin
applyFx({id:'royal'});    // light/dark toggle: same skin
applyFx({id:'cyber'});    // real skin change
applyFx({id:'cyber'});    // repeated applyTheme on same skin

assert.deepStrictEqual(calls.enter, ['royal','cyber']);
assert.deepStrictEqual(calls.ambient, ['royal','cyber']);
assert.strictEqual(calls.stop, 2);
console.log('skin FX guard spy: OK', calls);
