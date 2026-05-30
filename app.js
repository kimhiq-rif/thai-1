'use strict';

const APP_VERSION = '1.8.0-vowel-board-writing-user-tabs';

const TONES = [
  { id:'mid', he:'אמצעי', en:'mid' },
  { id:'low', he:'נמוך', en:'low' },
  { id:'falling', he:'יורד', en:'falling' },
  { id:'high', he:'גבוה', en:'high' },
  { id:'rising', he:'עולה', en:'rising' }
];


const I18N = {
  he: {
    langButton:'English', eyebrow:'Thai Trainer 🇹🇭 · v1.8', title:'קריאה, כתיבה, טונים ומשמעות',
    subtitle:'כותבים לבד, מציגים תשובה, מתקנים אם צריך, ואז מסמנים צדקתי / טעיתי.',
    levelLabel:'רמת קושי', modeLabel:'מצב שאלה', newQuestion:'שאלה חדשה', clear:'נקה כתיבה', showAnswer:'הצג תשובה', correct:'צדקתי', wrong:'טעיתי',
    correctStat:'נכונות', wrongStat:'טעויות', streakStat:'רצף', accuracyStat:'דיוק',
    syncTitle:'סנכרון Google Sheets', syncDescription:'הדבק כאן את כתובת ה־Web App של Google Apps Script. בלי כתובת — ההתקדמות נשמרת רק במכשיר הזה.',
    saveUrl:'שמור כתובת', ready:'מוכן.', qa:'בדיקת תקינות פנימית', install:'התקנה למסך הבית',
    level:'רמה', vowelLevel:'לוח תנועות', questions:'שאלות', mixed:'מעורב', readMeaning:'תאית → עברית', meaningWrite:'עברית → כתיבה בתאית', toneMode:'תאית → טון', romanWrite:'תעתיק → כתיבה בתאית', vowelBoard:'לוח תנועות — כתיבה',
    promptRead:'קרא את המילה וכתוב בעברית את המשמעות + הטון', promptMeaningWrite:'כתוב בתאית את המילה הבאה', promptRoman:'כתוב בתאית לפי התעתיק', promptTone:'מה הטון של המילה / תבנית הטונים?',
    writeHint:'כתוב על הלוח הלבן ואז הצג תשובה', answerThai:'תאית', roman:'תעתיק', meaning:'עברית', tone:'טון', selected:'בחרת', afterAnswer:'עכשיו אפשר לנקות, לכתוב שוב נכון, ואז לסמן צדקתי / טעיתי.',
    soundQuestion:'מה הצליל של הסימן?', nameQuestion:'מה שם הסימן בתאית?', symbolQuestion:'איזה סימן מתאים לשם?', boardWordQuestion:'איזו מילת לוח שייכת לסימן?', shortcutQuestion:'מה התפקיד של הסימן?',
    sound:'צליל', signName:'שם הסימן', boardWord:'מילת לוח', note:'הערה', emoji:'אימוג׳י', shortcutAnswer:'מקצר תנועה', userLabel:'שם משתמש', userPlaceholder:'לדוגמה: rif', initUserOk:'נוצרה/נמצאה לשונית משתמש ✅', initUserErr:'שגיאת יצירת משתמש: ', saveProgress:'שמור התקדמות', loadProgress:'טען התקדמות', promptVowelWrite:'כתוב על הלוח את התשובה לפי לוח התנועות', vowelAnswer:'תשובת לוח',
    syncSaved:'כתובת הסנכרון נשמרה.', uploadOk:'העלאה לענן הצליחה ✅', uploadSent:'העלאה לענן נשלחה בהצלחה ✅', downloadOk:'הורדה מהענן הצליחה ✅', uploadErr:'שגיאת העלאה: ', downloadErr:'שגיאת הורדה: '
  },
  en: {
    langButton:'עברית', eyebrow:'Thai Trainer 🇹🇭 · v1.8', title:'Reading, writing, tones and meaning',
    subtitle:'Write it yourself, reveal the answer, fix it if needed, then mark correct / wrong.',
    levelLabel:'Difficulty level', modeLabel:'Question mode', newQuestion:'New question', clear:'Clear writing', showAnswer:'Show answer', correct:'I got it right', wrong:'I got it wrong',
    correctStat:'Correct', wrongStat:'Wrong', streakStat:'Streak', accuracyStat:'Accuracy',
    syncTitle:'Google Sheets Sync', syncDescription:'Paste your Google Apps Script Web App URL here. Without a URL, progress is saved only on this device.',
    saveUrl:'Save URL', ready:'Ready.', qa:'Internal QA check', install:'Install app',
    level:'Level', vowelLevel:'Vowel Board', questions:'questions', mixed:'Mixed', readMeaning:'Thai → English', meaningWrite:'English → Thai writing', toneMode:'Thai → tone', romanWrite:'Romanization → Thai writing', vowelBoard:'Vowel Board — writing',
    promptRead:'Read the word and write the meaning + tone in English', promptMeaningWrite:'Write the following word in Thai', promptRoman:'Write Thai from the romanization', promptTone:'What is the tone / tone pattern?',
    writeHint:'Write on the whiteboard, then reveal the answer', answerThai:'Thai', roman:'Romanization', meaning:'English', tone:'Tone', selected:'Selected', afterAnswer:'Now you can clear, rewrite correctly, then mark correct / wrong.',
    soundQuestion:'What sound does this sign make?', nameQuestion:'What is the Thai name of this sign?', symbolQuestion:'Which sign matches this name?', boardWordQuestion:'Which board word belongs to this sign?', shortcutQuestion:'What does this sign do?',
    sound:'Sound', signName:'Sign name', boardWord:'Board word', note:'Note', emoji:'Emoji', shortcutAnswer:'shortens a vowel', userLabel:'Username', userPlaceholder:'e.g. rif', initUserOk:'User sheet created/found ✅', initUserErr:'User init error: ', saveProgress:'Save progress', loadProgress:'Load progress', promptVowelWrite:'Write the answer on the board from the vowel board', vowelAnswer:'Vowel-board answer',
    syncSaved:'Sync URL saved.', uploadOk:'Cloud upload succeeded ✅', uploadSent:'Cloud upload was sent ✅', downloadOk:'Cloud download succeeded ✅', uploadErr:'Upload error: ', downloadErr:'Download error: '
  }
};
function lang(){ return state && state.lang ? state.lang : 'he'; }
function t(key){ return (I18N[lang()] && I18N[lang()][key]) || I18N.he[key] || key; }
function isHebrew(){ return lang() === 'he'; }
function itemMeaning(item){ return isHebrew() ? item.hebrew : (item.english || item.hebrew); }

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
  {id:'l5_015',level:5,thai:'เจอกัน',roman:'jer gan',hebrew:'נתראה',english:'see you',tone:'mid-mid'}
];


