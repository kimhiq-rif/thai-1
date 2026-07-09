// Tiny zero-dependency test harness for Thai Trainer pure-logic tests.
// Test files call test(name, fn); run.js collects and runs them.
const tests = [];
function test(name, fn) { tests.push({ name, fn }); }
function eq(actual, expected, msg) {
  const A = JSON.stringify(actual), B = JSON.stringify(expected);
  if (A !== B) throw new Error((msg || 'eq') + ` — expected ${B} but got ${A}`);
}
function ok(v, msg) { if (!v) throw new Error(msg || 'expected truthy value'); }
function run() {
  let pass = 0, fail = 0;
  for (const t of tests) {
    try { t.fn(); console.log('  ✓ ' + t.name); pass++; }
    catch (e) { console.error('  ✗ ' + t.name + ' — ' + e.message); fail++; }
  }
  console.log(`\n${pass} passed, ${fail} failed`);
  if (fail) process.exit(1);
}
module.exports = { test, eq, ok, run };
