'use strict';

const TONES = [
  { id:'mid', he:'אמצעי', en:'mid' },
  { id:'low', he:'נמוך', en:'low' },
  { id:'falling', he:'יורד', en:'falling' },
  { id:'high', he:'גבוה', en:'high' },
  { id:'rising', he:'עולה', en:'rising' }
];

const WORDS = [
  // Level 1 — very short concrete words and classroom-style forms
  {id:'l1_001',level:1,thai:'กา',roman:'gaa',hebrew:'עורב / קומקום',tone:'mid'},
  {id:'l1_002',level:1,thai:'ตา',roman:'dtaa',hebrew:'עין / סבא מצד אמא',tone:'mid'},
  {id:'l1_003',level:1,thai:'มา',roman:'maa',hebrew:'לבוא',tone:'mid'},
  {id:'l1_004',level:1,thai:'มี',roman:'mii',hebrew:'יש / להיות בעל',tone:'mid'},
  {id:'l1_005',level:1,thai:'ดี',roman:'dii',hebrew:'טוב',tone:'mid'},
  {id:'l1_006',level:1,thai:'ดู',roman:'duu',hebrew:'לראות / לצפות',tone:'mid'},
  {id:'l1_007',level:1,thai:'มือ',roman:'mue',hebrew:'יד',tone:'mid'},
  {id:'l1_008',level:1,thai:'ปลา',roman:'bplaa',hebrew:'דג',tone:'mid'},
  {id:'l1_009',level:1,thai:'ไป',roman:'bpai',hebrew:'ללכת / לנסוע',tone:'mid'},
  {id:'l1_010',level:1,thai:'ใจ',roman:'jai',hebrew:'לב / נפש',tone:'mid'},
  {id:'l1_011',level:1,thai:'กิน',roman:'gin',hebrew:'לאכול',tone:'mid'},
  {id:'l1_012',level:1,thai:'คน',roman:'khon',hebrew:'אדם / בן אדם',tone:'mid'},
  {id:'l1_013',level:1,thai:'นอน',roman:'non',hebrew:'לישון',tone:'mid'},
  {id:'l1_014',level:1,thai:'โรง',roman:'roong',hebrew:'מבנה / אולם / מקום',tone:'mid'},
  {id:'l1_015',level:1,thai:'ลม',roman:'lom',hebrew:'רוח / אוויר',tone:'mid'},

  // Level 2 — dead syllables and common nouns
  {id:'l2_001',level:2,thai:'ปาก',roman:'bpaak',hebrew:'פה',tone:'low'},
  {id:'l2_002',level:2,thai:'เด็ก',roman:'dek',hebrew:'ילד',tone:'low'},
  {id:'l2_003',level:2,thai:'บอก',roman:'bawk',hebrew:'להגיד / לספר',tone:'low'},
  {id:'l2_004',level:2,thai:'จด',roman:'jot',hebrew:'לרשום / לכתוב הערה',tone:'low'},
  {id:'l2_005',level:2,thai:'ปิด',roman:'bpit',hebrew:'לסגור / כבוי',tone:'low'},
  {id:'l2_006',level:2,thai:'เปิด',roman:'bpert',hebrew:'לפתוח / פתוח',tone:'low'},
  {id:'l2_007',level:2,thai:'ออก',roman:'awk',hebrew:'לצאת',tone:'low'},
  {id:'l2_008',level:2,thai:'อาบ',roman:'aap',hebrew:'להתרחץ',tone:'low'},
  {id:'l2_009',level:2,thai:'หก',roman:'hok',hebrew:'שש',tone:'low'},
  {id:'l2_010',level:2,thai:'ผัก',roman:'phak',hebrew:'ירק',tone:'low'},
  {id:'l2_011',level:2,thai:'รัก',roman:'rak',hebrew:'לאהוב',tone:'high'},
  {id:'l2_012',level:2,thai:'น้ำ',roman:'naam',hebrew:'מים',tone:'high'},
  {id:'l2_013',level:2,thai:'นก',roman:'nok',hebrew:'ציפור',tone:'high'},
  {id:'l2_014',level:2,thai:'รถ',roman:'rot',hebrew:'רכב / אוטו',tone:'high'},
  {id:'l2_015',level:2,thai:'มด',roman:'mot',hebrew:'נמלה',tone:'high'},

  // Level 3 — tone marks and confusion pairs
  {id:'l3_001',level:3,thai:'อ่าน',roman:'aan',hebrew:'לקרוא',tone:'low'},
  {id:'l3_002',level:3,thai:'ป่า',roman:'bpaa',hebrew:'יער',tone:'low'},
  {id:'l3_003',level:3,thai:'เก่า',roman:'gao',hebrew:'ישן',tone:'low'},
  {id:'l3_004',level:3,thai:'ข่าว',roman:'khao',hebrew:'חדשות',tone:'low'},
  {id:'l3_005',level:3,thai:'ใหม่',roman:'mai',hebrew:'חדש',tone:'low'},
  {id:'l3_006',level:3,thai:'บ้าน',roman:'baan',hebrew:'בית',tone:'falling'},
  {id:'l3_007',level:3,thai:'ไม่',roman:'mai',hebrew:'לא',tone:'falling'},
  {id:'l3_008',level:3,thai:'ได้',roman:'dai',hebrew:'יכול / קיבל / אפשר',tone:'falling'},
  {id:'l3_009',level:3,thai:'ให้',roman:'hai',hebrew:'לתת / בשביל',tone:'falling'},
  {id:'l3_010',level:3,thai:'น่า',roman:'naa',hebrew:'ראוי ל־ / נראה כ־',tone:'falling'},
  {id:'l3_011',level:3,thai:'ข้าว',roman:'khao',hebrew:'אורז',tone:'falling'},
  {id:'l3_012',level:3,thai:'ห้า',roman:'haa',hebrew:'חמש',tone:'falling'},
  {id:'l3_013',level:3,thai:'ม้า',roman:'maa',hebrew:'סוס',tone:'high'},
  {id:'l3_014',level:3,thai:'ซื้อ',roman:'sue',hebrew:'לקנות',tone:'high'},
  {id:'l3_015',level:3,thai:'รู้',roman:'ruu',hebrew:'לדעת',tone:'high'},

  // Level 4 — common two-syllable vocabulary
  {id:'l4_001',level:4,thai:'พูดเล่น',roman:'phut len',hebrew:'סתם צוחק / אומר בצחוק',tone:'falling-mid'},
  {id:'l4_002',level:4,thai:'ล้อเล่น',roman:'law len',hebrew:'מתבדח / עובד עליך',tone:'high-mid'},
  {id:'l4_003',level:4,thai:'หยอก',roman:'yawk',hebrew:'להקניט בצחוק / שובבות',tone:'low'},
  {id:'l4_004',level:4,thai:'ปกติ',roman:'bpok ga dti',hebrew:'בדרך כלל / רגיל',tone:'low-low-low'},
  {id:'l4_005',level:4,thai:'บางครั้ง',roman:'baang krang',hebrew:'לפעמים',tone:'mid-high'},
  {id:'l4_006',level:4,thai:'ไม่เคย',roman:'mai koei',hebrew:'אף פעם לא',tone:'falling-mid'},
  {id:'l4_007',level:4,thai:'ไม่ค่อย',roman:'mai khoi',hebrew:'לא כל כך / לא לעיתים קרובות',tone:'falling-falling'},
  {id:'l4_008',level:4,thai:'บ่อยๆ',roman:'boi boi',hebrew:'לעיתים קרובות',tone:'low-low'},
  {id:'l4_009',level:4,thai:'เสมอๆ',roman:'sa mer sa mer',hebrew:'תמיד',tone:'low-rising-low-rising'},
  {id:'l4_010',level:4,thai:'นานๆ ที',roman:'naan naan thii',hebrew:'פעם ב... / לעיתים רחוקות',tone:'mid-mid-mid'},
  {id:'l4_011',level:4,thai:'วันนี้',roman:'wan nii',hebrew:'היום',tone:'mid-high'},
  {id:'l4_012',level:4,thai:'พรุ่งนี้',roman:'phrung nii',hebrew:'מחר',tone:'falling-high'},
  {id:'l4_013',level:4,thai:'เมื่อวาน',roman:'muea waan',hebrew:'אתמול',tone:'falling-mid'},
  {id:'l4_014',level:4,thai:'ภาษาไทย',roman:'phaa saa thai',hebrew:'השפה התאילנדית',tone:'mid-rising-mid'},
  {id:'l4_015',level:4,thai:'เข้าใจ',roman:'khao jai',hebrew:'להבין',tone:'falling-mid'},

  // Level 5 — short useful chunks
  {id:'l5_001',level:5,thai:'ผมเข้าใจ',roman:'phom khao jai',hebrew:'אני מבין',tone:'rising-falling-mid'},
  {id:'l5_002',level:5,thai:'ไม่เข้าใจ',roman:'mai khao jai',hebrew:'לא מבין',tone:'falling-falling-mid'},
  {id:'l5_003',level:5,thai:'พูดช้าๆ',roman:'phut chaa chaa',hebrew:'דבר/י לאט',tone:'falling-high-high'},
  {id:'l5_004',level:5,thai:'พูดอีกที',roman:'phut iik thii',hebrew:'תגיד/י שוב פעם',tone:'falling-low-mid'},
  {id:'l5_005',level:5,thai:'อันนี้อะไร',roman:'an nii a rai',hebrew:'מה זה?',tone:'mid-high-low-mid'},
  {id:'l5_006',level:5,thai:'ราคาเท่าไหร่',roman:'raa khaa thao rai',hebrew:'כמה זה עולה?',tone:'mid-mid-falling-low'},
  {id:'l5_007',level:5,thai:'ไปไหน',roman:'bpai nai',hebrew:'לאן הולכים?',tone:'mid-rising'},
  {id:'l5_008',level:5,thai:'กินข้าว',roman:'gin khao',hebrew:'לאכול / לאכול אורז',tone:'mid-falling'},
  {id:'l5_009',level:5,thai:'ดื่มน้ำ',roman:'duem naam',hebrew:'לשתות מים',tone:'low-high'},
  {id:'l5_010',level:5,thai:'ขอบคุณ',roman:'khop khun',hebrew:'תודה',tone:'low-mid'},
  {id:'l5_011',level:5,thai:'สวัสดี',roman:'sa wat dii',hebrew:'שלום',tone:'low-low-mid'},
  {id:'l5_012',level:5,thai:'ไม่เป็นไร',roman:'mai bpen rai',hebrew:'לא נורא / זה בסדר',tone:'falling-mid-mid'},
  {id:'l5_013',level:5,thai:'ขอโทษ',roman:'kho thot',hebrew:'סליחה',tone:'rising-falling'},
  {id:'l5_014',level:5,thai:'อร่อยมาก',roman:'a roi maak',hebrew:'טעים מאוד',tone:'low-low-falling'},
  {id:'l5_015',level:5,thai:'เจอกัน',roman:'jer gan',hebrew:'נתראה',tone:'mid-mid'}
];

