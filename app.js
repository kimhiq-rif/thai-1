'use strict';

const APP_VERSION = '1.15.0-ipad-air-canvas-fix';

const TONES = [
  { id:'mid', he:'אמצעי', en:'mid' },
  { id:'low', he:'נמוך', en:'low' },
  { id:'falling', he:'יורד', en:'falling' },
  { id:'high', he:'גבוה', en:'high' },
  { id:'rising', he:'עולה', en:'rising' }
];


const I18N = {
  he: {
    langButton:'English', eyebrow:'Thai Trainer 🇹🇭 · v1.17', title:'קריאה, כתיבה, טונים ומשמעות',
    subtitle:'כותבים לבד, מציגים תשובה, מתקנים אם צריך, ואז מסמנים צדקתי / טעיתי.',
    levelLabel:'רמת קושי', modeLabel:'מצב שאלה', newQuestion:'שאלה חדשה', clear:'נקה כתיבה', showAnswer:'הצג תשובה', correct:'צדקתי', wrong:'טעיתי',
    correctStat:'נכונות', wrongStat:'טעויות', streakStat:'רצף', accuracyStat:'דיוק',
    syncTitle:'סנכרון Google Sheets', syncDescription:'הדבק כאן את כתובת ה־Web App של Google Apps Script. בלי כתובת — ההתקדמות נשמרת רק במכשיר הזה.',
    saveUrl:'שמור כתובת', ready:'מוכן.', qa:'בדיקת תקינות פנימית', install:'התקנה למסך הבית',
    level:'רמה', vowelLevel:'לוח תנועות', foundationLevel:'רמה 1.2 — יסודות אותיות ותנועות', questions:'שאלות', mixed:'מעורב', readMeaning:'תאית → עברית', meaningWrite:'עברית → כתיבה בתאית', toneMode:'תאית → טון', romanWrite:'תעתיק → כתיבה בתאית', vowelBoard:'לוח תנועות — כתיבה',
    promptRead:'קרא את המילה וכתוב בעברית את המשמעות + הטון', promptMeaningWrite:'כתוב בתאית את המילה הבאה', promptRoman:'כתוב בתאית לפי התעתיק', promptTone:'מה הטון של המילה / תבנית הטונים?',
    writeHint:'כתוב על הלוח הלבן ואז הצג תשובה', answerThai:'תאית', roman:'תעתיק', meaning:'עברית', tone:'טון', selected:'בחרת', afterAnswer:'עכשיו אפשר לנקות, לכתוב שוב נכון, ואז לסמן צדקתי / טעיתי.', clickThaiLetters:'לחץ על אות/סימן בתשובה כדי לראות מידע קצר.',
    soundQuestion:'מה הצליל של הסימן?', nameQuestion:'מה שם הסימן בתאית?', symbolQuestion:'איזה סימן מתאים לשם?', boardWordQuestion:'איזו מילת לוח שייכת לסימן?', shortcutQuestion:'מה התפקיד של הסימן?',
    sound:'צליל', signName:'שם הסימן', boardWord:'מילת לוח', note:'הערה', emoji:'אימוג׳י', shortcutAnswer:'מקצר תנועה', userLabel:'שם משתמש', userPlaceholder:'לדוגמה: rif', initUserOk:'נוצרה/נמצאה לשונית משתמש ✅', initUserErr:'שגיאת יצירת משתמש: ', saveProgress:'שמור התקדמות', loadProgress:'טען התקדמות', promptVowelWrite:'כתוב על הלוח את התשובה לפי לוח התנועות', level6McqKicker:'שאלה 1 מתוך 2 — הבנה', level6WriteKicker:'שאלה 2 מתוך 2 — כתיבה', level6Choose:'בחר תשובה אחת. אחרי הבחירה תיפתח שאלת כתיבה על אותו נושא.', level12Choose:'בחר תשובה אחת. אחרי הבחירה תיפתח שאלת כתיבה על אותו סימן/אות.', level12WriteIntro:'עכשיו כתוב את הסימן/האות או מילת הלוח מאותו פריט.', level6WriteLocked:'בחר קודם תשובה אמריקאית כדי לפתוח את שאלת הכתיבה.', level6Correct:'נכון', level6Wrong:'לא נכון', level6WriteIntro:'עכשיו השתמש באותו סימן/עיצור וכתוב את המילה המבוקשת.', vowelAnswer:'תשובת לוח', thaiName:'שם תאילנדי', localName:'הסבר בעברית', writingRule:'כלל כתיבה', example:'דוגמה', consonantName:'שם העיצור', theme:'לוק',
    syncSaved:'כתובת הסנכרון נשמרה.', uploadOk:'העלאה לענן הצליחה ✅', uploadSent:'העלאה לענן נשלחה בהצלחה ✅', downloadOk:'הורדה מהענן הצליחה ✅', uploadErr:'שגיאת העלאה: ', downloadErr:'שגיאת הורדה: '
  },
  en: {
    langButton:'עברית', eyebrow:'Thai Trainer 🇹🇭 · v1.17', title:'Reading, writing, tones and meaning',
    subtitle:'Write it yourself, reveal the answer, fix it if needed, then mark correct / wrong.',
    levelLabel:'Difficulty level', modeLabel:'Question mode', newQuestion:'New question', clear:'Clear writing', showAnswer:'Show answer', correct:'I got it right', wrong:'I got it wrong',
    correctStat:'Correct', wrongStat:'Wrong', streakStat:'Streak', accuracyStat:'Accuracy',
    syncTitle:'Google Sheets Sync', syncDescription:'Paste your Google Apps Script Web App URL here. Without a URL, progress is saved only on this device.',
    saveUrl:'Save URL', ready:'Ready.', qa:'Internal QA check', install:'Install app',
    level:'Level', vowelLevel:'Vowel Board', foundationLevel:'Level 1.2 — Letter & Vowel Foundation', questions:'questions', mixed:'Mixed', readMeaning:'Thai → English', meaningWrite:'English → Thai writing', toneMode:'Thai → tone', romanWrite:'Romanization → Thai writing', vowelBoard:'Vowel Board — writing',
    promptRead:'Read the word and write the meaning + tone in English', promptMeaningWrite:'Write the following word in Thai', promptRoman:'Write Thai from the romanization', promptTone:'What is the tone / tone pattern?',
    writeHint:'Write on the whiteboard, then reveal the answer', answerThai:'Thai', roman:'Romanization', meaning:'English', tone:'Tone', selected:'Selected', afterAnswer:'Now you can clear, rewrite correctly, then mark correct / wrong.', clickThaiLetters:'Tap a Thai letter/sign in the answer to see a short note.',
    soundQuestion:'What sound does this sign make?', nameQuestion:'What is the Thai name of this sign?', symbolQuestion:'Which sign matches this name?', boardWordQuestion:'Which board word belongs to this sign?', shortcutQuestion:'What does this sign do?',
    sound:'Sound', signName:'Sign name', boardWord:'Board word', note:'Note', emoji:'Emoji', shortcutAnswer:'shortens a vowel', userLabel:'Username', userPlaceholder:'e.g. rif', initUserOk:'User sheet created/found ✅', initUserErr:'User init error: ', saveProgress:'Save progress', loadProgress:'Load progress', promptVowelWrite:'Write the answer on the board from the vowel board', level6McqKicker:'Question 1 of 2 — understanding', level6WriteKicker:'Question 2 of 2 — writing', level6Choose:'Choose one answer. After choosing, a writing question about the same topic will open.', level12Choose:'Choose one answer. After choosing, a writing task about the same sign/letter will open.', level12WriteIntro:'Now write the sign/letter or board word from the same item.', level6WriteLocked:'Choose a multiple-choice answer first to unlock the writing task.', level6Correct:'Correct', level6Wrong:'Not correct', level6WriteIntro:'Now use the same sign/consonant and write the requested word.', vowelAnswer:'Vowel-board answer', thaiName:'Thai name', localName:'English explanation', writingRule:'Writing rule', example:'Example', consonantName:'Consonant name', theme:'Theme',
    syncSaved:'Sync URL saved.', uploadOk:'Cloud upload succeeded ✅', uploadSent:'Cloud upload was sent ✅', downloadOk:'Cloud download succeeded ✅', uploadErr:'Upload error: ', downloadErr:'Download error: '
  }
};
function lang(){ return state && state.lang ? state.lang : 'he'; }
function t(key){ return (I18N[lang()] && I18N[lang()][key]) || I18N.he[key] || key; }
function isHebrew(){ return lang() === 'he'; }
function itemMeaning(item){ return isHebrew() ? item.hebrew : (item.english || item.hebrew); }

function hasDrillableTone(item){
  if(!item || !item.tone || item.tone === 'not_drilled') return false;
  return String(item.tone).split('-').every(part => TONES.some(tt => tt.id === part));
}
function displayTone(item){
  if(hasDrillableTone(item)) return `${toneToHeb(item.tone)} <span dir="ltr">(${escapeHtml(item.tone)})</span>`;
  return isHebrew() ? 'עדיין לא מתורגל בטונים' : 'tone not drilled yet';
}

