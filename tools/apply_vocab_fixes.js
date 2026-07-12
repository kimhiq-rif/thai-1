// Apply the 2026-07-09 vocab audit fixes to app.js WORDS:
//  (1) strip tone digits from every roman (no tone numbers shown in questions)
//  (2) correct the `tone` field (high+med confidence, deterministic tone rules)
//  (3) fix real romanization phonetic errors (digit-free)
// Operates line-by-line inside the WORDS array only.
const fs = require('fs');
const P = 'app.js';
let s = fs.readFileSync(P, 'utf8');

const start = s.indexOf('const WORDS = [');
const arrEnd = s.indexOf('\n];', start);
if (start < 0 || arrEnd < 0) { console.error('WORDS not found'); process.exit(1); }
const head = s.slice(0, start);
const body = s.slice(start, arrEnd);
const tail = s.slice(arrEnd);

const toneFix = {
  l1_018:'high', l1_020:'mid',
  uv19_0001:'rising-mid', uv19_0003:'rising', l4_001:'falling-falling', l4_002:'high-falling',
  uv19_0006:'high', uv19_0018:'high', uv19_0029:'high', uv19_0077:'high',
  uv19_0050:'rising-rising-high-mid', uv19_0065:'falling-mid', uv19_0086:'mid-rising',
  uv19_0088:'high-mid', uv19_0037:'mid-rising', uv19_0010:'falling-high', uv19_0079:'high-mid',
  uv19_0060:'falling-rising-high-falling', uv19_0117:'high', uv19_0178:'mid-mid',
  uv19_0227:'high', uv19_0242:'high', uv19_0217:'mid-mid', uv19_0281:'falling-mid',
  uv19_0280:'rising', uv19_0276:'high-falling', uv19_0213:'low-low-high', uv19_0228:'high-mid',
  uv19_0229:'high-mid', uv19_0298:'rising', uv19_0303:'high-mid', uv19_0305:'falling-rising',
  uv19_0309:'mid-rising', uv19_0310:'high-falling-low-rising', uv19_0312:'mid-low',
  uv19_0314:'mid-rising', uv19_0316:'low-high', uv19_0318:'high-low', uv19_0323:'rising',
  uv19_0335:'low-mid-high', uv19_0337:'high-mid', uv19_0338:'high-high-mid',
  uv19_0385:'mid-mid-falling-falling-mid',
  // medium confidence (also deterministic tone rules)
  uv19_0002:'low-rising', uv19_0004:'mid-high', uv19_0030:'rising', uv19_0031:'falling-rising',
  uv19_0069:'high-rising', uv19_0047:'high-low', uv19_0294:'low-rising',
  uv19_0295:'low-rising-falling-mid-mid', uv19_0277:'low-rising', uv19_0278:'mid-rising',
  uv19_0291:'mid-low-mid', uv19_0224:'mid-mid-high', uv19_0282:'falling-rising-rising',
  uv19_0329:'mid-rising-high-mid', uv19_0076:'falling-mid-falling-rising',
};
const romanFix = {
  uv19_0160:'ngeua', uv19_0161:'ngeua-awk', uv19_0121:'laew-dtae kun', uv19_0123:'dtawn-nii',
  uv19_0127:'dtawn-chao', uv19_0128:'dtawn-tiang', uv19_0129:'dtawn-yen', uv19_0130:'dtawn-klang-keun',
  uv19_0125:'phrung-nii', l4_033:'wat tha na tham', uv19_0063:'riag waa a-rai', uv19_0196:'phro-waa',
};

const stats = { stripped:0, tone:0, roman:0, missingTone:[], missingRoman:[] };
const seenTone = {}, seenRoman = {};
const lines = body.split('\n').map(line => {
  const m = line.match(/id:['"]([^'"]+)['"]/);
  if (!m) return line;
  if (!/roman:['"]/.test(line) || !/tone:['"]/.test(line)) return line;   // WORD lines only
  const id = m[1];
  // 1) strip tone markers from roman: superscript/ASCII digits + diacritic accents
  line = line.replace(/(roman:['"])([^'"]*)(['"])/, (f,a,v,b) => {
    let clean = v.replace(/[¹²³⁴⁵0-9]/g, '');
    clean = clean
      .replace(/[àáâǎā]/g,'a').replace(/[èéêěē]/g,'e').replace(/[ìíîǐī]/g,'i')
      .replace(/[òóôǒō]/g,'o').replace(/[ùúûǔū]/g,'u').replace(/[ỳýŷ]/g,'y')
      .replace(/[ÀÁÂǍĀ]/g,'A').replace(/[ÈÉÊĚĒ]/g,'E').replace(/[ÌÍÎǏĪ]/g,'I')
      .replace(/[ÒÓÔǑŌ]/g,'O').replace(/[ÙÚÛǓŪ]/g,'U');
    if (clean !== v) stats.stripped++;
    return a + clean + b;
  });
  // 3) roman phonetic fix (override)
  if (romanFix[id] !== undefined) {
    line = line.replace(/(roman:['"])([^'"]*)(['"])/, (f,a,v,b) => a + romanFix[id] + b);
    stats.roman++; seenRoman[id] = true;
  }
  // 2) tone fix
  if (toneFix[id] !== undefined) {
    line = line.replace(/(tone:['"])([^'"]*)(['"])/, (f,a,v,b) => a + toneFix[id] + b);
    stats.tone++; seenTone[id] = true;
  }
  return line;
});
Object.keys(toneFix).forEach(id => { if (!seenTone[id]) stats.missingTone.push(id); });
Object.keys(romanFix).forEach(id => { if (!seenRoman[id]) stats.missingRoman.push(id); });

fs.writeFileSync(P, head + lines.join('\n') + tail);
console.log(JSON.stringify(stats, null, 1));