const MODES = ['read_meaning','hebrew_write','tone','roman_write'];
const STORAGE_KEY = 'thaiTrainerStateV3';
const DEFAULT_SYNC_URL = 'https://script.google.com/macros/s/AKfycbzbr2OfX-0WVpJqPuMgQ_ye-kUCGdyAjGvF3Mv3wCugy_n9_x36x6l6ld6oecD4F7Ru/exec';
let deferredInstallPrompt = null;
let state = loadState();
let current = null;
let selectedTone = null;
let drawing = false;
let lastPoint = null;

const el = id => document.getElementById(id);
const canvas = el('writeCanvas');
const ctx = canvas.getContext('2d');

function defaultState(){
  return { stats:{correct:0,wrong:0,streak:0,total:0}, itemStats:{}, history:[], syncUrl:'', lastSync:null };
}
function loadState(){
  try { return { ...defaultState(), ...(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}) }; }
  catch { return defaultState(); }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function init(){
  setupLevels(); setupCanvas(); setupEvents(); setupPwa(); runQA();
  if(!state.syncUrl){ state.syncUrl = DEFAULT_SYNC_URL; saveState(); }
  el('syncUrl').value = state.syncUrl || DEFAULT_SYNC_URL;
  updateStats(); newQuestion();
  if('serviceWorker' in navigator){ navigator.serviceWorker.register('./sw.js').catch(()=>{}); }
}

