// One-shot, idempotent insertion of CEFR-tagged vocabulary into the WORDS array in app.js.
// CEFR mapping (owner decision): A1->level 1, A2->level 2, B1->level 3, B2->level 4.
// 20 words per level. Format matches existing WORDS entries; adds a `cefr` tag for provenance.
// Run: node tools/add_cefr_words.js

const fs = require('fs');
const path = 'app.js';
let src = fs.readFileSync(path, 'utf8');

if (src.includes("id:'l1_016'")) {
  console.error('ABORT: CEFR words already present (l1_016 found). No changes made.');
  process.exit(1);
}

// [id-suffix, thai, roman, hebrew, english, tone]
const A1 = [
  ['พ่อ','phaw','אבא','father','falling'],
  ['แม่','mae','אמא','mother','falling'],
  ['บ้าน','baan','בית','house / home','falling'],
  ['ไก่','gai','תרנגול / עוף','chicken','low'],
  ['แมว','maew','חתול','cat','rising'],
  ['ข้าว','khaao','אורז / אוכל','rice / food','falling'],
  ['หิว','hiw','רעב','hungry','rising'],
  ['ร้อน','rawn','חם','hot','high'],
  ['หนาว','naao','קר','cold','rising'],
  ['ดื่ม','duem','לשתות','to drink','low'],
  ['ชอบ','chawp','לחבב / לאהוב','to like','falling'],
  ['ใหญ่','yai','גדול','big','low'],
  ['เล็ก','lek','קטן','small','high'],
  ['เร็ว','reo','מהיר','fast','high'],
  ['ช้า','chaa','איטי','slow','high'],
  ['ใหม่','mai','חדש','new','low'],
  ['เก่า','gao','ישן / עתיק','old','low'],
  ['สวย','suay','יפה','beautiful','rising'],
  ['เพื่อน','phuean','חבר','friend','falling'],
  ['หมู','muu','חזיר','pig','rising']
];

const A2 = [
  ['เงิน','ngern','כסף','money','mid'],
  ['ไข่','khai','ביצה','egg','low'],
  ['นม','nom','חלב','milk','mid'],
  ['หมอ','maw','רופא','doctor','rising'],
  ['ครู','khruu','מורה','teacher','mid'],
  ['ปี','bpii','שנה','year','mid'],
  ['วัน','wan','יום','day','mid'],
  ['เดือน','duean','חודש','month','mid'],
  ['ฝน','fon','גשם','rain','rising'],
  ['ดาว','daao','כוכב','star','mid'],
  ['ไฟ','fai','אש / אור','fire / light','mid'],
  ['เมือง','mueang','עיר','city','mid'],
  ['ห้อง','hawng','חדר','room','falling'],
  ['ร้าน','raan','חנות','shop','high'],
  ['ซื้อ','sue','לקנות','to buy','high'],
  ['ขาย','khaai','למכור','to sell','rising'],
  ['เดิน','dern','ללכת (ברגל)','to walk','mid'],
  ['วิ่ง','wing','לרוץ','to run','falling'],
  ['นั่ง','nang','לשבת','to sit','falling'],
  ['ยืน','yuen','לעמוד','to stand','mid']
];

const B1 = [
  ['เวลา','wee laa','זמן','time','mid-mid'],
  ['ปัญหา','bpan haa','בעיה','problem','mid-rising'],
  ['อากาศ','aa gaat','מזג אוויר','weather','mid-low'],
  ['อารมณ์','aa rom','מצב רוח / רגש','mood / emotion','mid-mid'],
  ['ประเทศ','bpra theet','מדינה','country','low-falling'],
  ['ภาษา','phaa saa','שפה','language','mid-rising'],
  ['เพราะ','phraw','כי / בגלל','because','high'],
  ['ถ้า','thaa','אם','if','falling'],
  ['ต้อง','dtawng','חייב / צריך','must / have to','falling'],
  ['อาจ','aat','אולי / עשוי','may / might','low'],
  ['ควร','khuan','כדאי / צריך','should','mid'],
  ['เชื่อ','chuea','להאמין','to believe','falling'],
  ['จำ','jam','לזכור','to remember','mid'],
  ['ลืม','luem','לשכוח','to forget','mid'],
  ['คิด','khit','לחשוב','to think','high'],
  ['รู้สึก','ruu suek','להרגיש','to feel','high-low'],
  ['หวัง','wang','לקוות','to hope','rising'],
  ['สนใจ','son jai','להתעניין','to be interested','rising-mid'],
  ['เกี่ยวกับ','giao gap','בקשר ל / על','about / regarding','low-low'],
  ['เพื่อ','phuea','כדי / בשביל','in order to / for','falling']
];