const VOWELS = [
  {id:'v_ak', symbol:'ะ', name:'สระอะ', sound:'a short', he:'a קצר', boardWord:'กระทะ', boardMeaningHe:'מחבת', boardMeaningEn:'pan', emoji:'🍳', noteHe:'תנועה קצרה', noteEn:'short vowel'},
  {id:'v_aa', symbol:'า', name:'สระอา', sound:'aa long', he:'aa ארוך', boardWord:'ตา', boardMeaningHe:'עין', boardMeaningEn:'eye', emoji:'👁️', noteHe:'תנועה ארוכה', noteEn:'long vowel'},
  {id:'v_i', symbol:'ิ', name:'สระอิ', sound:'i short', he:'i קצר', boardWord:'คิด', boardMeaningHe:'לחשוב', boardMeaningEn:'to think', emoji:'💭', noteHe:'יושב מעל העיצור', noteEn:'written above the consonant'},
  {id:'v_ii', symbol:'ี', name:'สระอี', sound:'ii long', he:'ii ארוך', boardWord:'สี', boardMeaningHe:'צבע', boardMeaningEn:'color', emoji:'🎨', noteHe:'כמו ิ אבל ארוך', noteEn:'like ิ, but long'},
  {id:'v_eu', symbol:'ึ', name:'สระอึ', sound:'eu short', he:'eu קצר', boardWord:'ตึก', boardMeaningHe:'בניין', boardMeaningEn:'building', emoji:'🏢', noteHe:'תנועת eu קצרה', noteEn:'short eu vowel'},
  {id:'v_euu', symbol:'ื', name:'สระอือ', sound:'euu long', he:'euu ארוך', boardWord:'มือ', boardMeaningHe:'יד', boardMeaningEn:'hand', emoji:'✋', noteHe:'תנועת eu ארוכה; לעיתים עם อ', noteEn:'long eu vowel; often with อ'},
  {id:'v_u', symbol:'ุ', name:'สระอุ', sound:'u short', he:'u קצר', boardWord:'ถุง', boardMeaningHe:'שקית', boardMeaningEn:'bag', emoji:'🛍️', noteHe:'יושב מתחת לעיצור', noteEn:'written below the consonant'},
  {id:'v_uu', symbol:'ู', name:'สระอู', sound:'uu long', he:'uu ארוך', boardWord:'งู', boardMeaningHe:'נחש', boardMeaningEn:'snake', emoji:'🐍', noteHe:'כמו ุ אבל ארוך', noteEn:'like ุ, but long'},
  {id:'v_e_short', symbol:'เ-ะ', name:'สระเอะ', sound:'e short', he:'e קצר', boardWord:'เตะ', boardMeaningHe:'לבעוט', boardMeaningEn:'to kick', emoji:'⚽', noteHe:'קצר; עם עיצור סופי מתקצר לרוב בעזרת ็', noteEn:'short; with a final consonant often shortened using ็'},
  {id:'v_e_long', symbol:'เ-', name:'สระเอ', sound:'ee / e long', he:'e ארוך', boardWord:'เท', boardMeaningHe:'לשפוך', boardMeaningEn:'to pour', emoji:'🥛', noteHe:'נכתב לפני העיצור', noteEn:'written before the consonant'},
  {id:'v_ae_short', symbol:'แ-ะ', name:'สระแอะ', sound:'ae short', he:'ae קצר', boardWord:'แกะ', boardMeaningHe:'כבשה / לקלף', boardMeaningEn:'sheep / to peel', emoji:'🐑', noteHe:'קצר; עם עיצור סופי מתקצר לרוב בעזרת ็', noteEn:'short; with a final consonant often shortened using ็'},
  {id:'v_ae', symbol:'แ-', name:'สระแอ', sound:'ae', he:'ae', boardWord:'แขน', boardMeaningHe:'זרוע', boardMeaningEn:'arm', emoji:'💪', noteHe:'נכתב לפני העיצור', noteEn:'written before the consonant'},
  {id:'v_o_short', symbol:'โ-ะ', name:'สระโอะ', sound:'o short', he:'o קצר', boardWord:'โต๊ะ', boardMeaningHe:'שולחן', boardMeaningEn:'table', emoji:'🪑', noteHe:'תנועה קצרה; לעיתים נעלמת בכתיב עם עיצור סופי', noteEn:'short vowel; often unwritten with a final consonant'},
  {id:'v_o', symbol:'โ-', name:'สระโอ', sound:'o / oo', he:'o / oo', boardWord:'โคม', boardMeaningHe:'מנורה', boardMeaningEn:'lamp', emoji:'💡', noteHe:'נכתב לפני העיצור', noteEn:'written before the consonant'},
  {id:'v_aw_short', symbol:'เ-าะ', name:'สระเอาะ', sound:'aw / ɔ short', he:'aw / ɔ קצר', boardWord:'เงาะ', boardMeaningHe:'רמבוטן', boardMeaningEn:'rambutan', emoji:'🍈', noteHe:'תנועת o פתוחה קצרה', noteEn:'short open-o vowel'},
  {id:'v_aw_long', symbol:'อ', name:'สระออ', sound:'aw / ɔɔ long', he:'aw / ɔɔ ארוך', boardWord:'หมอ', boardMeaningHe:'רופא', boardMeaningEn:'doctor', emoji:'🧑‍⚕️', noteHe:'תנועת o פתוחה ארוכה; อ יכול להיות גם עיצור נשא', noteEn:'long open-o vowel; อ can also carry vowels'},
  {id:'v_er_short', symbol:'เ-อะ', name:'สระเออะ', sound:'er short', he:'er קצר', boardWord:'เลอะ', boardMeaningHe:'מלוכלך', boardMeaningEn:'dirty / messy', emoji:'🟤', noteHe:'קצר', noteEn:'short vowel'},
  {id:'v_er_long', symbol:'เ-อ', name:'สระเออ', sound:'er long', he:'er ארוך', boardWord:'เธอ', boardMeaningHe:'את/היא', boardMeaningEn:'you / she', emoji:'👧', noteHe:'ארוך', noteEn:'long vowel'},
  {id:'v_ia_short', symbol:'เ-ียะ', name:'สระเอียะ', sound:'ia short', he:'ia קצר', boardWord:'ขนมเปี๊ยะ', boardMeaningHe:'מאפה / עוגייה', boardMeaningEn:'pastry', emoji:'🥮', noteHe:'תנועה מורכבת קצרה', noteEn:'short compound vowel'},
  {id:'v_ia_long', symbol:'เ-ีย', name:'สระเอีย', sound:'ia long', he:'ia ארוך', boardWord:'เปีย', boardMeaningHe:'צמה', boardMeaningEn:'braid', emoji:'👧', noteHe:'תנועה מורכבת ארוכה', noteEn:'long compound vowel'},
  {id:'v_uea_short', symbol:'เ-ือะ', name:'สระเอือะ', sound:'uea short', he:'uea קצר', boardWord:'-', boardMeaningHe:'נדיר בלוח', boardMeaningEn:'rare on the board', emoji:'🔤', noteHe:'תנועה מורכבת קצרה נדירה', noteEn:'rare short compound vowel'},
  {id:'v_uea_long', symbol:'เ-ือ', name:'สระเอือ', sound:'uea long', he:'uea ארוך', boardWord:'เสือ', boardMeaningHe:'נמר', boardMeaningEn:'tiger', emoji:'🐯', noteHe:'תנועה מורכבת ארוכה', noteEn:'long compound vowel'},
  {id:'v_ua_short', symbol:'-ัวะ', name:'สระอัวะ', sound:'ua short', he:'ua קצר', boardWord:'ยัวะ', boardMeaningHe:'כועס/מעוצבן', boardMeaningEn:'angry / irritated', emoji:'😠', noteHe:'תנועה מורכבת קצרה', noteEn:'short compound vowel'},
  {id:'v_ua_long', symbol:'-ัว', name:'สระอัว', sound:'ua long', he:'ua ארוך', boardWord:'บัว', boardMeaningHe:'לוטוס', boardMeaningEn:'lotus', emoji:'🪷', noteHe:'תנועה מורכבת ארוכה; לפעמים מתקצרת בכתיב בלי ะ', noteEn:'long compound vowel; spelling can shorten in closed syllables'},
  {id:'v_am', symbol:'ำ', name:'สระอำ', sound:'am', he:'am', boardWord:'ขำ', boardMeaningHe:'לצחוק / מצחיק', boardMeaningEn:'to laugh / funny', emoji:'😆', noteHe:'תנועה + m מובנה', noteEn:'vowel with built-in m'},
  {id:'v_ai_mai_muan', symbol:'ใ-', name:'สระใอ', sound:'ai', he:'ai', boardWord:'ใบ', boardMeaningHe:'עלה / דף', boardMeaningEn:'leaf / sheet', emoji:'🍃', noteHe:'אחד משני סימני ai', noteEn:'one of two ai signs'},
  {id:'v_ai_mai_malai', symbol:'ไ-', name:'สระไอ', sound:'ai', he:'ai', boardWord:'ไก่', boardMeaningHe:'תרנגולת', boardMeaningEn:'chicken', emoji:'🐔', noteHe:'אחד משני סימני ai', noteEn:'one of two ai signs'},
  {id:'v_ao', symbol:'เ-า', name:'สระเอา', sound:'ao', he:'ao', boardWord:'เขา', boardMeaningHe:'הר / הוא', boardMeaningEn:'mountain / he', emoji:'⛰️', noteHe:'תנועה מורכבת ao', noteEn:'ao compound vowel'},
  {id:'v_rue', symbol:'ฤ', name:'ฤ', sound:'rue / ri / roe', he:'rue / ri / roe', boardWord:'ฤดู', boardMeaningHe:'עונה', boardMeaningEn:'season', emoji:'🌧️', noteHe:'סימן מיוחד, לא תנועה רגילה', noteEn:'special sign, not a normal vowel'},
  {id:'v_rue_long', symbol:'ฤา', name:'ฤา', sound:'rue long', he:'rue ארוך', boardWord:'ฤาษี', boardMeaningHe:'נזיר/חכם', boardMeaningEn:'hermit / sage', emoji:'🧙‍♂️', noteHe:'סימן מיוחד נדיר יותר', noteEn:'rarer special sign'},
  {id:'v_lue', symbol:'ฦ', name:'ฦ', sound:'lue', he:'lue', boardWord:'-', boardMeaningHe:'כמעט לא בשימוש כיום', boardMeaningEn:'almost unused today', emoji:'❌', noteHe:'סימן עתיק/נדיר', noteEn:'archaic/rare sign'},
  {id:'v_lue_long', symbol:'ฦา', name:'ฦา', sound:'lue long', he:'lue ארוך', boardWord:'-', boardMeaningHe:'כמעט לא בשימוש כיום', boardMeaningEn:'almost unused today', emoji:'❌', noteHe:'סימן עתיק/נדיר', noteEn:'archaic/rare sign'},
  {id:'v_mai_taikhu', symbol:'็', name:'ไม้ไต่คู้', sound:'shortener', he:'מקצר תנועה', boardWord:'เด็ก / เป็น / แข็ง', boardMeaningHe:'ילד / להיות / קשה', boardMeaningEn:'child / to be / hard', emoji:'✂️', noteHe:'לא טון — מקצר תנועה בכתיב עם עיצור סופי', noteEn:'not a tone mark — it shortens a vowel when there is a final consonant'}
];