function setupLevels(){
  const select = el('levelSelect');
  select.innerHTML = '';
  for(let i=1;i<=5;i++){
    const o = document.createElement('option'); o.value = String(i); o.textContent = `רמה ${i}`; select.appendChild(o);
  }
}
function setupEvents(){
  el('newQuestionBtn').addEventListener('click', newQuestion);
  el('clearBtn').addEventListener('click', clearCanvas);
  el('showAnswerBtn').addEventListener('click', showAnswer);
  el('correctBtn').addEventListener('click', ()=>mark(true));
  el('wrongBtn').addEventListener('click', ()=>mark(false));
  el('levelSelect').addEventListener('change', newQuestion);
  el('modeSelect').addEventListener('change', newQuestion);
  el('saveSyncUrlBtn').addEventListener('click', saveSyncUrl);
  el('syncUploadBtn').addEventListener('click', syncUpload);
  el('syncDownloadBtn').addEventListener('click', syncDownload);
}
function setupPwa(){
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredInstallPrompt=e; el('installBtn').hidden=false; });
  el('installBtn').addEventListener('click', async()=>{ if(deferredInstallPrompt){ deferredInstallPrompt.prompt(); deferredInstallPrompt=null; el('installBtn').hidden=true; }});
}

function pickMode(){
  const selected = el('modeSelect').value;
  if(selected !== 'mixed') return selected;
  return MODES[Math.floor(Math.random()*MODES.length)];
}
function mastery(item){
  const s = state.itemStats[item.id] || {correct:0,wrong:0};
  return (s.correct - s.wrong*1.5);
}
function weightedPick(items){
  const recentIds = state.history.slice(-8).map(h=>h.id);
  const pool = items.map(item => {
    let weight = 10 - mastery(item);
    if(recentIds.includes(item.id)) weight *= 0.18;
    return {item, weight: Math.max(0.5, weight)};
  });
  const total = pool.reduce((a,b)=>a+b.weight,0);
  let r = Math.random()*total;
  for(const p of pool){ r -= p.weight; if(r <= 0) return p.item; }
  return pool[0].item;
}
function newQuestion(){
  selectedTone = null;
  const level = Number(el('levelSelect').value || 1);
  const mode = pickMode();
  const items = WORDS.filter(w=>w.level === level);
  current = { item: weightedPick(items), mode };
  renderQuestion(); clearCanvas();
}
function renderQuestion(){
  const {item, mode} = current;
  el('levelBadge').textContent = `רמה ${item.level}`;
  el('modeBadge').textContent = modeLabel(mode);
  el('progressBadge').textContent = `${state.stats.total || 0} שאלות`;
  el('answerBox').hidden = true;
  el('toneChoices').hidden = mode !== 'tone';
  el('toneChoices').innerHTML = '';

  if(mode === 'read_meaning'){
    el('promptText').textContent = 'קרא את המילה וכתוב בעברית את המשמעות + הטון';
    el('questionText').textContent = item.thai;
    el('questionHint').textContent = '';
  } else if(mode === 'hebrew_write'){
    el('promptText').textContent = 'כתוב בתאית את המילה הבאה';
    el('questionText').textContent = item.hebrew;
    el('questionHint').textContent = 'כתוב על הלוח הלבן ואז הצג תשובה';
  } else if(mode === 'roman_write'){
    el('promptText').textContent = 'כתוב בתאית לפי התעתיק';
    el('questionText').textContent = item.roman;
    el('questionHint').textContent = item.hebrew;
  } else if(mode === 'tone'){
    el('promptText').textContent = 'מה הטון של המילה / תבנית הטונים?';
    el('questionText').textContent = item.thai;
    el('questionHint').textContent = item.roman;
    renderToneChoices(item);
  }
}
function renderToneChoices(item){
  const wrap = el('toneChoices');
  const toneParts = item.tone.split('-');
  let options;
  if(toneParts.length === 1){
    options = TONES.map(t=>({id:t.id, label:`${t.he} (${t.en})`}));
  } else {
    options = [item.tone, ...makeToneDistractors(item.tone)].map(t=>({id:t,label:toneToHeb(t)}));
    options.sort(()=>Math.random()-0.5);
  }
  for(const opt of options){
    const b = document.createElement('button'); b.textContent = opt.label; b.type='button';
    b.addEventListener('click',()=>{ selectedTone=opt.id; [...wrap.children].forEach(x=>x.classList.remove('selected')); b.classList.add('selected'); });
    wrap.appendChild(b);
  }
}
function makeToneDistractors(tone){
  const sample = ['mid-low','falling-mid','low-low','high-mid','mid-high','low-rising','rising-falling'];
  return sample.filter(x=>x!==tone).sort(()=>Math.random()-0.5).slice(0,3);
}
function toneToHeb(tone){ return tone.split('-').map(part => (TONES.find(t=>t.id===part)||{}).he || part).join('־'); }
function modeLabel(mode){
  return {read_meaning:'תאית → עברית',hebrew_write:'עברית → כתיבה',tone:'טונים',roman_write:'תעתיק → כתיבה'}[mode] || 'מעורב';
}
function showAnswer(){
  const {item, mode} = current;
  const autoTone = mode === 'tone' && selectedTone ? `<div><b>בחרת:</b> ${toneToHeb(selectedTone)}</div>` : '';
  el('answerBox').innerHTML = `
    <div class="thai-answer">${escapeHtml(item.thai)}</div>
    <div><b>תעתיק:</b> <span dir="ltr">${escapeHtml(item.roman)}</span></div>
    <div><b>עברית:</b> ${escapeHtml(item.hebrew)}</div>
    <div><b>טון:</b> ${escapeHtml(toneToHeb(item.tone))} <span dir="ltr">(${escapeHtml(item.tone)})</span></div>
    ${autoTone}
    <div class="hint">עכשיו אפשר לנקות, לכתוב שוב נכון, ואז לסמן צדקתי / טעיתי.</div>`;
  el('answerBox').hidden = false;
}
function mark(correct){
  if(!current) return;
  const {item, mode} = current;
  state.stats.total++; correct ? state.stats.correct++ : state.stats.wrong++;
  state.stats.streak = correct ? (state.stats.streak + 1) : 0;
  const s = state.itemStats[item.id] || {correct:0,wrong:0,lastSeen:0,modes:{}};
  correct ? s.correct++ : s.wrong++;
  s.lastSeen = Date.now();
  s.modes[mode] = s.modes[mode] || {correct:0,wrong:0};
  correct ? s.modes[mode].correct++ : s.modes[mode].wrong++;
  state.itemStats[item.id] = s;
  state.history.push({id:item.id,mode,correct,at:Date.now()});
  if(state.history.length>250) state.history = state.history.slice(-250);
  saveState(); updateStats(); newQuestion();
}
function updateStats(){
  const {correct,wrong,streak,total} = state.stats;
  const acc = total ? Math.round((correct/total)*100) : 0;
  el('correctCount').textContent = correct;
  el('wrongCount').textContent = wrong;
  el('streakCount').textContent = streak;
  el('accuracyCount').textContent = `${acc}%`;
}

