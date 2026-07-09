// Test runner: require every *.test.js in this folder, then run.
// Usage: node tools/tests/run.js
const fs = require('fs');
const path = require('path');
const harness = require('./harness');

const dir = __dirname;
for (const f of fs.readdirSync(dir)) {
  if (f.endsWith('.test.js')) require(path.join(dir, f));
}
harness.run();