const MODES = ['read_meaning','hebrew_write','tone','roman_write'];
const MODE_OPTIONS = ['mixed','read_meaning','hebrew_write','tone','roman_write'];
const STORAGE_KEY = 'thaiTrainerStateV3';
const DEFAULT_SYNC_URL = 'https://script.google.com/macros/s/AKfycbzbr2OfX-0WVpJqPuMgQ_ye-kUCGdyAjGvF3Mv3wCugy_n9_x36x6l6ld6oecD4F7Ru/exec';
let deferredInstallPrompt = null;
let state = loadState();
let current = null;
let selectedTone = null;
let selectedVowelAnswer = null;
let drawing = false;
let lastPoint = null;

const el = id => document.getElementById(id);
const canvas = el('writeCanvas');
const ctx = canvas.getContext('2d');

function defaultState(){
  return { stats:{correct:0,wrong:0,streak:0,total:0}, itemStats:{}, history:[], syncUrl:'', lastSync:null, lang:'he', userId:'rif' };
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
  setupLevels(); setupModes(); setupCanvas(); setupEvents(); setupPwa(); applyLanguage(); runQA();
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
  el('userIdInput').addEventListener('keydown', e => { if(e.key === 'Enter'){ e.preventDefault(); initUserSheet(); } });
  el('userIdInput').addEventListener('blur', () => { const v = cleanUserId(el('userIdInput').value); if(v && v !== state.userId){ state.userId=v; saveState(); } });
}
function setupPwa(){
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredInstallPrompt=e; el('installBtn').hidden=false; });
  el('installBtn').addEventListener('click', async()=>{ if(deferredInstallPrompt){ deferredInstallPrompt.prompt(); deferredInstallPrompt=null; el('installBtn').hidden=true; }});
}