function setupCanvas(){
  function drawGuideLines(){
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    ctx.save();
    ctx.setLineDash([]);
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';

    // White background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h);

    // Writing guide lines, drawn INSIDE the canvas so they appear on every browser/device.
    const lines = [0.18, 0.38, 0.58, 0.78];
    lines.forEach((pct, idx) => {
      ctx.beginPath();
      ctx.moveTo(0, Math.round(h * pct) + 0.5);
      ctx.lineTo(w, Math.round(h * pct) + 0.5);
      ctx.strokeStyle = idx === 0 || idx === lines.length - 1 ? 'rgba(15,23,42,0.28)' : 'rgba(15,23,42,0.18)';
      ctx.lineWidth = idx === 0 || idx === lines.length - 1 ? 1.5 : 1;
      ctx.stroke();
    });

    // Light vertical guides
    ctx.strokeStyle = 'rgba(15,23,42,0.06)';
    ctx.lineWidth = 1;
    for(let x = 48; x < w; x += 48){
      ctx.beginPath();
      ctx.moveTo(x + 0.5, 0);
      ctx.lineTo(x + 0.5, h);
      ctx.stroke();
    }

    ctx.restore();
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#020617';
  }

  function resizeCanvas(){
    const ratio = Math.max(1, window.devicePixelRatio || 1);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.round(rect.width * ratio);
    canvas.height = Math.round(rect.height * ratio);
    ctx.setTransform(ratio,0,0,ratio,0,0);
    drawGuideLines();
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  const getPoint = e => {
    const r = canvas.getBoundingClientRect();
    return {x:e.clientX-r.left,y:e.clientY-r.top};
  };
  canvas.addEventListener('pointerdown', e=>{ e.preventDefault(); canvas.setPointerCapture(e.pointerId); drawing=true; lastPoint=getPoint(e); ctx.beginPath(); ctx.moveTo(lastPoint.x,lastPoint.y); });
  canvas.addEventListener('pointermove', e=>{ if(!drawing) return; e.preventDefault(); const p=getPoint(e); ctx.lineTo(p.x,p.y); ctx.stroke(); lastPoint=p; });
  const stop = e=>{ if(!drawing) return; e.preventDefault(); drawing=false; lastPoint=null; };
  canvas.addEventListener('pointerup', stop); canvas.addEventListener('pointercancel', stop); canvas.addEventListener('pointerleave', stop);

  window.clearCanvas = function(){ drawGuideLines(); };
}
function clearCanvas(){
  const rect = canvas.getBoundingClientRect();
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, rect.width, rect.height);
}