const B2 = [
  ['สังคม','sang khom','חברה','society','rising-mid'],
  ['การเมือง','gaan mueang','פוליטיקה','politics','mid-mid'],
  ['โอกาส','oo gaat','הזדמנות','opportunity','mid-low'],
  ['ความหมาย','khwaam maai','משמעות','meaning','mid-rising'],
  ['เหตุผล','heet phon','סיבה / היגיון','reason','low-rising'],
  ['ตัวอย่าง','dtua yaang','דוגמה','example','mid-low'],
  ['ความจริง','khwaam jing','אמת','truth','mid-mid'],
  ['อนาคต','a naa khot','עתיד','future','low-mid-high'],
  ['อดีต','a deet','עבר','past','low-low'],
  ['สำคัญ','sam khan','חשוב','important','rising-mid'],
  ['ปลอดภัย','bplawt phai','בטוח','safe','low-mid'],
  ['อันตราย','an ta raai','מסוכן','dangerous','mid-low-mid'],
  ['จำเป็น','jam bpen','הכרחי / נחוץ','necessary','mid-mid'],
  ['เปลี่ยนแปลง','bplian bplaeng','לשנות / להשתנות','to change','low-mid'],
  ['พัฒนา','phat tha naa','לפתח','to develop','high-high-mid'],
  ['เปรียบเทียบ','bpriap thiap','להשוות','to compare','low-falling'],
  ['สิ่งแวดล้อม','sing waet lawm','סביבה','environment','low-falling-high'],
  ['วัฒนธรรม','wat tha tham','תרבות','culture','high-high-mid'],
  ['รับผิดชอบ','rap phit chawp','אחראי / לקחת אחריות','responsible','high-low-falling'],
  ['ปัจจุบัน','bpat ju ban','הווה / כיום','present (time)','low-low-mid']
];

function esc(s){ return s.replace(/'/g, "\\'"); }

function block(level, cefr, prefix, rows){
  return rows.map((r, i) => {
    const id = `${prefix}_${String(16 + i).padStart(3, '0')}`;
    return `  {id:'${id}',level:${level},cefr:'${cefr}',thai:'${esc(r[0])}',roman:'${esc(r[1])}',hebrew:'${esc(r[2])}',english:'${esc(r[3])}',tone:'${esc(r[4])}'},`;
  }).join('\n');
}

const inserts = [
  { anchor: "id:'l1_015'", text: block(1, 'A1', 'l1', A1) },
  { anchor: "id:'l2_015'", text: block(2, 'A2', 'l2', A2) },
  { anchor: "id:'l3_015'", text: block(3, 'B1', 'l3', B1) },
  { anchor: "id:'l4_015'", text: block(4, 'B2', 'l4', B2) }
];

const lines = src.split('\n');
for (const ins of inserts) {
  const idx = lines.findIndex(l => l.includes(ins.anchor));
  if (idx === -1) { console.error('ABORT: anchor not found:', ins.anchor); process.exit(1); }
  // anchor line ends with '},' — insert the new block right after it
  lines.splice(idx + 1, 0, ins.text);
}

fs.writeFileSync(path, lines.join('\n'), 'utf8');
console.log('Inserted 80 CEFR words (20 each into l1..l4).');