const WORDS = [
  // Level 1 — very short concrete words and classroom-style forms
  {id:'l1_001',level:1,thai:'กา',roman:'gaa',hebrew:'עורב / קומקום',english:'crow / kettle',tone:'mid'},
  {id:'l1_002',level:1,thai:'ตา',roman:'dtaa',hebrew:'עין / סבא מצד אמא',english:'eye / maternal grandfather',tone:'mid'},
  {id:'l1_003',level:1,thai:'มา',roman:'maa',hebrew:'לבוא',english:'to come',tone:'mid'},
  {id:'l1_004',level:1,thai:'มี',roman:'mii',hebrew:'יש / להיות בעל',english:'to have / there is',tone:'mid'},
  {id:'l1_005',level:1,thai:'ดี',roman:'dii',hebrew:'טוב',english:'good',tone:'mid'},
  {id:'l1_006',level:1,thai:'ดู',roman:'duu',hebrew:'לראות / לצפות',english:'to look / to watch',tone:'mid'},
  {id:'l1_007',level:1,thai:'มือ',roman:'mue',hebrew:'יד',english:'hand',tone:'mid'},
  {id:'l1_008',level:1,thai:'ปลา',roman:'bplaa',hebrew:'דג',english:'fish',tone:'mid'},
  {id:'l1_009',level:1,thai:'ไป',roman:'bpai',hebrew:'ללכת / לנסוע',english:'to go',tone:'mid'},
  {id:'l1_010',level:1,thai:'ใจ',roman:'jai',hebrew:'לב / נפש',english:'heart / mind',tone:'mid'},
  {id:'l1_011',level:1,thai:'กิน',roman:'gin',hebrew:'לאכול',english:'to eat',tone:'mid'},
  {id:'l1_012',level:1,thai:'คน',roman:'khon',hebrew:'אדם / בן אדם',english:'person',tone:'mid'},
  {id:'l1_013',level:1,thai:'นอน',roman:'non',hebrew:'לישון',english:'to sleep',tone:'mid'},
  {id:'l1_014',level:1,thai:'โรง',roman:'roong',hebrew:'מבנה / אולם / מקום',english:'building / hall / place',tone:'mid'},
  {id:'l1_015',level:1,thai:'ลม',roman:'lom',hebrew:'רוח / אוויר',english:'wind / air',tone:'mid'},

  // Level 2 — dead syllables and common nouns
  {id:'l2_001',level:2,thai:'ปาก',roman:'bpaak',hebrew:'פה',english:'mouth',tone:'low'},
  {id:'l2_002',level:2,thai:'เด็ก',roman:'dek',hebrew:'ילד',english:'child',tone:'low'},
  {id:'l2_003',level:2,thai:'บอก',roman:'bawk',hebrew:'להגיד / לספר',english:'to tell / to say',tone:'low'},
  {id:'l2_004',level:2,thai:'จด',roman:'jot',hebrew:'לרשום / לכתוב הערה',english:'to note down',tone:'low'},
  {id:'l2_005',level:2,thai:'ปิด',roman:'bpit',hebrew:'לסגור / כבוי',english:'to close / off',tone:'low'},
  {id:'l2_006',level:2,thai:'เปิด',roman:'bpert',hebrew:'לפתוח / פתוח',english:'to open / on',tone:'low'},
  {id:'l2_007',level:2,thai:'ออก',roman:'awk',hebrew:'לצאת',english:'to exit',tone:'low'},
  {id:'l2_008',level:2,thai:'อาบ',roman:'aap',hebrew:'להתרחץ',english:'to bathe',tone:'low'},
  {id:'l2_009',level:2,thai:'หก',roman:'hok',hebrew:'שש',english:'six',tone:'low'},
  {id:'l2_010',level:2,thai:'ผัก',roman:'phak',hebrew:'ירק',english:'vegetable',tone:'low'},
  {id:'l2_011',level:2,thai:'รัก',roman:'rak',hebrew:'לאהוב',english:'to love',tone:'high'},
  {id:'l2_012',level:2,thai:'น้ำ',roman:'naam',hebrew:'מים',english:'water',tone:'high'},
  {id:'l2_013',level:2,thai:'นก',roman:'nok',hebrew:'ציפור',english:'bird',tone:'high'},
  {id:'l2_014',level:2,thai:'รถ',roman:'rot',hebrew:'רכב / אוטו',english:'car / vehicle',tone:'high'},
  {id:'l2_015',level:2,thai:'มด',roman:'mot',hebrew:'נמלה',english:'ant',tone:'high'},

  // Level 3 — tone marks and confusion pairs
  {id:'l3_001',level:3,thai:'อ่าน',roman:'aan',hebrew:'לקרוא',english:'to read',tone:'low'},
  {id:'l3_002',level:3,thai:'ป่า',roman:'bpaa',hebrew:'יער',english:'forest',tone:'low'},
  {id:'l3_003',level:3,thai:'เก่า',roman:'gao',hebrew:'ישן',english:'old',tone:'low'},
  {id:'l3_004',level:3,thai:'ข่าว',roman:'khao',hebrew:'חדשות',english:'news',tone:'low'},
  {id:'l3_005',level:3,thai:'ใหม่',roman:'mai',hebrew:'חדש',english:'new',tone:'low'},
  {id:'l3_006',level:3,thai:'บ้าน',roman:'baan',hebrew:'בית',english:'house / home',tone:'falling'},
  {id:'l3_007',level:3,thai:'ไม่',roman:'mai',hebrew:'לא',english:'no / not',tone:'falling'},
  {id:'l3_008',level:3,thai:'ได้',roman:'dai',hebrew:'יכול / קיבל / אפשר',english:'can / got / may',tone:'falling'},
  {id:'l3_009',level:3,thai:'ให้',roman:'hai',hebrew:'לתת / בשביל',english:'to give / for',tone:'falling'},
  {id:'l3_010',level:3,thai:'น่า',roman:'naa',hebrew:'ראוי ל־ / נראה כ־',english:'worth / likely / seems',tone:'falling'},
  {id:'l3_011',level:3,thai:'ข้าว',roman:'khao',hebrew:'אורז',english:'rice',tone:'falling'},
  {id:'l3_012',level:3,thai:'ห้า',roman:'haa',hebrew:'חמש',english:'five',tone:'falling'},
  {id:'l3_013',level:3,thai:'ม้า',roman:'maa',hebrew:'סוס',english:'horse',tone:'high'},
  {id:'l3_014',level:3,thai:'ซื้อ',roman:'sue',hebrew:'לקנות',english:'to buy',tone:'high'},
  {id:'l3_015',level:3,thai:'รู้',roman:'ruu',hebrew:'לדעת',english:'to know',tone:'high'},

  // Level 4 — common two-syllable vocabulary
  {id:'l4_001',level:4,thai:'พูดเล่น',roman:'phut len',hebrew:'סתם צוחק / אומר בצחוק',english:'just joking / saying jokingly',tone:'falling-mid'},
  {id:'l4_002',level:4,thai:'ล้อเล่น',roman:'law len',hebrew:'מתבדח / עובד עליך',english:'joking / teasing',tone:'high-mid'},
  {id:'l4_003',level:4,thai:'หยอก',roman:'yawk',hebrew:'להקניט בצחוק / שובבות',english:'to tease playfully',tone:'low'},
  {id:'l4_004',level:4,thai:'ปกติ',roman:'bpok ga dti',hebrew:'בדרך כלל / רגיל',english:'usually / normal',tone:'low-low-low'},
  {id:'l4_005',level:4,thai:'บางครั้ง',roman:'baang krang',hebrew:'לפעמים',english:'sometimes',tone:'mid-high'},
  {id:'l4_006',level:4,thai:'ไม่เคย',roman:'mai koei',hebrew:'אף פעם לא',english:'never',tone:'falling-mid'},
  {id:'l4_007',level:4,thai:'ไม่ค่อย',roman:'mai khoi',hebrew:'לא כל כך / לא לעיתים קרובות',english:'not really / not often',tone:'falling-falling'},
  {id:'l4_008',level:4,thai:'บ่อยๆ',roman:'boi boi',hebrew:'לעיתים קרובות',english:'often',tone:'low-low'},
  {id:'l4_009',level:4,thai:'เสมอๆ',roman:'sa mer sa mer',hebrew:'תמיד',english:'always',tone:'low-rising-low-rising'},
  {id:'l4_010',level:4,thai:'นานๆ ที',roman:'naan naan thii',hebrew:'פעם ב... / לעיתים רחוקות',english:'once in a while',tone:'mid-mid-mid'},
  {id:'l4_011',level:4,thai:'วันนี้',roman:'wan nii',hebrew:'היום',english:'today',tone:'mid-high'},
  {id:'l4_012',level:4,thai:'พรุ่งนี้',roman:'phrung nii',hebrew:'מחר',english:'tomorrow',tone:'falling-high'},
  {id:'l4_013',level:4,thai:'เมื่อวาน',roman:'muea waan',hebrew:'אתמול',english:'yesterday',tone:'falling-mid'},
  {id:'l4_014',level:4,thai:'ภาษาไทย',roman:'phaa saa thai',hebrew:'השפה התאילנדית',english:'Thai language',tone:'mid-rising-mid'},
  {id:'l4_015',level:4,thai:'เข้าใจ',roman:'khao jai',hebrew:'להבין',english:'to understand',tone:'falling-mid'},

  // Level 5 — short useful chunks
  {id:'l5_001',level:5,thai:'ผมเข้าใจ',roman:'phom khao jai',hebrew:'אני מבין',english:'I understand',tone:'rising-falling-mid'},
  {id:'l5_002',level:5,thai:'ไม่เข้าใจ',roman:'mai khao jai',hebrew:'לא מבין',english:'I do not understand',tone:'falling-falling-mid'},
  {id:'l5_003',level:5,thai:'พูดช้าๆ',roman:'phut chaa chaa',hebrew:'דבר/י לאט',english:'Speak slowly',tone:'falling-high-high'},
  {id:'l5_004',level:5,thai:'พูดอีกที',roman:'phut iik thii',hebrew:'תגיד/י שוב פעם',english:'Say it again',tone:'falling-low-mid'},
  {id:'l5_005',level:5,thai:'อันนี้อะไร',roman:'an nii a rai',hebrew:'מה זה?',english:'What is this?',tone:'mid-high-low-mid'},
  {id:'l5_006',level:5,thai:'ราคาเท่าไหร่',roman:'raa khaa thao rai',hebrew:'כמה זה עולה?',english:'How much is it?',tone:'mid-mid-falling-low'},
  {id:'l5_007',level:5,thai:'ไปไหน',roman:'bpai nai',hebrew:'לאן הולכים?',english:'Where are you going?',tone:'mid-rising'},
  {id:'l5_008',level:5,thai:'กินข้าว',roman:'gin khao',hebrew:'לאכול / לאכול אורז',english:'to eat / eat rice',tone:'mid-falling'},
  {id:'l5_009',level:5,thai:'ดื่มน้ำ',roman:'duem naam',hebrew:'לשתות מים',english:'to drink water',tone:'low-high'},
  {id:'l5_010',level:5,thai:'ขอบคุณ',roman:'khop khun',hebrew:'תודה',english:'thank you',tone:'low-mid'},
  {id:'l5_011',level:5,thai:'สวัสดี',roman:'sa wat dii',hebrew:'שלום',english:'hello',tone:'low-low-mid'},
  {id:'l5_012',level:5,thai:'ไม่เป็นไร',roman:'mai bpen rai',hebrew:'לא נורא / זה בסדר',english:'never mind / it is okay',tone:'falling-mid-mid'},
  {id:'l5_013',level:5,thai:'ขอโทษ',roman:'kho thot',hebrew:'סליחה',english:'sorry',tone:'rising-falling'},
  {id:'l5_014',level:5,thai:'อร่อยมาก',roman:'a roi maak',hebrew:'טעים מאוד',english:'very delicious',tone:'low-low-falling'},
  {id:'l5_015',level:5,thai:'เจอกัน',roman:'jer gan',hebrew:'נתראה',english:'see you',tone:'mid-mid'},

  // APKG import — אלמוג 5.apkg. Tone drills are disabled for these until tones are verified.
  {id:'apkg_001',level:4,thai:'แต่เช้า',roman:'dtae-chao',hebrew:'לפנות בוקר / מוקדם בבוקר',english:'early morning / at dawn',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_002',level:4,thai:'ตอนเช้า',roman:'dton-chao',hebrew:'בבוקר',english:'in the morning',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_003',level:4,thai:'ตอนสาย',roman:'dton-saai',hebrew:'מאוחר בבוקר',english:'late morning',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_004',level:4,thai:'ตอนเที่ยง',roman:'dton-tieng',hebrew:'בצהריים',english:'at noon',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_005',level:4,thai:'ตอนบ่าย',roman:'dton-baai',hebrew:'אחר הצהריים',english:'in the afternoon',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_006',level:4,thai:'ตอนเย็น',roman:'dton-yen',hebrew:'בערב',english:'in the evening',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_007',level:4,thai:'ตอนเที่ยงคืน',roman:'dton-tiang-kheun',hebrew:'בחצות / בלילה',english:'at midnight',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_008',level:4,thai:'ตอนดึก',roman:'dton-deug',hebrew:'מאוחר בלילה',english:'late at night',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_009',level:4,thai:'เห็นด้วย',roman:'hen duai',hebrew:'להסכים / מסכים',english:'to agree / agree',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_010',level:4,thai:'เห็นไหม',roman:'hen mai',hebrew:'רואה? / אתה רואה?',english:'Do you see?',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_011',level:4,thai:'เห็นด้วยไหม',roman:'hen duai mai',hebrew:'האם אתה מסכים?',english:'Do you agree?',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_012',level:4,thai:'ยืน',roman:'yuen',hebrew:'לעמוד',english:'to stand',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_013',level:4,thai:'นั่ง',roman:'nung / nang',hebrew:'לשבת',english:'to sit',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_014',level:4,thai:'เดิน',roman:'doen',hebrew:'ללכת / לצעוד',english:'to walk',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_015',level:4,thai:'วิ่ง',roman:'wing',hebrew:'לרוץ',english:'to run',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_016',level:4,thai:'ข้าม',roman:'khaam',hebrew:'לדלג / לחצות',english:'to skip / to cross',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_017',level:5,thai:'ไม่ไหว',roman:'mai wai',hebrew:'לא יכול / לא מסוגל / לא עומד בזה',english:'cannot / cannot handle it',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_018',level:5,thai:'ไม่ต้องห่วง',roman:'mai dtong huang',hebrew:'אל תדאג / אין מה לדאוג',english:'do not worry',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_019',level:5,thai:'ไม่สนใจ',roman:'mai son jai',hebrew:'לא מעוניין / לא אכפת',english:'not interested / do not care',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_020',level:5,thai:'ไม่มีอะไร',roman:'mai mee a-rai',hebrew:'אין כלום',english:'there is nothing / nothing',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_021',level:5,thai:'ไม่ต้อง',roman:'mai dtong',hebrew:'לא צריך / אין צורך',english:'do not need to',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_022',level:5,thai:'ไม่มีปัญหา',roman:'mai mee pan-haa',hebrew:'אין בעיה',english:'no problem',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_023',level:5,thai:'ไม่มีทาง',roman:'mai mee taang',hebrew:'אין מצב / אין סיכוי',english:'no way / impossible',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_024',level:5,thai:'ว่าไง',roman:'waa ngai',hebrew:'מה קורה? / מה נשמע?',english:'What’s up?',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_025',level:5,thai:'ไม่เก็ทอะ',roman:'mai get a',hebrew:'אני לא מבין / לא קולט',english:'I do not get it',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_026',level:5,thai:'แล้วไง',roman:'laew ngai',hebrew:'אז מה?',english:'so what?',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_027',level:5,thai:'คิดว่า',roman:'khit waa',hebrew:'לחשוב ש...',english:'to think that...',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_028',level:5,thai:'พูดว่า',roman:'phuut waa',hebrew:'לומר ש...',english:'to say that...',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_029',level:5,thai:'บอกว่า',roman:'bok waa',hebrew:'לספר / להגיד ש...',english:'to tell / say that...',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_030',level:5,thai:'รู้สึกว่า',roman:'ruu seuk waa',hebrew:'להרגיש ש...',english:'to feel that...',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_031',level:5,thai:'เพราะว่า',roman:'phroh waa',hebrew:'בגלל ש... / כי',english:'because',tone:'not_drilled',source:'apkg_almog5'},
  {id:'apkg_032',level:5,thai:'ได้ยินว่า',roman:'daai yin waa',hebrew:'לשמוע ש...',english:'to hear that...',tone:'not_drilled',source:'apkg_almog5'},


  // Uploaded vocabulary expansion — merged into existing Levels 1–5. Tone is intentionally not drilled yet.
  {id:"uv_0001",level:3,thai:"สำคัญ",roman:"sam¹-kan¹",hebrew:"חשוב",english:"important",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0002",level:3,thai:"ขนม",roman:"kha-num¹",hebrew:"חטיף",english:"snack",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0003",level:1,thai:"หวี",roman:"wii¹",hebrew:"אשכול בננות",english:"banana bunch / comb (review context)",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0004",level:3,thai:"มาครับ",roman:"ma¹-krap",hebrew:"אני כאן",english:"I am here (male polite)",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0005",level:1,thai:"ไหว้",roman:"waai³",hebrew:"לחלוק כבוד",english:"wai greeting / pay respect",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0006",level:3,thai:"ปากกา",roman:"bpaag²-gaa¹",hebrew:"עט",english:"pen",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0007",level:3,thai:"ว่ายน้ำ",roman:"waai³-nam¹",hebrew:"לשחות",english:"swim",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0008",level:1,thai:"ครู",roman:"kru¹",hebrew:"מורה",english:"teacher",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0009",level:5,thai:"คุณชื่ออะไร",roman:"kun¹ cheuu³ a-rai¹?",hebrew:"מה השם שלך?",english:"What is your name?",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0010",level:4,thai:"ผมชื่อ…",roman:"pom⁵ cheuu³ (name)",hebrew:"השם שלי הוא...",english:"My name is… (male)",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0011",level:4,thai:"ฉันชื่อ…",roman:"chan⁵ cheuu³ (name)",hebrew:"השם שלי הוא...",english:"My name is… (female)",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0012",level:1,thai:"อยู่",roman:"yuu²",hebrew:"להיות / לגור",english:"be / live / stay",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0013",level:1,thai:"ท้อง",roman:"thong³",hebrew:"בטן",english:"belly",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0014",level:1,thai:"หิน",roman:"hin⁵",hebrew:"אבן",english:"stone",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0015",level:1,thai:"กอง",roman:"kong¹",hebrew:"ערימה",english:"pile",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0016",level:4,thai:"ผมอยู่…",roman:"pom⁵ yuu² (place)",hebrew:"אני גר ב...",english:"I live/stay in…",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0017",level:1,thai:"หวาน",roman:"waan⁵",hebrew:"מתוק",english:"sweet",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0018",level:1,thai:"ค่าย",roman:"kaai³",hebrew:"מחנה",english:"camp",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0019",level:1,thai:"ชา",roman:"chaa¹",hebrew:"תה",english:"tea",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0020",level:5,thai:"อะไร",roman:"a-rai¹",hebrew:"מה?",english:"what",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0021",level:1,thai:"ดื่ม",roman:"deuum²",hebrew:"לשתות",english:"drink",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0022",level:1,thai:"ใต้",roman:"dtai³",hebrew:"דרום / מתחת",english:"south / under",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0023",level:1,thai:"ร้อน",roman:"rawn¹",hebrew:"חם",english:"hot",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0024",level:5,thai:"ใช่ไหม",roman:"chai³ mai¹?",hebrew:"נכון?",english:"right? / correct?",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0025",level:1,thai:"สวย",roman:"suai⁵",hebrew:"יפה",english:"beautiful",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0026",level:3,thai:"ตีหมา",roman:"dtii¹ maa¹",hebrew:"להרביץ לכלב",english:"hit a dog",tone:'not_drilled',source:"תומר 1,csv.txt"},
  {id:"uv_0027",level:1,thai:"ตอบ",roman:"dtawb²",hebrew:"לענות",english:"answer",tone:'not_drilled',source:"תומר 1,csv.txt; תומר 7,csv.txt"},
  {id:"uv_0028",level:3,thai:"ทำงาน",roman:"tam¹-ngaan¹",hebrew:"לעבוד",english:"work",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0029",level:1,thai:"ทำ",roman:"tam¹",hebrew:"לעשות / להכין",english:"do / make",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0030",level:1,thai:"หลัง",roman:"lang⁵",hebrew:"חזרת",english:"back / behind / after",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0031",level:3,thai:"อร่อย",roman:"a¹-roi²",hebrew:"טעים",english:"delicious",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0032",level:3,thai:"นิดหน่อย",roman:"nit-noi²",hebrew:"קצת",english:"a little",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0033",level:1,thai:"จะ",roman:"ja²",hebrew:"מילת עתיד",english:"future marker / will",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0034",level:5,thai:"กินอะไร",roman:"gin¹ a¹-rai¹?",hebrew:"מה אתה אוכל?",english:"What are you eating?",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0035",level:4,thai:"ผม/ฉันรักคุณ",roman:"pom⁵/chan⁵ rak¹ kun¹",hebrew:"אני אוהב/ת אותך",english:"I love you",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0036",level:4,thai:"รักผม/ฉันไหม",roman:"rak¹ kun¹ pom⁵/chan⁵",hebrew:"אתה אוהב אותי",english:"Do you love me? (review)",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0037",level:1,thai:"ชอบ",roman:"chawb³",hebrew:"לאהוב / לחבב",english:"like",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0038",level:3,thai:"โรงเรียน",roman:"rong¹-rian¹",hebrew:"בית ספר",english:"school",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0039",level:1,thai:"เรียน",roman:"rian¹",hebrew:"ללמוד",english:"study / learn",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0040",level:1,thai:"เขียน",roman:"kian⁵",hebrew:"לכתוב",english:"write",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0041",level:4,thai:"ข้าวเหนียวมะม่วง",roman:"kaaw³-niaw³ ma¹-muang³",hebrew:"סטיקי רייס מנגו",english:"mango sticky rice",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0042",level:1,thai:"ผัด",roman:"pad²",hebrew:"מוקפץ",english:"stir-fried",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0043",level:1,thai:"ขอ",roman:"koh⁵",hebrew:"אפשר לקבל...",english:"request / may I have",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0044",level:5,thai:"เรียกว่าอะไร",roman:"riag³ a¹-rai¹?",hebrew:"איך קוראים ל...?",english:"What is it called?",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0045",level:5,thai:"คุณล่ะ",roman:"kun¹ la²",hebrew:"ואתה/ואת?",english:"and you?",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0046",level:3,thai:"เช่นกัน",roman:"chen¹-gan¹",hebrew:"אותו הדבר / גם אני",english:"same / likewise",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0047",level:3,thai:"ยินดี",roman:"yin¹-dii¹",hebrew:"ברוך הבא",english:"welcome / pleased",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0048",level:3,thai:"รู้จัก",roman:"ruu⁴-jag²",hebrew:"להכיר (אנשים/מקומות)",english:"know / be acquainted with",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0049",level:5,thai:"รู้ไหม",roman:"ruu⁴ mai¹?",hebrew:"אתה יודע?",english:"Do you know?",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0050",level:3,thai:"ไม่รู้",roman:"mai³ ruu⁴",hebrew:"לא יודע",english:"do not know",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0051",level:4,thai:"ยังไม่รู้",roman:"yang¹ mai³ ruu⁴",hebrew:"עדיין לא יודע",english:"do not know yet",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0052",level:3,thai:"นาที",roman:"naa-tii¹",hebrew:"דקה",english:"minute",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0053",level:1,thai:"หาด",roman:"haad²",hebrew:"חוף",english:"beach",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0054",level:1,thai:"พูด",roman:"puud³",hebrew:"לדבר",english:"speak",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0055",level:5,thai:"พูดไทยได้ไหม",roman:"puud³ Thai dai³ mai¹?",hebrew:"אתה יכול לדבר תאילנדית?",english:"Can you speak Thai?",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0056",level:1,thai:"พริก",roman:"prik¹",hebrew:"צ'ילי",english:"chili",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0057",level:3,thai:"ไม่ใส่",roman:"mai³ sai²",hebrew:"בלי / לא לשים",english:"without / do not put",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0058",level:3,thai:"น้ำตาล",roman:"nam¹ dtaan¹",hebrew:"סוכר",english:"sugar",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0059",level:1,thai:"เพิ่ม",roman:"peum³",hebrew:"להוסיף",english:"add / increase",tone:'not_drilled',source:"תומר 2,csv.txt"},
  {id:"uv_0060",level:3,thai:"ที่นี่",roman:"tii-nii",hebrew:"פה",english:"here",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0061",level:3,thai:"ภาษา",roman:"paa-saa",hebrew:"שפה",english:"language",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0062",level:3,thai:"ประเทศ",roman:"bpra-ted",hebrew:"מדינה",english:"country",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0063",level:3,thai:"ทุกคน",roman:"tuk-kon",hebrew:"כולם",english:"everyone",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0064",level:4,thai:"ไม่รอไม่ขอ",roman:"mai ro mai koh",hebrew:"אל תחכה",english:"do not wait, do not ask (review)",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0065",level:4,thai:"พอดี/พอไหม",roman:"paw-dii/paw mai",hebrew:"מספיק / לא מספיק",english:"enough / is it enough?",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0066",level:3,thai:"ทบทวน",roman:"tobp-tuan",hebrew:"לחזור (על חומר)",english:"review",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0067",level:1,thai:"พี่",roman:"pii",hebrew:"אח/אחות מבוגר/ת",english:"older sibling / senior",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0068",level:1,thai:"ลืม",roman:"leuum",hebrew:"לשכוח",english:"forget",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0069",level:1,thai:"และ",roman:"laeh",hebrew:"ו...",english:"and",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0070",level:5,thai:"คุณพูดภาษาอะไร",roman:"kun puud paasaa a-rai?",hebrew:"איזו שפה אתה מדבר?",english:"What language do you speak?",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0071",level:1,thai:"เสร็จ",roman:"sed",hebrew:"לסיים",english:"finish / done",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0072",level:1,thai:"เย็น",roman:"yen",hebrew:"קר",english:"cold / evening",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0073",level:5,thai:"คุณมาจาก…",roman:"kun maa jaag (place)",hebrew:"מאיפה אתה?",english:"Where are you from?",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0074",level:1,thai:"จาก",roman:"jaag",hebrew:"מ... (מקור)",english:"from",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0075",level:4,thai:"ไหน/ที่ไหน",roman:"nai/tii nai",hebrew:"איפה",english:"where",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0076",level:3,thai:"ห้องครัว",roman:"hong krua",hebrew:"מטבח",english:"kitchen",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0077",level:3,thai:"ใจดี",roman:"jaai dii",hebrew:"לב טוב",english:"kind",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0078",level:5,thai:"ทำไม",roman:"tam-mai?",hebrew:"למה?",english:"why?",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt; תומר 5,csv.txt"},
  {id:"uv_0079",level:1,thai:"มาก",roman:"maag",hebrew:"מאוד",english:"very / much",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0080",level:1,thai:"สอน",roman:"sawn",hebrew:"ללמד",english:"teach",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0081",level:1,thai:"แพง",roman:"peang",hebrew:"יקר",english:"expensive",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0082",level:3,thai:"ทุกอย่าง",roman:"tug-yaang",hebrew:"הכל",english:"everything",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0083",level:1,thai:"แต่",roman:"dtae",hebrew:"אבל",english:"but",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0084",level:1,thai:"ตก",roman:"tok",hebrew:"ליפול",english:"fall",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0085",level:3,thai:"น้ำตก",roman:"nam-tok",hebrew:"מפל",english:"waterfall",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0086",level:1,thai:"คิด",roman:"kid",hebrew:"לחשוב",english:"think",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0087",level:5,thai:"คุณคิดอะไร",roman:"kun kid a-rai?",hebrew:"על מה אתה חושב?",english:"What are you thinking?",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0088",level:1,thai:"ช่วย",roman:"chuai",hebrew:"לעזור",english:"help",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0089",level:1,thai:"ต่อ",roman:"dtaw",hebrew:"להמשיך / להאריך",english:"continue / extend",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0090",level:1,thai:"หม้อ",roman:"maw³",hebrew:"סיר",english:"pot",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0091",level:1,thai:"หมอ",roman:"maws",hebrew:"רופא",english:"doctor",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0092",level:1,thai:"บวก",roman:"buag",hebrew:"פלוס",english:"plus",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0093",level:1,thai:"ลบ",roman:"löb",hebrew:"מינוס",english:"minus",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0094",level:3,thai:"เท่ากับ",roman:"ta-gab",hebrew:"שווה",english:"equals",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0095",level:1,thai:"เท่า",roman:"dtao",hebrew:"סך הכל",english:"equal / total",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0096",level:3,thai:"เท่าไร",roman:"tao-rai",hebrew:"כמה (מחיר)",english:"how much?",tone:'not_drilled',source:"תומר 3,csv.txt; תומר4,csv.txt"},
  {id:"uv_0097",level:4,thai:"แล้วแต่คุณ",roman:"laew-dtua kun",hebrew:"תלוי בך",english:"up to you",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0098",level:5,thai:"กี่โมง",roman:"gii mong?",hebrew:"איזו שעה?",english:"what time?",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0099",level:3,thai:"ตอนนี้",roman:"dtua-ni",hebrew:"עכשיו",english:"now",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0100",level:4,thai:"ตอนกลางคืน",roman:"dtan-klang-keun",hebrew:"לילה",english:"night",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0101",level:1,thai:"หนึ่ง",roman:"nueng",hebrew:"אחד",english:"one",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0102",level:1,thai:"สอง",roman:"song",hebrew:"שתיים",english:"two",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0103",level:1,thai:"สาม",roman:"saam",hebrew:"שלוש",english:"three",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0104",level:1,thai:"สี่",roman:"sii",hebrew:"ארבע",english:"four",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0105",level:1,thai:"เจ็ด",roman:"jet",hebrew:"שבע",english:"seven",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0106",level:1,thai:"แปด",roman:"bpaed",hebrew:"שמונה",english:"eight",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0107",level:1,thai:"เก้า",roman:"gao",hebrew:"תשע",english:"nine",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0108",level:1,thai:"สิบ",roman:"sip",hebrew:"עשר",english:"ten",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0109",level:3,thai:"สิบเอ็ด",roman:"sip-et",hebrew:"אחת עשרה",english:"eleven",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0110",level:3,thai:"ยี่สิบ",roman:"yii-sip",hebrew:"עשרים",english:"twenty",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0111",level:1,thai:"ร้อย",roman:"roi",hebrew:"מאה",english:"hundred",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0112",level:1,thai:"พัน",roman:"pan",hebrew:"אלף",english:"thousand",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0113",level:1,thai:"หมื่น",roman:"meun",hebrew:"עשרת אלפים",english:"ten thousand",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0114",level:1,thai:"แสน",roman:"san",hebrew:"מאה אלף",english:"hundred thousand",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0115",level:1,thai:"ล้าน",roman:"lan",hebrew:"מיליון",english:"million",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0116",level:1,thai:"หน้า",roman:"naa",hebrew:"פנים / עונה / דף",english:"face / season / page",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0117",level:3,thai:"หน้าร้อน",roman:"naa-rawn",hebrew:"העונה החמה",english:"hot season",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0118",level:3,thai:"หน้าฝน",roman:"naa-fon",hebrew:"עונת הגשמים",english:"rainy season",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0119",level:3,thai:"หน้าหนาว",roman:"naa-nao",hebrew:"העונה הקרה",english:"cold season",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0120",level:1,thai:"ใกล้",roman:"glai",hebrew:"קרוב (טון נמוך)",english:"near",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0121",level:1,thai:"ไกล",roman:"glai",hebrew:"רחוק (טון גבוה)",english:"far",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0122",level:1,thai:"ต้อง",roman:"dtong",hebrew:"חייב",english:"must",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0123",level:1,thai:"กลัว",roman:"glua",hebrew:"לפחד",english:"afraid",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0124",level:3,thai:"ประมาณ",roman:"bpra-maan",hebrew:"בערך",english:"about / approximately",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0125",level:1,thai:"กลับ",roman:"glap",hebrew:"לחזור",english:"return",tone:'not_drilled',source:"תומר4,csv.txt; תומר 7,csv.txt"},
  {id:"uv_0126",level:3,thai:"กลับบ้าน",roman:"glap baan",hebrew:"לחזור הביתה",english:"return home",tone:'not_drilled',source:"תומר4,csv.txt"},
  {id:"uv_0127",level:1,thai:"เหงื่อ",roman:"heua",hebrew:"זיעה",english:"sweat",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0128",level:3,thai:"เหงื่อออก",roman:"heua-awk",hebrew:"להזיע",english:"sweat / perspire",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0129",level:1,thai:"เหนื่อย",roman:"nuay",hebrew:"עייף",english:"tired",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0130",level:1,thai:"หิว",roman:"hiu",hebrew:"רעב",english:"hungry",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0131",level:3,thai:"หิวน้ำ",roman:"hiu-nam",hebrew:"צמא",english:"thirsty",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0132",level:1,thai:"อิ่ม",roman:"im",hebrew:"שבע (מאוכל)",english:"full from food",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0133",level:1,thai:"เผ็ด",roman:"pet",hebrew:"חריף",english:"spicy",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0134",level:1,thai:"เค็ม",roman:"kem",hebrew:"מלוח",english:"salty",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0135",level:1,thai:"เปรี้ยว",roman:"bpreaw",hebrew:"חמוץ",english:"sour",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0136",level:1,thai:"ขม",roman:"kom",hebrew:"מר",english:"bitter",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0137",level:1,thai:"มัน",roman:"man",hebrew:"שומני",english:"oily / fatty",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0138",level:1,thai:"จืด",roman:"juad",hebrew:"תפל",english:"bland",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0139",level:3,thai:"ขยะ",roman:"ka-ya",hebrew:"זבל",english:"trash",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0140",level:3,thai:"โชคดี",roman:"cho-dee",hebrew:"בהצלחה",english:"good luck",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0141",level:3,thai:"ลาก่อน",roman:"la-gon",hebrew:"להתראות",english:"goodbye",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0142",level:4,thai:"ไปก่อนนะ",roman:"pai-gon-na",hebrew:"אני הולך עכשיו (להתראות)",english:"I am going now / bye",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0143",level:3,thai:"ไปแล้ว",roman:"bpai-leaw",hebrew:"כבר הלכתי / הלכתי",english:"already went",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0144",level:3,thai:"ทุกวัน",roman:"tuk-wan",hebrew:"כל יום",english:"every day",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0145",level:3,thai:"บางที",roman:"bang-ti",hebrew:"לפעמים",english:"sometimes",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0146",level:3,thai:"บางคน",roman:"bang-kon",hebrew:"חלק מהאנשים",english:"some people",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0147",level:1,thai:"เคย",roman:"koey",hebrew:"פעם / כבר עשיתי",english:"ever",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0148",level:1,thai:"เบื่อ",roman:"bua",hebrew:"משעמם",english:"bored",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0149",level:3,thai:"ง่วงนอน",roman:"nguang-non",hebrew:"ישנוני",english:"sleepy",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0150",level:1,thai:"สนุก",roman:"sanook",hebrew:"כיף",english:"fun",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0151",level:1,thai:"เป็น",roman:"bpen",hebrew:"להיות / לדעת לעשות",english:"be / know how to",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0152",level:1,thai:"คือ",roman:"kue",hebrew:"זה / הוא (להגדרות)",english:"is / means",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0153",level:5,thai:"ที่ไหน",roman:"tii-nai?",hebrew:"איפה?",english:"where?",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0154",level:5,thai:"เมื่อไร",roman:"meua-rai?",hebrew:"מתי?",english:"when?",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0155",level:5,thai:"ยังไง",roman:"yang-ngai?",hebrew:"איך?",english:"how?",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0156",level:4,thai:"ขนมปัง",roman:"ka-nom-bpang",hebrew:"לחם",english:"bread",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0157",level:3,thai:"เนื้อ",roman:"neu-a",hebrew:"בשר / בקר",english:"meat / beef",tone:'not_drilled',source:"תומר 5,csv.txt"},
  {id:"uv_0158",level:1,thai:"ไก่",roman:"gai",hebrew:"עוף",english:"chicken",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0159",level:1,thai:"หมู",roman:"moo",hebrew:"חזיר",english:"pork / pig",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0160",level:1,thai:"กุ้ง",roman:"goong",hebrew:"שרימפס",english:"shrimp",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0161",level:1,thai:"ปู",roman:"puu",hebrew:"סרטן",english:"crab",tone:'not_drilled',source:"תומר 6,csv.txt; אלמוג 1,CSV.txt"},
  {id:"uv_0162",level:1,thai:"ไข่",roman:"kai",hebrew:"ביצה",english:"egg",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0163",level:3,thai:"ไข่ดาว",roman:"kai-dao",hebrew:"ביצת עין",english:"fried egg",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0164",level:3,thai:"ไข่เจียว",roman:"kai-jeaw",hebrew:"חביתה",english:"omelette",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0165",level:4,thai:"ผลไม้",roman:"pon-la-mai",hebrew:"פירות",english:"fruit",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0166",level:1,thai:"ส้ม",roman:"som",hebrew:"תפוז",english:"orange",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0167",level:3,thai:"มะม่วง",roman:"ma-muang",hebrew:"מנגו",english:"mango",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0168",level:3,thai:"มะพร้าว",roman:"ma-prao",hebrew:"קוקוס",english:"coconut",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0169",level:1,thai:"กล้วย",roman:"gluay",hebrew:"בננה",english:"banana",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0170",level:4,thai:"สับปะรด",roman:"sup-pa-rot",hebrew:"אננס",english:"pineapple",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0171",level:3,thai:"น้ำแข็ง",roman:"nam-kaeng",hebrew:"קרח",english:"ice",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0172",level:3,thai:"น้ำส้ม",roman:"nam-som",hebrew:"מיץ תפוזים",english:"orange juice",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0173",level:3,thai:"กาแฟ",roman:"ga-fe",hebrew:"קפה",english:"coffee",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0174",level:1,thai:"นม",roman:"nom",hebrew:"חלב",english:"milk",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0175",level:1,thai:"เบียร์",roman:"beer",hebrew:"בירה",english:"beer",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0176",level:1,thai:"เหล้า",roman:"lao",hebrew:"אלכוהול / וויסקי",english:"alcohol / whiskey",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0177",level:1,thai:"กับ",roman:"gap",hebrew:"עם",english:"with",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0178",level:1,thai:"เอา",roman:"ao",hebrew:"רוצה / לקחת",english:"want / take",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0179",level:3,thai:"ไม่เอา",roman:"mai ao",hebrew:"לא רוצה",english:"do not want",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0180",level:4,thai:"เอาอันนี้",roman:"ao-an-nii",hebrew:"רוצה את זה",english:"want this one",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0181",level:1,thai:"เรือ",roman:"reua",hebrew:"סירה",english:"boat",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0182",level:3,thai:"เรือบิน",roman:"reua-bin",hebrew:"מטוס",english:"airplane",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0183",level:3,thai:"รถเมล์",roman:"rot-mae",hebrew:"אוטובוס",english:"bus",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0184",level:3,thai:"รถไฟ",roman:"rot-fai",hebrew:"רכבת",english:"train",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0185",level:4,thai:"มอเตอร์ไซค์",roman:"mo-dtu-sai",hebrew:"אופנוע",english:"motorbike",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0186",level:3,thai:"น่ารัก",roman:"naa-rak",hebrew:"חמוד",english:"cute",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0187",level:1,thai:"หล่อ",roman:"lor",hebrew:"חתיך",english:"handsome",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0188",level:1,thai:"เตี้ย",roman:"dtia",hebrew:"נמוך",english:"short",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0189",level:1,thai:"สูง",roman:"soong",hebrew:"גבוה",english:"tall",tone:'not_drilled',source:"תומר 6,csv.txt"},
  {id:"uv_0190",level:1,thai:"ผอม",roman:"pom",hebrew:"רזה",english:"thin",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0191",level:1,thai:"ใหญ่",roman:"yai",hebrew:"גדול",english:"big",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0192",level:1,thai:"เล็ก",roman:"lek",hebrew:"קטן",english:"small",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0193",level:1,thai:"เหงา",roman:"ngao",hebrew:"בודד",english:"lonely",tone:'not_drilled',source:"תומר 7,csv.txt; תומר 8,csv.txt"},
  {id:"uv_0194",level:3,thai:"เสียใจ",roman:"sia-jai",hebrew:"עצוב",english:"sad / sorry",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0195",level:3,thai:"ดีใจ",roman:"dii-jai",hebrew:"שמח",english:"happy",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0196",level:1,thai:"โกรธ",roman:"grote",hebrew:"כועס",english:"angry",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0197",level:3,thai:"ตกใจ",roman:"dtok-jai",hebrew:"מופתע / בהלם",english:"shocked / startled",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0198",level:1,thai:"งง",roman:"ngong",hebrew:"מבולבל",english:"confused",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0199",level:3,thai:"มั่นใจ",roman:"man-jai",hebrew:"בטוח בעצמי",english:"confident",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0200",level:4,thai:"น่าเข้าใจ",roman:"naa-kao-jai",hebrew:"מובן",english:"understandable",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0201",level:5,thai:"เข้าใจไหม",roman:"kao-jai mai?",hebrew:"מבין?",english:"Do you understand?",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0202",level:4,thai:"เข้าใจแล้ว",roman:"kao-jai leaw",hebrew:"הבנתי כבר",english:"understood already",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0203",level:1,thai:"เกลียด",roman:"gliad",hebrew:"שונא",english:"hate",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0204",level:4,thai:"ไม่เห็นด้วย",roman:"mai-hen-duai",hebrew:"לא מסכים",english:"disagree",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0205",level:3,thai:"จริง ๆ",roman:"jing-jing",hebrew:"באמת",english:"really",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0206",level:1,thai:"ลอง",roman:"long",hebrew:"לנסות",english:"try",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0207",level:1,thai:"ฟัง",roman:"fang",hebrew:"להקשיב",english:"listen",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0208",level:1,thai:"ดม",roman:"dom",hebrew:"להריח",english:"smell",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0209",level:1,thai:"ชิม",roman:"chim",hebrew:"לטעום",english:"taste",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0210",level:1,thai:"จำ",roman:"jum",hebrew:"לזכור",english:"remember",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0211",level:1,thai:"เที่ยว",roman:"teaw",hebrew:"לטייל / לבלות",english:"travel / hang out",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0212",level:1,thai:"รอ",roman:"raw",hebrew:"לחכות",english:"wait",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0213",level:1,thai:"ขาย",roman:"kaai",hebrew:"למכור",english:"sell",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0214",level:1,thai:"ถาม",roman:"tam",hebrew:"לשאול",english:"ask",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0215",level:1,thai:"ยิ้ม",roman:"yim",hebrew:"לחייך",english:"smile",tone:'not_drilled',source:"תומר 7,csv.txt"},
  {id:"uv_0216",level:3,thai:"ร้องไห้",roman:"rong¹-hai³",hebrew:"לבכות",english:"cry",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0217",level:3,thai:"อิจฉา",roman:"it²-chaa¹",hebrew:"לקנא",english:"envy / jealous",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0218",level:3,thai:"โมโห",roman:"mo¹-ho¹",hebrew:"עצבני",english:"angry / annoyed",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0219",level:3,thai:"รำคาญ",roman:"ram¹-kaan¹",hebrew:"מעצבן",english:"annoyed / annoying",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0220",level:1,thai:"หวัง",roman:"wang¹",hebrew:"לקוות",english:"hope",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0221",level:4,thai:"น่าสงสาร",roman:"naa³-song⁵-saan¹",hebrew:"מסכן",english:"pitiful / poor thing",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0222",level:3,thai:"ภูมิใจ",roman:"pum¹-jai¹",hebrew:"גאה",english:"proud",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0223",level:3,thai:"เสียดาย",roman:"sia⁵-daai¹",hebrew:"חבל / בזבוז",english:"what a pity / waste",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0224",level:1,thai:"ง่วง",roman:"nguang³",hebrew:"ישנוני",english:"sleepy",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0225",level:1,thai:"รวม",roman:"ruam¹",hebrew:"ביחד",english:"together / include",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0226",level:3,thai:"ชื่อจริง",roman:"cheuu³-jing¹",hebrew:"שם אמיתי",english:"real name",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0227",level:3,thai:"ชื่อเล่น",roman:"cheuu³-len³",hebrew:"כינוי",english:"nickname",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0228",level:4,thai:"นามสกุล",roman:"naam¹-sa¹-kun¹",hebrew:"שם משפחה",english:"surname",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0229",level:3,thai:"สมอง",roman:"sa¹-mawng¹",hebrew:"מוח",english:"brain",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0230",level:4,thai:"สมองไม่ทำงาน",roman:"sa¹-mawng¹ mai³ tam¹-ngaan¹",hebrew:"המוח לא עובד",english:"brain not working",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0231",level:1,thai:"บน",roman:"bon¹",hebrew:"על (מעל)",english:"on / above",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0232",level:3,thai:"ต่อไป",roman:"dtor²-bpai¹",hebrew:"הבא",english:"next",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0233",level:1,thai:"เห็น",roman:"hen¹",hebrew:"רואה",english:"see",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0234",level:3,thai:"หน้าต่าง",roman:"naa³-dtang²",hebrew:"חלון",english:"window",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0235",level:1,thai:"ห้อง",roman:"hawng³",hebrew:"חדר",english:"room",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0236",level:3,thai:"พ่อแม่",roman:"poh³-mae³",hebrew:"הורים",english:"parents",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0237",level:3,thai:"กับข้าว",roman:"kap²-kaao³",hebrew:"אוכל (שאוכלים עם אורז)",english:"food eaten with rice",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0238",level:3,thai:"นักเรียน",roman:"nag²-rian¹",hebrew:"סטודנט / תלמיד",english:"student",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0239",level:4,thai:"ร้านอาหาร",roman:"raan³-aa¹-haan⁵",hebrew:"מסעדה",english:"restaurant",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0240",level:3,thai:"เจ้าของ",roman:"jao³-kawng¹",hebrew:"הבעלים",english:"owner",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0241",level:3,thai:"ผู้หญิง",roman:"puu³-ying⁵",hebrew:"אישה / נקבה",english:"woman / female",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0242",level:3,thai:"ผู้ชาย",roman:"puu³-chaai¹",hebrew:"גבר / זכר",english:"man / male",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0243",level:4,thai:"ในหลวง",roman:"nai¹-lu-ang¹",hebrew:"המלך",english:"king",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0244",level:4,thai:"พระเจ้าอยู่หัว",roman:"pra¹-jao³-yuu²-hua¹",hebrew:"המלך (תואר רשמי)",english:"king (formal title)",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0245",level:3,thai:"ชาวเผ่า",roman:"chaao¹-pao¹",hebrew:"אנשי שבט",english:"tribal people",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0246",level:1,thai:"ดอย",roman:"doi¹",hebrew:"הר",english:"mountain",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0247",level:3,thai:"ภูเขา",roman:"puu¹-kao¹",hebrew:"הר",english:"mountain",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0248",level:3,thai:"ตลาดนัด",roman:"dtalard²-nat¹",hebrew:"שוק",english:"market",tone:'not_drilled',source:"תומר 8,csv.txt"},
  {id:"uv_0249",level:2,thai:"อีก",roman:"iig(2)",hebrew:"שוב (Again)",english:"again / more",tone:'not_drilled',source:"אלמוג 1,CSV.txt"},
  {id:"uv_0250",level:3,thai:"พักผ่อน",roman:"pag-pawn(2-2)",hebrew:"לנוח",english:"rest",tone:'not_drilled',source:"אלמוג 1,CSV.txt"},
  {id:"uv_0251",level:3,thai:"ไปเที่ยว",roman:"bpai-tiao(1-3)",hebrew:"לטייל / להסתובב בכיף",english:"go out / travel for fun",tone:'not_drilled',source:"אלמוג 1,CSV.txt"},
  {id:"uv_0252",level:2,thai:"หมด",roman:"mod(2)",hebrew:"הכל נגמר / אזל",english:"finished / used up",tone:'not_drilled',source:"אלמוג 1,CSV.txt"},
  {id:"uv_0253",level:2,thai:"ตื่น",roman:"theung(2)",hebrew:"להתעורר",english:"wake up",tone:'not_drilled',source:"אלמוג 1,CSV.txt"},
  {id:"uv_0254",level:2,thai:"หลง",roman:"long(1)",hebrew:"ללכת לאיבוד",english:"lost",tone:'not_drilled',source:"אלמוג 1,CSV.txt"},
  {id:"uv_0255",level:4,thai:"ความอดทน",roman:"kwaam-od-ton(1-2-1)",hebrew:"סבלנות",english:"patience",tone:'not_drilled',source:"אלמוג 1,CSV.txt"},
  {id:"uv_0256",level:2,thai:"หอย",roman:"hoi(5)",hebrew:"צדפה",english:"shellfish",tone:'not_drilled',source:"אלמוג 1,CSV.txt"},
  {id:"uv_0257",level:4,thai:"อาหารทะเล",roman:"aa-haan-ta-lay(1(1)-5-1-1)",hebrew:"פירות ים",english:"seafood",tone:'not_drilled',source:"אלמוג 1,CSV.txt"},
  {id:"uv_0258",level:3,thai:"อย่างไร",roman:"yaang-ngai(2-1)",hebrew:"איך",english:"how",tone:'not_drilled',source:"אלמוג 1,CSV.txt"},
  {id:"uv_0259",level:2,thai:"ใคร",roman:"khrai(1)",hebrew:"מי (או מי זה)",english:"who",tone:'not_drilled',source:"אלמוג 1,CSV.txt"},
  {id:"uv_0260",level:3,thai:"วันเกิด",roman:"wan-geut(1-2)",hebrew:"יום הולדת",english:"birthday",tone:'not_drilled',source:"אלמוג 1,CSV.txt"},
  {id:"uv_0261",level:4,thai:"สมาชิก",roman:"sa-ma-chik(2-1-3)",hebrew:"חבר (במועדון / קבוצה)",english:"member",tone:'not_drilled',source:"אלמוג 1,CSV.txt"},
  {id:"uv_0262",level:3,thai:"น้ำมัน",roman:"nam-man(1-1)",hebrew:"שמן / דלק",english:"oil / fuel",tone:'not_drilled',source:"אלמוג 1,CSV.txt"},
  {id:"uv_0263",level:4,thai:"ปั๊มน้ำมัน",roman:"bpum-nam-man(3-1-1)",hebrew:"תחנת דלק",english:"gas station",tone:'not_drilled',source:"אלמוג 1,CSV.txt"},
  {id:"uv_0264",level:2,thai:"กัน",roman:"gan(1)",hebrew:"אחד את השני / ביחד",english:"each other / together",tone:'not_drilled',source:"אלמוג 1,CSV.txt"},
  {id:"uv_0265",level:1,thai:"บาง",roman:"baang",hebrew:"חלק מ..",english:"some / part of",tone:'not_drilled',source:"אלמוג 4(1).apkg"},
  {id:"uv_0266",level:3,thai:"ด้วยกัน",roman:"doi gan",hebrew:"יחדיו",english:"together",tone:'not_drilled',source:"אלמוג 4(1).apkg"},
  {id:"uv_0267",level:1,thai:"พวกเขา",roman:"guwa",hebrew:"they הם",english:"they (review)",tone:'not_drilled',source:"אלמוג 4(1).apkg"},
  {id:"uv_0268",level:3,thai:"บางวัน",roman:"baang wan",hebrew:"חלק מהימים",english:"some days",tone:'not_drilled',source:"אלמוג 4(1).apkg"},
  {id:"uv_0269",level:3,thai:"ทุกที่",roman:"tug tii",hebrew:"בכל מקום",english:"everywhere",tone:'not_drilled',source:"אלמוג 4(1).apkg"},
  {id:"uv_0270",level:1,thai:"อุ่น",roman:"oon",hebrew:"חמים,חם",english:"warm",tone:'not_drilled',source:"אלמוג 4(1).apkg"},
  {id:"uv_0271",level:1,thai:"เข้า",roman:"kao3",hebrew:"כניסה היכנס",english:"enter / in",tone:'not_drilled',source:"אלמוג 4(1).apkg"},
  {id:"uv_0272",level:3,thai:"โรงพัก",roman:"rong pag",hebrew:"תחתנת משטרה",english:"police station",tone:'not_drilled',source:"אלמוג 4(1).apkg"},
  {id:"uv_0273",level:3,thai:"ไม่ได้…",roman:"mai dai+v",hebrew:"לא עשיתי",english:"did not / cannot + verb",tone:'not_drilled',source:"אלמוג 4(1).apkg"},
  {id:"uv_0274",level:1,thai:"ผึ้ง",roman:"peuang",hebrew:"דבורה,רק",english:"bee",tone:'not_drilled',source:"אלמוג 4(1).apkg"},
];


const VOWELS = [
  {kind:'vowel',id:'v_ak', symbol:'ะ', name:'สระอะ', localHe:'תנועת a קצרה', localEn:'short a vowel', sound:'a short', he:'a קצר', boardWord:'กระทะ', boardMeaningHe:'מחבת', boardMeaningEn:'pan', emoji:'🍳', writingHe:'נכתב אחרי העיצור או בסוף הברה פתוחה כדי לסמן תנועה קצרה.', writingEn:'Written after the consonant or at the end of an open syllable to mark a short vowel.', noteHe:'תנועה קצרה. דוגמה: กะ = ga קצר.', noteEn:'Short vowel. Example: กะ = short ga.'},
  {kind:'vowel',id:'v_aa', symbol:'า', name:'สระอา', localHe:'תנועת aa ארוכה', localEn:'long aa vowel', sound:'aa long', he:'aa ארוך', boardWord:'ตา', boardMeaningHe:'עין', boardMeaningEn:'eye', emoji:'👁️', writingHe:'נכתב אחרי העיצור ומאריך את הצליל a ל־aa.', writingEn:'Written after the consonant and lengthens a to aa.', noteHe:'לא להתבלבל עם ะ הקצר.', noteEn:'Do not confuse it with short ะ.'},
  {kind:'vowel',id:'v_i', symbol:'ิ', name:'สระอิ', localHe:'תנועת i קצרה', localEn:'short i vowel', sound:'i short', he:'i קצר', boardWord:'คิด', boardMeaningHe:'לחשוב', boardMeaningEn:'to think', emoji:'💭', writingHe:'יושב מעל העיצור.', writingEn:'Written above the consonant.', noteHe:'קצר: กิ = gi.', noteEn:'Short: กิ = gi.'},
  {kind:'vowel',id:'v_ii', symbol:'ี', name:'สระอี', localHe:'תנועת ii ארוכה', localEn:'long ii vowel', sound:'ii long', he:'ii ארוך', boardWord:'สี', boardMeaningHe:'צבע', boardMeaningEn:'color', emoji:'🎨', writingHe:'יושב מעל העיצור, דומה ל־ิ אבל עם קו ארוך יותר.', writingEn:'Written above the consonant; like ิ but longer.', noteHe:'ארוך: กี = gii.', noteEn:'Long: กี = gii.'},
  {kind:'vowel',id:'v_eu', symbol:'ึ', name:'สระอึ', localHe:'תנועת eu קצרה', localEn:'short eu vowel', sound:'eu short', he:'eu קצר', boardWord:'ตึก', boardMeaningHe:'בניין', boardMeaningEn:'building', emoji:'🏢', writingHe:'יושב מעל העיצור: חצי עיגול + קו אחד.', writingEn:'Written above the consonant: small curve + one stroke.', noteHe:'קצר: กึ = geu.', noteEn:'Short: กึ = geu.'},
  {kind:'vowel',id:'v_euu', symbol:'ื', name:'สระอือ', localHe:'תנועת euu ארוכה', localEn:'long euu vowel', sound:'euu long', he:'euu ארוך', boardWord:'มือ', boardMeaningHe:'יד', boardMeaningEn:'hand', emoji:'✋', writingHe:'יושב מעל העיצור: חצי עיגול + שני קווים. בהברה פתוחה לרוב מוסיפים อ: มือ.', writingEn:'Written above the consonant: curve + two strokes. In open syllables often followed by อ: มือ.', noteHe:'ארוך: กือ = geuu.', noteEn:'Long: กือ = geuu.'},
  {kind:'vowel',id:'v_u', symbol:'ุ', name:'สระอุ', localHe:'תנועת u קצרה', localEn:'short u vowel', sound:'u short', he:'u קצר', boardWord:'ถุง', boardMeaningHe:'שקית', boardMeaningEn:'bag', emoji:'🛍️', writingHe:'יושב מתחת לעיצור.', writingEn:'Written below the consonant.', noteHe:'קצר: กุ = gu.', noteEn:'Short: กุ = gu.'},
  {kind:'vowel',id:'v_uu', symbol:'ู', name:'สระอู', localHe:'תנועת uu ארוכה', localEn:'long uu vowel', sound:'uu long', he:'uu ארוך', boardWord:'งู', boardMeaningHe:'נחש', boardMeaningEn:'snake', emoji:'🐍', writingHe:'יושב מתחת לעיצור, דומה ל־ุ אבל ארוך.', writingEn:'Written below the consonant; like ุ but long.', noteHe:'ארוך: กู = guu.', noteEn:'Long: กู = guu.'},
  {kind:'vowel',id:'v_e_short', symbol:'เ-ะ', name:'สระเอะ', localHe:'תנועת e קצרה', localEn:'short e vowel', sound:'e short', he:'e קצר', boardWord:'เตะ', boardMeaningHe:'לבעוט', boardMeaningEn:'to kick', emoji:'⚽', writingHe:'เ נכתב לפני העיצור ו־ะ אחרי. עם עיצור סופי משתמשים בדרך כלל ב־็ במקום ะ.', writingEn:'เ is written before the consonant and ะ after it. With a final consonant, ็ often replaces ะ.', noteHe:'קיצור כתיב: เ-ะ + סוף → เ-็- כמו เด็ก.', noteEn:'Short spelling: เ-ะ + final → เ-็- as in เด็ก.'},
  {kind:'vowel',id:'v_e_long', symbol:'เ-', name:'สระเอ', localHe:'תנועת e ארוכה', localEn:'long e vowel', sound:'ee / e long', he:'e ארוך', boardWord:'เท', boardMeaningHe:'לשפוך', boardMeaningEn:'to pour', emoji:'🥛', writingHe:'נכתב לפני העיצור.', writingEn:'Written before the consonant.', noteHe:'ארוך: เก = gee/ge.', noteEn:'Long: เก = gee/ge.'},
  {kind:'vowel',id:'v_ae_short', symbol:'แ-ะ', name:'สระแอะ', localHe:'תנועת ae קצרה', localEn:'short ae vowel', sound:'ae short', he:'ae קצר', boardWord:'แกะ', boardMeaningHe:'כבשה / לקלף', boardMeaningEn:'sheep / to peel', emoji:'🐑', writingHe:'แ נכתב לפני העיצור ו־ะ אחרי. עם עיצור סופי משתמשים בדרך כלל ב־็.', writingEn:'แ is written before the consonant and ะ after it. With a final consonant, ็ is often used.', noteHe:'קיצור כתיב: แ-ะ + סוף → แ-็- כמו แข็ง.', noteEn:'Short spelling: แ-ะ + final → แ-็- as in แข็ง.'},
  {kind:'vowel',id:'v_ae', symbol:'แ-', name:'สระแอ', localHe:'תנועת ae ארוכה/רגילה', localEn:'long/regular ae vowel', sound:'ae', he:'ae', boardWord:'แขน', boardMeaningHe:'זרוע', boardMeaningEn:'arm', emoji:'💪', writingHe:'נכתב לפני העיצור.', writingEn:'Written before the consonant.', noteHe:'แก = gae.', noteEn:'แก = gae.'},
  {kind:'vowel',id:'v_o_short', symbol:'โ-ะ', name:'สระโอะ', localHe:'תנועת o קצרה', localEn:'short o vowel', sound:'o short', he:'o קצר', boardWord:'โต๊ะ', boardMeaningHe:'שולחן', boardMeaningEn:'table', emoji:'🪑', writingHe:'โ נכתב לפני העיצור ו־ะ אחרי. עם עיצור סופי התנועה הקצרה בדרך כלל לא נכתבת.', writingEn:'โ is written before the consonant and ะ after it. With a final consonant, the short o is often unwritten.', noteHe:'קיצור כתיב: โ-ะ + סוף → אין סימן תנועה, כמו คน = khon.', noteEn:'Short spelling: โ-ะ + final → no vowel sign, as in คน = khon.'},
  {kind:'vowel',id:'v_o', symbol:'โ-', name:'สระโอ', localHe:'תנועת o ארוכה', localEn:'long o vowel', sound:'o / oo', he:'o / oo', boardWord:'โคม', boardMeaningHe:'מנורה', boardMeaningEn:'lamp', emoji:'💡', writingHe:'נכתב לפני העיצור.', writingEn:'Written before the consonant.', noteHe:'โก = go / goo.', noteEn:'โก = go / goo.'},
  {kind:'vowel',id:'v_aw_short', symbol:'เ-าะ', name:'สระเอาะ', localHe:'תנועת aw/ɔ קצרה', localEn:'short open-o / aw vowel', sound:'aw / ɔ short', he:'aw / ɔ קצר', boardWord:'เงาะ', boardMeaningHe:'רמבוטן', boardMeaningEn:'rambutan', emoji:'🍈', writingHe:'נכתב סביב העיצור: เ לפני, าะ אחרי. זה O פתוח קצר, לא โ.', writingEn:'Written around the consonant: เ before, าะ after. This is short open-o, not โ.', noteHe:'כמו אוֹ פתוח וקצר. דוגמה בלוח: เงาะ.', noteEn:'A short open “aw/ɔ” sound. Board example: เงาะ.'},
  {kind:'vowel',id:'v_aw_long', symbol:'อ', name:'สระออ', localHe:'תנועת aw/ɔɔ ארוכה', localEn:'long open-o / aw vowel', sound:'aw / ɔɔ long', he:'aw / ɔɔ ארוך', boardWord:'หมอ', boardMeaningHe:'רופא', boardMeaningEn:'doctor', emoji:'🧑‍⚕️', writingHe:'อ כאן מייצג תנועת O פתוחה ארוכה, כמו ב־หมอ. זה לא אותו דבר כמו โ. האות อ יכולה להיות גם עיצור נשא בתחילת מילה.', writingEn:'Here อ marks a long open-o sound, as in หมอ. It is not the same as โ. อ can also be a silent carrier consonant at the start of a word.', noteHe:'דוגמאות: หมอ = רופא, นอน = לישון. זה ה־aw/ɔɔ הארוך.', noteEn:'Examples: หมอ = doctor, นอน = sleep. This is the long aw/ɔɔ sound.'},
  {kind:'vowel',id:'v_er_short', symbol:'เ-อะ', name:'สระเออะ', localHe:'תנועת er קצרה', localEn:'short er vowel', sound:'er short', he:'er קצר', boardWord:'เลอะ', boardMeaningHe:'מלוכלך', boardMeaningEn:'dirty / messy', emoji:'🟤', writingHe:'เ לפני העיצור ו־อะ אחרי.', writingEn:'เ before the consonant and อะ after it.', noteHe:'תנועה קצרה.', noteEn:'Short vowel.'},
  {kind:'vowel',id:'v_er_long', symbol:'เ-อ', name:'สระเออ', localHe:'תנועת er ארוכה', localEn:'long er vowel', sound:'er long', he:'er ארוך', boardWord:'เธอ', boardMeaningHe:'את/היא', boardMeaningEn:'you / she', emoji:'👧', writingHe:'เ לפני העיצור ו־อ אחרי.', writingEn:'เ before the consonant and อ after it.', noteHe:'תנועה ארוכה.', noteEn:'Long vowel.'},
  {kind:'vowel',id:'v_ia_short', symbol:'เ-ียะ', name:'สระเอียะ', localHe:'תנועת ia קצרה', localEn:'short ia compound vowel', sound:'ia short', he:'ia קצר', boardWord:'ขนมเปี๊ยะ', boardMeaningHe:'מאפה / עוגייה', boardMeaningEn:'pastry', emoji:'🥮', writingHe:'תנועה מורכבת סביב העיצור.', writingEn:'Compound vowel written around the consonant.', noteHe:'קצרה ונדירה יחסית.', noteEn:'Short and relatively rare.'},
  {kind:'vowel',id:'v_ia_long', symbol:'เ-ีย', name:'สระเอีย', localHe:'תנועת ia ארוכה', localEn:'long ia compound vowel', sound:'ia long', he:'ia ארוך', boardWord:'เปีย', boardMeaningHe:'צמה', boardMeaningEn:'braid', emoji:'👧', writingHe:'เ לפני העיצור, ี מעל, ย אחרי.', writingEn:'เ before the consonant, ี above, ย after.', noteHe:'เปีย = צמה.', noteEn:'เปีย = braid.'},
  {kind:'vowel',id:'v_uea_short', symbol:'เ-ือะ', name:'สระเอือะ', localHe:'תנועת uea קצרה', localEn:'short uea compound vowel', sound:'uea short', he:'uea קצר', boardWord:'-', boardMeaningHe:'נדיר בלוח', boardMeaningEn:'rare on the board', emoji:'🔤', writingHe:'תנועה מורכבת קצרה סביב העיצור.', writingEn:'Short compound vowel written around the consonant.', noteHe:'נדירה יחסית.', noteEn:'Relatively rare.'},
  {kind:'vowel',id:'v_uea_long', symbol:'เ-ือ', name:'สระเอือ', localHe:'תנועת uea ארוכה', localEn:'long uea compound vowel', sound:'uea long', he:'uea ארוך', boardWord:'เสือ', boardMeaningHe:'נמר', boardMeaningEn:'tiger', emoji:'🐯', writingHe:'เ לפני העיצור, ื מעל, อ אחרי.', writingEn:'เ before the consonant, ื above, อ after.', noteHe:'เสือ = נמר.', noteEn:'เสือ = tiger.'},
  {kind:'vowel',id:'v_ua_short', symbol:'-ัวะ', name:'สระอัวะ', localHe:'תנועת ua קצרה', localEn:'short ua compound vowel', sound:'ua short', he:'ua קצר', boardWord:'ยัวะ', boardMeaningHe:'כועס/מעוצבן', boardMeaningEn:'angry / irritated', emoji:'😠', writingHe:'ั מעל העיצור, ו־วะ אחרי.', writingEn:'ั above the consonant, then วะ after it.', noteHe:'ua קצר.', noteEn:'Short ua.'},
  {kind:'vowel',id:'v_ua_long', symbol:'-ัว', name:'สระอัว', localHe:'תנועת ua ארוכה', localEn:'long ua compound vowel', sound:'ua long', he:'ua ארוך', boardWord:'บัว', boardMeaningHe:'לוטוס', boardMeaningEn:'lotus', emoji:'🪷', writingHe:'ั מעל העיצור ו־ว אחרי. במילים סגורות ה־ั עשוי להשתנות/להיעלם לפי הכתיב.', writingEn:'ั above the consonant and ว after it. In closed syllables spelling can change.', noteHe:'בัว = לוטוס; א้วน משתמש במבנה ua עם ว.', noteEn:'บัว = lotus; อ้วน uses the ua/w structure.'},
  {kind:'vowel',id:'v_am', symbol:'ำ', name:'สระอำ', localHe:'תנועת am', localEn:'am vowel', sound:'am', he:'am', boardWord:'ขำ', boardMeaningHe:'לצחוק / מצחיק', boardMeaningEn:'to laugh / funny', emoji:'😆', writingHe:'סימן אחד שמכיל a + m.', writingEn:'One sign that contains a + m.', noteHe:'ขำ = לצחוק/מצחיק.', noteEn:'ขำ = laugh/funny.'},
  {kind:'vowel',id:'v_ai_mai_muan', symbol:'ใ-', name:'สระใอ', localHe:'תנועת ai מסוג ใ', localEn:'ai vowel with ใ', sound:'ai', he:'ai', boardWord:'ใบ', boardMeaningHe:'עלה / דף', boardMeaningEn:'leaf / sheet', emoji:'🍃', writingHe:'נכתב לפני העיצור. זה אחד משני סימני ai.', writingEn:'Written before the consonant. One of two ai signs.', noteHe:'יש מעט מילים עם ใ — צריך לזכור אותן.', noteEn:'There are limited words with ใ — memorize them.'},
  {kind:'vowel',id:'v_ai_mai_malai', symbol:'ไ-', name:'สระไอ', localHe:'תנועת ai מסוג ไ', localEn:'ai vowel with ไ', sound:'ai', he:'ai', boardWord:'ไก่', boardMeaningHe:'תרנגולת', boardMeaningEn:'chicken', emoji:'🐔', writingHe:'נכתב לפני העיצור. זה סימן ai נפוץ מאוד.', writingEn:'Written before the consonant. A very common ai sign.', noteHe:'ไป = ללכת.', noteEn:'ไป = to go.'},
  {kind:'vowel',id:'v_ao', symbol:'เ-า', name:'สระเอา', localHe:'תנועת ao', localEn:'ao compound vowel', sound:'ao', he:'ao', boardWord:'เขา', boardMeaningHe:'הר / הוא', boardMeaningEn:'mountain / he', emoji:'⛰️', writingHe:'เ לפני העיצור ו־า אחריו.', writingEn:'เ before the consonant and า after it.', noteHe:'เขา = הר/הוא לפי הקשר.', noteEn:'เขา = mountain/he depending on context.'},
  {kind:'special',id:'v_rue', symbol:'ฤ', name:'ฤ', localHe:'סימן מיוחד rue/ri/roe', localEn:'special rue/ri/roe sign', sound:'rue / ri / roe', he:'rue / ri / roe', boardWord:'ฤดู', boardMeaningHe:'עונה', boardMeaningEn:'season', emoji:'🌧️', writingHe:'סימן מיוחד, לא תנועה רגילה שמתחברת לעיצור.', writingEn:'Special sign, not a regular vowel attached to a consonant.', noteHe:'ฤดู = עונה.', noteEn:'ฤดู = season.'},
  {kind:'special',id:'v_rue_long', symbol:'ฤา', name:'ฤา', localHe:'סימן מיוחד rue ארוך', localEn:'special long rue sign', sound:'rue long', he:'rue ארוך', boardWord:'ฤาษี', boardMeaningHe:'נזיר/חכם', boardMeaningEn:'hermit / sage', emoji:'🧙‍♂️', writingHe:'סימן מיוחד ונדיר יותר.', writingEn:'Special and rarer sign.', noteHe:'ฤาษี = נזיר/חכם.', noteEn:'ฤาษี = hermit/sage.'},
  {kind:'special',id:'v_lue', symbol:'ฦ', name:'ฦ', localHe:'סימן עתיק/נדיר lue', localEn:'archaic/rare lue sign', sound:'lue', he:'lue', boardWord:'-', boardMeaningHe:'כמעט לא בשימוש כיום', boardMeaningEn:'almost unused today', emoji:'❌', writingHe:'כמעט לא בשימוש בתאית מודרנית.', writingEn:'Almost unused in modern Thai.', noteHe:'להכיר, לא לתרגל יותר מדי כרגע.', noteEn:'Recognize it, do not over-drill it for now.'},
  {kind:'special',id:'v_lue_long', symbol:'ฦา', name:'ฦา', localHe:'סימן עתיק/נדיר lue ארוך', localEn:'archaic/rare long lue sign', sound:'lue long', he:'lue ארוך', boardWord:'-', boardMeaningHe:'כמעט לא בשימוש כיום', boardMeaningEn:'almost unused today', emoji:'❌', writingHe:'כמעט לא בשימוש בתאית מודרנית.', writingEn:'Almost unused in modern Thai.', noteHe:'להכיר בלבד.', noteEn:'Recognition only.'},
  {kind:'special',id:'v_mai_taikhu', symbol:'็', name:'ไม้ไต่คู้', localHe:'סימן קיצור תנועה', localEn:'vowel-shortening mark', sound:'shortener', he:'מקצר תנועה', boardWord:'เด็ก / เป็น / แข็ง', boardMeaningHe:'ילד / להיות / קשה', boardMeaningEn:'child / to be / hard', emoji:'✂️', writingHe:'לא טון. יושב מעל העיצור ומקצר תנועה כשיש עיצור סופי: เ-ะ → เ-็-, แ-ะ → แ-็-.', writingEn:'Not a tone mark. Written above the consonant to shorten a vowel with a final consonant: เ-ะ → เ-็-, แ-ะ → แ-็-.', noteHe:'דוגמאות: เด็ก, เป็น, แข็ง.', noteEn:'Examples: เด็ก, เป็น, แข็ง.'}
];


const CONSONANTS = [
  {kind:'consonant',id:'c_gor_gai',symbol:'ก',name:'กอ ไก่',localHe:'עיצור g/k — go gai',localEn:'g/k consonant — go gai',sound:'g / k',he:'g / k',boardWord:'ไก่',boardMeaningHe:'תרנגולת',boardMeaningEn:'chicken',emoji:'🐔',writingHe:'Middle class. משמש כ־g/k בתחילת הברה וכ־k בסוף.',writingEn:'Middle class. g/k at the start; k at the end.',noteHe:'מהעיצורים הבסיסיים ביותר.',noteEn:'One of the core consonants.'},
  {kind:'consonant',id:'c_jor_jaan',symbol:'จ',name:'จอ จาน',localHe:'עיצור j — jo jaan',localEn:'j consonant — jo jaan',sound:'j',he:'j',boardWord:'จาน',boardMeaningHe:'צלחת',boardMeaningEn:'plate',emoji:'🍽️',writingHe:'Middle class. בתחילת הברה j; בסוף נשמע t.',writingEn:'Middle class. j at the start; t at the end.',noteHe:'จาน = צלחת.',noteEn:'จาน = plate.'},
  {kind:'consonant',id:'c_dor_dek',symbol:'ด',name:'ดอ เด็ก',localHe:'עיצור d — do dek',localEn:'d consonant — do dek',sound:'d',he:'d',boardWord:'เด็ก',boardMeaningHe:'ילד',boardMeaningEn:'child',emoji:'🧒',writingHe:'Middle class. d בתחילה; t בסוף.',writingEn:'Middle class. d initially; t finally.',noteHe:'דוגמה: ดู = לראות.',noteEn:'Example: ดู = to look.'},
  {kind:'consonant',id:'c_tor_tao',symbol:'ต',name:'ตอ เต่า',localHe:'עיצור dt/t — dto dtao',localEn:'dt/t consonant — dto dtao',sound:'dt / t',he:'dt / t',boardWord:'เต่า',boardMeaningHe:'צב',boardMeaningEn:'turtle',emoji:'🐢',writingHe:'Middle class. צליל לא מנושף dt/t.',writingEn:'Middle class. Unaspirated dt/t sound.',noteHe:'ตาย = למות.',noteEn:'ตาย = to die.'},
  {kind:'consonant',id:'c_bor_baimai',symbol:'บ',name:'บอ ใบไม้',localHe:'עיצור b — bo baimai',localEn:'b consonant — bo baimai',sound:'b',he:'b',boardWord:'ใบไม้',boardMeaningHe:'עלה',boardMeaningEn:'leaf',emoji:'🍃',writingHe:'Middle class. b בתחילה; p בסוף.',writingEn:'Middle class. b initially; p finally.',noteHe:'บ้าน מתחיל ב־บ.',noteEn:'บ้าน starts with บ.'},
  {kind:'consonant',id:'c_bpor_bplaa',symbol:'ป',name:'ปอ ปลา',localHe:'עיצור bp/p — bpo bplaa',localEn:'bp/p consonant — bpo bplaa',sound:'bp / p',he:'bp / p',boardWord:'ปลา',boardMeaningHe:'דג',boardMeaningEn:'fish',emoji:'🐟',writingHe:'Middle class. p לא מנושף / bp.',writingEn:'Middle class. Unaspirated p / bp.',noteHe:'ไป = ללכת.',noteEn:'ไป = to go.'},
  {kind:'consonant',id:'c_o_ang',symbol:'อ',name:'ออ อ่าง',localHe:'עיצור נשא / o aang',localEn:'silent carrier / o aang',sound:'silent carrier / ɔɔ',he:'עיצור נשא / ɔɔ',boardWord:'อ่าง',boardMeaningHe:'אגן / כיור / גיגית',boardMeaningEn:'basin / tub',emoji:'🛁',writingHe:'יכול לשמש עיצור נשא בתחילת מילה, וגם חלק מתנועת ɔɔ ארוכה.',writingEn:'Can be a silent vowel carrier at the start, and can also mark long ɔɔ.',noteHe:'חשוב מאוד במילים שמתחילות בתנועה.',noteEn:'Very important for vowel-initial words.'},
  {kind:'consonant',id:'c_ngo_nguu',symbol:'ง',name:'งอ งู',localHe:'עיצור ng — ngo nguu',localEn:'ng consonant — ngo nguu',sound:'ng',he:'ng',boardWord:'งู',boardMeaningHe:'נחש',boardMeaningEn:'snake',emoji:'🐍',writingHe:'יכול להופיע בתחילת הברה או כסוף ng.',writingEn:'Can appear initially or as final ng.',noteHe:'งาน = עבודה.',noteEn:'งาน = work.'},
  {kind:'consonant',id:'c_yo_yak',symbol:'ย',name:'ยอ ยักษ์',localHe:'עיצור y — yo yaak',localEn:'y consonant — yo yak',sound:'y',he:'y',boardWord:'ยักษ์',boardMeaningHe:'ענק / מפלצת',boardMeaningEn:'giant / ogre',emoji:'👹',writingHe:'y בתחילה או סוף y.',writingEn:'y initially or final y.',noteHe:'ตาย מסתיים ב־ย.',noteEn:'ตาย ends with ย.'},
  {kind:'consonant',id:'c_wo_waen',symbol:'ว',name:'วอ แหวน',localHe:'עיצור w — wo waen',localEn:'w consonant — wo waen',sound:'w',he:'w',boardWord:'แหวน',boardMeaningHe:'טבעת',boardMeaningEn:'ring',emoji:'💍',writingHe:'w בתחילה או סוף w; משתתף גם בתנועות ua.',writingEn:'w initially or final w; also part of ua vowels.',noteHe:'อ้วน משתמש ב־ว.',noteEn:'อ้วน uses ว.'},
  {kind:'consonant',id:'c_mo_maa',symbol:'ม',name:'มอ ม้า',localHe:'עיצור m — mo maa',localEn:'m consonant — mo maa',sound:'m',he:'m',boardWord:'ม้า',boardMeaningHe:'סוס',boardMeaningEn:'horse',emoji:'🐴',writingHe:'m בתחילה או סוף m.',writingEn:'m initially or final m.',noteHe:'ตาม מסתיים ב־ม.',noteEn:'ตาม ends with ม.'},
  {kind:'consonant',id:'c_no_nuu',symbol:'น',name:'นอ หนู',localHe:'עיצור n — no nuu',localEn:'n consonant — no nuu',sound:'n',he:'n',boardWord:'หนู',boardMeaningHe:'עכבר / אני הקטן',boardMeaningEn:'mouse / little me',emoji:'🐭',writingHe:'n בתחילה או סוף n.',writingEn:'n initially or final n.',noteHe:'นอน = לישון.',noteEn:'นอน = to sleep.'}
];
const BOARD_ITEMS = VOWELS.concat(CONSONANTS);

const THAI_CONSONANT_INFO = {
  'ก': ['กอ ไก่','middle','g/k','k','dead'], 'จ': ['จอ จาน','middle','j','t','dead'], 'ฎ': ['ฎอ ชฎา','middle','d','t','dead'], 'ฏ': ['ฏอ ปฏัก','middle','dt/t','t','dead'], 'ด': ['ดอ เด็ก','middle','d','t','dead'], 'ต': ['ตอ เต่า','middle','dt/t','t','dead'], 'บ': ['บอ ใบไม้','middle','b','p','dead'], 'ป': ['ปอ ปลา','middle','bp/p','p','dead'], 'อ': ['ออ อ่าง','middle','vowel carrier / ɔɔ','—','carrier'],
  'ข': ['ขอ ไข่','high','kh','k','dead'], 'ฃ': ['ฃอ ขวด','high','kh','k','dead'], 'ฉ': ['ฉอ ฉิ่ง','high','ch','rare','rare'], 'ฐ': ['ฐอ ฐาน','high','th','t','dead'], 'ถ': ['ถอ ถุง','high','th','t','dead'], 'ผ': ['ผอ ผึ้ง','high','ph','rare','rare'], 'ฝ': ['ฝอ ฝา','high','f','rare','rare'], 'ศ': ['ศอ ศาลา','high','s','t','dead'], 'ษ': ['ษอ ฤๅษี','high','s','t','dead'], 'ส': ['สอ เสือ','high','s','t','dead'], 'ห': ['หอ หีบ','high','h','rare','rare'],
  'ค': ['คอ ควาย','low','kh','k','dead'], 'ฅ': ['ฅอ คน','low','kh','k','dead'], 'ฆ': ['ฆอ ระฆัง','low','kh','k','dead'], 'ช': ['ชอ ช้าง','low','ch','t','dead'], 'ซ': ['ซอ โซ่','low','s','t','dead'], 'ฌ': ['ฌอ เฌอ','low','ch','t','dead'], 'ฑ': ['ฑอ มณโฑ','low','th/d','t','dead'], 'ฒ': ['ฒอ ผู้เฒ่า','low','th','t','dead'], 'ท': ['ทอ ทหาร','low','th','t','dead'], 'ธ': ['ธอ ธง','low','th','t','dead'], 'พ': ['พอ พาน','low','ph','p','dead'], 'ฟ': ['ฟอ ฟัน','low','f','p','dead'], 'ภ': ['ภอ สำเภา','low','ph','p','dead'], 'ฮ': ['ฮอ นกฮูก','low','h','rare','rare'],
  'ง': ['งอ งู','low','ng','ng','live'], 'ญ': ['ญอ หญิง','low','y','n','live'], 'ณ': ['ณอ เณร','low','n','n','live'], 'น': ['นอ หนู','low','n','n','live'], 'ม': ['มอ ม้า','low','m','m','live'], 'ย': ['ยอ ยักษ์','low','y','y','live'], 'ร': ['รอ เรือ','low','r','n','live'], 'ล': ['ลอ ลิง','low','l','n','live'], 'ว': ['วอ แหวน','low','w','w','live'], 'ฬ': ['ฬอ จุฬา','low','l','n','live']
};

const THAI_SIGN_INFO = {
  'ะ': ['สระอะ','short a','vowel','after the consonant; marks a short open syllable'],
  'า': ['สระอา','long aa','vowel','written after the consonant'],
  'ิ': ['สระอิ','short i','vowel','written above the consonant'],
  'ี': ['สระอี','long ii','vowel','written above the consonant'],
  'ึ': ['สระอึ','short eu','vowel','written above the consonant'],
  'ื': ['สระอือ','long euu','vowel','written above the consonant; open syllables often add อ'],
  'ุ': ['สระอุ','short u','vowel','written below the consonant'],
  'ู': ['สระอู','long uu','vowel','written below the consonant'],
  'เ': ['สระเอ / part of เ-ะ','e / ee family','leading vowel','written before the consonant'],
  'แ': ['สระแอ / part of แ-ะ','ae family','leading vowel','written before the consonant'],
  'โ': ['สระโอ / part of โ-ะ','o / oo family','leading vowel','written before the consonant'],
  'ใ': ['สระใอ','ai','leading vowel','written before the consonant'],
  'ไ': ['สระไอ','ai','leading vowel','written before the consonant'],
  'ำ': ['สระอำ','am','vowel','written above/after the consonant as one vowel sign'],
  'ั': ['ไม้หันอากาศ','short a / part of ua','vowel mark','written above the consonant'],
  '็': ['ไม้ไต่คู้','vowel shortener','special mark','not a tone mark; shortens vowels such as เ-ะ / แ-ะ before a final consonant'],
  '่': ['ไม้เอก','tone mark 1','tone mark','tone result depends on consonant class and syllable type'],
  '้': ['ไม้โท','tone mark 2','tone mark','tone result depends on consonant class and syllable type'],
  '๊': ['ไม้ตรี','tone mark 3','tone mark','used mainly with middle-class consonants'],
  '๋': ['ไม้จัตวา','tone mark 4','tone mark','used mainly with middle-class consonants'],
  '์': ['การันต์','silent mark','special mark','marks a letter that is not pronounced'],
  'ๆ': ['ไม้ยมก','repetition mark','special mark','repeats the previous word or phrase']
};

function consonantClassLabel(cls){
  const he = {middle:'Middle Class / קבוצה אמצעית', high:'High Class / קבוצה גבוהה', low:'Low Class / קבוצה נמוכה'};
  const en = {middle:'Middle Class', high:'High Class', low:'Low Class'};
  return isHebrew() ? (he[cls] || cls) : (en[cls] || cls);
}
function finalKindLabel(kind){
  const he = {dead:'סוף מת: k/t/p — משפיע על חוקי הטון', live:'סוף חי: ng/n/m/y/w — משפיע על חוקי הטון', carrier:'עיצור נשא / תומך תנועה', rare:'כמעט לא מופיע כסוף בסיסי'};
  const en = {dead:'dead final: k/t/p — affects tone rules', live:'live final: ng/n/m/y/w — affects tone rules', carrier:'silent carrier / vowel support', rare:'rare as a basic final'};
  return isHebrew() ? (he[kind] || kind) : (en[kind] || kind);
}
function signKindLabel(kind){
  const he = {vowel:'תנועה', 'leading vowel':'תנועה שנכתבת לפני העיצור', 'vowel mark':'סימן תנועה', 'special mark':'סימן מיוחד', 'tone mark':'סימן טון'};
  const en = {vowel:'vowel', 'leading vowel':'leading vowel', 'vowel mark':'vowel mark', 'special mark':'special mark', 'tone mark':'tone mark'};
  return isHebrew() ? (he[kind] || kind) : (en[kind] || kind);
}
function thaiCharInfoHtml(ch){
  if(THAI_CONSONANT_INFO[ch]){
    const [name, cls, initial, final, kind] = THAI_CONSONANT_INFO[ch];
    if(isHebrew()){
      return `<div><b>${escapeHtml(ch)} — ${escapeHtml(name)}</b></div><div>קבוצה: ${escapeHtml(consonantClassLabel(cls))}</div><div>תחילה: <span dir="ltr">${escapeHtml(initial)}</span> · סוף: <span dir="ltr">${escapeHtml(final)}</span></div><div>${escapeHtml(finalKindLabel(kind))}</div>`;
    }
    return `<div><b>${escapeHtml(ch)} — ${escapeHtml(name)}</b></div><div>Class: ${escapeHtml(consonantClassLabel(cls))}</div><div>Initial: <span dir="ltr">${escapeHtml(initial)}</span> · Final: <span dir="ltr">${escapeHtml(final)}</span></div><div>${escapeHtml(finalKindLabel(kind))}</div>`;
  }
  if(THAI_SIGN_INFO[ch]){
    const [name, sound, kind, rule] = THAI_SIGN_INFO[ch];
    if(isHebrew()){
      return `<div><b>${escapeHtml(ch)} — ${escapeHtml(name)}</b></div><div>סוג: ${escapeHtml(signKindLabel(kind))}</div><div>צליל/תפקיד: <span dir="ltr">${escapeHtml(sound)}</span></div><div>${escapeHtml(rule)}</div>`;
    }
    return `<div><b>${escapeHtml(ch)} — ${escapeHtml(name)}</b></div><div>Type: ${escapeHtml(signKindLabel(kind))}</div><div>Sound/function: <span dir="ltr">${escapeHtml(sound)}</span></div><div>${escapeHtml(rule)}</div>`;
  }
  return `<div><b>${escapeHtml(ch)}</b></div><div>${escapeHtml(isHebrew() ? 'סימן תאילנדי — עדיין אין מידע מפורט עליו במאגר.' : 'Thai sign — no detailed entry in the current bank yet.')}</div>`;
}
function splitThaiAnswerTokens(text){
  const tokens = [];
  const combining = /[\u0E31\u0E34-\u0E3A\u0E47-\u0E4E]/;
  for(const ch of String(text)){
    if(combining.test(ch) && tokens.length && /[\u0E00-\u0E7F]/.test(tokens[tokens.length-1])) tokens[tokens.length-1] += ch;
    else tokens.push(ch);
  }
  return tokens;
}
function clickableThaiAnswerHtml(text){
  const tokenHtml = splitThaiAnswerTokens(text).map(tok => {
    if(/[\u0E00-\u0E7F]/.test(tok)){
      return `<button type="button" class="thai-char" data-token="${escapeHtml(tok)}" title="${escapeHtml(t('clickThaiLetters'))}">${escapeHtml(tok)}</button>`;
    }
    return escapeHtml(tok);
  }).join('');
  return `<div class="thai-answer clickable-thai">${tokenHtml}</div><div class="answer-microhint">${escapeHtml(t('clickThaiLetters'))}</div><div class="thai-letter-info" hidden></div>`;
}
function bindThaiAnswerInfo(){
  const box = el('answerBox');
  if(!box) return;
  const info = box.querySelector('.thai-letter-info');
  if(!info) return;
  box.querySelectorAll('.thai-char').forEach(btn => {
    btn.addEventListener('click', () => {
      box.querySelectorAll('.thai-char').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
      const token = btn.getAttribute('data-token') || '';
      const chars = [...new Set([...token].filter(ch => /[\u0E00-\u0E7F]/.test(ch)))];
      info.innerHTML = chars.map(thaiCharInfoHtml).join('<hr>');
      info.hidden = false;
    });
  });
}


// Level 6 writing bank: each focus item gets several writing prompts from the app vocabulary.
// This prevents Level 6 from only drilling the poster/board word.
const LEVEL6_WRITING_BANK = {
  v_aa: ['มา','ตา','ปลา','ปาก','บ้าน','ภาษาไทย','ราคาเท่าไหร่','ข้าว','ห้า','ม้า'],
  v_i: ['กิน','ปิด','ปกติ','วันนี้','ไม่ค่อย'],
  v_ii: ['มี','ดี','วันนี้','พรุ่งนี้','อีกที','สวัสดี'],
  v_eu: ['ตึก'],
  v_euu: ['มือ','ซื้อ','ดื่มน้ำ','เมื่อวาน'],
  v_u: ['คุณ','ขอบคุณ','พรุ่งนี้'],
  v_uu: ['ดู','พูดช้าๆ','พูดอีกที','รู้'],
  v_e_short: ['เด็ก'],
  v_e_long: ['เปิด','เท่าไหร่','เก่า'],
  v_ae_short: ['แข็ง'],
  v_ae: ['แม่','แมว','แขน'],
  v_o_short: ['คน','ลม','ปกติ'],
  v_o: ['โรง'],
  v_aw_short: ['เงาะ'],
  v_aw_long: ['นอน','บอก','ออก','ขอโทษ'],
  v_er_short: ['เลอะ'],
  v_er_long: ['เจอกัน','เสมอๆ'],
  v_ia_short: ['ขนมเปี๊ยะ'],
  v_ia_long: ['เปีย'],
  v_uea_long: ['เสือ','เมื่อวาน'],
  v_ua_long: ['อ้วน'],
  v_am: ['น้ำ'],
  v_sai: ['ใจ','ใบไม้','เข้าใจ'],
  v_ai: ['ไป','ไม่','ใหม่','ได้','ให้','ภาษาไทย','เท่าไหร่'],
  v_ao: ['เก่า','ข่าว','ข้าว','เข้าใจ'],
  v_mai_taikhu: ['เด็ก','ไม่เป็นไร'],

  c_gor_gai: ['กา','กิน','เก่า','เข้าใจ','เจอกัน'],
  c_jor_jaan: ['ใจ','จด','เจอกัน'],
  c_dor_dek: ['ดี','ดู','เด็ก','ดื่มน้ำ','ได้','สวัสดี'],
  c_tor_tao: ['ตา','ตาย','ปกติ','เท่าไหร่'],
  c_bor_baimai: ['บอก','บ้าน','บางครั้ง','บ่อยๆ','ใบไม้'],
  c_bpor_bplaa: ['ปลา','ไป','ปาก','ปิด','เปิด','ป่า','ปกติ'],
  c_o_ang: ['อ่าน','อาบ','ออก','อันนี้อะไร','อร่อยมาก'],
  c_ngo_nguu: ['งาน','เงิน','งู'],
  c_yo_yak: ['ตาย','ยัง','หยอก','ยาง'],
  c_wo_waen: ['วันนี้','เมื่อวาน','สวัสดี','วาง'],
  c_mo_maa: ['มา','มี','มือ','ไม่','ใหม่','ม้า','ไม่เป็นไร'],
  c_no_nuu: ['นอน','นก','น้ำ','วันนี้','พรุ่งนี้','นานๆ ที']
};

const LEVEL6_EXTRA_WORDS = [
  {thai:'ตึก', roman:'dtuek', hebrew:'בניין', english:'building'},
  {thai:'แข็ง', roman:'khaeng', hebrew:'קשה / חזק', english:'hard / strong'},
  {thai:'แม่', roman:'mae', hebrew:'אמא', english:'mother'},
  {thai:'แมว', roman:'maew', hebrew:'חתול', english:'cat'},
  {thai:'แขน', roman:'khaen', hebrew:'זרוע', english:'arm'},
  {thai:'เงาะ', roman:'ngaw', hebrew:'רמבוטן', english:'rambutan'},
  {thai:'เลอะ', roman:'ler', hebrew:'מלוכלך / מוכתם', english:'dirty / stained'},
  {thai:'ขนมเปี๊ยะ', roman:'khanom bpia', hebrew:'מאפה / עוגייה סינית', english:'Chinese pastry'},
  {thai:'เปีย', roman:'bpia', hebrew:'צמה', english:'braid'},
  {thai:'เสือ', roman:'suea', hebrew:'נמר', english:'tiger'},
  {thai:'อ้วน', roman:'uan', hebrew:'שמן / שמנמן', english:'fat / chubby'},
  {thai:'งาน', roman:'ngaan', hebrew:'עבודה', english:'work'},
  {thai:'เงิน', roman:'ngoen', hebrew:'כסף', english:'money'},
  {thai:'งู', roman:'nguu', hebrew:'נחש', english:'snake'},
  {thai:'ตาย', roman:'dtaai', hebrew:'למות', english:'to die'},
  {thai:'ยัง', roman:'yang', hebrew:'עדיין / טרם', english:'still / yet'},
  {thai:'ยาง', roman:'yaang', hebrew:'גומי / צמיג', english:'rubber / tire'},
  {thai:'วาง', roman:'waang', hebrew:'להניח / לשים', english:'to put down'},
  {thai:'ใบไม้', roman:'bai mai', hebrew:'עלה', english:'leaf'}
];
function level6FindWord(thai){
  return WORDS.find(w => w.thai === thai) || LEVEL6_EXTRA_WORDS.find(w => w.thai === thai) || null;
}
function level6WordMeaning(word){ return isHebrew() ? word.hebrew : word.english; }
function level6WordRoman(word){ return word.roman || ''; }


// Romanization helpers for Level 1.2 board/vowel/consonant answers.
// Goal: every Thai board word/name shown in the answer includes romanization + Hebrew/English meaning.
const BOARD_WORD_ROMAN = {
  'กระทะ':'gra-tha', 'ตา':'dtaa', 'คิด':'khit', 'สี':'sii', 'ตึก':'dtuek', 'มือ':'mue', 'ถุง':'thung', 'งู':'nguu',
  'เตะ':'dte', 'เท':'thee', 'แกะ':'gae', 'แขน':'khaen', 'โต๊ะ':'dto', 'โคม':'khoom', 'เงาะ':'ngaw', 'หมอ':'maw',
  'เลอะ':'ler', 'เธอ':'ther', 'ขนมเปี๊ยะ':'khanom pia', 'เปีย':'bpia', 'เสือ':'suea', 'ยัวะ':'yua', 'บัว':'bua',
  'ขำ':'kham', 'ใบ':'bai', 'ไก่':'gai', 'เขา':'khao', 'ฤดู':'rue-duu', 'ฤาษี':'rue-sii',
  'เด็ก':'dek', 'เด็ก / เป็น / แข็ง':'dek / bpen / khaeng',
  'จาน':'jaan', 'เต่า':'dtao', 'ใบไม้':'bai mai', 'ปลา':'bplaa', 'อ่าง':'aang', 'ยักษ์':'yak', 'แหวน':'waen',
  'ม้า':'maa', 'หนู':'nuu', 'เรือ':'ruea', 'ลิง':'ling', 'ควาย':'khwai', 'ช้าง':'chang', 'ซอ':'saw', 'ทหาร':'tha-haan',
  'ผึ้ง':'phueng', 'ผู้หญิง':'phuu-ying', 'ฟัน':'fan', 'พาน':'phaan', 'ถุง':'thung'
};
const THAI_NAME_ROMAN = {
  'สระอะ':'sara a', 'สระอา':'sara aa', 'สระอิ':'sara i', 'สระอี':'sara ii / ee', 'สระอึ':'sara eu', 'สระอือ':'sara euu',
  'สระอุ':'sara u', 'สระอู':'sara uu / oo', 'สระเอะ':'sara e', 'สระเอ':'sara ee / e', 'สระแอะ':'sara ae', 'สระแอ':'sara ae',
  'สระโอะ':'sara o', 'สระโอ':'sara oo / oh', 'สระเอาะ':'sara aw', 'สระออ':'sara aw / ɔɔ', 'สระเออะ':'sara er', 'สระเออ':'sara er',
  'สระเอียะ':'sara ia', 'สระเอีย':'sara ia', 'สระเอือะ':'sara eua', 'สระเอือ':'sara eua', 'สระอัวะ':'sara ua', 'สระอัว':'sara ua',
  'สระอำ':'sara am', 'สระใอ':'sara ai / mai muan', 'สระไอ':'sara ai / mai malai', 'สระเอา':'sara ao',
  'ฤ':'rue / ri / roe', 'ฤา':'rue long', 'ฦ':'lue', 'ฦา':'lue long', 'ไม้ไต่คู้':'mai taikhuu',
  'กอ ไก่':'go gai', 'จอ จาน':'jo jaan', 'ดอ เด็ก':'do dek', 'ตอ เต่า':'dto dtao', 'บอ ใบไม้':'bo bai-mai', 'ปอ ปลา':'bpo bplaa',
  'ออ อ่าง':'o aang', 'งอ งู':'ngo nguu', 'ยอ ยักษ์':'yo yak', 'วอ แหวน':'wo waen', 'มอ ม้า':'mo maa', 'นอ หนู':'no nuu',
  'รอ เรือ':'ro ruea', 'ลอ ลิง':'lo ling', 'คอ ควาย':'kho khwai', 'ชอ ช้าง':'cho chang', 'ซอ โซ่':'so so', 'ทอ ทหาร':'tho tha-haan',
  'ผอ ผึ้ง':'pho phueng', 'ญอ หญิง':'yo ying', 'ฟอ ฟัน':'fo fan', 'พอ พาน':'pho phaan'
};
function boardRoman(item){
  if(!item) return '';
  if(item.boardRoman) return item.boardRoman;
  if(item.boardWordRoman) return item.boardWordRoman;
  return BOARD_WORD_ROMAN[item.boardWord] || '';
}
function thaiNameRoman(item){
  if(!item) return '';
  if(item.nameRoman) return item.nameRoman;
  return THAI_NAME_ROMAN[item.name] || '';
}
function thaiWithRoman(thai, roman){
  if(!thai) return '';
  return roman ? `${thai} (${roman})` : thai;
}
function boardWordWithRoman(item){
  return thaiWithRoman(item.boardWord, boardRoman(item));
}
function thaiNameWithRoman(item){
  return thaiWithRoman(item.name, thaiNameRoman(item));
}


// Level 1.2 — paired foundation drill for letters and vowels.
// Rule: every Thai item displayed in the question/answer is accompanied by romanization or Hebrew/English meaning.
function level12Pool(){
  return BOARD_ITEMS.filter(x => x.symbol && x.name && x.boardWord && x.boardWord !== '-' && (x.he || x.sound));
}
function level12DisplayName(item){
  const meaning = isHebrew() ? item.boardMeaningHe : item.boardMeaningEn;
  const label = isHebrew() ? item.localHe : item.localEn;
  return `${thaiNameWithRoman(item)} — ${label} — ${boardWordWithRoman(item)} = ${meaning}`;
}
function level12ChoiceBundle(item, type){
  const meaning = isHebrew() ? item.boardMeaningHe : item.boardMeaningEn;
  const label = isHebrew() ? item.localHe : item.localEn;
  if(type === 'symbol') return `${item.symbol} — ${thaiNameWithRoman(item)} — ${label}`;
  if(type === 'sound') return `${isHebrew()?item.he:item.sound} — ${label}`;
  if(type === 'board') return `${boardWordWithRoman(item)} — ${meaning}`;
  return level12DisplayName(item);
}
function makeLevel12Mcq(item){
  const types = ['symbol','sound','name','board'];
  const type = types[Math.floor(Math.random()*types.length)];
  const pool = level12Pool().filter(x => x.id !== item.id);
  let question, correct, choices, explanation;
  if(type === 'symbol'){
    question = isHebrew()
      ? `איזה סימן/אות מתאים ל־${thaiNameWithRoman(item)} — ${isHebrew()?item.localHe:item.localEn}?`
      : `Which sign/letter matches ${thaiNameWithRoman(item)} — ${item.localEn}?`;
    correct = level12ChoiceBundle(item,'symbol');
    choices = sampleChoices(correct, pool.map(x=>level12ChoiceBundle(x,'symbol')), 4);
  } else if(type === 'sound'){
    question = isHebrew()
      ? `מה הצליל/התפקיד של ${item.symbol} — ${thaiNameWithRoman(item)}?`
      : `What is the sound/function of ${item.symbol} — ${thaiNameWithRoman(item)}?`;
    correct = level12ChoiceBundle(item,'sound');
    choices = sampleChoices(correct, pool.map(x=>level12ChoiceBundle(x,'sound')), 4);
  } else if(type === 'board'){
    question = isHebrew()
      ? `איזו מילת לוח שייכת ל־${item.symbol} — ${thaiNameWithRoman(item)}?`
      : `Which board word belongs to ${item.symbol} — ${thaiNameWithRoman(item)}?`;
    correct = level12ChoiceBundle(item,'board');
    choices = sampleChoices(correct, pool.map(x=>level12ChoiceBundle(x,'board')), 4);
  } else {
    question = isHebrew()
      ? `מה השם וההסבר של ${item.symbol}?`
      : `What are the name and explanation of ${item.symbol}?`;
    correct = level12ChoiceBundle(item,'name');
    choices = sampleChoices(correct, pool.map(x=>level12ChoiceBundle(x,'name')), 4);
  }
  explanation = level12DisplayName(item);
  return {type, question, correct, choices, explanation};
}
function makeLevel12WritingTask(item){
  const meaning = isHebrew() ? item.boardMeaningHe : item.boardMeaningEn;
  const label = isHebrew() ? item.localHe : item.localEn;
  const useBoardWord = item.kind === 'consonant' && item.boardWord && Math.random() < 0.45;
  if(useBoardWord){
    return {
      prompt: isHebrew()
        ? `כתוב בתאית את מילת הלוח של ${item.symbol} — ${thaiNameWithRoman(item)}. משמעות: ${meaning}.`
        : `Write the Thai board word for ${item.symbol} — ${thaiNameWithRoman(item)}. Meaning: ${meaning}.`,
      expected: item.boardWord,
      hint: isHebrew() ? `מילת לוח / Board word: ${meaning}` : `Board word meaning: ${meaning}`
    };
  }
  return {
    prompt: isHebrew()
      ? `כתוב את הסימן/האות שמתאים ל־${thaiNameWithRoman(item)}. הסבר: ${label}. מילת לוח: ${boardWordWithRoman(item)} = ${meaning}.`
      : `Write the sign/letter for ${thaiNameWithRoman(item)}. Explanation: ${label}. Board word: ${boardWordWithRoman(item)} = ${meaning}.`,
    expected: item.symbol,
    hint: isHebrew() ? `כתוב רק את הסימן/האות התאיים.` : `Write only the Thai sign/letter.`
  };
}
function makeLevel12PairedQuestion(){
  const item = weightedPick(level12Pool());
  const mcq = makeLevel12Mcq(item);
  const writing = makeLevel12WritingTask(item);
  return { item, mode:'level12_pair', mcq, writing, expected: writing.expected };
}

const MODES = ['read_meaning','hebrew_write','tone','roman_write'];
const MODE_OPTIONS = ['mixed','read_meaning','hebrew_write','tone','roman_write'];
const STORAGE_KEY = 'thaiTrainerStateV3';
const THEMES = [
  {id:'ocean', he:'Ocean Calm 🌊', en:'Ocean Calm 🌊'},
  {id:'notebook', he:'Thai Notebook ✍️', en:'Thai Notebook ✍️'},
  {id:'neon', he:'Neon Bangkok 🌃', en:'Neon Bangkok 🌃'},
  {id:'minimal', he:'Minimal Premium 🧊', en:'Minimal Premium 🧊'},
  {id:'island', he:'Island Focus 🏝️', en:'Island Focus 🏝️'}
];
const DEFAULT_SYNC_URL = 'https://script.google.com/macros/s/AKfycbzbr2OfX-0WVpJqPuMgQ_ye-kUCGdyAjGvF3Mv3wCugy_n9_x36x6l6ld6oecD4F7Ru/exec';
let deferredInstallPrompt = null;
let state = loadState();
let current = null;
let selectedTone = null;
let selectedVowelAnswer = null;
let level6McqAnswered = false;
let drawing = false;
let lastPoint = null;

const el = id => document.getElementById(id);
const canvas = el('writeCanvas');
const ctx = canvas.getContext('2d');

function defaultState(){
  return { stats:{correct:0,wrong:0,streak:0,total:0}, itemStats:{}, history:[], syncUrl:'', lastSync:null, lang:'he', userId:'rif', theme:'ocean' };
}

async function disableOldServiceWorkers(){
  try{
    if('serviceWorker' in navigator){
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map(r => r.unregister()));
    }
    if('caches' in window){
      const keys = await caches.keys();
      await Promise.all(keys.filter(k => k.startsWith('thai-trainer')).map(k => caches.delete(k)));
    }
    console.info('Thai Trainer', APP_VERSION, 'old service workers/caches cleared');
  }catch(err){
    console.warn('Could not clear old service worker/cache', err);
  }
}

function loadState(){
  try { return { ...defaultState(), ...(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}) }; }
  catch { return defaultState(); }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function init(){
  setupLevels(); setupModes(); setupCanvas(); setupEvents(); setupPwa(); applyTheme(); applyLanguage(); runQA();
  if(!state.syncUrl){ state.syncUrl = DEFAULT_SYNC_URL; saveState(); }
  el('syncUrl').value = state.syncUrl || DEFAULT_SYNC_URL;
  el('userIdInput').value = state.userId || 'rif';
  updateStats(); newQuestion();
  // v1.5: do NOT register a service worker. It caused stale versions to stay alive in normal browser windows.
  // We actively unregister old workers and clear old caches once the fresh app loads.
  disableOldServiceWorkers();
}

function setupLevels(){
  const select = el('levelSelect');
  const currentValue = select.value || '1';
  const levels = [
    {value:'1', label:`${t('level')} 1`},
    {value:'1.2', label:t('foundationLevel')},
    {value:'2', label:`${t('level')} 2`},
    {value:'3', label:`${t('level')} 3`},
    {value:'4', label:`${t('level')} 4`},
    {value:'5', label:`${t('level')} 5`},
    {value:'6', label:`${t('level')} 6 — ${t('vowelLevel')}`}
  ];
  select.innerHTML = '';
  for(const lvl of levels){
    const o = document.createElement('option');
    o.value = lvl.value;
    o.textContent = lvl.label;
    select.appendChild(o);
  }
  select.value = [...select.options].some(o=>o.value===currentValue) ? currentValue : '1';
}
function setupModes(){
  const select = el('modeSelect');
  const currentValue = select.value || 'mixed';
  select.innerHTML = '';
  const labels = {mixed:t('mixed'), read_meaning:t('readMeaning'), hebrew_write:t('meaningWrite'), tone:t('toneMode'), roman_write:t('romanWrite'), vowel_board:t('vowelBoard'),vowel_write:t('vowelBoard')};
  for(const value of MODE_OPTIONS){
    const o = document.createElement('option');
    o.value = value;
    o.textContent = labels[value] || value;
    select.appendChild(o);
  }
  select.value = MODE_OPTIONS.includes(currentValue) ? currentValue : 'mixed';
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
  el('langToggle').addEventListener('click', toggleLanguage);
  el('themeToggle').addEventListener('click', cycleTheme);
  el('userIdInput').addEventListener('keydown', e => { if(e.key === 'Enter'){ e.preventDefault(); initUserSheet(); } });
  el('userIdInput').addEventListener('blur', () => { const v = cleanUserId(el('userIdInput').value); if(v && v !== state.userId){ state.userId=v; saveState(); } });
}
function setupPwa(){
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredInstallPrompt=e; el('installBtn').hidden=false; });
  el('installBtn').addEventListener('click', async()=>{ if(deferredInstallPrompt){ deferredInstallPrompt.prompt(); deferredInstallPrompt=null; el('installBtn').hidden=true; }});
}

function currentTheme(){ return THEMES.find(x=>x.id===state.theme) || THEMES[0]; }
function applyTheme(){
  const theme = currentTheme();
  document.body.classList.remove(...THEMES.map(x=>'theme-'+x.id));
  document.body.classList.add('theme-'+theme.id);
  const b = el('themeToggle');
  if(b) b.textContent = isHebrew() ? theme.he : theme.en;
  const meta = document.querySelector('meta[name="theme-color"]');
  if(meta){
    const colors = {ocean:'#07111f',notebook:'#f3efe6',neon:'#080014',minimal:'#edf7ff',island:'#062f3a'};
    meta.setAttribute('content', colors[theme.id] || '#07111f');
  }
}
function cycleTheme(){
  const idx = THEMES.findIndex(x=>x.id===state.theme);
  state.theme = THEMES[(idx+1+THEMES.length)%THEMES.length].id;
  saveState();
  applyTheme();
}
function applyLanguage(){
  document.documentElement.lang = lang();
  document.documentElement.dir = isHebrew() ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-en', !isHebrew());
  el('eyebrowText').textContent = t('eyebrow');
  el('mainTitle').textContent = t('title');
  el('subtitleText').textContent = t('subtitle');
  el('langToggle').textContent = t('langButton');
  applyTheme();
  el('installBtn').textContent = t('install');
  el('levelLabel').textContent = t('levelLabel');
  el('modeLabelText').textContent = t('modeLabel');
  el('newQuestionBtn').textContent = t('newQuestion');
  el('clearBtn').textContent = t('clear');
  el('showAnswerBtn').textContent = t('showAnswer');
  el('correctBtn').textContent = t('correct');
  el('wrongBtn').textContent = t('wrong');
  el('correctLabel').textContent = t('correctStat');
  el('wrongLabel').textContent = t('wrongStat');
  el('streakLabel').textContent = t('streakStat');
  el('accuracyLabel').textContent = t('accuracyStat');
  el('syncTitle').textContent = t('syncTitle');
  el('syncDescription').textContent = t('syncDescription');
  el('userLabel').textContent = t('userLabel');
  el('userIdInput').placeholder = t('userPlaceholder');
  el('saveSyncUrlBtn').textContent = t('saveUrl');
  el('syncUploadBtn').textContent = t('saveProgress');
  el('syncDownloadBtn').textContent = t('loadProgress');
  el('qaSummary').textContent = t('qa');
  if(el('syncStatus').textContent === 'מוכן.' || el('syncStatus').textContent === 'Ready.') el('syncStatus').textContent = t('ready');
  setupLevels();
  setupModes();
  if(current) renderQuestion();
}
function toggleLanguage(){
  state.lang = isHebrew() ? 'en' : 'he';
  saveState();
  applyLanguage();
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
  selectedVowelAnswer = null;
  level6McqAnswered = false;
  const levelValue = el('levelSelect').value || '1';
  const mode = levelValue === '6' ? 'level6_pair' : levelValue === '1.2' ? 'level12_pair' : pickMode();
  if(mode === 'level12_pair'){
    current = makeLevel12PairedQuestion();
  } else if(mode === 'level6_pair' || mode === 'level12_pair'){
    current = makeLevel6PairedQuestion();
  } else if(mode === 'vowel_write'){
    current = makeVowelWritingQuestion();
  } else if(mode === 'vowel_board'){
    current = makeVowelQuestion();
  } else {
    let items = WORDS.filter(w=>String(w.level) === String(levelValue));
    let actualMode = mode;
    if(actualMode === 'tone'){
      const toneItems = items.filter(hasDrillableTone);
      if(toneItems.length) items = toneItems;
      else actualMode = ['read_meaning','hebrew_write','roman_write'][Math.floor(Math.random()*3)];
    }
    if(!items.length){ items = WORDS.filter(w=>String(w.level) === '1'); }
    current = { item: weightedPick(items), mode: actualMode };
  }
  renderQuestion(); clearCanvas();
}
function sampleChoices(correct, all, count=4){
  const unique = [...new Set(all.filter(Boolean))].filter(x => x !== correct).sort(()=>Math.random()-0.5).slice(0, count-1);
  return [correct, ...unique].sort(()=>Math.random()-0.5);
}

function level6Pool(){
  return BOARD_ITEMS.filter(x => x.boardWord && x.boardWord !== '-' && x.symbol && x.name);
}
function localLabel(item){ return isHebrew() ? item.localHe : item.localEn; }
function localMeaning(item){ return isHebrew() ? item.boardMeaningHe : item.boardMeaningEn; }
function localWriting(item){ return isHebrew() ? item.writingHe : item.writingEn; }
function localNote(item){ return isHebrew() ? item.noteHe : item.noteEn; }
function mcqChoiceText(item, type){
  if(type === 'name') return isHebrew() ? `השם התאילנדי הוא ${item.name}` : `The Thai name is ${item.name}`;
  if(type === 'sound') return isHebrew() ? `הצליל/תפקיד הוא ${item.he}` : `The sound/function is ${item.sound}`;
  if(type === 'kind') return isHebrew()
    ? (item.kind === 'consonant' ? 'זה עיצור' : item.kind === 'vowel' ? 'זו תנועה' : 'זה סימן מיוחד')
    : (item.kind === 'consonant' ? 'It is a consonant' : item.kind === 'vowel' ? 'It is a vowel' : 'It is a special sign');
  if(type === 'position') return localWriting(item);
  return `${item.name} — ${isHebrew()?item.he:item.sound}`;
}
function makeLevel6Mcq(item){
  const types = ['name','sound','kind','position'];
  if(item.id === 'v_mai_taikhu') types.push('shortcut');
  const type = types[Math.floor(Math.random()*types.length)];
  let question, correct, choices, explanation;
  const pool = level6Pool().filter(x => x.id !== item.id);
  if(type === 'shortcut'){
    question = isHebrew() ? `מה נכון לגבי הסימן ${item.symbol}?` : `What is true about the sign ${item.symbol}?`;
    correct = isHebrew() ? 'הוא מקצר תנועה, הוא לא סימן טון' : 'It shortens a vowel; it is not a tone mark';
    choices = isHebrew()
      ? [correct,'הוא סימן טון יורד','הוא הופך עיצור לסופי','הוא מאריך את התנועה']
      : [correct,'It is a falling-tone mark','It turns a consonant into a final consonant','It lengthens the vowel'];
    explanation = localWriting(item);
  } else if(type === 'name'){
    question = isHebrew() ? `איזה שם תאילנדי מתאים לסימן/עיצור ${item.symbol}?` : `Which Thai name matches ${item.symbol}?`;
    correct = item.name;
    choices = sampleChoices(correct, pool.map(x=>x.name), 4);
    explanation = isHebrew() ? `${item.symbol} נקרא ${item.name}.` : `${item.symbol} is called ${item.name}.`;
  } else if(type === 'sound'){
    question = isHebrew() ? `מה הצליל או התפקיד של ${item.symbol}?` : `What is the sound/function of ${item.symbol}?`;
    correct = isHebrew() ? item.he : item.sound;
    choices = sampleChoices(correct, pool.map(x=>isHebrew()?x.he:x.sound), 4);
    explanation = isHebrew() ? `הצליל/תפקיד של ${item.symbol} הוא ${item.he}.` : `The sound/function of ${item.symbol} is ${item.sound}.`;
  } else if(type === 'kind'){
    question = isHebrew() ? `איזה משפט נכון לגבי ${item.symbol}?` : `Which statement is true about ${item.symbol}?`;
    correct = mcqChoiceText(item,'kind');
    choices = isHebrew()
      ? [correct, item.kind==='consonant'?'זו תנועה':'זה עיצור', 'זה תמיד סימן טון', 'זה מספר תאילנדי']
      : [correct, item.kind==='consonant'?'It is a vowel':'It is a consonant', 'It is always a tone mark', 'It is a Thai number'];
    choices = [...new Set(choices)].sort(()=>Math.random()-0.5).slice(0,4);
    explanation = `${mcqChoiceText(item,'kind')} — ${localLabel(item)}.`;
  } else {
    question = isHebrew() ? `איזה כלל כתיבה נכון לגבי ${item.symbol}?` : `Which writing rule is true for ${item.symbol}?`;
    correct = localWriting(item);
    choices = sampleChoices(correct, pool.map(x=>isHebrew()?x.writingHe:x.writingEn), 4);
    explanation = localWriting(item);
  }
  return {type, question, correct, choices: choices.sort(()=>Math.random()-0.5), explanation};
}
function makeLevel6WritingTask(item){
  const variants = [];
  const bank = LEVEL6_WRITING_BANK[item.id] || [];
  bank.forEach(thai => {
    const word = level6FindWord(thai);
    if(!word) return;
    const meaning = level6WordMeaning(word);
    const roman = level6WordRoman(word);
    variants.push({
      prompt: isHebrew()
        ? `השתמש ב־${item.symbol} בתוך מילה וכתוב בתאית: ${meaning}`
        : `Use ${item.symbol} inside a word and write in Thai: ${meaning}`,
      expected: word.thai,
      hint: isHebrew()
        ? `מאוצר המילים. ${roman ? 'תעתיק: ' + roman : ''}`
        : `From the vocabulary. ${roman ? 'Romanization: ' + roman : ''}`,
      source: 'vocab'
    });
  });

  // For signs that are themselves the learning target, occasionally ask for the sign itself,
  // but keep it less frequent than vocabulary writing.
  if(item.kind !== 'consonant'){
    variants.push({
      prompt: isHebrew()
        ? `כתוב רק את הסימן שמתאים לצליל/תפקיד: ${isHebrew()?item.he:item.sound}`
        : `Write only the sign for this sound/function: ${item.sound}`,
      expected: item.symbol,
      hint: isHebrew() ? 'זו שאלת סימן, לא מילת לוח.' : 'This is a sign question, not a board-word question.',
      source: 'sign'
    });
  }

  // Fallback only: if a focus item has no vocabulary entry yet, use the poster word.
  if(!variants.length){
    variants.push({
      prompt: isHebrew()
        ? `כתוב בתאית לפי המשמעות: ${localMeaning(item)}`
        : `Write in Thai by meaning: ${localMeaning(item)}`,
      expected: item.boardWord,
      hint: isHebrew() ? 'גיבוי זמני ממילת הלוח.' : 'Temporary fallback from the board word.',
      source: 'fallback'
    });
  }

  // Prefer vocabulary tasks; sign/fallback appears only when needed or occasionally.
  const vocabTasks = variants.filter(v => v.source === 'vocab');
  if(vocabTasks.length && Math.random() < 0.88){
    return vocabTasks[Math.floor(Math.random()*vocabTasks.length)];
  }
  return variants[Math.floor(Math.random()*variants.length)];
}
function makeLevel6PairedQuestion(){
  const item = weightedPick(level6Pool());
  const mcq = makeLevel6Mcq(item);
  const writing = makeLevel6WritingTask(item);
  return { item, mode:'level6_pair', mcq, writing, expected: writing.expected };
}

function makeVowelQuestion(){
  const item = BOARD_ITEMS[Math.floor(Math.random()*BOARD_ITEMS.length)];
  const types = ['sound','name','symbol','boardWord'];
  if(item.id === 'v_mai_taikhu') types.push('shortcut');
  const qtype = types[Math.floor(Math.random()*types.length)];
  let prompt, question, correct, choices;
  if(qtype === 'sound'){
    prompt = t('soundQuestion'); question = item.symbol; correct = isHebrew() ? item.he : item.sound;
    choices = sampleChoices(correct, BOARD_ITEMS.map(v=>isHebrew()?v.he:v.sound));
  } else if(qtype === 'name'){
    prompt = t('nameQuestion'); question = item.symbol; correct = item.name;
    choices = sampleChoices(correct, BOARD_ITEMS.map(v=>v.name));
  } else if(qtype === 'symbol'){
    prompt = t('symbolQuestion'); question = item.name; correct = item.symbol;
    choices = sampleChoices(correct, BOARD_ITEMS.map(v=>v.symbol));
  } else if(qtype === 'shortcut'){
    prompt = t('shortcutQuestion'); question = item.symbol; correct = t('shortcutAnswer');
    choices = isHebrew() ? ['מקצר תנועה','סימן טון','מאריך תנועה','עיצור סופי'] : ['shortens a vowel','tone mark','lengthens a vowel','final consonant'];
  } else {
    prompt = t('boardWordQuestion'); question = item.symbol; correct = `${item.boardWord} ${item.emoji}`;
    choices = sampleChoices(correct, BOARD_ITEMS.map(v=>`${v.boardWord} ${v.emoji}`));
  }
  return { item, mode:'vowel_board', qtype, prompt, question, correct, choices };
}
function makeVowelWritingQuestion(){
  const item = BOARD_ITEMS[Math.floor(Math.random()*BOARD_ITEMS.length)];
  const types = ['symbolFromName','nameFromSymbol','boardWordFromEmoji','boardWordFromSymbol','symbolFromSound'];
  if(item.id === 'v_mai_taikhu') types.push('shortcutSign');
  const qtype = types[Math.floor(Math.random()*types.length)];
  let prompt = t('promptVowelWrite'), question = '', expected = '', hint = '';
  if(qtype === 'symbolFromName'){ question = item.name; expected = item.symbol; hint = isHebrew() ? 'כתוב את הסימן התאילנדי' : 'Write the Thai sign'; }
  else if(qtype === 'nameFromSymbol'){ question = item.symbol; expected = item.name; hint = isHebrew() ? 'כתוב את שם הסימן בתאית' : 'Write the Thai sign name'; }
  else if(qtype === 'boardWordFromEmoji'){ question = `${item.emoji} — ${isHebrew()?item.boardMeaningHe:item.boardMeaningEn}`; expected = item.boardWord; hint = isHebrew() ? 'כתוב את מילת הלוח בתאית' : 'Write the Thai board word'; }
  else if(qtype === 'boardWordFromSymbol'){ question = item.symbol; expected = item.boardWord; hint = isHebrew() ? 'כתוב את מילת הלוח של הסימן' : 'Write the board word for this sign'; }
  else if(qtype === 'shortcutSign'){ question = isHebrew() ? 'הסימן שמקצר תנועה' : 'the sign that shortens a vowel'; expected = item.symbol; hint = item.name; }
  else { question = isHebrew()?item.he:item.sound; expected = item.symbol; hint = isHebrew() ? 'כתוב את הסימן שמתאים לצליל' : 'Write the sign for this sound'; }
  return { item, mode:'vowel_write', qtype, prompt, question, expected, hint };
}
function renderQuestion(){
  const {item, mode} = current;
  const itemLevel = (mode === 'vowel_board' || mode === 'vowel_write' || mode === 'level6_pair') ? '6' : (mode === 'level12_pair' ? '1.2' : String(item.level));
  el('levelBadge').textContent = itemLevel === '6' ? `${t('level')} 6 — ${t('vowelLevel')}` : itemLevel === '1.2' ? t('foundationLevel') : `${t('level')} ${itemLevel}`;
  el('modeBadge').textContent = modeLabel(mode);
  el('progressBadge').textContent = `${state.stats.total || 0} ${t('questions')}`;
  el('answerBox').hidden = true;
  renderLevel6Pair(current);
  renderStudyCard(current);
  const canvasWrap = document.querySelector('.canvas-wrap');
  if(canvasWrap) canvasWrap.hidden = ((mode === 'level6_pair' || mode === 'level12_pair') && !level6McqAnswered);
  el('clearBtn').hidden = ((mode === 'level6_pair' || mode === 'level12_pair') && !level6McqAnswered);
  el('showAnswerBtn').hidden = ((mode === 'level6_pair' || mode === 'level12_pair') && !level6McqAnswered);
  el('toneChoices').hidden = !(mode === 'tone' || mode === 'vowel_board');
  el('toneChoices').innerHTML = '';

  if(mode === 'level6_pair' || mode === 'level12_pair'){
    el('promptText').textContent = mode === 'level12_pair' ? t('level12Choose') : t('level6Choose');
    el('questionText').hidden = true;
    el('questionText').textContent = '';
    el('questionHint').textContent = level6McqAnswered ? (mode === 'level12_pair' ? t('level12WriteIntro') : t('level6WriteIntro')) : t('level6WriteLocked');
  } else {
    el('questionText').hidden = false;
  }

  if(mode === 'vowel_write'){
    el('promptText').textContent = current.prompt;
    el('questionText').textContent = current.question;
    el('questionHint').textContent = current.hint || t('writeHint');
  } else if(mode === 'vowel_board'){
    el('promptText').textContent = current.prompt;
    el('questionText').textContent = current.question;
    el('questionHint').textContent = '';
    renderVowelChoices(current);
  } else if(mode === 'read_meaning'){
    el('promptText').textContent = t('promptRead');
    el('questionText').textContent = item.thai;
    el('questionHint').textContent = '';
  } else if(mode === 'hebrew_write'){
    el('promptText').textContent = t('promptMeaningWrite');
    el('questionText').textContent = itemMeaning(item);
    el('questionHint').textContent = t('writeHint');
  } else if(mode === 'roman_write'){
    el('promptText').textContent = t('promptRoman');
    el('questionText').textContent = item.roman;
    el('questionHint').textContent = itemMeaning(item);
  } else if(mode === 'tone'){
    el('promptText').textContent = t('promptTone');
    el('questionText').textContent = item.thai;
    el('questionHint').textContent = item.roman;
    renderToneChoices(item);
  }
}

function renderLevel6Pair(q){
  const box = el('level6Pair');
  if(!box) return;
  if(!q || (q.mode !== 'level6_pair' && q.mode !== 'level12_pair')){
    box.hidden = true;
    box.innerHTML = '';
    return;
  }
  const item = q.item;
  box.hidden = false;
  const selected = selectedVowelAnswer;
  const isCorrect = selected === q.mcq.correct;
  const feedback = selected ? `
    <div class="pair-feedback ${isCorrect ? 'ok' : 'bad'}">
      <span class="feedback-icon">${isCorrect ? '✅' : '❌'}</span>
      <div><b>${isCorrect ? t('level6Correct') : t('level6Wrong')}:</b> ${escapeHtml(q.mcq.explanation)}</div>
    </div>` : '';
  const choiceHtml = q.mcq.choices.map(choice => {
    const cls = selected ? (choice === q.mcq.correct ? 'correct-choice' : choice === selected ? 'wrong-choice' : '') : '';
    return `<button type="button" class="level6-choice ${cls}" data-choice="${escapeHtml(choice)}">${escapeHtml(choice)}</button>`;
  }).join('');
  box.innerHTML = `
    <div class="pair-card">
      <div class="pair-kicker">${escapeHtml(t('level6McqKicker'))}</div>
      <div class="pair-context">
        <span class="pair-symbol">${escapeHtml(item.symbol)}</span>
        <span class="pair-label">${escapeHtml(item.kind === 'consonant' ? (isHebrew() ? 'עיצור' : 'Consonant') : item.kind === 'vowel' ? (isHebrew() ? 'תנועה' : 'Vowel') : (isHebrew() ? 'סימן מיוחד' : 'Special sign'))} ${escapeHtml(item.emoji)} · ${escapeHtml(item.name)} · ${escapeHtml(isHebrew()?item.localHe:item.localEn)}</span>
      </div>
      <div class="pair-main">${escapeHtml(q.mcq.question)}</div>
      <div class="choices level6-choices">${choiceHtml}</div>
      ${feedback}
    </div>
    <div class="pair-card pair-write" ${selected ? '' : 'hidden'}>
      <div class="pair-kicker">${escapeHtml(t('level6WriteKicker'))}</div>
      <div class="pair-main">${escapeHtml(q.writing.prompt)}</div>
      <div class="hint">${escapeHtml(q.writing.hint || '')}</div>
    </div>`;
  box.querySelectorAll('.level6-choice').forEach(btn => {
    btn.addEventListener('click', () => {
      if(selectedVowelAnswer) return;
      selectedVowelAnswer = btn.getAttribute('data-choice');
      level6McqAnswered = true;
      renderQuestion();
      clearCanvas();
    });
  });
}

function renderStudyCard(q){
  const box = el('studyCard');
  if(!box) return;
  if(!q || (q.mode !== 'vowel_write' && q.mode !== 'vowel_board')){ box.hidden = true; box.innerHTML=''; return; }
  const item = q.item;
  const local = isHebrew() ? item.localHe : item.localEn;
  const meaning = isHebrew() ? item.boardMeaningHe : item.boardMeaningEn;
  const writing = isHebrew() ? item.writingHe : item.writingEn;
  const note = isHebrew() ? item.noteHe : item.noteEn;
  box.hidden = false;
  box.innerHTML = `
    <div class="study-top">
      <div class="study-symbol">${escapeHtml(item.symbol)}</div>
      <div>
        <div class="study-title">${escapeHtml(thaiNameWithRoman(item))} <span>${escapeHtml(item.emoji)}</span></div>
        <div class="study-subtitle">${escapeHtml(local)}</div>
      </div>
    </div>
    <div class="study-grid">
      <div><b>${t('sound')}:</b> <span dir="ltr">${escapeHtml(isHebrew()?item.he:item.sound)}</span></div>
      <div><b>${t('boardWord')}:</b> <span class="thai-inline">${escapeHtml(item.boardWord)}</span> <span dir="ltr">(${escapeHtml(boardRoman(item))})</span> — ${escapeHtml(meaning)}</div>
      <div><b>${t('writingRule')}:</b> ${escapeHtml(writing)}</div>
      <div><b>${t('note')}:</b> ${escapeHtml(note)}</div>
    </div>`;
}
function renderVowelChoices(q){
  const wrap = el('toneChoices');
  for(const choice of q.choices){
    const b = document.createElement('button');
    b.type = 'button';
    b.innerHTML = `<span class="choice-text">${escapeHtml(choice)}</span>`;
    b.addEventListener('click',()=>{ selectedVowelAnswer=choice; [...wrap.children].forEach(x=>x.classList.remove('selected')); b.classList.add('selected'); });
    wrap.appendChild(b);
  }
}
function renderToneChoices(item){
  const wrap = el('toneChoices');
  const toneParts = item.tone.split('-');
  let options;
  if(toneParts.length === 1){
    options = TONES.map(tt=>({id:tt.id, label: isHebrew() ? `${tt.he} (${tt.en})` : `${tt.en} (${tt.he})`}));
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
function toneToHeb(tone){ return tone.split('-').map(part => { const found = TONES.find(tt=>tt.id===part)||{}; return isHebrew() ? (found.he || part) : (found.en || part); }).join(isHebrew() ? '־' : '-'); }
function modeLabel(mode){
  return {read_meaning:t('readMeaning'),hebrew_write:t('meaningWrite'),tone:t('toneMode'),roman_write:t('romanWrite'),vowel_board:t('vowelBoard'),vowel_write:t('vowelBoard'),level6_pair:t('vowelBoard'),level12_pair:t('foundationLevel')}[mode] || t('mixed');
}
function showAnswer(){
  const {item, mode} = current;
  if(mode === 'level6_pair' || mode === 'level12_pair'){
    if(!level6McqAnswered){ return; }
    el('answerBox').innerHTML = `
      ${clickableThaiAnswerHtml(current.expected)}
      <div><b>${t('vowelAnswer')}:</b> <span class="mcq-answer">${escapeHtml(current.expected)}</span></div>
      <div><b>${t('thaiName')}:</b> ${escapeHtml(thaiNameWithRoman(item))}</div>
      <div><b>${t('localName')}:</b> ${escapeHtml(localLabel(item))}</div>
      <div><b>${t('sound')}:</b> <span dir="ltr">${escapeHtml(isHebrew()?item.he:item.sound)}</span></div>
      <div><b>${t('boardWord')}:</b> <span class="thai-inline">${escapeHtml(item.boardWord)}</span> <span dir="ltr">(${escapeHtml(boardRoman(item))})</span> ${item.emoji} — ${escapeHtml(localMeaning(item))}</div>
      <div class="vowel-note"><b>${t('writingRule')}:</b> ${escapeHtml(localWriting(item))}</div>
      <div class="vowel-note"><b>${t('note')}:</b> ${escapeHtml(localNote(item))}</div>
      <div class="hint">${t('afterAnswer')}</div>`;
    bindThaiAnswerInfo();
    el('answerBox').hidden = false;
    return;
  }
  if(mode === 'vowel_write'){
    el('answerBox').innerHTML = `
      ${clickableThaiAnswerHtml(current.expected)}
      <div><b>${t('vowelAnswer')}:</b> <span class="mcq-answer">${escapeHtml(current.expected)}</span></div>
      <div><b>${t('thaiName')}:</b> ${escapeHtml(thaiNameWithRoman(item))}</div>
      <div><b>${t('localName')}:</b> ${escapeHtml(isHebrew()?item.localHe:item.localEn)}</div>
      <div><b>${t('sound')}:</b> <span dir="ltr">${escapeHtml(isHebrew()?item.he:item.sound)}</span></div>
      <div><b>${t('boardWord')}:</b> <span class="thai-inline">${escapeHtml(item.boardWord)}</span> <span dir="ltr">(${escapeHtml(boardRoman(item))})</span> ${item.emoji} — ${escapeHtml(isHebrew()?item.boardMeaningHe:item.boardMeaningEn)}</div>
      <div class="vowel-note"><b>${t('writingRule')}:</b> ${escapeHtml(isHebrew()?item.writingHe:item.writingEn)}</div>
      <div class="vowel-note"><b>${t('note')}:</b> ${escapeHtml(isHebrew()?item.noteHe:item.noteEn)}</div>
      <div class="hint">${t('afterAnswer')}</div>`;
    bindThaiAnswerInfo();
    el('answerBox').hidden = false;
    return;
  }
  if(mode === 'vowel_board'){
    const selected = selectedVowelAnswer ? `<div><b>${t('selected')}:</b> <span class="mcq-answer">${escapeHtml(selectedVowelAnswer)}</span></div>` : '';
    el('answerBox').innerHTML = `
      ${clickableThaiAnswerHtml(item.symbol)}
      <div><b>${t('sound')}:</b> <span dir="ltr">${escapeHtml(isHebrew()?item.he:item.sound)}</span></div>
      <div><b>${t('signName')}:</b> ${escapeHtml(thaiNameWithRoman(item))}</div>
      <div><b>${t('boardWord')}:</b> <span class="thai-inline">${escapeHtml(item.boardWord)}</span> <span dir="ltr">(${escapeHtml(boardRoman(item))})</span> ${item.emoji} — ${escapeHtml(isHebrew()?item.boardMeaningHe:item.boardMeaningEn)}</div>
      <div class="vowel-note"><b>${t('writingRule')}:</b> ${escapeHtml(isHebrew()?item.writingHe:item.writingEn)}</div>
      <div class="vowel-note"><b>${t('note')}:</b> ${escapeHtml(isHebrew()?item.noteHe:item.noteEn)}</div>
      <div><b>${isHebrew()?'תשובה':'Answer'}:</b> <span class="mcq-answer">${escapeHtml(current.correct)}</span></div>
      ${selected}`;
    bindThaiAnswerInfo();
    el('answerBox').hidden = false;
    return;
  }
  const autoTone = mode === 'tone' && selectedTone ? `<div><b>${t('selected')}:</b> ${toneToHeb(selectedTone)}</div>` : '';
  el('answerBox').innerHTML = `
    ${clickableThaiAnswerHtml(item.thai)}
    <div><b>${t('roman')}:</b> <span dir="ltr">${escapeHtml(item.roman)}</span></div>
    <div><b>${t('meaning')}:</b> ${escapeHtml(itemMeaning(item))}</div>
    <div><b>${t('tone')}:</b> ${displayTone(item)}</div>
    ${autoTone}
    <div class="hint">${t('afterAnswer')}</div>`;
  bindThaiAnswerInfo();
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

  const beginStroke = point => {
    drawing = true;
    lastPoint = point;
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
  };
  const moveStroke = point => {
    if(!drawing) return;
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
    lastPoint = point;
  };
  const endStroke = () => {
    if(!drawing) return;
    drawing = false;
    lastPoint = null;
  };

  // iPad Air 1 usually runs iOS 12, which does NOT support Pointer Events.
  // The previous canvas listened only to pointerdown/pointermove, so drawing was locked on that device.
  // Modern browsers still use pointer events; older iOS Safari gets touch + mouse fallbacks.
  if(window.PointerEvent){
    canvas.addEventListener('pointerdown', e=>{
      e.preventDefault();
      if(canvas.setPointerCapture){ canvas.setPointerCapture(e.pointerId); }
      beginStroke(getPoint(e));
    });
    canvas.addEventListener('pointermove', e=>{
      if(!drawing) return;
      e.preventDefault();
      moveStroke(getPoint(e));
    });
    const stopPointer = e=>{
      if(!drawing) return;
      e.preventDefault();
      endStroke();
    };
    canvas.addEventListener('pointerup', stopPointer);
    canvas.addEventListener('pointercancel', stopPointer);
    canvas.addEventListener('pointerleave', stopPointer);
  } else {
    const getTouchPoint = e => {
      const touch = (e.touches && e.touches[0]) || (e.changedTouches && e.changedTouches[0]);
      if(!touch) return null;
      const r = canvas.getBoundingClientRect();
      return {x: touch.clientX - r.left, y: touch.clientY - r.top};
    };
    canvas.addEventListener('touchstart', e=>{
      e.preventDefault();
      const p = getTouchPoint(e);
      if(p) beginStroke(p);
    }, {passive:false});
    canvas.addEventListener('touchmove', e=>{
      if(!drawing) return;
      e.preventDefault();
      const p = getTouchPoint(e);
      if(p) moveStroke(p);
    }, {passive:false});
    canvas.addEventListener('touchend', e=>{ e.preventDefault(); endStroke(); }, {passive:false});
    canvas.addEventListener('touchcancel', e=>{ e.preventDefault(); endStroke(); }, {passive:false});

    canvas.addEventListener('mousedown', e=>{ e.preventDefault(); beginStroke(getPoint(e)); });
    canvas.addEventListener('mousemove', e=>{ if(!drawing) return; e.preventDefault(); moveStroke(getPoint(e)); });
    window.addEventListener('mouseup', endStroke);
  }

  window.__drawGuideLines = drawGuideLines;
  window.clearCanvas = function(){ drawGuideLines(); };
}
function clearCanvas(){
  if(window.__drawGuideLines){ window.__drawGuideLines(); return; }
  const rect = canvas.getBoundingClientRect();
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, rect.width, rect.height);
}

function cleanUserId(value){
  return String(value || '').trim().replace(/\s+/g,'_').replace(/[^A-Za-z0-9_\-א-תก-๙]/g,'').slice(0,60) || 'rif';
}
async function initUserSheet(){
  try{
    const userId = cleanUserId(el('userIdInput').value);
    state.userId = userId;
    el('userIdInput').value = userId;
    saveState();
    const json = await jsonpRequest({action:'inituser', userId});
    if(!json.ok) throw new Error(json.error || 'init failed');
    setSyncStatus(`${t('initUserOk')} — ${json.sheetName || userId}`);
  } catch(err){ setSyncStatus(t('initUserErr') + err.message); }
}
function saveSyncUrl(){ state.syncUrl = el('syncUrl').value.trim() || DEFAULT_SYNC_URL; el('syncUrl').value = state.syncUrl; state.userId = cleanUserId(el('userIdInput').value || state.userId); el('userIdInput').value = state.userId; saveState(); setSyncStatus(t('syncSaved')); }

function encodePayload(obj){
  return btoa(unescape(encodeURIComponent(JSON.stringify(obj))));
}
function decodePayload(str){
  return JSON.parse(decodeURIComponent(escape(atob(str))));
}
function normalizedSyncUrl(){
  const url = (state.syncUrl || el('syncUrl').value || DEFAULT_SYNC_URL || '').trim();
  if(!url) throw new Error('אין כתובת Apps Script');
  if(!/^https:\/\/script\.google\.com\/macros\/s\/.+\/exec(?:\?.*)?$/.test(url)){
    throw new Error('כתובת הסקריפט אינה תקינה. צריך URL שמתחיל ב-script.google.com/macros/s ומסתיים ב-/exec');
  }
  return url;
}
function jsonpRequest(params, timeoutMs=12000){
  return new Promise((resolve, reject)=>{
    saveSyncUrl();
    let url;
    try{ url = normalizedSyncUrl(); }catch(err){ reject(err); return; }
    const callbackName = 'thaiSyncCb_' + Date.now() + '_' + Math.floor(Math.random()*100000);
    const script = document.createElement('script');
    const cleanup = () => { try{ delete window[callbackName]; }catch{}; script.remove(); clearTimeout(timer); };
    const timer = setTimeout(()=>{ cleanup(); reject(new Error('timeout')); }, timeoutMs);
    window[callbackName] = data => { cleanup(); resolve(data); };
    const qs = new URLSearchParams({...params, callback: callbackName, t: String(Date.now())});
    script.src = url + (url.includes('?') ? '&' : '?') + qs.toString();
    script.onerror = () => { cleanup(); reject(new Error('script load failed')); };
    document.body.appendChild(script);
  });
}
function formPostUpload(params, timeoutMs=15000){
  return new Promise((resolve, reject)=>{
    saveSyncUrl();
    let url;
    try{ url = normalizedSyncUrl(); }catch(err){ reject(err); return; }
    const iframeName = 'thaiSyncFrame_' + Date.now() + '_' + Math.floor(Math.random()*100000);
    const iframe = document.createElement('iframe');
    iframe.name = iframeName;
    iframe.style.display = 'none';
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = url;
    form.target = iframeName;
    form.style.display = 'none';
    for(const [key, value] of Object.entries(params)){
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = String(value);
      form.appendChild(input);
    }
    let submitted = false;
    const cleanup = () => { form.remove(); iframe.remove(); clearTimeout(timer); };
    const timer = setTimeout(()=>{ cleanup(); reject(new Error('timeout')); }, timeoutMs);
    iframe.onload = () => {
      if(!submitted) return;
      cleanup();
      resolve({ok:true, method:'form-post'});
    };
    iframe.onerror = () => { cleanup(); reject(new Error('iframe upload failed')); };
    document.body.appendChild(iframe);
    document.body.appendChild(form);
    submitted = true;
    form.submit();
  });
}
async function syncUpload(){
  try{
    const safeState = {...state, lastSync: Date.now()};
    const data = encodePayload(safeState);
    // First try JSONP, because it gives a real success/error response.
    try{
      const json = await jsonpRequest({action:'upload', userId: cleanUserId(el('userIdInput').value || state.userId), data});
      if(!json.ok) throw new Error(json.error || 'sync failed');
      state.lastSync = Date.now(); saveState(); setSyncStatus(t('uploadOk'));
      return;
    }catch(jsonpErr){
      // Some browsers/extensions block script.googleusercontent.com as a script.
      // Fallback: submit a hidden form POST. It avoids CORS and usually bypasses script blockers.
      await formPostUpload({action:'upload', userId: cleanUserId(el('userIdInput').value || state.userId), data});
      state.lastSync = Date.now(); saveState(); setSyncStatus(t('uploadSent'));
    }
  } catch(err){ setSyncStatus(t('uploadErr')+err.message); }
}
async function syncDownload(){
  try{
    const json = await jsonpRequest({action:'download', userId: cleanUserId(el('userIdInput').value || state.userId)});
    if(!json.ok) throw new Error(json.error || 'sync failed');
    if(json.data){
      const cloudState = decodePayload(json.data);
      state = {...defaultState(),...cloudState, syncUrl:state.syncUrl, lang:state.lang, userId: cleanUserId(el('userIdInput').value || state.userId)};
      saveState(); updateStats(); newQuestion();
    }
    setSyncStatus(t('downloadOk'));
  } catch(err){ setSyncStatus(t('downloadErr')+err.message+(isHebrew()?' — אם זה עובד בחלון פרטי, הדפדפן חוסם טעינת סקריפט של Google.':' — if it works in a private window, the browser is blocking the Google script.')); }
}
function setSyncStatus(msg){ el('syncStatus').textContent = msg; }
function escapeHtml(s){ return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function runQA(){
  const lines = [];
  const ids = new Set(); let ok = true;
  const levelValues = ['1','1.2','2','3','4','5','6'];
  for(const level of levelValues){
    const count = WORDS.filter(w=>String(w.level)===level).length;
    const variants = count * MODES.length;
    lines.push(`Level ${level}: ${count} items × ${MODES.length} modes = ${variants} question variants`);
    if(count && variants < 50){ ok=false; lines.push(`ERROR: Level ${level} has fewer than 50 variants`); }
  }
  for(const w of WORDS){
    const required = ['id','level','thai','roman','hebrew','english','tone'];
    for(const k of required){ if(!w[k]){ ok=false; lines.push(`ERROR: missing ${k} in ${JSON.stringify(w)}`); } }
    if(ids.has(w.id)){ ok=false; lines.push(`ERROR: duplicate id ${w.id}`); }
    ids.add(w.id);
    if(w.tone !== 'not_drilled'){
      for(const part of String(w.tone).split('-')){ if(!TONES.some(t=>t.id===part)){ ok=false; lines.push(`ERROR: bad tone ${w.tone} for ${w.id}`); } }
    }
    if(/[\u0E00-\u0E7F]/.test(w.thai) && (!w.roman || !w.hebrew || !w.english)){
      ok=false; lines.push(`ERROR: untranslated Thai item ${w.id}`);
    }
  }
  lines.push(`Level 1.2: ${level12Pool().length} signs/consonants × paired MCQ+writing`);
  lines.push(`Board level: ${BOARD_ITEMS.length} signs/consonants × writing question types`);
  lines.unshift(ok ? 'QA PASS' : 'QA FAILED');
  el('qaOutput').textContent = lines.join('\n');
}

document.addEventListener('DOMContentLoaded', init);