function saveSyncUrl(){ state.syncUrl = el('syncUrl').value.trim() || DEFAULT_SYNC_URL; el('syncUrl').value = state.syncUrl; saveState(); setSyncStatus('כתובת הסנכרון נשמרה.'); }

function encodePayload(obj){
  return btoa(unescape(encodeURIComponent(JSON.stringify(obj))));
}
function decodePayload(str){
  return JSON.parse(decodeURIComponent(escape(atob(str))));
}
function jsonpRequest(params, timeoutMs=12000){
  return new Promise((resolve, reject)=>{
    saveSyncUrl();
    if(!state.syncUrl) return reject(new Error('אין כתובת Apps Script'));
    const callbackName = 'thaiSyncCb_' + Date.now() + '_' + Math.floor(Math.random()*100000);
    const script = document.createElement('script');
    const cleanup = () => { try{ delete window[callbackName]; }catch{}; script.remove(); clearTimeout(timer); };
    const timer = setTimeout(()=>{ cleanup(); reject(new Error('timeout')); }, timeoutMs);
    window[callbackName] = data => { cleanup(); resolve(data); };
    const qs = new URLSearchParams({...params, callback: callbackName, t: String(Date.now())});
    script.src = state.syncUrl + (state.syncUrl.includes('?') ? '&' : '?') + qs.toString();
    script.onerror = () => { cleanup(); reject(new Error('script load failed')); };
    document.body.appendChild(script);
  });
}
async function syncUpload(){
  try{
    const safeState = {...state, lastSync: Date.now()};
    const data = encodePayload(safeState);
    if(data.length > 45000) throw new Error('יותר מדי נתוני התקדמות לסנכרון GET');
    const json = await jsonpRequest({action:'upload', data});
    if(!json.ok) throw new Error(json.error || 'sync failed');
    state.lastSync = Date.now(); saveState(); setSyncStatus('העלאה לענן הצליחה ✅');
  } catch(err){ setSyncStatus('שגיאת העלאה: '+err.message); }
}
async function syncDownload(){
  try{
    const json = await jsonpRequest({action:'download'});
    if(!json.ok) throw new Error(json.error || 'sync failed');
    if(json.data){
      const cloudState = decodePayload(json.data);
      state = {...defaultState(),...cloudState, syncUrl:state.syncUrl};
      saveState(); updateStats(); newQuestion();
    }
    setSyncStatus('הורדה מהענן הצליחה ✅');
  } catch(err){ setSyncStatus('שגיאת הורדה: '+err.message); }
}
function setSyncStatus(msg){ el('syncStatus').textContent = msg; }
function escapeHtml(s){ return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function runQA(){
  const lines = [];
  const ids = new Set(); let ok = true;
  for(let level=1;level<=5;level++){
    const count = WORDS.filter(w=>w.level===level).length;
    const variants = count * MODES.length;
    lines.push(`Level ${level}: ${count} items × ${MODES.length} modes = ${variants} question variants`);
    if(variants < 50){ ok=false; lines.push(`ERROR: Level ${level} has fewer than 50 variants`); }
  }
  for(const w of WORDS){
    const required = ['id','level','thai','roman','hebrew','tone'];
    for(const k of required){ if(!w[k]){ ok=false; lines.push(`ERROR: missing ${k} in ${JSON.stringify(w)}`); } }
    if(ids.has(w.id)){ ok=false; lines.push(`ERROR: duplicate id ${w.id}`); }
    ids.add(w.id);
    for(const part of w.tone.split('-')){ if(!TONES.some(t=>t.id===part)){ ok=false; lines.push(`ERROR: bad tone ${w.tone} for ${w.id}`); } }
  }
  lines.unshift(ok ? 'QA PASS' : 'QA FAILED');
  el('qaOutput').textContent = lines.join('\n');
}

document.addEventListener('DOMContentLoaded', init);
