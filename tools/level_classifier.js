'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const CORE_LEVEL_1 = new Set([
  'กิน','มา','ไป','ดู','ดี','มี','คน','น้ำ','บ้าน','รถ','มือ','ตา','ปาก','นอน',
  'hello','good','eat','come','go','see','look','water','house','car','hand','eye','sleep'
]);

const DAILY_TOPICS = {
  food: ['กิน','ข้าว','น้ำ','อาหาร','อร่อย','เผ็ด','ผัดไทย','drink','food','rice','water','eat','delicious','spicy'],
  travel: ['ไป','มา','รถ','รถไฟ','เครื่องบิน','โรงแรม','เที่ยว','กรุงเทพ','travel','go','come','car','train','hotel'],
  body: ['มือ','ตา','ปาก','หัว','ใจ','body','hand','eye','mouth','head','heart'],
  time: ['วันนี้','พรุ่งนี้','เมื่อวาน','เช้า','เย็น','time','today','tomorrow','yesterday','morning','evening'],
  social: ['สวัสดี','ขอบคุณ','ขอโทษ','เจอกัน','hello','thank','sorry','see you'],
  language: ['พูด','อ่าน','เขียน','เข้าใจ','ภาษา','speak','read','write','understand','language']
};

const GRAMMAR_MARKERS = [
  {tag:'question', patterns:['ไหม','อะไร','ไหน','เท่าไหร่','หรือ','mai','arai','nai','thao rai','rue']},
  {tag:'negation', patterns:['ไม่','not','no']},
  {tag:'ability', patterns:['ได้','dai','can','able']},
  {tag:'desire', patterns:['อยาก','yak','want']},
  {tag:'request', patterns:['ขอ','ช่วย','please','kho','chuai']},
  {tag:'classifier_or_quantity', patterns:['อัน','คน','ตัว','กี่','เท่า','how many','classifier']},
  {tag:'opinion_reason', patterns:['คิดว่า','เพราะ','ชอบ','เห็นด้วย','think','because','agree','like']}
];

function extractConstArray(source, constName){
  const needle = `const ${constName} = [`;
  const start = source.indexOf(needle);
  if(start < 0) throw new Error(`Could not find ${constName}`);
  const arrayStart = source.indexOf('[', start);
  let depth = 0;
  let inString = false;
  let quote = '';
  let escape = false;
  for(let i = arrayStart; i < source.length; i++){
    const ch = source[i];
    if(inString){
      if(escape){ escape = false; continue; }
      if(ch === '\\'){ escape = true; continue; }
      if(ch === quote){ inString = false; quote = ''; }
      continue;
    }
    if(ch === '"' || ch === "'"){ inString = true; quote = ch; continue; }
    if(ch === '[') depth++;
    if(ch === ']'){
      depth--;
      if(depth === 0) return source.slice(arrayStart, i + 1);
    }
  }
  throw new Error(`Could not parse ${constName}`);
}

function loadWordsFromApp(appPath){
  const source = fs.readFileSync(appPath, 'utf8');
  const arraySource = extractConstArray(source, 'WORDS');
  return vm.runInNewContext(arraySource, {}, {timeout: 1000});
}

function normalizeText(value){
  return String(value || '').toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim();
}

function hasThai(value){
  return /[\u0E00-\u0E7F]/.test(String(value || ''));
}

function thaiCharCount(value){
  return (String(value || '').match(/[\u0E00-\u0E7F]/g) || []).length;
}

function romanTokens(item){
  return normalizeText(item.roman || '').split(' ').filter(Boolean);
}

function translationTokens(item){
  return normalizeText(`${item.english || ''} ${item.hebrew || ''}`).split(' ').filter(Boolean);
}

function countThaiToneAndSpecialMarks(value){
  return (String(value || '').match(/[\u0E31\u0E34-\u0E3A\u0E47-\u0E4E]/g) || []).length;
}

function detectTags(item){
  const haystack = normalizeText(`${item.thai || ''} ${item.roman || ''} ${item.english || ''}`);
  const tags = new Set();
  for(const marker of GRAMMAR_MARKERS){
    if(marker.patterns.some(pattern => haystack.includes(normalizeText(pattern)))) tags.add(marker.tag);
  }
  for(const [topic, words] of Object.entries(DAILY_TOPICS)){
    if(words.some(word => haystack.includes(normalizeText(word)))) tags.add(`topic:${topic}`);
  }
  const rt = romanTokens(item);
  const tt = translationTokens(item);
  if(rt.length >= 3 || tt.length >= 4 || /\s/.test(String(item.thai || '').trim())) tags.add('phrase_or_sentence');
  if(rt.length >= 5 || tt.length >= 8) tags.add('long_sentence');
  if(countThaiToneAndSpecialMarks(item.thai) >= 3) tags.add('script_dense');
  if(/\/|;|,|\(|\)|…/.test(`${item.roman || ''} ${item.english || ''} ${item.hebrew || ''}`)) tags.add('multiple_senses');
  return [...tags];
}

function estimateSyllables(item){
  const rt = romanTokens(item);
  if(rt.length) return rt.length;
  return Math.max(1, Math.ceil(thaiCharCount(item.thai) / 3));
}

