'use strict';

const APP_VERSION = '1.13.0-apkg-vocabulary-expansion';

const TONES = [
  { id:'mid', he:'אמצעי', en:'mid' },
  { id:'low', he:'נמוך', en:'low' },
  { id:'falling', he:'יורד', en:'falling' },
  { id:'high', he:'גבוה', en:'high' },
  { id:'rising', he:'עולה', en:'rising' }
];


const I18N = {
  he: {
    langButton:'English', eyebrow:'Thai Trainer 🇹🇭 · v1.13', title:'קריאה, כתיבה, טונים ומשמעות',
    subtitle:'כותבים לבד, מציגים תשובה, מתקנים אם צריך, ואז מסמנים צדקתי / טעיתי.',
    levelLabel:'רמת קושי', modeLabel:'מצב שאלה', newQuestion:'שאלה חדשה', clear:'נקה כתיבה', showAnswer:'הצג תשובה', correct:'צדקתי', wrong:'טעיתי',
    correctStat:'נכונות', wrongStat:'טעויות', streakStat:'רצף', accuracyStat:'דיוק',
    syncTitle:'סנכרון Google Sheets', syncDescription:'הדבק כאן את כתובת ה־Web App של Google Apps Script. בלי כתובת — ההתקדמות נשמרת רק במכשיר הזה.',
    saveUrl:'שמור כתובת', ready:'מוכן.', qa:'בדיקת תקינות פנימית', install:'התקנה למסך הבית',
    level:'רמה', vowelLevel:'לוח תנועות', questions:'שאלות', mixed:'מעורב', readMeaning:'תאית → עברית', meaningWrite:'עברית → כתיבה בתאית', toneMode:'תאית → טון', romanWrite:'תעתיק → כתיבה בתאית', vowelBoard:'לוח תנועות — כתיבה',
    promptRead:'קרא את המילה וכתוב בעברית את המשמעות + הטון', promptMeaningWrite:'כתוב בתאית את המילה הבאה', promptRoman:'כתוב בתאית לפי התעתיק', promptTone:'מה הטון של המילה / תבנית הטונים?',
    writeHint:'כתוב על הלוח הלבן ואז הצג תשובה', answerThai:'תאית', roman:'תעתיק', meaning:'עברית', tone:'טון', selected:'בחרת', afterAnswer:'עכשיו אפשר לנקות, לכתוב שוב נכון, ואז לסמן צדקתי / טעיתי.', clickThaiLetters:'לחץ על אות/סימן בתשובה כדי לראות מידע קצר.',
    soundQuestion:'מה הצליל של הסימן?', nameQuestion:'מה שם הסימן בתאית?', symbolQuestion:'איזה סימן מתאים לשם?', boardWordQuestion:'איזו מילת לוח שייכת לסימן?', shortcutQuestion:'מה התפקיד של הסימן?',
    sound:'צליל', signName:'שם הסימן', boardWord:'מילת לוח', note:'הערה', emoji:'אימוג׳י', shortcutAnswer:'מקצר תנועה', userLabel:'שם משתמש', userPlaceholder:'לדוגמה: rif', initUserOk:'נוצרה/נמצאה לשונית משתמש ✅', initUserErr:'שגיאת יצירת משתמש: ', saveProgress:'שמור התקדמות', loadProgress:'טען התקדמות', promptVowelWrite:'כתוב על הלוח את התשובה לפי לוח התנועות', level6McqKicker:'שאלה 1 מתוך 2 — הבנה', level6WriteKicker:'שאלה 2 מתוך 2 — כתיבה', level6Choose:'בחר תשובה אחת. אחרי הבחירה תיפתח שאלת כתיבה על אותו נושא.', level6WriteLocked:'בחר קודם תשובה אמריקאית כדי לפתוח את שאלת הכתיבה.', level6Correct:'נכון', level6Wrong:'לא נכון', level6WriteIntro:'עכשיו השתמש באותו סימן/עיצור וכתוב את המילה המבוקשת.', vowelAnswer:'תשובת לוח', thaiName:'שם תאילנדי', localName:'הסבר בעברית', writingRule:'כלל כתיבה', example:'דוגמה', consonantName:'שם העיצור', theme:'לוק',
    syncSaved:'כתובת הסנכרון נשמרה.', uploadOk:'העלאה לענן הצליחה ✅', uploadSent:'העלאה לענן נשלחה בהצלחה ✅', downloadOk:'הורדה מהענן הצליחה ✅', uploadErr:'שגיאת העלאה: ', downloadErr:'שגיאת הורדה: '
  },
  en: {
    langButton:'עברית', eyebrow:'Thai Trainer 🇹🇭 · v1.13', title:'Reading, writing, tones and meaning',
    subtitle:'Write it yourself, reveal the answer, fix it if needed, then mark correct / wrong.',
    levelLabel:'Difficulty level', modeLabel:'Question mode', newQuestion:'New question', clear:'Clear writing', showAnswer:'Show answer', correct:'I got it right', wrong:'I got it wrong',
    correctStat:'Correct', wrongStat:'Wrong', streakStat:'Streak', accuracyStat:'Accuracy',
    syncTitle:'Google Sheets Sync', syncDescription:'Paste your Google Apps Script Web App URL here. Without a URL, progress is saved only on this device.',
    saveUrl:'Save URL', ready:'Ready.', qa:'Internal QA check', install:'Install app',
    level:'Level', vowelLevel:'Vowel Board', questions:'questions', mixed:'Mixed', readMeaning:'Thai → English', meaningWrite:'English → Thai writing', toneMode:'Thai → tone', romanWrite:'Romanization → Thai writing', vowelBoard:'Vowel Board — writing',
    promptRead:'Read the word and write the meaning + tone in English', promptMeaningWrite:'Write the following word in Thai', promptRoman:'Write Thai from the romanization', promptTone:'What is the tone / tone pattern?',
    writeHint:'Write on the whiteboard, then reveal the answer', answerThai:'Thai', roman:'Romanization', meaning:'English', tone:'Tone', selected:'Selected', afterAnswer:'Now you can clear, rewrite correctly, then mark correct / wrong.', clickThaiLetters:'Tap a Thai letter/sign in the answer to see a short note.',
    soundQuestion:'What sound does this sign make?', nameQuestion:'What is the Thai name of this sign?', symbolQuestion:'Which sign matches this name?', boardWordQuestion:'Which board word belongs to this sign?', shortcutQuestion:'What does this sign do?',
    sound:'Sound', signName:'Sign name', boardWord:'Board word', note:'Note', emoji:'Emoji', shortcutAnswer:'shortens a vowel', userLabel:'Username', userPlaceholder:'e.g. rif', initUserOk:'User sheet created/found ✅', initUserErr:'User init error: ', saveProgress:'Save progress', loadProgress:'Load progress', promptVowelWrite:'Write the answer on the board from the vowel board', level6McqKicker:'Question 1 of 2 — understanding', level6WriteKicker:'Question 2 of 2 — writing', level6Choose:'Choose one answer. After choosing, a writing question about the same topic will open.', level6WriteLocked:'Choose a multiple-choice answer first to unlock the writing task.', level6Correct:'Correct', level6Wrong:'Not correct', level6WriteIntro:'Now use the same sign/consonant and write the requested word.', vowelAnswer:'Vowel-board answer', thaiName:'Thai name', localName:'English explanation', writingRule:'Writing rule', example:'Example', consonantName:'Consonant name', theme:'Theme',
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
  {id:'apkg_032',level:5,thai:'ได้ยินว่า',roman:'daai yin waa',hebrew:'לשמוע ש...',english:'to hear that...',tone:'not_drilled',source:'apkg_almog5'}
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
  select.innerHTML = '';
  for(let i=1;i<=6;i++){
    const o = document.createElement('option');
    o.value = String(i);
    o.textContent = i === 6 ? `${t('level')} 6 — ${t('vowelLevel')}` : `${t('level')} ${i}`;
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
  const level = Number(el('levelSelect').value || 1);
  const mode = level === 6 ? 'level6_pair' : pickMode();
  if(mode === 'level6_pair'){
    current = makeLevel6PairedQuestion();
  } else if(mode === 'vowel_write'){
    current = makeVowelWritingQuestion();
  } else if(mode === 'vowel_board'){
    current = makeVowelQuestion();
  } else {
    let items = WORDS.filter(w=>w.level === level);
    if(mode === 'tone'){
      const toneItems = items.filter(hasDrillableTone);
      if(toneItems.length) items = toneItems;
    }
    current = { item: weightedPick(items), mode };
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
  const itemLevel = (mode === 'vowel_board' || mode === 'vowel_write' || mode === 'level6_pair') ? 6 : item.level;
  el('levelBadge').textContent = itemLevel === 6 ? `${t('level')} 6 — ${t('vowelLevel')}` : `${t('level')} ${itemLevel}`;
  el('modeBadge').textContent = modeLabel(mode);
  el('progressBadge').textContent = `${state.stats.total || 0} ${t('questions')}`;
  el('answerBox').hidden = true;
  renderLevel6Pair(current);
  renderStudyCard(current);
  const canvasWrap = document.querySelector('.canvas-wrap');
  if(canvasWrap) canvasWrap.hidden = (mode === 'level6_pair' && !level6McqAnswered);
  el('clearBtn').hidden = (mode === 'level6_pair' && !level6McqAnswered);
  el('showAnswerBtn').hidden = (mode === 'level6_pair' && !level6McqAnswered);
  el('toneChoices').hidden = !(mode === 'tone' || mode === 'vowel_board');
  el('toneChoices').innerHTML = '';

  if(mode === 'level6_pair'){
    el('promptText').textContent = t('level6Choose');
    el('questionText').hidden = true;
    el('questionText').textContent = '';
    el('questionHint').textContent = level6McqAnswered ? t('level6WriteIntro') : t('level6WriteLocked');
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
  if(!q || q.mode !== 'level6_pair'){
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
        <span class="pair-label">${escapeHtml(item.kind === 'consonant' ? (isHebrew() ? 'עיצור' : 'Consonant') : item.kind === 'vowel' ? (isHebrew() ? 'תנועה' : 'Vowel') : (isHebrew() ? 'סימן מיוחד' : 'Special sign'))} ${escapeHtml(item.emoji)}</span>
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
        <div class="study-title">${escapeHtml(item.name)} <span>${escapeHtml(item.emoji)}</span></div>
        <div class="study-subtitle">${escapeHtml(local)}</div>
      </div>
    </div>
    <div class="study-grid">
      <div><b>${t('sound')}:</b> <span dir="ltr">${escapeHtml(isHebrew()?item.he:item.sound)}</span></div>
      <div><b>${t('boardWord')}:</b> <span class="thai-inline">${escapeHtml(item.boardWord)}</span> — ${escapeHtml(meaning)}</div>
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
  return {read_meaning:t('readMeaning'),hebrew_write:t('meaningWrite'),tone:t('toneMode'),roman_write:t('romanWrite'),vowel_board:t('vowelBoard'),vowel_write:t('vowelBoard'),level6_pair:t('vowelBoard')}[mode] || t('mixed');
}
function showAnswer(){
  const {item, mode} = current;
  if(mode === 'level6_pair'){
    if(!level6McqAnswered){ return; }
    el('answerBox').innerHTML = `
      ${clickableThaiAnswerHtml(current.expected)}
      <div><b>${t('vowelAnswer')}:</b> <span class="mcq-answer">${escapeHtml(current.expected)}</span></div>
      <div><b>${t('thaiName')}:</b> ${escapeHtml(item.name)}</div>
      <div><b>${t('localName')}:</b> ${escapeHtml(localLabel(item))}</div>
      <div><b>${t('sound')}:</b> <span dir="ltr">${escapeHtml(isHebrew()?item.he:item.sound)}</span></div>
      <div><b>${t('boardWord')}:</b> <span class="thai-inline">${escapeHtml(item.boardWord)}</span> ${item.emoji} — ${escapeHtml(localMeaning(item))}</div>
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
      <div><b>${t('thaiName')}:</b> ${escapeHtml(item.name)}</div>
      <div><b>${t('localName')}:</b> ${escapeHtml(isHebrew()?item.localHe:item.localEn)}</div>
      <div><b>${t('sound')}:</b> <span dir="ltr">${escapeHtml(isHebrew()?item.he:item.sound)}</span></div>
      <div><b>${t('boardWord')}:</b> <span class="thai-inline">${escapeHtml(item.boardWord)}</span> ${item.emoji} — ${escapeHtml(isHebrew()?item.boardMeaningHe:item.boardMeaningEn)}</div>
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
      <div><b>${t('signName')}:</b> ${escapeHtml(item.name)}</div>
      <div><b>${t('boardWord')}:</b> <span class="thai-inline">${escapeHtml(item.boardWord)}</span> ${item.emoji} — ${escapeHtml(isHebrew()?item.boardMeaningHe:item.boardMeaningEn)}</div>
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
  canvas.addEventListener('pointerdown', e=>{ e.preventDefault(); canvas.setPointerCapture(e.pointerId); drawing=true; lastPoint=getPoint(e); ctx.beginPath(); ctx.moveTo(lastPoint.x,lastPoint.y); });
  canvas.addEventListener('pointermove', e=>{ if(!drawing) return; e.preventDefault(); const p=getPoint(e); ctx.lineTo(p.x,p.y); ctx.stroke(); lastPoint=p; });
  const stop = e=>{ if(!drawing) return; e.preventDefault(); drawing=false; lastPoint=null; };
  canvas.addEventListener('pointerup', stop); canvas.addEventListener('pointercancel', stop); canvas.addEventListener('pointerleave', stop);

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
  lines.push(`Board level: ${BOARD_ITEMS.length} signs/consonants × writing question types`);
  lines.unshift(ok ? 'QA PASS' : 'QA FAILED');
  el('qaOutput').textContent = lines.join('\n');
}

document.addEventListener('DOMContentLoaded', init);