function applyLanguage(){
  document.documentElement.lang = lang();
  document.documentElement.dir = isHebrew() ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-en', !isHebrew());
  el('eyebrowText').textContent = t('eyebrow');
  el('mainTitle').textContent = t('title');
  el('subtitleText').textContent = t('subtitle');
  el('langToggle').textContent = t('langButton');
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
  const level = Number(el('levelSelect').value || 1);
  const mode = level === 6 ? 'vowel_write' : pickMode();
  if(mode === 'vowel_write'){
    current = makeVowelWritingQuestion();
  } else if(mode === 'vowel_board'){
    current = makeVowelQuestion();
  } else {
    const items = WORDS.filter(w=>w.level === level);
    current = { item: weightedPick(items), mode };
  }
  renderQuestion(); clearCanvas();
}
function sampleChoices(correct, all, count=4){
  const unique = [...new Set(all.filter(Boolean))].filter(x => x !== correct).sort(()=>Math.random()-0.5).slice(0, count-1);
  return [correct, ...unique].sort(()=>Math.random()-0.5);
}
function makeVowelQuestion(){
  const item = VOWELS[Math.floor(Math.random()*VOWELS.length)];
  const types = ['sound','name','symbol','boardWord'];
  if(item.id === 'v_mai_taikhu') types.push('shortcut');
  const qtype = types[Math.floor(Math.random()*types.length)];
  let prompt, question, correct, choices;
  if(qtype === 'sound'){
    prompt = t('soundQuestion'); question = item.symbol; correct = isHebrew() ? item.he : item.sound;
    choices = sampleChoices(correct, VOWELS.map(v=>isHebrew()?v.he:v.sound));
  } else if(qtype === 'name'){
    prompt = t('nameQuestion'); question = item.symbol; correct = item.name;
    choices = sampleChoices(correct, VOWELS.map(v=>v.name));
  } else if(qtype === 'symbol'){
    prompt = t('symbolQuestion'); question = item.name; correct = item.symbol;
    choices = sampleChoices(correct, VOWELS.map(v=>v.symbol));
  } else if(qtype === 'shortcut'){
    prompt = t('shortcutQuestion'); question = item.symbol; correct = t('shortcutAnswer');
    choices = isHebrew() ? ['מקצר תנועה','סימן טון','מאריך תנועה','עיצור סופי'] : ['shortens a vowel','tone mark','lengthens a vowel','final consonant'];
  } else {
    prompt = t('boardWordQuestion'); question = item.symbol; correct = `${item.boardWord} ${item.emoji}`;
    choices = sampleChoices(correct, VOWELS.map(v=>`${v.boardWord} ${v.emoji}`));
  }
  return { item, mode:'vowel_board', qtype, prompt, question, correct, choices };
}
function makeVowelWritingQuestion(){
  const item = VOWELS[Math.floor(Math.random()*VOWELS.length)];
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
  const itemLevel = (mode === 'vowel_board' || mode === 'vowel_write') ? 6 : item.level;
  el('levelBadge').textContent = itemLevel === 6 ? `${t('level')} 6 — ${t('vowelLevel')}` : `${t('level')} ${itemLevel}`;
  el('modeBadge').textContent = modeLabel(mode);
  el('progressBadge').textContent = `${state.stats.total || 0} ${t('questions')}`;
  el('answerBox').hidden = true;
  el('toneChoices').hidden = !(mode === 'tone' || mode === 'vowel_board');
  el('toneChoices').innerHTML = '';

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
  return {read_meaning:t('readMeaning'),hebrew_write:t('meaningWrite'),tone:t('toneMode'),roman_write:t('romanWrite'),vowel_board:t('vowelBoard'),vowel_write:t('vowelBoard')}[mode] || t('mixed');
}
function showAnswer(){
  const {item, mode} = current;
  if(mode === 'vowel_write'){
    el('answerBox').innerHTML = `
      <div class="thai-answer">${escapeHtml(current.expected)}</div>
      <div><b>${t('vowelAnswer')}:</b> <span class="mcq-answer">${escapeHtml(current.expected)}</span></div>
      <div><b>${t('signName')}:</b> ${escapeHtml(item.name)}</div>
      <div><b>${t('sound')}:</b> <span dir="ltr">${escapeHtml(isHebrew()?item.he:item.sound)}</span></div>
      <div><b>${t('boardWord')}:</b> <span class="thai-inline">${escapeHtml(item.boardWord)}</span> ${item.emoji} — ${escapeHtml(isHebrew()?item.boardMeaningHe:item.boardMeaningEn)}</div>
      <div class="vowel-note"><b>${t('note')}:</b> ${escapeHtml(isHebrew()?item.noteHe:item.noteEn)}</div>
      <div class="hint">${t('afterAnswer')}</div>`;
    el('answerBox').hidden = false;
    return;
  }
  if(mode === 'vowel_board'){
    const selected = selectedVowelAnswer ? `<div><b>${t('selected')}:</b> <span class="mcq-answer">${escapeHtml(selectedVowelAnswer)}</span></div>` : '';
    el('answerBox').innerHTML = `
      <div class="thai-answer">${escapeHtml(item.symbol)}</div>
      <div><b>${t('sound')}:</b> <span dir="ltr">${escapeHtml(isHebrew()?item.he:item.sound)}</span></div>
      <div><b>${t('signName')}:</b> ${escapeHtml(item.name)}</div>
      <div><b>${t('boardWord')}:</b> <span class="thai-inline">${escapeHtml(item.boardWord)}</span> ${item.emoji} — ${escapeHtml(isHebrew()?item.boardMeaningHe:item.boardMeaningEn)}</div>
      <div class="vowel-note"><b>${t('note')}:</b> ${escapeHtml(isHebrew()?item.noteHe:item.noteEn)}</div>
      <div><b>${isHebrew()?'תשובה':'Answer'}:</b> <span class="mcq-answer">${escapeHtml(current.correct)}</span></div>
      ${selected}`;
    el('answerBox').hidden = false;
    return;
  }
  const autoTone = mode === 'tone' && selectedTone ? `<div><b>${t('selected')}:</b> ${toneToHeb(selectedTone)}</div>` : '';
  el('answerBox').innerHTML = `
    <div class="thai-answer">${escapeHtml(item.thai)}</div>
    <div><b>${t('roman')}:</b> <span dir="ltr">${escapeHtml(item.roman)}</span></div>
    <div><b>${t('meaning')}:</b> ${escapeHtml(itemMeaning(item))}</div>
    <div><b>${t('tone')}:</b> ${escapeHtml(toneToHeb(item.tone))} <span dir="ltr">(${escapeHtml(item.tone)})</span></div>
    ${autoTone}
    <div class="hint">${t('afterAnswer')}</div>`;
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
  lines.push(`Vowel board: ${VOWELS.length} signs × writing question types`);
  lines.unshift(ok ? 'QA PASS' : 'QA FAILED');
  el('qaOutput').textContent = lines.join('\n');
}

document.addEventListener('DOMContentLoaded', init);