function classifyWord(item){
  const tags = detectTags(item);
  const thai = String(item.thai || '').trim();
  const english = normalizeText(item.english || '');
  const hebrew = normalizeText(item.hebrew || '');
  const roman = normalizeText(item.roman || '');
  const syllables = estimateSyllables(item);
  const marks = countThaiToneAndSpecialMarks(thai);
  const isSingleThaiSign = hasThai(thai) && thaiCharCount(thai) <= 1;

  if(item.kind || isSingleThaiSign){
    return {
      suggestedLevel: 6,
      confidence: 0.78,
      tags: ['script_board', ...tags],
      reason: 'Script sign or board-like item; route to the writing/sign board rather than ordinary vocabulary.'
    };
  }

  let score = 1;
  const combined = `${thai} ${roman} ${english} ${hebrew}`;
  if(CORE_LEVEL_1.has(thai) || [...CORE_LEVEL_1].some(word => combined.toLowerCase().includes(word))) score -= 0.35;
  if(syllables >= 2) score += 0.45;
  if(syllables >= 3) score += 0.75;
  if(syllables >= 5) score += 1.1;
  if(tags.includes('phrase_or_sentence')) score += 1.15;
  if(tags.includes('long_sentence')) score += 1.2;
  if(tags.includes('question')) score += 0.85;
  if(tags.includes('negation')) score += 0.45;
  if(tags.includes('ability')) score += 0.65;
  if(tags.includes('desire')) score += 0.55;
  if(tags.includes('request')) score += 0.75;
  if(tags.includes('classifier_or_quantity')) score += 0.55;
  if(tags.includes('opinion_reason')) score += 0.85;
  if(tags.includes('script_dense')) score += 0.35;
  if(tags.includes('multiple_senses')) score += 0.45;
  if(marks >= 5) score += 0.35;
  if(/abstract|opinion|agree|usually|sometimes|never|because|likely|worth/.test(english)) score += 0.65;

  let suggestedLevel;
  if(score <= 1.65) suggestedLevel = 1;
  else if(score <= 2.45) suggestedLevel = 2;
  else if(score <= 3.45) suggestedLevel = 3;
  else if(score <= 4.75) suggestedLevel = 4;
  else suggestedLevel = 5;

  const signalCount = tags.length + Math.min(4, syllables) + (marks ? 1 : 0);
  const confidence = Math.max(0.52, Math.min(0.9, 0.56 + signalCount * 0.035 - (tags.includes('multiple_senses') ? 0.06 : 0)));
  const reasonBits = [];
  reasonBits.push(`${syllables} roman/estimated syllable units`);
  if(tags.length) reasonBits.push(`signals: ${tags.join(', ')}`);
  if(marks) reasonBits.push(`${marks} Thai vowel/tone/special marks`);
  if(suggestedLevel !== Number(item.level)) reasonBits.push(`differs from current level ${item.level}`);
  else reasonBits.push('matches current level');

  return {
    suggestedLevel,
    confidence:Number(confidence.toFixed(2)),
    tags,
    reason: reasonBits.join('; ')
  };
}

function classifyWords(words){
  return words.map(item => ({...item, classification: classifyWord(item)}));
}

function toCsv(rows){
  const headers = ['id','thai','roman','hebrew','english','currentLevel','suggestedLevel','confidence','tags','reason'];
  const esc = value => `"${String(value ?? '').replace(/"/g, '""')}"`;
  const lines = [headers.join(',')];
  for(const row of rows){
    const c = row.classification;
    lines.push([
      row.id,
      row.thai,
      row.roman,
      row.hebrew,
      row.english,
      row.level,
      c.suggestedLevel,
      c.confidence,
      c.tags.join('|'),
      c.reason
    ].map(esc).join(','));
  }
  return lines.join('\n');
}

function summarize(rows){
  const summary = {};
  for(const row of rows){
    const key = String(row.classification.suggestedLevel);
    summary[key] = (summary[key] || 0) + 1;
  }
  const changed = rows.filter(row => String(row.level) !== String(row.classification.suggestedLevel)).length;
  return {total: rows.length, changed, bySuggestedLevel: summary};
}

function classifyNewWord(word){
  return classifyWord(word);
}

function main(){
  const args = process.argv.slice(2);
  const appPath = path.resolve(args[0] || 'app.js');
  const outDir = path.resolve(args[1] || 'level-classifier-report');
  fs.mkdirSync(outDir, {recursive:true});
  const words = loadWordsFromApp(appPath);
  const rows = classifyWords(words);
  const summary = summarize(rows);
  fs.writeFileSync(path.join(outDir, 'level_classifier_report.json'), JSON.stringify({summary, rows}, null, 2), 'utf8');
  fs.writeFileSync(path.join(outDir, 'level_classifier_report.csv'), toCsv(rows), 'utf8');
  fs.writeFileSync(path.join(outDir, 'level_classifier_summary.json'), JSON.stringify(summary, null, 2), 'utf8');
  console.log(JSON.stringify(summary, null, 2));
}

if(require.main === module) main();

module.exports = {
  classifyWord,
  classifyWords,
  classifyNewWord,
  loadWordsFromApp,
  summarize
};
