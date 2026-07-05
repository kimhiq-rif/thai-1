'use strict';

const APP_VERSION = '1.25.20-answer-box-timer-fix';
const PROJECT_OWNER = Object.freeze({
  company:'kimคcode',
  product:'Thai Trainer',
  imprint:'kimคcode::thai-trainer::2026-06-04::v1.25.20'
});

const TONES = [
  { id:'mid', he:'אמצעי', en:'mid' },
  { id:'low', he:'נמוך', en:'low' },
  { id:'falling', he:'יורד', en:'falling' },
  { id:'high', he:'גבוה', en:'high' },
  { id:'rising', he:'עולה', en:'rising' }
];


const I18N = {
  he: {
    langButton:'English', eyebrow:'Thai Trainer 🇹🇭 · v1.25.20', title:'קריאה, כתיבה, טונים ומשמעות',
    subtitle:'כותבים לבד, מציגים תשובה, מתקנים אם צריך, ואז מסמנים צדקתי / טעיתי.',
    levelLabel:'רמת קושי', modeLabel:'מצב שאלה', newQuestion:'שאלה חדשה', clear:'נקה כתיבה', eraser:'מחק', eraserActive:'מחק פעיל', eraserTitle:'הפעל/כבה מחק מקומי', showAnswer:'הצג תשובה', correct:'צדקתי', wrong:'טעיתי',
    correctStat:'נכונות', wrongStat:'טעויות', streakStat:'רצף', accuracyStat:'דיוק',
    syncTitle:'סנכרון Google Sheets', syncDescription:'כדי לשמור או לשחזר התקדמות ממכשיר אחר, הזן את אותו שם משתמש ולחץ שמור או טען התקדמות.',
    saveUrl:'שמור כתובת', resetSyncUrl:'שחזר כתובת ברירת מחדל', syncAdvanced:'אפשרויות מתקדמות', ready:'מוכן.', qa:'בדיקת תקינות פנימית', install:'התקן אותי', shareApp:'שתף אפליקציה',
    level:'רמה', vowelLevel:'לוח תנועות', foundationLevel:'רמה 1.2 — יסודות אותיות ותנועות', questions:'שאלות', mixed:'מעורב', readMeaning:'תאית → עברית', meaningWrite:'עברית → כתיבה בתאית', toneMode:'תאית → טון', romanWrite:'תעתיק → כתיבה בתאית', vowelBoard:'לוח תנועות — כתיבה',
    promptRead:'קרא את המילה וכתוב בעברית את המשמעות + הטון', promptMeaningWrite:'כתוב בתאית את המילה הבאה', promptRoman:'כתוב בתאית לפי התעתיק', promptTone:'מה הטון של המילה / תבנית הטונים?',
    writeHint:'כתוב על הלוח הלבן ואז הצג תשובה', answerThai:'תאית', roman:'תעתיק', meaning:'עברית', tone:'טון', selected:'בחרת', afterAnswer:'עכשיו אפשר לנקות, לכתוב שוב נכון, ואז לסמן צדקתי / טעיתי.', clickThaiLetters:'לחץ על אות/סימן בתשובה כדי לראות מידע קצר.',
    soundQuestion:'מה הצליל של הסימן?', nameQuestion:'מה שם הסימן בתאית?', symbolQuestion:'איזה סימן מתאים לשם?', boardWordQuestion:'איזו מילת לוח שייכת לסימן?', shortcutQuestion:'מה התפקיד של הסימן?',
    sound:'צליל', signName:'שם הסימן', boardWord:'מילת לוח', note:'הערה', emoji:'אימוג׳י', shortcutAnswer:'מקצר תנועה', userLabel:'שם משתמש', userPlaceholder:'לדוגמה: rif', initUserOk:'נוצרה/נמצאה לשונית משתמש ✅', initUserErr:'שגיאת יצירת משתמש: ', saveProgress:'שמור התקדמות', loadProgress:'טען התקדמות', testSync:'בדוק חיבור', openSyncTest:'פתח בדיקה', promptVowelWrite:'כתוב על הלוח את התשובה לפי לוח התנועות', level6McqKicker:'שאלה 1 מתוך 2 — הבנה', level6WriteKicker:'שאלה 2 מתוך 2 — כתיבה', level6Choose:'בחר תשובה אחת. אחרי הבחירה תיפתח שאלת כתיבה על אותו נושא.', level12Choose:'בחר תשובה אחת. אחרי הבחירה תיפתח שאלת כתיבה על אותו סימן/אות.', level12WriteIntro:'עכשיו כתוב את הסימן/האות או מילת הלוח מאותו פריט.', level6WriteLocked:'בחר קודם תשובה אמריקאית כדי לפתוח את שאלת הכתיבה.', level6Correct:'נכון', level6Wrong:'לא נכון', level6WriteIntro:'עכשיו השתמש באותו סימן/עיצור וכתוב את המילה המבוקשת.', vowelAnswer:'תשובת לוח', thaiName:'שם תאילנדי', localName:'הסבר בעברית', writingRule:'כלל כתיבה', example:'דוגמה', consonantName:'שם העיצור', theme:'לוק',
    syncSaved:'כתובת הסנכרון נשמרה.', syncUrlReset:'כתובת ברירת המחדל שוחזרה.', uploadOk:'ההתקדמות נשמרה בענן ✅', uploadSent:'ההתקדמות נשלחה לענן ✅', downloadOk:'ההתקדמות נטענה בהצלחה ✅', uploadErr:'שגיאת שמירה: ', downloadErr:'שגיאת טעינה: ', syncTestOk:'החיבור ל־Google Apps Script עובד ✅', syncTestErr:'בדיקת החיבור נכשלה: ', scriptBlockedHe:'הטעינה מגוגל נכשלה. האפליקציה תנסה מסלול חלופי; אם זה חוזר, לחץ "פתח בדיקה" כדי לראות את תשובת Google.', shareOk:'קישור לאפליקציה הועתק ✅', shareErr:'לא הצלחתי לשתף כרגע. אפשר להעתיק את כתובת האתר ידנית.',
    syncWorking:'עובד...', lastSync:'סנכרון אחרון', neverSynced:'עדיין לא סונכרן', localBackup:'גיבוי מקומי', restoreBackup:'שחזר גיבוי', exportOk:'קובץ גיבוי נשמר במחשב ✅', importOk:'הגיבוי נטען בהצלחה ✅', importErr:'שגיאת שחזור גיבוי: ', importConfirm:'לטעון את הגיבוי ולהחליף את ההתקדמות הנוכחית?',
    installReady:'אפשר להתקין את האפליקציה למסך הבית.', installDone:'אם הופיעה בקשת התקנה, אשר אותה בדפדפן.', installIos:'באייפון/אייפד: לחץ שיתוף ואז "הוסף למסך הבית".', installManual:'אם לא נפתחה התקנה אוטומטית, השתמש בתפריט הדפדפן ובחר Install app / Add to Home screen.',
    dailyPractice:'אימון יומי', dailyOn:'אימון יומי פעיל', dailyDone:'האימון היומי הושלם', dueItems:'לחזרה', weakItems:'חלשים', strongItems:'חזקים', todayGoal:'יעד היום', achievements:'הישגים', penSize:'עובי עט', skins:'סקינים פרימיום', coachPoints:'נק׳ מאמן', nextSkin:'הסקין הבא', voiceCheer:'מחווה קולית ב"צדקתי"', voiceCheerLocked:'ייפתח אחרי הסקין הראשון'
  },
  en: {
    langButton:'עברית', eyebrow:'Thai Trainer 🇹🇭 · v1.25.20', title:'Reading, writing, tones and meaning',
    subtitle:'Write it yourself, reveal the answer, fix it if needed, then mark correct / wrong.',
    levelLabel:'Difficulty level', modeLabel:'Question mode', newQuestion:'New question', clear:'Clear writing', eraser:'Eraser', eraserActive:'Eraser on', eraserTitle:'Toggle local eraser', showAnswer:'Show answer', correct:'I got it right', wrong:'I got it wrong',
    correctStat:'Correct', wrongStat:'Wrong', streakStat:'Streak', accuracyStat:'Accuracy',
    syncTitle:'Google Sheets Sync', syncDescription:'To save or restore progress on another device, enter the same username and click save or load progress.',
    saveUrl:'Save URL', resetSyncUrl:'Restore default URL', syncAdvanced:'Advanced options', ready:'Ready.', qa:'Internal QA check', install:'Install me', shareApp:'Share app',
    level:'Level', vowelLevel:'Vowel Board', foundationLevel:'Level 1.2 — Letter & Vowel Foundation', questions:'questions', mixed:'Mixed', readMeaning:'Thai → English', meaningWrite:'English → Thai writing', toneMode:'Thai → tone', romanWrite:'Romanization → Thai writing', vowelBoard:'Vowel Board — writing',
    promptRead:'Read the word and write the meaning + tone in English', promptMeaningWrite:'Write the following word in Thai', promptRoman:'Write Thai from the romanization', promptTone:'What is the tone / tone pattern?',
    writeHint:'Write on the whiteboard, then reveal the answer', answerThai:'Thai', roman:'Romanization', meaning:'English', tone:'Tone', selected:'Selected', afterAnswer:'Now you can clear, rewrite correctly, then mark correct / wrong.', clickThaiLetters:'Tap a Thai letter/sign in the answer to see a short note.',
    soundQuestion:'What sound does this sign make?', nameQuestion:'What is the Thai name of this sign?', symbolQuestion:'Which sign matches this name?', boardWordQuestion:'Which board word belongs to this sign?', shortcutQuestion:'What does this sign do?',
    sound:'Sound', signName:'Sign name', boardWord:'Board word', note:'Note', emoji:'Emoji', shortcutAnswer:'shortens a vowel', userLabel:'Username', userPlaceholder:'e.g. rif', initUserOk:'User sheet created/found ✅', initUserErr:'User init error: ', saveProgress:'Save progress', loadProgress:'Load progress', testSync:'Test connection', openSyncTest:'Open test', promptVowelWrite:'Write the answer on the board from the vowel board', level6McqKicker:'Question 1 of 2 — understanding', level6WriteKicker:'Question 2 of 2 — writing', level6Choose:'Choose one answer. After choosing, a writing question about the same topic will open.', level12Choose:'Choose one answer. After choosing, a writing task about the same sign/letter will open.', level12WriteIntro:'Now write the sign/letter or board word from the same item.', level6WriteLocked:'Choose a multiple-choice answer first to unlock the writing task.', level6Correct:'Correct', level6Wrong:'Not correct', level6WriteIntro:'Now use the same sign/consonant and write the requested word.', vowelAnswer:'Vowel-board answer', thaiName:'Thai name', localName:'English explanation', writingRule:'Writing rule', example:'Example', consonantName:'Consonant name', theme:'Theme',
    syncSaved:'Sync URL saved.', syncUrlReset:'Default sync URL restored.', uploadOk:'Progress saved to cloud ✅', uploadSent:'Progress was sent to cloud ✅', downloadOk:'Progress loaded successfully ✅', uploadErr:'Save error: ', downloadErr:'Load error: ', syncTestOk:'Google Apps Script connection works ✅', syncTestErr:'Connection test failed: ', scriptBlockedHe:'Google loading failed. The app will try a fallback route; if it repeats, click “Open test” to inspect the Google response.', shareOk:'App link copied ✅', shareErr:'Could not share right now. Copy the site address manually.',
    syncWorking:'Working...', lastSync:'Last sync', neverSynced:'Not synced yet', localBackup:'Local backup', restoreBackup:'Restore backup', exportOk:'Backup file saved ✅', importOk:'Backup restored ✅', importErr:'Backup restore error: ', importConfirm:'Load this backup and replace current progress?',
    installReady:'The app can be installed to your home screen.', installDone:'If an install prompt appeared, confirm it in the browser.', installIos:'On iPhone/iPad: tap Share, then Add to Home Screen.', installManual:'If automatic install did not open, use the browser menu and choose Install app / Add to Home screen.',
    dailyPractice:'Daily practice', dailyOn:'Daily practice active', dailyDone:'Daily practice complete', dueItems:'Due', weakItems:'Weak', strongItems:'Strong', todayGoal:'Today goal', achievements:'Achievements', penSize:'Pen size', skins:'Premium skins', coachPoints:'coach pts', nextSkin:'Next skin', voiceCheer:'Voice cheer on correct', voiceCheerLocked:'Unlocks after first skin'
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
  {id:'l1_016',level:1,cefr:'A1',thai:'พ่อ',roman:'phaw',hebrew:'אבא',english:'father',tone:'falling'},
  {id:'l1_017',level:1,cefr:'A1',thai:'แม่',roman:'mae',hebrew:'אמא',english:'mother',tone:'falling'},
  {id:'l1_018',level:1,cefr:'A1',thai:'เนื้อ',roman:'nuea',hebrew:'בשר',english:'meat',tone:'falling'},
  {id:'l1_019',level:1,cefr:'A1',thai:'ไก่',roman:'gai',hebrew:'תרנגול / עוף',english:'chicken',tone:'low'},
  {id:'l1_020',level:1,cefr:'A1',thai:'แมว',roman:'maew',hebrew:'חתול',english:'cat',tone:'rising'},
  {id:'l1_021',level:1,cefr:'A1',thai:'เล่น',roman:'len',hebrew:'לשחק',english:'to play',tone:'falling'},
  {id:'l1_022',level:1,cefr:'A1',thai:'หิว',roman:'hiw',hebrew:'רעב',english:'hungry',tone:'rising'},
  {id:'l1_023',level:1,cefr:'A1',thai:'ร้อน',roman:'rawn',hebrew:'חם',english:'hot',tone:'high'},
  {id:'l1_024',level:1,cefr:'A1',thai:'หนาว',roman:'naao',hebrew:'קר',english:'cold',tone:'rising'},
  {id:'l1_025',level:1,cefr:'A1',thai:'ดื่ม',roman:'duem',hebrew:'לשתות',english:'to drink',tone:'low'},
  {id:'l1_026',level:1,cefr:'A1',thai:'ชอบ',roman:'chawp',hebrew:'לחבב / לאהוב',english:'to like',tone:'falling'},
  {id:'l1_027',level:1,cefr:'A1',thai:'ใหญ่',roman:'yai',hebrew:'גדול',english:'big',tone:'low'},
  {id:'l1_028',level:1,cefr:'A1',thai:'เล็ก',roman:'lek',hebrew:'קטן',english:'small',tone:'high'},
  {id:'l1_029',level:1,cefr:'A1',thai:'เร็ว',roman:'reo',hebrew:'מהיר',english:'fast',tone:'high'},
  {id:'l1_030',level:1,cefr:'A1',thai:'ช้า',roman:'chaa',hebrew:'איטי',english:'slow',tone:'high'},
  {id:'l1_031',level:1,cefr:'A1',thai:'ตื่น',roman:'dtuen',hebrew:'להתעורר',english:'to wake up',tone:'low'},
  {id:'l1_032',level:1,cefr:'A1',thai:'หมวก',roman:'muak',hebrew:'כובע',english:'hat',tone:'low'},
  {id:'l1_033',level:1,cefr:'A1',thai:'สวย',roman:'suay',hebrew:'יפה',english:'beautiful',tone:'rising'},
  {id:'l1_034',level:1,cefr:'A1',thai:'เพื่อน',roman:'phuean',hebrew:'חבר',english:'friend',tone:'falling'},
  {id:'l1_035',level:1,cefr:'A1',thai:'หมู',roman:'muu',hebrew:'חזיר',english:'pig',tone:'rising'},

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
  {id:'l2_016',level:2,cefr:'A2',thai:'เงิน',roman:'ngern',hebrew:'כסף',english:'money',tone:'mid'},
  {id:'l2_017',level:2,cefr:'A2',thai:'ไข่',roman:'khai',hebrew:'ביצה',english:'egg',tone:'low'},
  {id:'l2_018',level:2,cefr:'A2',thai:'นม',roman:'nom',hebrew:'חלב',english:'milk',tone:'mid'},
  {id:'l2_019',level:2,cefr:'A2',thai:'หมอ',roman:'maw',hebrew:'רופא',english:'doctor',tone:'rising'},
  {id:'l2_020',level:2,cefr:'A2',thai:'ครู',roman:'khruu',hebrew:'מורה',english:'teacher',tone:'mid'},
  {id:'l2_021',level:2,cefr:'A2',thai:'ปี',roman:'bpii',hebrew:'שנה',english:'year',tone:'mid'},
  {id:'l2_022',level:2,cefr:'A2',thai:'วัน',roman:'wan',hebrew:'יום',english:'day',tone:'mid'},
  {id:'l2_023',level:2,cefr:'A2',thai:'เดือน',roman:'duean',hebrew:'חודש',english:'month',tone:'mid'},
  {id:'l2_024',level:2,cefr:'A2',thai:'ฝน',roman:'fon',hebrew:'גשם',english:'rain',tone:'rising'},
  {id:'l2_025',level:2,cefr:'A2',thai:'ดาว',roman:'daao',hebrew:'כוכב',english:'star',tone:'mid'},
  {id:'l2_026',level:2,cefr:'A2',thai:'ไฟ',roman:'fai',hebrew:'אש / אור',english:'fire / light',tone:'mid'},
  {id:'l2_027',level:2,cefr:'A2',thai:'เมือง',roman:'mueang',hebrew:'עיר',english:'city',tone:'mid'},
  {id:'l2_028',level:2,cefr:'A2',thai:'ห้อง',roman:'hawng',hebrew:'חדר',english:'room',tone:'falling'},
  {id:'l2_029',level:2,cefr:'A2',thai:'ร้าน',roman:'raan',hebrew:'חנות',english:'shop',tone:'high'},
  {id:'l2_030',level:2,cefr:'A2',thai:'เสื้อ',roman:'suea',hebrew:'חולצה',english:'shirt',tone:'falling'},
  {id:'l2_031',level:2,cefr:'A2',thai:'ขาย',roman:'khaai',hebrew:'למכור',english:'to sell',tone:'rising'},
  {id:'l2_032',level:2,cefr:'A2',thai:'ทำงาน',roman:'tham ngaan',hebrew:'לעבוד',english:'to work',tone:'mid-mid'},
  {id:'l2_033',level:2,cefr:'A2',thai:'ร้องเพลง',roman:'rawng phleng',hebrew:'לשיר',english:'to sing',tone:'high-mid'},
  {id:'l2_034',level:2,cefr:'A2',thai:'ขับรถ',roman:'khap rot',hebrew:'לנהוג',english:'to drive',tone:'low-high'},
  {id:'l2_035',level:2,cefr:'A2',thai:'ว่ายน้ำ',roman:'waai naam',hebrew:'לשחות',english:'to swim',tone:'falling-high'},

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
  {id:'l3_016',level:3,cefr:'B1',thai:'เวลา',roman:'wee laa',hebrew:'זמן',english:'time',tone:'mid-mid'},
  {id:'l3_017',level:3,cefr:'B1',thai:'ปัญหา',roman:'bpan haa',hebrew:'בעיה',english:'problem',tone:'mid-rising'},
  {id:'l3_018',level:3,cefr:'B1',thai:'อากาศ',roman:'aa gaat',hebrew:'מזג אוויר',english:'weather',tone:'mid-low'},
  {id:'l3_019',level:3,cefr:'B1',thai:'อารมณ์',roman:'aa rom',hebrew:'מצב רוח / רגש',english:'mood / emotion',tone:'mid-mid'},
  {id:'l3_020',level:3,cefr:'B1',thai:'ประเทศ',roman:'bpra theet',hebrew:'מדינה',english:'country',tone:'low-falling'},
  {id:'l3_021',level:3,cefr:'B1',thai:'ภาษา',roman:'phaa saa',hebrew:'שפה',english:'language',tone:'mid-rising'},
  {id:'l3_022',level:3,cefr:'B1',thai:'เพราะ',roman:'phraw',hebrew:'כי / בגלל',english:'because',tone:'high'},
  {id:'l3_023',level:3,cefr:'B1',thai:'ถ้า',roman:'thaa',hebrew:'אם',english:'if',tone:'falling'},
  {id:'l3_024',level:3,cefr:'B1',thai:'ต้อง',roman:'dtawng',hebrew:'חייב / צריך',english:'must / have to',tone:'falling'},
  {id:'l3_025',level:3,cefr:'B1',thai:'อาจ',roman:'aat',hebrew:'אולי / עשוי',english:'may / might',tone:'low'},
  {id:'l3_026',level:3,cefr:'B1',thai:'ควร',roman:'khuan',hebrew:'כדאי / צריך',english:'should',tone:'mid'},
  {id:'l3_027',level:3,cefr:'B1',thai:'เชื่อ',roman:'chuea',hebrew:'להאמין',english:'to believe',tone:'falling'},
  {id:'l3_028',level:3,cefr:'B1',thai:'จำ',roman:'jam',hebrew:'לזכור',english:'to remember',tone:'mid'},
  {id:'l3_029',level:3,cefr:'B1',thai:'ลืม',roman:'luem',hebrew:'לשכוח',english:'to forget',tone:'mid'},
  {id:'l3_030',level:3,cefr:'B1',thai:'คิด',roman:'khit',hebrew:'לחשוב',english:'to think',tone:'high'},
  {id:'l3_031',level:3,cefr:'B1',thai:'รู้สึก',roman:'ruu suek',hebrew:'להרגיש',english:'to feel',tone:'high-low'},
  {id:'l3_032',level:3,cefr:'B1',thai:'หวัง',roman:'wang',hebrew:'לקוות',english:'to hope',tone:'rising'},
  {id:'l3_033',level:3,cefr:'B1',thai:'สนใจ',roman:'son jai',hebrew:'להתעניין',english:'to be interested',tone:'rising-mid'},
  {id:'l3_034',level:3,cefr:'B1',thai:'เกี่ยวกับ',roman:'giao gap',hebrew:'בקשר ל / על',english:'about / regarding',tone:'low-low'},
  {id:'l3_035',level:3,cefr:'B1',thai:'เพื่อ',roman:'phuea',hebrew:'כדי / בשביל',english:'in order to / for',tone:'falling'},

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
  {id:'l4_016',level:4,cefr:'B2',thai:'สังคม',roman:'sang khom',hebrew:'חברה',english:'society',tone:'rising-mid'},
  {id:'l4_017',level:4,cefr:'B2',thai:'การเมือง',roman:'gaan mueang',hebrew:'פוליטיקה',english:'politics',tone:'mid-mid'},
  {id:'l4_018',level:4,cefr:'B2',thai:'โอกาส',roman:'oo gaat',hebrew:'הזדמנות',english:'opportunity',tone:'mid-low'},
  {id:'l4_019',level:4,cefr:'B2',thai:'ความหมาย',roman:'khwaam maai',hebrew:'משמעות',english:'meaning',tone:'mid-rising'},
  {id:'l4_020',level:4,cefr:'B2',thai:'เหตุผล',roman:'heet phon',hebrew:'סיבה / היגיון',english:'reason',tone:'low-rising'},
  {id:'l4_021',level:4,cefr:'B2',thai:'ตัวอย่าง',roman:'dtua yaang',hebrew:'דוגמה',english:'example',tone:'mid-low'},
  {id:'l4_022',level:4,cefr:'B2',thai:'ความจริง',roman:'khwaam jing',hebrew:'אמת',english:'truth',tone:'mid-mid'},
  {id:'l4_023',level:4,cefr:'B2',thai:'อนาคต',roman:'a naa khot',hebrew:'עתיד',english:'future',tone:'low-mid-high'},
  {id:'l4_024',level:4,cefr:'B2',thai:'อดีต',roman:'a deet',hebrew:'עבר',english:'past',tone:'low-low'},
  {id:'l4_025',level:4,cefr:'B2',thai:'สำคัญ',roman:'sam khan',hebrew:'חשוב',english:'important',tone:'rising-mid'},
  {id:'l4_026',level:4,cefr:'B2',thai:'ปลอดภัย',roman:'bplawt phai',hebrew:'בטוח',english:'safe',tone:'low-mid'},
  {id:'l4_027',level:4,cefr:'B2',thai:'อันตราย',roman:'an ta raai',hebrew:'מסוכן',english:'dangerous',tone:'mid-low-mid'},
  {id:'l4_028',level:4,cefr:'B2',thai:'จำเป็น',roman:'jam bpen',hebrew:'הכרחי / נחוץ',english:'necessary',tone:'mid-mid'},
  {id:'l4_029',level:4,cefr:'B2',thai:'เปลี่ยนแปลง',roman:'bplian bplaeng',hebrew:'לשנות / להשתנות',english:'to change',tone:'low-mid'},
  {id:'l4_030',level:4,cefr:'B2',thai:'พัฒนา',roman:'phat tha naa',hebrew:'לפתח',english:'to develop',tone:'high-high-mid'},
  {id:'l4_031',level:4,cefr:'B2',thai:'เปรียบเทียบ',roman:'bpriap thiap',hebrew:'להשוות',english:'to compare',tone:'low-falling'},
  {id:'l4_032',level:4,cefr:'B2',thai:'สิ่งแวดล้อม',roman:'sing waet lawm',hebrew:'סביבה',english:'environment',tone:'low-falling-high'},
  {id:'l4_033',level:4,cefr:'B2',thai:'วัฒนธรรม',roman:'wat tha tham',hebrew:'תרבות',english:'culture',tone:'high-high-mid'},
  {id:'l4_034',level:4,cefr:'B2',thai:'รับผิดชอบ',roman:'rap phit chawp',hebrew:'אחראי / לקחת אחריות',english:'responsible',tone:'high-low-falling'},
  {id:'l4_035',level:4,cefr:'B2',thai:'ปัจจุบัน',roman:'bpat ju ban',hebrew:'הווה / כיום',english:'present (time)',tone:'low-low-mid'},

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
  {id:'apkg_001',level:4,thai:'แต่เช้า',roman:'dtae-chao',hebrew:'לפנות בוקר / מוקדם בבוקר',english:'early morning / at dawn',tone:'low-high',source:'apkg_almog5'},
  {id:'apkg_002',level:4,thai:'ตอนเช้า',roman:'dton-chao',hebrew:'בבוקר',english:'in the morning',tone:'mid-high',source:'apkg_almog5'},
  {id:'apkg_003',level:4,thai:'ตอนสาย',roman:'dton-saai',hebrew:'מאוחר בבוקר',english:'late morning',tone:'mid-rising',source:'apkg_almog5'},
  {id:'apkg_004',level:4,thai:'ตอนเที่ยง',roman:'dton-tieng',hebrew:'בצהריים',english:'at noon',tone:'mid-falling',source:'apkg_almog5'},
  {id:'apkg_005',level:4,thai:'ตอนบ่าย',roman:'dton-baai',hebrew:'אחר הצהריים',english:'in the afternoon',tone:'mid-low',source:'apkg_almog5'},
  {id:'apkg_006',level:4,thai:'ตอนเย็น',roman:'dton-yen',hebrew:'בערב',english:'in the evening',tone:'mid-mid',source:'apkg_almog5'},
  {id:'apkg_007',level:4,thai:'ตอนเที่ยงคืน',roman:'dton-tiang-kheun',hebrew:'בחצות / בלילה',english:'at midnight',tone:'mid-falling-mid',source:'apkg_almog5'},
  {id:'apkg_008',level:4,thai:'ตอนดึก',roman:'dton-deug',hebrew:'מאוחר בלילה',english:'late at night',tone:'mid-low',source:'apkg_almog5'},
  {id:'apkg_009',level:4,thai:'เห็นด้วย',roman:'hen duai',hebrew:'להסכים / מסכים',english:'to agree / agree',tone:'rising-falling',source:'apkg_almog5'},
  {id:'apkg_010',level:4,thai:'เห็นไหม',roman:'hen mai',hebrew:'רואה? / אתה רואה?',english:'Do you see?',tone:'rising-rising',source:'apkg_almog5'},
  {id:'apkg_011',level:4,thai:'เห็นด้วยไหม',roman:'hen duai mai',hebrew:'האם אתה מסכים?',english:'Do you agree?',tone:'rising-falling-rising',source:'apkg_almog5'},
  {id:'apkg_012',level:4,thai:'ยืน',roman:'yuen',hebrew:'לעמוד',english:'to stand',tone:'mid',source:'apkg_almog5'},
  {id:'apkg_013',level:4,thai:'นั่ง',roman:'nung / nang',hebrew:'לשבת',english:'to sit',tone:'falling',source:'apkg_almog5'},
  {id:'apkg_014',level:4,thai:'เดิน',roman:'doen',hebrew:'ללכת / לצעוד',english:'to walk',tone:'mid',source:'apkg_almog5'},
  {id:'apkg_015',level:4,thai:'วิ่ง',roman:'wing',hebrew:'לרוץ',english:'to run',tone:'falling',source:'apkg_almog5'},
  {id:'apkg_016',level:4,thai:'ข้าม',roman:'khaam',hebrew:'לדלג / לחצות',english:'to skip / to cross',tone:'falling',source:'apkg_almog5'},
  {id:'apkg_017',level:5,thai:'ไม่ไหว',roman:'mai wai',hebrew:'לא יכול / לא מסוגל / לא עומד בזה',english:'cannot / cannot handle it',tone:'falling-rising',source:'apkg_almog5'},
  {id:'apkg_018',level:5,thai:'ไม่ต้องห่วง',roman:'mai dtong huang',hebrew:'אל תדאג / אין מה לדאוג',english:'do not worry',tone:'falling-falling-low',source:'apkg_almog5'},
  {id:'apkg_019',level:5,thai:'ไม่สนใจ',roman:'mai son jai',hebrew:'לא מעוניין / לא אכפת',english:'not interested / do not care',tone:'falling-rising-mid',source:'apkg_almog5'},
  {id:'apkg_020',level:5,thai:'ไม่มีอะไร',roman:'mai mee a-rai',hebrew:'אין כלום',english:'there is nothing / nothing',tone:'falling-mid-low-mid',source:'apkg_almog5'},
  {id:'apkg_021',level:5,thai:'ไม่ต้อง',roman:'mai dtong',hebrew:'לא צריך / אין צורך',english:'do not need to',tone:'falling-falling',source:'apkg_almog5'},
  {id:'apkg_022',level:5,thai:'ไม่มีปัญหา',roman:'mai mee pan-haa',hebrew:'אין בעיה',english:'no problem',tone:'falling-mid-mid-rising',source:'apkg_almog5'},
  {id:'apkg_023',level:5,thai:'ไม่มีทาง',roman:'mai mee taang',hebrew:'אין מצב / אין סיכוי',english:'no way / impossible',tone:'falling-mid-mid',source:'apkg_almog5'},
  {id:'apkg_024',level:5,thai:'ว่าไง',roman:'waa ngai',hebrew:'מה קורה? / מה נשמע?',english:'What’s up?',tone:'falling-mid',source:'apkg_almog5'},
  {id:'apkg_025',level:5,thai:'ไม่เก็ทอะ',roman:'mai get a',hebrew:'אני לא מבין / לא קולט',english:'I do not get it',tone:'falling-low-low',source:'apkg_almog5'},
  {id:'apkg_026',level:5,thai:'แล้วไง',roman:'laew ngai',hebrew:'אז מה?',english:'so what?',tone:'high-mid',source:'apkg_almog5'},
  {id:'apkg_027',level:5,thai:'คิดว่า',roman:'khit waa',hebrew:'לחשוב ש...',english:'to think that...',tone:'high-falling',source:'apkg_almog5'},
  {id:'apkg_028',level:5,thai:'พูดว่า',roman:'phuut waa',hebrew:'לומר ש...',english:'to say that...',tone:'falling-falling',source:'apkg_almog5'},
  {id:'apkg_029',level:5,thai:'บอกว่า',roman:'bok waa',hebrew:'לספר / להגיד ש...',english:'to tell / say that...',tone:'low-falling',source:'apkg_almog5'},
  {id:'apkg_030',level:5,thai:'รู้สึกว่า',roman:'ruu seuk waa',hebrew:'להרגיש ש...',english:'to feel that...',tone:'high-low-falling',source:'apkg_almog5'},
  {id:'apkg_031',level:5,thai:'เพราะว่า',roman:'phroh waa',hebrew:'בגלל ש... / כי',english:'because',tone:'high-falling',source:'apkg_almog5'},
  {id:'apkg_032',level:5,thai:'ได้ยินว่า',roman:'daai yin waa',hebrew:'לשמוע ש...',english:'to hear that...',tone:'falling-mid-falling',source:'apkg_almog5'},


  // Uploaded vocabulary expansion — merged into existing Levels 1–5. Tone is intentionally not drilled yet.
  {id:"uv19_0001",level:3,thai:"สำคัญ",roman:"sam¹-kan¹",hebrew:"חשוב",english:"important",tone:'mid-mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0002",level:3,thai:"ขนม",roman:"kha-num¹",hebrew:"חטיף",english:"snack",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0003",level:3,thai:"หวี",roman:"wii¹",hebrew:"אשכול/יחידת בננות; מסרק",english:"banana bunch/classifier; comb",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0004",level:3,thai:"มาครับ",roman:"ma¹-krap",hebrew:"באתי / אני בא (זכר מנומס)",english:"I came / I am coming (male polite)",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0005",level:1,thai:"ไหว้",roman:"waai³",hebrew:"לחלוק כבוד",english:"wai greeting / pay respect",tone:'falling',source:"תומר 1,csv.txt"},
  {id:"uv19_0006",level:1,thai:"น้ำ",roman:"nam¹",hebrew:"מים",english:"water",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0007",level:3,thai:"ปากกา",roman:"bpaag²-gaa¹",hebrew:"עט",english:"pen",tone:'low-mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0008",level:1,thai:"ปาก",roman:"bpaag²",hebrew:"פה / מקור",english:"mouth / beak",tone:'low',source:"תומר 1,csv.txt"},
  {id:"uv19_0009",level:1,thai:"กา",roman:"gaa¹",hebrew:"עורב",english:"crow",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0010",level:3,thai:"ว่ายน้ำ",roman:"waai³-nam¹",hebrew:"לשחות",english:"swim",tone:'falling-mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0011",level:1,thai:"ครู",roman:"kru¹",hebrew:"מורה",english:"teacher",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0012",level:5,thai:"คุณชื่ออะไร",roman:"kun¹ cheuu³ a-rai¹?",hebrew:"מה השם שלך?",english:"What is your name?",tone:'mid-falling-mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0013",level:4,thai:"ผมชื่อ…",roman:"pom⁵ cheuu³ (name)",hebrew:"השם שלי הוא...",english:"My name is… (male)",tone:'rising-falling',source:"תומר 1,csv.txt"},
  {id:"uv19_0014",level:4,thai:"ฉันชื่อ…",roman:"chan⁵ cheuu³ (name)",hebrew:"השם שלי הוא...",english:"My name is… (female)",tone:'rising-falling',source:"תומר 1,csv.txt"},
  {id:"uv19_0015",level:1,thai:"มา",roman:"maa¹",hebrew:"לבוא",english:"come",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0016",level:1,thai:"ไป",roman:"bpai¹",hebrew:"ללכת",english:"go",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0017",level:1,thai:"อยู่",roman:"yuu²",hebrew:"להיות / לגור",english:"be / live / stay",tone:'low',source:"תומר 1,csv.txt"},
  {id:"uv19_0018",level:1,thai:"ท้อง",roman:"thong³",hebrew:"בטן",english:"belly",tone:'falling',source:"תומר 1,csv.txt"},
  {id:"uv19_0019",level:1,thai:"หิน",roman:"hin⁵",hebrew:"אבן",english:"stone",tone:'rising',source:"תומר 1,csv.txt"},
  {id:"uv19_0020",level:1,thai:"กอง",roman:"kong¹",hebrew:"ערימה",english:"pile",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0021",level:4,thai:"ผมอยู่…",roman:"pom⁵ yuu² (place)",hebrew:"אני גר ב...",english:"I live/stay in…",tone:'rising-low',source:"תומר 1,csv.txt"},
  {id:"uv19_0022",level:1,thai:"หวาน",roman:"waan⁵",hebrew:"מתוק",english:"sweet",tone:'rising',source:"תומר 1,csv.txt"},
  {id:"uv19_0023",level:1,thai:"ค่าย",roman:"kaai³",hebrew:"מחנה",english:"camp",tone:'falling',source:"תומר 1,csv.txt"},
  {id:"uv19_0024",level:1,thai:"ชา",roman:"chaa¹",hebrew:"תה",english:"tea",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0025",level:5,thai:"อะไร",roman:"a-rai¹",hebrew:"מה?",english:"what",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0026",level:1,thai:"ดื่ม",roman:"deuum²",hebrew:"לשתות",english:"drink",tone:'low',source:"תומר 1,csv.txt"},
  {id:"uv19_0027",level:1,thai:"บ้าน",roman:"baan³",hebrew:"בית",english:"house / home",tone:'falling',source:"תומר 1,csv.txt"},
  {id:"uv19_0028",level:1,thai:"ใต้",roman:"dtai³",hebrew:"דרום / מתחת",english:"south / under",tone:'falling',source:"תומר 1,csv.txt"},
  {id:"uv19_0029",level:1,thai:"ร้อน",roman:"rawn¹",hebrew:"חם",english:"hot",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0030",level:1,thai:"ไหม",roman:"mai¹?",hebrew:"מילת שאלה (כן/לא)",english:"yes/no question particle",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0031",level:5,thai:"ใช่ไหม",roman:"chai³ mai¹?",hebrew:"נכון?",english:"right? / correct?",tone:'falling-mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0032",level:1,thai:"ไม่",roman:"mai³",hebrew:"לא / אל",english:"not / no",tone:'falling',source:"תומר 1,csv.txt"},
  {id:"uv19_0033",level:1,thai:"สวย",roman:"suai⁵",hebrew:"יפה",english:"beautiful",tone:'rising',source:"תומר 1,csv.txt"},
  {id:"uv19_0034",level:5,thai:"สบายดีไหม",roman:"sa-baai dii mai?",hebrew:"מה שלומך?",english:"How are you?",tone:'low-mid-mid-rising',source:"תומר 1,csv.txt"},
  {id:"uv19_0035",level:4,thai:"สบายดี",roman:"sa-baai dii",hebrew:"הכל טוב / בסדר",english:"I am fine / okay",tone:'low-mid-mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0036",level:4,thai:"ไม่สบาย",roman:"mai sa-baai",hebrew:"לא מרגיש טוב",english:"not feeling well",tone:'falling-low-mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0037",level:3,thai:"ตีหมา",roman:"dtii¹ maa¹",hebrew:"להרביץ לכלב",english:"hit a dog",tone:'mid-mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0038",level:1,thai:"ตอบ",roman:"dtawb²",hebrew:"לענות",english:"answer",tone:'low',source:"תומר 1,csv.txt"},
  {id:"uv19_0039",level:1,thai:"งู",roman:"nguu¹",hebrew:"נחש",english:"snake",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0040",level:1,thai:"เงิน",roman:"ngoen¹",hebrew:"כסף",english:"money",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0041",level:1,thai:"งาน",roman:"ngaan¹",hebrew:"עבודה",english:"work / job",tone:'mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0042",level:1,thai:"มี",roman:"mii¹",hebrew:"יש",english:"have / there is",tone:'mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0043",level:3,thai:"ทำงาน",roman:"tam¹-ngaan¹",hebrew:"לעבוד",english:"work",tone:'mid-mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0044",level:1,thai:"ทำ",roman:"tam¹",hebrew:"לעשות / להכין",english:"do / make",tone:'mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0046",level:3,thai:"อร่อย",roman:"a¹-roi²",hebrew:"טעים",english:"delicious",tone:'mid-low',source:"תומר 2,csv.txt"},
  {id:"uv19_0047",level:3,thai:"นิดหน่อย",roman:"nit-noi²",hebrew:"קצת",english:"a little",tone:'low',source:"תומר 2,csv.txt"},
  {id:"uv19_0048",level:1,thai:"จะ",roman:"ja²",hebrew:"מילת עתיד",english:"future marker / will",tone:'low',source:"תומר 2,csv.txt"},
  {id:"uv19_0049",level:5,thai:"กินอะไร",roman:"gin¹ a¹-rai¹?",hebrew:"מה אתה אוכל?",english:"What are you eating?",tone:'mid-mid-mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0050",level:4,thai:"ผม/ฉันรักคุณ",roman:"pom⁵/chan⁵ rak¹ kun¹",hebrew:"אני אוהב/ת אותך",english:"I love you",tone:'rising-rising-mid-mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0051",level:5,thai:"คุณรักผม/ฉันไหม",roman:"khun rak phom/chan mai?",hebrew:"אתה אוהב אותי?",english:"Do you love me?",tone:'mid-high-rising-rising-rising',source:"תומר 2,csv.txt"},
  {id:"uv19_0052",level:1,thai:"เปิด",roman:"bpoed²",hebrew:"להדליק / לפתוח",english:"open / turn on",tone:'low',source:"תומר 2,csv.txt"},
  {id:"uv19_0053",level:1,thai:"ชอบ",roman:"chawb³",hebrew:"לאהוב / לחבב",english:"like",tone:'falling',source:"תומר 2,csv.txt"},
  {id:"uv19_0054",level:3,thai:"โรงเรียน",roman:"rong¹-rian¹",hebrew:"בית ספר",english:"school",tone:'mid-mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0055",level:1,thai:"เรียน",roman:"rian¹",hebrew:"ללמוד",english:"study / learn",tone:'mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0056",level:1,thai:"โรง",roman:"rong¹",hebrew:"מקום מפגש",english:"building / hall",tone:'mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0057",level:3,thai:"ขอโทษ",roman:"kaw⁵-tohd³",hebrew:"סליחה",english:"sorry / excuse me",tone:'rising-falling',source:"תומר 2,csv.txt"},
  {id:"uv19_0058",level:1,thai:"คน",roman:"khon¹",hebrew:"אנשים",english:"person / people",tone:'mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0059",level:1,thai:"เขียน",roman:"kian⁵",hebrew:"לכתוב",english:"write",tone:'rising',source:"תומר 2,csv.txt"},
  {id:"uv19_0060",level:4,thai:"ข้าวเหนียวมะม่วง",roman:"kaaw³-niaw³ ma¹-muang³",hebrew:"סטיקי רייס מנגו",english:"mango sticky rice",tone:'falling-falling-mid-falling',source:"תומר 2,csv.txt"},
  {id:"uv19_0061",level:1,thai:"ผัด",roman:"pad²",hebrew:"מוקפץ",english:"stir-fried",tone:'low',source:"תומר 2,csv.txt"},
  {id:"uv19_0062",level:1,thai:"ขอ",roman:"koh⁵",hebrew:"אפשר לקבל...",english:"request / may I have",tone:'rising',source:"תומר 2,csv.txt"},
  {id:"uv19_0063",level:5,thai:"เรียกว่าอะไร",roman:"riag³ a¹-rai¹?",hebrew:"איך קוראים ל...?",english:"What is it called?",tone:'falling-mid-mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0064",level:5,thai:"คุณล่ะ",roman:"kun¹ la²",hebrew:"ואתה/ואת?",english:"and you?",tone:'mid-low',source:"תומר 2,csv.txt"},
  {id:"uv19_0065",level:3,thai:"เช่นกัน",roman:"chen¹-gan¹",hebrew:"אותו הדבר / גם אני",english:"same / likewise",tone:'mid-mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0066",level:3,thai:"ยินดี",roman:"yin¹-dii¹",hebrew:"ברוך הבא",english:"welcome / pleased",tone:'mid-mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0067",level:1,thai:"รู้",roman:"ruu⁴",hebrew:"לדעת (מידע)",english:"know",tone:'high',source:"תומר 2,csv.txt"},
  {id:"uv19_0068",level:3,thai:"รู้จัก",roman:"ruu⁴-jag²",hebrew:"להכיר (אנשים/מקומות)",english:"know / be acquainted with",tone:'high-low',source:"תומר 2,csv.txt"},
  {id:"uv19_0069",level:5,thai:"รู้ไหม",roman:"ruu⁴ mai¹?",hebrew:"אתה יודע?",english:"Do you know?",tone:'high-mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0070",level:3,thai:"ไม่รู้",roman:"mai³ ruu⁴",hebrew:"לא יודע",english:"do not know",tone:'falling-high',source:"תומר 2,csv.txt"},
  {id:"uv19_0071",level:4,thai:"ยังไม่รู้",roman:"yang¹ mai³ ruu⁴",hebrew:"עדיין לא יודע",english:"do not know yet",tone:'mid-falling-high',source:"תומר 2,csv.txt"},
  {id:"uv19_0072",level:3,thai:"นาที",roman:"naa-tii¹",hebrew:"דקה",english:"minute",tone:'mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0073",level:1,thai:"หาด",roman:"haad²",hebrew:"חוף",english:"beach",tone:'low',source:"תומר 2,csv.txt"},
  {id:"uv19_0074",level:1,thai:"ได้",roman:"dai³",hebrew:"יכול",english:"can / able",tone:'falling',source:"תומר 2,csv.txt"},
  {id:"uv19_0075",level:1,thai:"พูด",roman:"puud³",hebrew:"לדבר",english:"speak",tone:'falling',source:"תומר 2,csv.txt"},
  {id:"uv19_0076",level:5,thai:"พูดไทยได้ไหม",roman:"puud³ Thai dai³ mai¹?",hebrew:"אתה יכול לדבר תאילנדית?",english:"Can you speak Thai?",tone:'falling-falling-mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0077",level:1,thai:"พริก",roman:"prik¹",hebrew:"צ'ילי",english:"chili",tone:'mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0078",level:3,thai:"ไม่ใส่",roman:"mai³ sai²",hebrew:"בלי / לא לשים",english:"without / do not put",tone:'falling-low',source:"תומר 2,csv.txt"},
  {id:"uv19_0079",level:3,thai:"น้ำตาล",roman:"nam¹ dtaan¹",hebrew:"סוכר",english:"sugar",tone:'mid-mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0080",level:1,thai:"เพิ่ม",roman:"peum³",hebrew:"להוסיף",english:"add / increase",tone:'falling',source:"תומר 2,csv.txt"},
  {id:"uv19_0081",level:3,thai:"ที่นี่",roman:"tii-nii",hebrew:"פה",english:"here",tone:'falling-falling',source:"תומר 3,csv.txt"},
  {id:"uv19_0082",level:3,thai:"ภาษา",roman:"paa-saa",hebrew:"שפה",english:"language",tone:'mid-rising',source:"תומר 3,csv.txt"},
  {id:"uv19_0083",level:3,thai:"ประเทศ",roman:"bpra-ted",hebrew:"מדינה",english:"country",tone:'low-falling',source:"תומר 3,csv.txt"},
  {id:"uv19_0084",level:3,thai:"ทุกคน",roman:"tuk-kon",hebrew:"כולם",english:"everyone",tone:'high-mid',source:"תומר 3,csv.txt"},
  {id:"uv19_0085",level:3,thai:"อย่ารอ",roman:"yaa ror",hebrew:"אל תחכה",english:"do not wait",tone:'low-mid',source:"תומר 3,csv.txt"},
  {id:"uv19_0086",level:5,thai:"พอไหม",roman:"phaw mai?",hebrew:"זה מספיק?",english:"Is it enough?",tone:'falling-rising',source:"תומר 3,csv.txt"},
  {id:"uv19_0087",level:5,thai:"ไปไหน",roman:"bpai nai?",hebrew:"לאן אתה הולך?",english:"Where are you going?",tone:'mid-rising',source:"תומר 3,csv.txt"},
  {id:"uv19_0088",level:3,thai:"ทบทวน",roman:"tobp-tuan",hebrew:"לחזור (על חומר)",english:"review",tone:'falling-mid',source:"תומר 3,csv.txt"},
  {id:"uv19_0089",level:1,thai:"พี่",roman:"pii",hebrew:"אח/אחות מבוגר/ת",english:"older sibling / senior",tone:'falling',source:"תומר 3,csv.txt"},
  {id:"uv19_0090",level:1,thai:"ลืม",roman:"leuum",hebrew:"לשכוח",english:"forget",tone:'mid',source:"תומר 3,csv.txt"},
  {id:"uv19_0091",level:1,thai:"และ",roman:"laeh",hebrew:"ו...",english:"and",tone:'high',source:"תומר 3,csv.txt"},
  {id:"uv19_0092",level:5,thai:"คุณพูดภาษาอะไร",roman:"kun puud paasaa a-rai?",hebrew:"איזו שפה אתה מדבר?",english:"What language do you speak?",tone:'mid-falling-mid-rising-low-mid',source:"תומר 3,csv.txt"},
  {id:"uv19_0093",level:1,thai:"เสร็จ",roman:"sed",hebrew:"לסיים",english:"finish / done",tone:'low',source:"תומר 3,csv.txt"},
  {id:"uv19_0094",level:1,thai:"เย็น",roman:"yen",hebrew:"קר",english:"cold / evening",tone:'mid',source:"תומר 3,csv.txt"},
  {id:"uv19_0095",level:5,thai:"คุณมาจาก…",roman:"kun maa jaag (place)",hebrew:"מאיפה אתה?",english:"Where are you from?",tone:'mid-mid-low',source:"תומר 3,csv.txt"},
  {id:"uv19_0096",level:1,thai:"จาก",roman:"jaag",hebrew:"מ... (מקור)",english:"from",tone:'low',source:"תומר 3,csv.txt"},
  {id:"uv19_0097",level:4,thai:"ไหน/ที่ไหน",roman:"nai/tii nai",hebrew:"איפה",english:"where",tone:'rising-falling-rising',source:"תומר 3,csv.txt"},
  {id:"uv19_0098",level:3,thai:"ห้องครัว",roman:"hong krua",hebrew:"מטבח",english:"kitchen",tone:'falling-mid',source:"תומר 3,csv.txt"},
  {id:"uv19_0099",level:1,thai:"ใจ",roman:"jaai",hebrew:"לב",english:"heart / mind",tone:'mid',source:"תומר 3,csv.txt"},
  {id:"uv19_0100",level:3,thai:"ใจดี",roman:"jaai dii",hebrew:"לב טוב",english:"kind",tone:'mid-mid',source:"תומר 3,csv.txt"},
  {id:"uv19_0101",level:5,thai:"ทำไม",roman:"tam-mai?",hebrew:"למה?",english:"why?",tone:'mid-mid',source:"תומר 3,csv.txt"},
  {id:"uv19_0102",level:1,thai:"มาก",roman:"maag",hebrew:"מאוד",english:"very / much",tone:'falling',source:"תומר 3,csv.txt"},
  {id:"uv19_0103",level:1,thai:"สอน",roman:"sawn",hebrew:"ללמד",english:"teach",tone:'rising',source:"תומר 3,csv.txt"},
  {id:"uv19_0104",level:1,thai:"แพง",roman:"peang",hebrew:"יקר",english:"expensive",tone:'mid',source:"תומר 3,csv.txt"},
  {id:"uv19_0105",level:3,thai:"ทุกอย่าง",roman:"tug-yaang",hebrew:"הכל",english:"everything",tone:'high-low',source:"תומר 3,csv.txt"},
  {id:"uv19_0106",level:1,thai:"แต่",roman:"dtae",hebrew:"אבל",english:"but",tone:'low',source:"תומר 3,csv.txt"},
  {id:"uv19_0107",level:1,thai:"ตก",roman:"tok",hebrew:"ליפול",english:"fall",tone:'low',source:"תומר 3,csv.txt"},
  {id:"uv19_0108",level:3,thai:"น้ำตก",roman:"nam-tok",hebrew:"מפל",english:"waterfall",tone:'high-low',source:"תומר 3,csv.txt"},
  {id:"uv19_0109",level:1,thai:"คิด",roman:"kid",hebrew:"לחשוב",english:"think",tone:'high',source:"תומר 3,csv.txt"},
  {id:"uv19_0110",level:5,thai:"คุณคิดอะไร",roman:"kun kid a-rai?",hebrew:"על מה אתה חושב?",english:"What are you thinking?",tone:'mid-high-low-mid',source:"תומר 3,csv.txt"},
  {id:"uv19_0111",level:1,thai:"ช่วย",roman:"chuai",hebrew:"לעזור",english:"help",tone:'falling',source:"תומר 3,csv.txt"},
  {id:"uv19_0112",level:1,thai:"ต่อ",roman:"dtaw",hebrew:"להמשיך / להאריך",english:"continue / extend",tone:'low',source:"תומר 3,csv.txt"},
  {id:"uv19_0113",level:1,thai:"หา",roman:"haa",hebrew:"לחפש / למצוא",english:"look for / find",tone:'rising',source:"תומר 3,csv.txt"},
  {id:"uv19_0114",level:1,thai:"หม้อ",roman:"maw³",hebrew:"סיר",english:"pot",tone:'falling',source:"תומר 3,csv.txt"},
  {id:"uv19_0115",level:1,thai:"หมอ",roman:"maws",hebrew:"רופא",english:"doctor",tone:'rising',source:"תומר 3,csv.txt"},
  {id:"uv19_0116",level:1,thai:"บวก",roman:"buag",hebrew:"פלוס",english:"plus",tone:'low',source:"תומר 3,csv.txt"},
  {id:"uv19_0117",level:1,thai:"ลบ",roman:"löb",hebrew:"מינוס",english:"minus",tone:'falling',source:"תומר 3,csv.txt"},
  {id:"uv19_0118",level:3,thai:"เท่ากับ",roman:"ta-gab",hebrew:"שווה",english:"equals",tone:'falling-low',source:"תומר 3,csv.txt"},
  {id:"uv19_0119",level:3,thai:"เท่า",roman:"tao",hebrew:"שווה / באותה מידה",english:"equal / as much as",tone:'falling',source:"תומר 3,csv.txt"},
  {id:"uv19_0120",level:3,thai:"เท่าไร",roman:"tao-rai",hebrew:"כמה (מחיר)",english:"how much?",tone:'falling-mid',source:"תומר 3,csv.txt"},
  {id:"uv19_0121",level:4,thai:"แล้วแต่คุณ",roman:"laew-dtua kun",hebrew:"תלוי בך",english:"up to you",tone:'high-low-mid',source:"תומר4,csv.txt"},
  {id:"uv19_0122",level:5,thai:"กี่โมง",roman:"gii mong?",hebrew:"איזו שעה?",english:"what time?",tone:'low-mid',source:"תומר4,csv.txt"},
  {id:"uv19_0123",level:3,thai:"ตอนนี้",roman:"dtua-ni",hebrew:"עכשיו",english:"now",tone:'mid-high',source:"תומר4,csv.txt"},
  {id:"uv19_0124",level:3,thai:"วันนี้",roman:"wan-nii",hebrew:"היום",english:"today",tone:'mid-high',source:"תומר4,csv.txt"},
  {id:"uv19_0125",level:3,thai:"พรุ่งนี้",roman:"pru-ngii",hebrew:"מחר",english:"tomorrow",tone:'falling-high',source:"תומר4,csv.txt"},
  {id:"uv19_0126",level:3,thai:"เมื่อวาน",roman:"meua-wan",hebrew:"אתמול",english:"yesterday",tone:'falling-mid',source:"תומר4,csv.txt"},
  {id:"uv19_0127",level:3,thai:"ตอนเช้า",roman:"dtan-chao",hebrew:"בוקר",english:"morning",tone:'mid-high',source:"תומר4,csv.txt"},
  {id:"uv19_0128",level:3,thai:"ตอนเที่ยง",roman:"dtan-tiang",hebrew:"צהריים",english:"noon",tone:'mid-falling',source:"תומר4,csv.txt"},
  {id:"uv19_0129",level:3,thai:"ตอนเย็น",roman:"dtan-yen",hebrew:"ערב",english:"evening",tone:'mid-mid',source:"תומר4,csv.txt"},
  {id:"uv19_0130",level:4,thai:"ตอนกลางคืน",roman:"dtan-klang-keun",hebrew:"לילה",english:"night",tone:'mid-mid-mid',source:"תומר4,csv.txt"},
  {id:"uv19_0131",level:3,thai:"กินข้าว",roman:"gin-kaaw",hebrew:"לאכול (אורז/ארוחה)",english:"eat / have a meal",tone:'mid-falling',source:"תומר4,csv.txt"},
  {id:"uv19_0132",level:1,thai:"หนึ่ง",roman:"nueng",hebrew:"אחד",english:"one",tone:'low',source:"תומר4,csv.txt"},
  {id:"uv19_0133",level:1,thai:"สอง",roman:"song",hebrew:"שתיים",english:"two",tone:'rising',source:"תומר4,csv.txt"},
  {id:"uv19_0134",level:1,thai:"สาม",roman:"saam",hebrew:"שלוש",english:"three",tone:'rising',source:"תומר4,csv.txt"},
  {id:"uv19_0135",level:1,thai:"สี่",roman:"sii",hebrew:"ארבע",english:"four",tone:'low',source:"תומר4,csv.txt"},
  {id:"uv19_0136",level:1,thai:"ห้า",roman:"haa",hebrew:"חמש",english:"five",tone:'falling',source:"תומר4,csv.txt"},
  {id:"uv19_0137",level:1,thai:"หก",roman:"hok",hebrew:"שש",english:"six",tone:'low',source:"תומר4,csv.txt"},
  {id:"uv19_0138",level:1,thai:"เจ็ด",roman:"jet",hebrew:"שבע",english:"seven",tone:'low',source:"תומר4,csv.txt"},
  {id:"uv19_0139",level:1,thai:"แปด",roman:"bpaed",hebrew:"שמונה",english:"eight",tone:'low',source:"תומר4,csv.txt"},
  {id:"uv19_0140",level:1,thai:"เก้า",roman:"gao",hebrew:"תשע",english:"nine",tone:'falling',source:"תומר4,csv.txt"},
  {id:"uv19_0141",level:1,thai:"สิบ",roman:"sip",hebrew:"עשר",english:"ten",tone:'low',source:"תומר4,csv.txt"},
  {id:"uv19_0142",level:3,thai:"สิบเอ็ด",roman:"sip-et",hebrew:"אחת עשרה",english:"eleven",tone:'low-low',source:"תומר4,csv.txt"},
  {id:"uv19_0143",level:3,thai:"ยี่สิบ",roman:"yii-sip",hebrew:"עשרים",english:"twenty",tone:'falling-low',source:"תומר4,csv.txt"},
  {id:"uv19_0144",level:1,thai:"ร้อย",roman:"roi",hebrew:"מאה",english:"hundred",tone:'high',source:"תומר4,csv.txt"},
  {id:"uv19_0145",level:1,thai:"พัน",roman:"pan",hebrew:"אלף",english:"thousand",tone:'mid',source:"תומר4,csv.txt"},
  {id:"uv19_0146",level:1,thai:"หมื่น",roman:"meun",hebrew:"עשרת אלפים",english:"ten thousand",tone:'low',source:"תומר4,csv.txt"},
  {id:"uv19_0147",level:1,thai:"แสน",roman:"san",hebrew:"מאה אלף",english:"hundred thousand",tone:'rising',source:"תומר4,csv.txt"},
  {id:"uv19_0148",level:1,thai:"ล้าน",roman:"lan",hebrew:"מיליון",english:"million",tone:'high',source:"תומר4,csv.txt"},
  {id:"uv19_0149",level:1,thai:"หน้า",roman:"naa",hebrew:"פנים / עונה / דף",english:"face / season / page",tone:'falling',source:"תומר4,csv.txt"},
  {id:"uv19_0150",level:3,thai:"หน้าร้อน",roman:"naa-rawn",hebrew:"העונה החמה",english:"hot season",tone:'falling-high',source:"תומר4,csv.txt"},
  {id:"uv19_0151",level:3,thai:"หน้าฝน",roman:"naa-fon",hebrew:"עונת הגשמים",english:"rainy season",tone:'falling-rising',source:"תומר4,csv.txt"},
  {id:"uv19_0152",level:3,thai:"หน้าหนาว",roman:"naa-nao",hebrew:"העונה הקרה",english:"cold season",tone:'falling-rising',source:"תומר4,csv.txt"},
  {id:"uv19_0153",level:1,thai:"ใกล้",roman:"glai",hebrew:"קרוב (טון נמוך)",english:"near",tone:'falling',source:"תומר4,csv.txt"},
  {id:"uv19_0154",level:1,thai:"ไกล",roman:"glai",hebrew:"רחוק (טון גבוה)",english:"far",tone:'mid',source:"תומר4,csv.txt"},
  {id:"uv19_0155",level:1,thai:"ต้อง",roman:"dtong",hebrew:"חייב",english:"must",tone:'falling',source:"תומר4,csv.txt"},
  {id:"uv19_0156",level:1,thai:"กลัว",roman:"glua",hebrew:"לפחד",english:"afraid",tone:'mid',source:"תומר4,csv.txt"},
  {id:"uv19_0157",level:3,thai:"ประมาณ",roman:"bpra-maan",hebrew:"בערך",english:"about / approximately",tone:'low-mid',source:"תומר4,csv.txt"},
  {id:"uv19_0158",level:1,thai:"กลับ",roman:"glap",hebrew:"לחזור",english:"return",tone:'low',source:"תומר4,csv.txt"},
  {id:"uv19_0159",level:3,thai:"กลับบ้าน",roman:"glap baan",hebrew:"לחזור הביתה",english:"return home",tone:'low-falling',source:"תומר4,csv.txt"},
  {id:"uv19_0160",level:1,thai:"เหงื่อ",roman:"heua",hebrew:"זיעה",english:"sweat",tone:'low',source:"תומר 5,csv.txt"},
  {id:"uv19_0161",level:3,thai:"เหงื่อออก",roman:"heua-awk",hebrew:"להזיע",english:"sweat / perspire",tone:'low-low',source:"תומר 5,csv.txt"},
  {id:"uv19_0162",level:1,thai:"เหนื่อย",roman:"nuay",hebrew:"עייף",english:"tired",tone:'low',source:"תומר 5,csv.txt"},
  {id:"uv19_0163",level:1,thai:"หิว",roman:"hiu",hebrew:"רעב",english:"hungry",tone:'rising',source:"תומר 5,csv.txt"},
  {id:"uv19_0164",level:3,thai:"หิวน้ำ",roman:"hiu-nam",hebrew:"צמא",english:"thirsty",tone:'rising-high',source:"תומר 5,csv.txt"},
  {id:"uv19_0165",level:1,thai:"อิ่ม",roman:"im",hebrew:"שבע (מאוכל)",english:"full from food",tone:'low',source:"תומר 5,csv.txt"},
  {id:"uv19_0166",level:1,thai:"เผ็ด",roman:"pet",hebrew:"חריף",english:"spicy",tone:'low',source:"תומר 5,csv.txt"},
  {id:"uv19_0167",level:1,thai:"เค็ม",roman:"kem",hebrew:"מלוח",english:"salty",tone:'mid',source:"תומר 5,csv.txt"},
  {id:"uv19_0168",level:1,thai:"เปรี้ยว",roman:"bpreaw",hebrew:"חמוץ",english:"sour",tone:'falling',source:"תומר 5,csv.txt"},
  {id:"uv19_0169",level:1,thai:"ขม",roman:"kom",hebrew:"מר",english:"bitter",tone:'rising',source:"תומר 5,csv.txt"},
  {id:"uv19_0170",level:1,thai:"มัน",roman:"man",hebrew:"שומני",english:"oily / fatty",tone:'mid',source:"תומר 5,csv.txt"},
  {id:"uv19_0171",level:1,thai:"จืด",roman:"juad",hebrew:"תפל",english:"bland",tone:'low',source:"תומר 5,csv.txt"},
  {id:"uv19_0172",level:3,thai:"ขยะ",roman:"ka-ya",hebrew:"זבל",english:"trash",tone:'low-low',source:"תומר 5,csv.txt"},
  {id:"uv19_0173",level:4,thai:"ไม่เป็นไร",roman:"mai-pen-rai",hebrew:"לא משנה / אין בעיה",english:"never mind / no problem",tone:'falling-mid-mid',source:"תומר 5,csv.txt"},
  {id:"uv19_0174",level:3,thai:"โชคดี",roman:"chok-dee",hebrew:"בהצלחה",english:"good luck",tone:'falling-mid',source:"תומר 5,csv.txt"},
  {id:"uv19_0175",level:3,thai:"ลาก่อน",roman:"la-gon",hebrew:"להתראות",english:"goodbye",tone:'mid-low',source:"תומר 5,csv.txt"},
  {id:"uv19_0176",level:4,thai:"ไปก่อนนะ",roman:"pai-gon-na",hebrew:"אני הולך עכשיו (להתראות)",english:"I am going now / bye",tone:'mid-low-high',source:"תומר 5,csv.txt"},
  {id:"uv19_0177",level:3,thai:"ไปแล้ว",roman:"bpai-leaw",hebrew:"כבר הלכתי / הלכתי",english:"already went",tone:'mid-high',source:"תומר 5,csv.txt"},
  {id:"uv19_0178",level:3,thai:"เจอกัน",roman:"jer-gan",hebrew:"נתראה",english:"see you",tone:'low-mid',source:"תומר 5,csv.txt"},
  {id:"uv19_0179",level:3,thai:"ทุกวัน",roman:"tuk-wan",hebrew:"כל יום",english:"every day",tone:'high-mid',source:"תומר 5,csv.txt"},
  {id:"uv19_0180",level:3,thai:"ทุกอย่าง",roman:"tuk-yaang",hebrew:"הכל",english:"everything",tone:'high-low',source:"תומר 5,csv.txt"},
  {id:"uv19_0181",level:3,thai:"บางที",roman:"bang-ti",hebrew:"לפעמים",english:"sometimes",tone:'mid-mid',source:"תומר 5,csv.txt"},
  {id:"uv19_0182",level:3,thai:"บางคน",roman:"bang-kon",hebrew:"חלק מהאנשים",english:"some people",tone:'mid-mid',source:"תומר 5,csv.txt"},
  {id:"uv19_0183",level:3,thai:"ไม่เคย",roman:"mai-koey",hebrew:"אף פעם לא",english:"never",tone:'falling-mid',source:"תומר 5,csv.txt"},
  {id:"uv19_0184",level:1,thai:"เคย",roman:"koey",hebrew:"פעם / כבר עשיתי",english:"ever",tone:'mid',source:"תומר 5,csv.txt"},
  {id:"uv19_0185",level:1,thai:"เบื่อ",roman:"bua",hebrew:"משעמם",english:"bored",tone:'low',source:"תומר 5,csv.txt"},
  {id:"uv19_0186",level:3,thai:"ง่วงนอน",roman:"nguang-non",hebrew:"ישנוני",english:"sleepy",tone:'falling-mid',source:"תומר 5,csv.txt"},
  {id:"uv19_0187",level:1,thai:"สนุก",roman:"sanook",hebrew:"כיף",english:"fun",tone:'low-low',source:"תומר 5,csv.txt"},
  {id:"uv19_0188",level:1,thai:"เป็น",roman:"bpen",hebrew:"להיות / לדעת לעשות",english:"be / know how to",tone:'mid',source:"תומר 5,csv.txt"},
  {id:"uv19_0189",level:1,thai:"คือ",roman:"kue",hebrew:"זה / הוא (להגדרות)",english:"is / means",tone:'mid',source:"תומר 5,csv.txt"},
  {id:"uv19_0190",level:4,thai:"สวัสดี",roman:"sa-waat-dee",hebrew:"שלום",english:"hello",tone:'low-low-mid',source:"תומר 5,csv.txt"},
  {id:"uv19_0191",level:3,thai:"ขอบคุณ",roman:"kob-kun",hebrew:"תודה",english:"thank you",tone:'low-mid',source:"תומר 5,csv.txt"},
  {id:"uv19_0192",level:5,thai:"ยินดีที่ได้รู้จัก",roman:"yin-dee tii dai ruu-jak",hebrew:"נעים להכיר",english:"nice to meet you",tone:'mid-mid-falling-falling-high-low',source:"תומר 5,csv.txt"},
  {id:"uv19_0193",level:5,thai:"ที่ไหน",roman:"tii-nai?",hebrew:"איפה?",english:"where?",tone:'falling-rising',source:"תומר 5,csv.txt"},
  {id:"uv19_0194",level:5,thai:"เมื่อไร",roman:"meua-rai?",hebrew:"מתי?",english:"when?",tone:'falling-mid',source:"תומר 5,csv.txt"},
  {id:"uv19_0195",level:5,thai:"ยังไง",roman:"yang-ngai?",hebrew:"איך?",english:"how?",tone:'mid-mid',source:"תומר 5,csv.txt"},
  {id:"uv19_0196",level:3,thai:"เพราะว่า",roman:"prow-wa",hebrew:"בגלל ש...",english:"because",tone:'high-falling',source:"תומר 5,csv.txt"},
  {id:"uv19_0197",level:4,thai:"ขนมปัง",roman:"ka-nom-bpang",hebrew:"לחם",english:"bread",tone:'low-rising-mid',source:"תומר 5,csv.txt"},
  {id:"uv19_0198",level:3,thai:"เนื้อ",roman:"neu-a",hebrew:"בשר / בקר",english:"meat / beef",tone:'high',source:"תומר 5,csv.txt"},
  {id:"uv19_0199",level:1,thai:"ไก่",roman:"gai",hebrew:"עוף",english:"chicken",tone:'low',source:"תומר 6,csv.txt"},
  {id:"uv19_0200",level:1,thai:"หมู",roman:"moo",hebrew:"חזיר",english:"pork / pig",tone:'rising',source:"תומר 6,csv.txt"},
  {id:"uv19_0201",level:1,thai:"ปลา",roman:"bpaa",hebrew:"דג",english:"fish",tone:'mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0202",level:1,thai:"กุ้ง",roman:"goong",hebrew:"שרימפס",english:"shrimp",tone:'falling',source:"תומר 6,csv.txt"},
  {id:"uv19_0203",level:1,thai:"ปู",roman:"puu",hebrew:"סרטן",english:"crab",tone:'mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0204",level:1,thai:"ไข่",roman:"kai",hebrew:"ביצה",english:"egg",tone:'low',source:"תומר 6,csv.txt"},
  {id:"uv19_0205",level:3,thai:"ไข่ดาว",roman:"kai-dao",hebrew:"ביצת עין",english:"fried egg",tone:'low-mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0206",level:3,thai:"ไข่เจียว",roman:"kai-jeaw",hebrew:"חביתה",english:"omelette",tone:'low-mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0207",level:1,thai:"ผัก",roman:"pak",hebrew:"ירקות",english:"vegetables",tone:'low',source:"תומר 6,csv.txt"},
  {id:"uv19_0208",level:4,thai:"ผลไม้",roman:"pon-la-mai",hebrew:"פירות",english:"fruit",tone:'rising-high-high',source:"תומר 6,csv.txt"},
  {id:"uv19_0209",level:1,thai:"ส้ม",roman:"som",hebrew:"תפוז",english:"orange",tone:'falling',source:"תומר 6,csv.txt"},
  {id:"uv19_0210",level:3,thai:"มะม่วง",roman:"ma-muang",hebrew:"מנגו",english:"mango",tone:'high-falling',source:"תומר 6,csv.txt"},
  {id:"uv19_0211",level:3,thai:"มะพร้าว",roman:"ma-prao",hebrew:"קוקוס",english:"coconut",tone:'high-high',source:"תומר 6,csv.txt"},
  {id:"uv19_0212",level:1,thai:"กล้วย",roman:"gluay",hebrew:"בננה",english:"banana",tone:'falling',source:"תומר 6,csv.txt"},
  {id:"uv19_0213",level:4,thai:"สับปะรด",roman:"sup-pa-rot",hebrew:"אננס",english:"pineapple",tone:'low-low-falling',source:"תומר 6,csv.txt"},
  {id:"uv19_0215",level:3,thai:"น้ำแข็ง",roman:"nam-kaeng",hebrew:"קרח",english:"ice",tone:'high-rising',source:"תומר 6,csv.txt"},
  {id:"uv19_0216",level:3,thai:"น้ำส้ม",roman:"nam-som",hebrew:"מיץ תפוזים",english:"orange juice",tone:'high-falling',source:"תומר 6,csv.txt"},
  {id:"uv19_0217",level:3,thai:"กาแฟ",roman:"ga-fe",hebrew:"קפה",english:"coffee",tone:'mid-falling',source:"תומר 6,csv.txt"},
  {id:"uv19_0218",level:1,thai:"นม",roman:"nom",hebrew:"חלב",english:"milk",tone:'mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0219",level:1,thai:"เบียร์",roman:"beer",hebrew:"בירה",english:"beer",tone:'mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0220",level:1,thai:"เหล้า",roman:"lao",hebrew:"אלכוהול / וויסקי",english:"alcohol / whiskey",tone:'falling',source:"תומר 6,csv.txt"},
  {id:"uv19_0221",level:1,thai:"กับ",roman:"gap",hebrew:"עם",english:"with",tone:'low',source:"תומר 6,csv.txt"},
  {id:"uv19_0222",level:1,thai:"เอา",roman:"ao",hebrew:"רוצה / לקחת",english:"want / take",tone:'mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0223",level:3,thai:"ไม่เอา",roman:"mai ao",hebrew:"לא רוצה",english:"do not want",tone:'falling-mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0224",level:4,thai:"เอาอันนี้",roman:"ao-an-nii",hebrew:"רוצה את זה",english:"want this one",tone:'mid-low-high',source:"תומר 6,csv.txt"},
  {id:"uv19_0225",level:1,thai:"เรือ",roman:"reua",hebrew:"סירה",english:"boat",tone:'mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0226",level:3,thai:"เรือบิน",roman:"reua-bin",hebrew:"מטוס",english:"airplane",tone:'mid-mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0227",level:1,thai:"รถ",roman:"rot",hebrew:"מכונית",english:"car / vehicle",tone:'falling',source:"תומר 6,csv.txt"},
  {id:"uv19_0228",level:3,thai:"รถเมล์",roman:"rot-mae",hebrew:"אוטובוס",english:"bus",tone:'falling-mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0229",level:3,thai:"รถไฟ",roman:"rot-fai",hebrew:"רכבת",english:"train",tone:'falling-mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0230",level:4,thai:"มอเตอร์ไซค์",roman:"mo-dtu-sai",hebrew:"אופנוע",english:"motorbike",tone:'mid-falling-mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0231",level:4,thai:"จักรยาน",roman:"jak-kra-yaan",hebrew:"אופניים",english:"bicycle",tone:'low-low-mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0232",level:1,thai:"เดิน",roman:"doen",hebrew:"ללכת ברגל",english:"walk",tone:'mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0233",level:1,thai:"วิ่ง",roman:"wing",hebrew:"לרוץ",english:"run",tone:'falling',source:"תומר 6,csv.txt"},
  {id:"uv19_0234",level:1,thai:"สวย",roman:"suay",hebrew:"יפה",english:"beautiful",tone:'rising',source:"תומר 6,csv.txt"},
  {id:"uv19_0235",level:3,thai:"น่ารัก",roman:"naa-rak",hebrew:"חמוד",english:"cute",tone:'falling-high',source:"תומר 6,csv.txt"},
  {id:"uv19_0236",level:1,thai:"หล่อ",roman:"lor",hebrew:"חתיך",english:"handsome",tone:'low',source:"תומר 6,csv.txt"},
  {id:"uv19_0237",level:1,thai:"เตี้ย",roman:"dtia",hebrew:"נמוך",english:"short",tone:'falling',source:"תומר 6,csv.txt"},
  {id:"uv19_0238",level:1,thai:"สูง",roman:"soong",hebrew:"גבוה",english:"tall",tone:'rising',source:"תומר 6,csv.txt"},
  {id:"uv19_0239",level:3,thai:"อ้วน",roman:"u-an",hebrew:"שמן (גוף)",english:"fat / overweight",tone:'falling',source:"תומר 7,csv.txt"},
  {id:"uv19_0240",level:1,thai:"ผอม",roman:"pom",hebrew:"רזה",english:"thin",tone:'rising',source:"תומר 7,csv.txt"},
  {id:"uv19_0241",level:1,thai:"ใหญ่",roman:"yai",hebrew:"גדול",english:"big",tone:'low',source:"תומר 7,csv.txt"},
  {id:"uv19_0242",level:1,thai:"เล็ก",roman:"lek",hebrew:"קטן",english:"small",tone:'falling',source:"תומר 7,csv.txt"},
  {id:"uv19_0243",level:1,thai:"เหงา",roman:"ngao",hebrew:"בודד",english:"lonely",tone:'rising',source:"תומר 7,csv.txt"},
  {id:"uv19_0244",level:3,thai:"เสียใจ",roman:"sia-jai",hebrew:"עצוב",english:"sad / sorry",tone:'rising-mid',source:"תומר 7,csv.txt"},
  {id:"uv19_0245",level:3,thai:"ดีใจ",roman:"dii-jai",hebrew:"שמח",english:"happy",tone:'mid-mid',source:"תומר 7,csv.txt"},
  {id:"uv19_0246",level:1,thai:"โกรธ",roman:"grote",hebrew:"כועס",english:"angry",tone:'low',source:"תומר 7,csv.txt"},
  {id:"uv19_0247",level:1,thai:"กลัว",roman:"glua",hebrew:"מפחד",english:"afraid",tone:'mid',source:"תומר 7,csv.txt"},
  {id:"uv19_0248",level:3,thai:"ตกใจ",roman:"dtok-jai",hebrew:"מופתע / בהלם",english:"shocked / startled",tone:'low-mid',source:"תומר 7,csv.txt"},
  {id:"uv19_0249",level:1,thai:"งง",roman:"ngong",hebrew:"מבולבל",english:"confused",tone:'mid',source:"תומר 7,csv.txt"},
  {id:"uv19_0250",level:3,thai:"มั่นใจ",roman:"man-jai",hebrew:"בטוח בעצמי",english:"confident",tone:'falling-mid',source:"תומר 7,csv.txt"},
  {id:"uv19_0251",level:4,thai:"น่าเข้าใจ",roman:"naa-kao-jai",hebrew:"מובן",english:"understandable",tone:'falling-falling-mid',source:"תומר 7,csv.txt"},
  {id:"uv19_0252",level:4,thai:"ไม่เข้าใจ",roman:"mai-kao-jai",hebrew:"לא מבין",english:"do not understand",tone:'falling-falling-mid',source:"תומר 7,csv.txt"},
  {id:"uv19_0253",level:5,thai:"เข้าใจไหม",roman:"kao-jai mai?",hebrew:"מבין?",english:"Do you understand?",tone:'falling-mid-rising',source:"תומר 7,csv.txt"},
  {id:"uv19_0254",level:4,thai:"เข้าใจแล้ว",roman:"kao-jai leaw",hebrew:"הבנתי כבר",english:"understood already",tone:'falling-mid-high',source:"תומר 7,csv.txt"},
  {id:"uv19_0255",level:1,thai:"รัก",roman:"rak",hebrew:"אוהב",english:"love",tone:'high',source:"תומר 7,csv.txt"},
  {id:"uv19_0256",level:1,thai:"เกลียด",roman:"gliad",hebrew:"שונא",english:"hate",tone:'low',source:"תומר 7,csv.txt"},
  {id:"uv19_0257",level:3,thai:"เห็นด้วย",roman:"hen-duai",hebrew:"מסכים",english:"agree",tone:'rising-falling',source:"תומר 7,csv.txt"},
  {id:"uv19_0258",level:4,thai:"ไม่เห็นด้วย",roman:"mai-hen-duai",hebrew:"לא מסכים",english:"disagree",tone:'falling-rising-falling',source:"תומר 7,csv.txt"},
  {id:"uv19_0259",level:3,thai:"จริง ๆ",roman:"jing-jing",hebrew:"באמת",english:"really",tone:'mid-mid',source:"תומר 7,csv.txt"},
  {id:"uv19_0260",level:1,thai:"ลอง",roman:"long",hebrew:"לנסות",english:"try",tone:'mid',source:"תומר 7,csv.txt"},
  {id:"uv19_0261",level:1,thai:"ดู",roman:"duu",hebrew:"לראות / להסתכל",english:"look / watch",tone:'mid',source:"תומר 7,csv.txt"},
  {id:"uv19_0262",level:1,thai:"ฟัง",roman:"fang",hebrew:"להקשיב",english:"listen",tone:'mid',source:"תומר 7,csv.txt"},
  {id:"uv19_0263",level:1,thai:"ดม",roman:"dom",hebrew:"להריח",english:"smell",tone:'mid',source:"תומר 7,csv.txt"},
  {id:"uv19_0264",level:1,thai:"ชิม",roman:"chim",hebrew:"לטעום",english:"taste",tone:'mid',source:"תומר 7,csv.txt"},
  {id:"uv19_0265",level:1,thai:"จำ",roman:"jum",hebrew:"לזכור",english:"remember",tone:'mid',source:"תומר 7,csv.txt"},
  {id:"uv19_0266",level:1,thai:"เคย",roman:"keey",hebrew:"להתרגל / פעם...",english:"ever / used to",tone:'mid',source:"תומר 7,csv.txt"},
  {id:"uv19_0267",level:1,thai:"เที่ยว",roman:"teaw",hebrew:"לטייל / לבלות",english:"travel / hang out",tone:'falling',source:"תומר 7,csv.txt"},
  {id:"uv19_0268",level:1,thai:"รอ",roman:"raw",hebrew:"לחכות",english:"wait",tone:'mid',source:"תומר 7,csv.txt"},
  {id:"uv19_0269",level:1,thai:"ซื้อ",roman:"suu",hebrew:"לקנות",english:"buy",tone:'high',source:"תומר 7,csv.txt"},
  {id:"uv19_0270",level:1,thai:"ขาย",roman:"kaai",hebrew:"למכור",english:"sell",tone:'rising',source:"תומר 7,csv.txt"},
  {id:"uv19_0271",level:1,thai:"ให้",roman:"hai",hebrew:"לתת / עבור",english:"give / for",tone:'falling',source:"תומר 7,csv.txt"},
  {id:"uv19_0272",level:3,thai:"ช่วย",roman:"choo-ay",hebrew:"לעזור",english:"help",tone:'falling',source:"תומר 7,csv.txt"},
  {id:"uv19_0273",level:1,thai:"บอก",roman:"bork",hebrew:"להגיד / לספר",english:"tell",tone:'low',source:"תומר 7,csv.txt"},
  {id:"uv19_0274",level:1,thai:"ถาม",roman:"tam",hebrew:"לשאול",english:"ask",tone:'rising',source:"תומר 7,csv.txt"},
  {id:"uv19_0275",level:1,thai:"ยิ้ม",roman:"yim",hebrew:"לחייך",english:"smile",tone:'high',source:"תומר 7,csv.txt"},
  {id:"uv19_0276",level:3,thai:"ร้องไห้",roman:"rong¹-hai³",hebrew:"לבכות",english:"cry",tone:'mid-falling',source:"תומר 8,csv.txt"},
  {id:"uv19_0277",level:3,thai:"อิจฉา",roman:"it²-chaa¹",hebrew:"לקנא",english:"envy / jealous",tone:'low-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0278",level:3,thai:"โมโห",roman:"mo¹-ho¹",hebrew:"עצבני",english:"angry / annoyed",tone:'mid-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0279",level:3,thai:"รำคาญ",roman:"ram¹-kaan¹",hebrew:"מעצבן",english:"annoyed / annoying",tone:'mid-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0280",level:1,thai:"หวัง",roman:"wang¹",hebrew:"לקוות",english:"hope",tone:'mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0281",level:3,thai:"มั่นใจ",roman:"man¹-jai¹",hebrew:"בטוח",english:"confident",tone:'mid-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0282",level:4,thai:"น่าสงสาร",roman:"naa³-song⁵-saan¹",hebrew:"מסכן",english:"pitiful / poor thing",tone:'falling-rising-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0283",level:3,thai:"ภูมิใจ",roman:"pum¹-jai¹",hebrew:"גאה",english:"proud",tone:'mid-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0284",level:3,thai:"เสียดาย",roman:"sia⁵-daai¹",hebrew:"חבל / בזבוז",english:"what a pity / waste",tone:'rising-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0285",level:3,thai:"ตื่นเต้น",roman:"dteun-dten",hebrew:"מתרגש",english:"excited",tone:'low-falling',source:"תומר 8,csv.txt"},
  {id:"uv19_0286",level:1,thai:"ง่วง",roman:"nguang³",hebrew:"ישנוני",english:"sleepy",tone:'falling',source:"תומר 8,csv.txt"},
  {id:"uv19_0287",level:3,thai:"ตกใจ",roman:"dtok²-jai¹",hebrew:"מבוהל",english:"shocked / startled",tone:'low-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0288",level:1,thai:"รวม",roman:"ruam¹",hebrew:"ביחד",english:"together / include",tone:'mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0289",level:3,thai:"ชื่อจริง",roman:"cheuu³-jing¹",hebrew:"שם אמיתי",english:"real name",tone:'falling-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0290",level:3,thai:"ชื่อเล่น",roman:"cheuu³-len³",hebrew:"כינוי",english:"nickname",tone:'falling-falling',source:"תומר 8,csv.txt"},
  {id:"uv19_0291",level:4,thai:"นามสกุล",roman:"naam¹-sa¹-kun¹",hebrew:"שם משפחה",english:"surname",tone:'mid-mid-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0292",level:1,thai:"คือ",roman:"keuu¹",hebrew:"זה / הוא (הגדרה)",english:"is / means",tone:'mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0293",level:1,thai:"เบื่อ",roman:"beaua²",hebrew:"משעמם",english:"bored",tone:'low',source:"תומר 8,csv.txt"},
  {id:"uv19_0294",level:3,thai:"สมอง",roman:"sa¹-mawng¹",hebrew:"מוח",english:"brain",tone:'mid-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0295",level:4,thai:"สมองไม่ทำงาน",roman:"sa¹-mawng¹ mai³ tam¹-ngaan¹",hebrew:"המוח לא עובד",english:"brain not working",tone:'mid-mid-falling-mid-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0296",level:1,thai:"บน",roman:"bon¹",hebrew:"על (מעל)",english:"on / above",tone:'mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0297",level:3,thai:"ต่อไป",roman:"dtor²-bpai¹",hebrew:"הבא",english:"next",tone:'low-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0298",level:1,thai:"เห็น",roman:"hen¹",hebrew:"רואה",english:"see",tone:'mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0299",level:3,thai:"หน้าต่าง",roman:"naa³-dtang²",hebrew:"חלון",english:"window",tone:'falling-low',source:"תומר 8,csv.txt"},
  {id:"uv19_0300",level:1,thai:"ห้อง",roman:"hawng³",hebrew:"חדר",english:"room",tone:'falling',source:"תומר 8,csv.txt"},
  {id:"uv19_0301",level:3,thai:"พ่อแม่",roman:"poh³-mae³",hebrew:"הורים",english:"parents",tone:'falling-falling',source:"תומר 8,csv.txt"},
  {id:"uv19_0302",level:3,thai:"กับข้าว",roman:"kap²-kaao³",hebrew:"אוכל (שאוכלים עם אורז)",english:"food eaten with rice",tone:'low-falling',source:"תומר 8,csv.txt"},
  {id:"uv19_0303",level:3,thai:"นักเรียน",roman:"nag²-rian¹",hebrew:"סטודנט / תלמיד",english:"student",tone:'low-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0304",level:4,thai:"ร้านอาหาร",roman:"raan³-aa¹-haan⁵",hebrew:"מסעדה",english:"restaurant",tone:'falling-mid-rising',source:"תומר 8,csv.txt"},
  {id:"uv19_0305",level:3,thai:"เจ้าของ",roman:"jao³-kawng¹",hebrew:"הבעלים",english:"owner",tone:'falling-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0306",level:1,thai:"แม่",roman:"mae³",hebrew:"אמא",english:"mother",tone:'falling',source:"תומר 8,csv.txt"},
  {id:"uv19_0307",level:3,thai:"ผู้หญิง",roman:"puu³-ying⁵",hebrew:"אישה / נקבה",english:"woman / female",tone:'falling-rising',source:"תומר 8,csv.txt"},
  {id:"uv19_0308",level:3,thai:"ผู้ชาย",roman:"puu³-chaai¹",hebrew:"גבר / זכר",english:"man / male",tone:'falling-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0309",level:4,thai:"ในหลวง",roman:"nai¹-lu-ang¹",hebrew:"המלך",english:"king",tone:'mid-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0310",level:4,thai:"พระเจ้าอยู่หัว",roman:"pra¹-jao³-yuu²-hua¹",hebrew:"המלך (תואר רשמי)",english:"king (formal title)",tone:'mid-falling-low-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0311",level:3,thai:"หมู่",roman:"muu",hebrew:"קבוצה / כפר / חבורה",english:"group / village / category",tone:'low',source:"תומר 8,csv.txt"},
  {id:"uv19_0312",level:3,thai:"ชาวเผ่า",roman:"chaao¹-pao¹",hebrew:"אנשי שבט",english:"tribal people",tone:'mid-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0314",level:3,thai:"ภูเขา",roman:"puu¹-kao¹",hebrew:"הר",english:"mountain",tone:'mid-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0315",level:1,thai:"ผ้า",roman:"paa",hebrew:"בד / בגד",english:"cloth / fabric / clothing",tone:'falling',source:"תומר 8,csv.txt"},
  {id:"uv19_0316",level:3,thai:"ตลาดนัด",roman:"dtalard²-nat¹",hebrew:"שוק",english:"market",tone:'low-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0317",level:2,thai:"อีก",roman:"iig(2)",hebrew:"שוב (Again)",english:"again / more",tone:'low',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0318",level:3,thai:"พักผ่อน",roman:"pag-pawn(2-2)",hebrew:"לנוח",english:"rest",tone:'low-low',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0319",level:3,thai:"ไปเที่ยว",roman:"bpai-tiao(1-3)",hebrew:"לטייל / להסתובב בכיף",english:"go out / travel for fun",tone:'mid-falling',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0320",level:2,thai:"เสร็จ",roman:"sed(2)",hebrew:"סיים / נגמר",english:"finish / done",tone:'low',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0321",level:2,thai:"หมด",roman:"mod(2)",hebrew:"הכל נגמר / אזל",english:"finished / used up",tone:'low',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0322",level:2,thai:"ตื่น",roman:"dteun",hebrew:"להתעורר",english:"wake up",tone:'low',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0323",level:2,thai:"หลง",roman:"long(1)",hebrew:"ללכת לאיבוד",english:"lost",tone:'mid',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0324",level:4,thai:"ความอดทน",roman:"kwaam-od-ton(1-2-1)",hebrew:"סבלנות",english:"patience",tone:'mid-low-mid',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0325",level:2,thai:"ปลา",roman:"bplaa(1)",hebrew:"דג",english:"fish",tone:'mid',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0326",level:2,thai:"กุ้ง",roman:"gung(3)",hebrew:"שרימפס",english:"shrimp",tone:'falling',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0327",level:2,thai:"หอย",roman:"hoi(5)",hebrew:"צדפה",english:"shellfish",tone:'rising',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0328",level:3,thai:"ปลาหมึก",roman:"bpla-meuk",hebrew:"דיונון",english:"squid",tone:'mid-low',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0329",level:4,thai:"อาหารทะเล",roman:"aa-haan-ta-lay(1(1)-5-1-1)",hebrew:"פירות ים",english:"seafood",tone:'mid-mid-rising-mid-mid',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0330",level:3,thai:"เมื่อไร",roman:"meua-rai(3-1)",hebrew:"מתי",english:"when?",tone:'falling-mid',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0331",level:5,thai:"ยังไง",roman:"yang-ngai",hebrew:"איך?",english:"how?",tone:'mid-mid',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0332",level:2,thai:"ใคร",roman:"khrai(1)",hebrew:"מי (או מי זה)",english:"who",tone:'mid',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0333",level:3,thai:"วันเกิด",roman:"wan-geut(1-2)",hebrew:"יום הולדת",english:"birthday",tone:'mid-low',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0334",level:2,thai:"เคย",roman:"koey(1)",hebrew:"אי פעם",english:"ever",tone:'mid',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0335",level:4,thai:"สมาชิก",roman:"sa-ma-chik(2-1-3)",hebrew:"חבר (במועדון / קבוצה)",english:"member",tone:'low-mid-falling',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0336",level:2,thai:"เด็ก",roman:"dek(2)",hebrew:"ילד",english:"child",tone:'low',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0337",level:3,thai:"น้ำมัน",roman:"nam-man(1-1)",hebrew:"שמן / דלק",english:"oil / fuel",tone:'mid-mid',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0338",level:4,thai:"ปั๊มน้ำมัน",roman:"bpum-nam-man(3-1-1)",hebrew:"תחנת דלק",english:"gas station",tone:'falling-mid-mid',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0339",level:2,thai:"กัน",roman:"gan(1)",hebrew:"אחד את השני / ביחד",english:"each other / together",tone:'mid',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0340",level:4,thai:"แต่เช้า",roman:"dtae-chao",hebrew:"לפנות בוקר / מוקדם בבוקר",english:"early in the morning",tone:'low-high',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0341",level:3,thai:"ตอนเช้า",roman:"dton-chao",hebrew:"בבוקר",english:"morning / in the morning",tone:'mid-high',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0342",level:4,thai:"ตอนสาย",roman:"dton-saai",hebrew:"מאוחר בבוקר",english:"late morning",tone:'mid-rising',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0343",level:3,thai:"ตอนเที่ยง",roman:"dton-tiang",hebrew:"בצהריים",english:"noon / midday",tone:'mid-falling',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0344",level:3,thai:"ตอนบ่าย",roman:"dton-baai",hebrew:"אחר הצהריים",english:"afternoon",tone:'mid-low',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0345",level:3,thai:"ตอนเย็น",roman:"dton-yen",hebrew:"בערב",english:"evening",tone:'mid-mid',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0346",level:4,thai:"ตอนกลางคืน",roman:"dton-glaang-kheun",hebrew:"בלילה",english:"night / at night",tone:'mid-mid-mid',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0347",level:4,thai:"ตอนดึก",roman:"dton-deuk",hebrew:"מאוחר בלילה",english:"late at night",tone:'mid-low',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0348",level:3,thai:"เห็นด้วย",roman:"hen-duai",hebrew:"להסכים",english:"agree",tone:'rising-falling',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0349",level:5,thai:"เห็นไหม",roman:"hen mai?",hebrew:"רואה?",english:"Do you see?",tone:'rising-rising',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0350",level:5,thai:"เห็นด้วยไหม",roman:"hen-duai mai?",hebrew:"האם אתה מסכים?",english:"Do you agree?",tone:'rising-falling-rising',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0351",level:1,thai:"ยืน",roman:"yuen",hebrew:"לעמוד",english:"stand",tone:'mid',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0352",level:1,thai:"นั่ง",roman:"nang",hebrew:"לשבת",english:"sit",tone:'falling',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0353",level:1,thai:"เดิน",roman:"dern",hebrew:"ללכת",english:"walk",tone:'mid',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0354",level:1,thai:"ข้าม",roman:"khaam",hebrew:"לדלג",english:"cross / skip over",tone:'falling',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0355",level:4,thai:"ไม่ไหว",roman:"mai wai",hebrew:"לא יכול / לא מסוגל / לא עומד בזה",english:"cannot handle it / cannot manage",tone:'falling-rising',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0356",level:4,thai:"ไม่ต้องห่วง",roman:"mai dtong huang",hebrew:"אל תדאג / אין מה לדאוג",english:"do not worry",tone:'falling-falling-low',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0357",level:4,thai:"ไม่สนใจ",roman:"mai son jai",hebrew:"לא מעוניין / לא אכפת",english:"not interested / do not care",tone:'falling-rising-mid',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0358",level:4,thai:"ไม่มีอะไร",roman:"mai mee a-rai",hebrew:"אין כלום",english:"there is nothing / nothing",tone:'falling-mid-low-mid',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0359",level:3,thai:"ไม่ต้อง",roman:"mai dtong",hebrew:"לא צריך / אין צורך",english:"do not need",tone:'falling-falling',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0360",level:4,thai:"ไม่มีปัญหา",roman:"mai mee pan-haa",hebrew:"אין בעיה",english:"no problem",tone:'falling-mid-mid-rising',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0361",level:4,thai:"ไม่มีทาง",roman:"mâi mee taang",hebrew:"אין מצב / אין סיכוי",english:"no way",tone:'falling-mid-mid',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0362",level:5,thai:"ว่าไง",roman:"wâa ngai",hebrew:"מה קורה? / מה נשמע?",english:"what’s up?",tone:'falling-mid',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0363",level:4,thai:"ไม่เก็ทอะ",roman:"mâi get à",hebrew:"אני לא מבין / לא קולט",english:"I do not get it",tone:'falling-low-low',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0364",level:5,thai:"แล้วไง",roman:"láew ngai",hebrew:"אז מה?",english:"so what?",tone:'high-mid',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0365",level:3,thai:"คิดว่า",roman:"khít wâa",hebrew:"לחשוב ש...",english:"think that",tone:'high-falling',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0366",level:3,thai:"พูดว่า",roman:"phuut waa",hebrew:"לומר ש...",english:"say that...",tone:'falling-falling',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0367",level:3,thai:"บอกว่า",roman:"bòk wâa",hebrew:"לספר / להגיד ש...",english:"tell / say that",tone:'low-falling',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0368",level:4,thai:"รู้สึกว่า",roman:"rúu sèuk wâa",hebrew:"להרגיש ש...",english:"feel that",tone:'high-low-falling',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0369",level:3,thai:"เพราะว่า",roman:"phróh wâa",hebrew:"בגלל ש...",english:"because",tone:'high-falling',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0370",level:4,thai:"ได้ยินว่า",roman:"dai-yin waa",hebrew:"לשמוע ש...",english:"hear that...",tone:'falling-mid-falling',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0371",level:3,thai:"ต้นไม้",roman:"ton mai",hebrew:"צמח / עץ",english:"plant / tree",tone:'falling-high',source:"אלמוג 4(1).apkg"},
  {id:"uv19_0372",level:1,thai:"บาง",roman:"baang",hebrew:"חלק מ..",english:"some / part of",tone:'mid',source:"אלמוג 4(1).apkg"},
  {id:"uv19_0373",level:3,thai:"ด้วยกัน",roman:"duay gan",hebrew:"יחדיו",english:"together",tone:'falling-mid',source:"אלמוג 4(1).apkg"},
  {id:"uv19_0374",level:3,thai:"บางที",roman:"baang tii",hebrew:"יכול להיות",english:"maybe / sometimes",tone:'mid-mid',source:"אלמוג 4(1).apkg"},
  {id:"uv19_0375",level:3,thai:"พวกเขา",roman:"phuak khao",hebrew:"הם",english:"they / them",tone:'falling-rising',source:"אלמוג 4(1).apkg"},
  {id:"uv19_0376",level:3,thai:"บางวัน",roman:"baang wan",hebrew:"חלק מהימים",english:"some days",tone:'mid-mid',source:"אלמוג 4(1).apkg"},
  {id:"uv19_0377",level:3,thai:"ทุกที่",roman:"tug tii",hebrew:"בכל מקום",english:"everywhere",tone:'high-falling',source:"אלמוג 4(1).apkg"},
  {id:"uv19_0378",level:1,thai:"ออก",roman:"awk",hebrew:"יציאה,החוצה",english:"exit / out / go out",tone:'low',source:"אלמוג 4(1).apkg"},
  {id:"uv19_0379",level:1,thai:"อุ่น",roman:"un",hebrew:"חמים,חם",english:"warm",tone:'low',source:"אלמוג 4(1).apkg"},
  {id:"uv19_0380",level:5,thai:"ตอนผมเด็ก ๆ",roman:"dton phom dek dek",hebrew:"כשהייתי ילד",english:"when I was a child",tone:'mid-rising-low-low',source:"אלמוג 4(1).apkg"},
  {id:"uv19_0381",level:1,thai:"เข้า",roman:"khao",hebrew:"להיכנס / כניסה",english:"enter / go in",tone:'falling',source:"אלמוג 4(1).apkg"},
  {id:"uv19_0382",level:1,thai:"หน้า",roman:"naa",hebrew:"פנים / קדימה / עונה / דף",english:"face / front / season / page",tone:'falling',source:"אלמוג 4(1).apkg"},
  {id:"uv19_0383",level:3,thai:"โรงพัก",roman:"rong pag",hebrew:"תחנת משטרה",english:"police station",tone:'mid-high',source:"אלמוג 4(1).apkg"},
  {id:"uv19_0384",level:3,thai:"ไม่ได้…",roman:"mai dai+v",hebrew:"לא עשיתי",english:"did not / cannot + verb",tone:'falling-falling',source:"אלמוג 4(1).apkg"},
  {id:"uv19_0385",level:5,thai:"ดีใจที่ได้เจอ",roman:"dii-jai tii dai jer",hebrew:"נחמד לראותך",english:"nice to see you",tone:'mid-mid-falling-falling-low',source:"אלמוג 4(1).apkg"},
  {id:"uv19_0386",level:1,thai:"ผึ้ง",roman:"phueng",hebrew:"דבורה",english:"bee",tone:'falling',source:"אלמוג 4(1).apkg"},
  {id:"uv19_0387",level:3,thai:"ต่อย",roman:"dtoy",hebrew:"אגרוף / לעקוץ",english:"to punch / to sting",tone:'low',source:"אלמוג 4(1).apkg"}

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
  'ก': {name:'กอ ไก่', romanName:'go gai / ko kai', cls:'middle', initial:'g/k', final:'k', finalKind:'dead', word:'ไก่', wordRoman:'gai', he:'תרנגולת', en:'chicken'},
  'ข': {name:'ขอ ไข่', romanName:'kho khai', cls:'high', initial:'kh', final:'k', finalKind:'dead', word:'ไข่', wordRoman:'khai', he:'ביצה', en:'egg'},
  'ฃ': {name:'ฃอ ขวด', romanName:'kho khuat', cls:'high', initial:'kh', final:'k', finalKind:'dead', word:'ขวด', wordRoman:'khuat', he:'בקבוק', en:'bottle', usageHe:'אות נדירה/כמעט לא בשימוש מודרני.', usageEn:'Rare/obsolete letter in modern Thai.'},
  'ค': {name:'คอ ควาย', romanName:'kho khwai', cls:'low', initial:'kh', final:'k', finalKind:'dead', word:'ควาย', wordRoman:'khwai', he:'תאו מים', en:'water buffalo'},
  'ฅ': {name:'ฅอ คน', romanName:'kho khon', cls:'low', initial:'kh', final:'k', finalKind:'dead', word:'คน', wordRoman:'khon', he:'אדם / אנשים', en:'person / people', usageHe:'אות נדירה/כמעט לא בשימוש מודרני.', usageEn:'Rare/obsolete letter in modern Thai.'},
  'ฆ': {name:'ฆอ ระฆัง', romanName:'kho ra-khang', cls:'low', initial:'kh', final:'k', finalKind:'dead', word:'ระฆัง', wordRoman:'ra-khang', he:'פעמון', en:'bell'},
  'ง': {name:'งอ งู', romanName:'ngo nguu', cls:'low', initial:'ng', final:'ng', finalKind:'live', word:'งู', wordRoman:'nguu', he:'נחש', en:'snake'},
  'จ': {name:'จอ จาน', romanName:'jo jaan', cls:'middle', initial:'j', final:'t', finalKind:'dead', word:'จาน', wordRoman:'jaan', he:'צלחת', en:'plate'},
  'ฉ': {name:'ฉอ ฉิ่ง', romanName:'cho ching', cls:'high', initial:'ch', final:'rare', finalKind:'rare', word:'ฉิ่ง', wordRoman:'ching', he:'מצלתיים קטנות', en:'small cymbals'},
  'ช': {name:'ชอ ช้าง', romanName:'cho chang', cls:'low', initial:'ch', final:'t', finalKind:'dead', word:'ช้าง', wordRoman:'chang', he:'פיל', en:'elephant'},
  'ซ': {name:'ซอ โซ่', romanName:'so so', cls:'low', initial:'s', final:'t', finalKind:'dead', word:'โซ่', wordRoman:'so', he:'שרשרת', en:'chain'},
  'ฌ': {name:'ฌอ เฌอ', romanName:'cho choe', cls:'low', initial:'ch', final:'t', finalKind:'dead', word:'เฌอ', wordRoman:'choe', he:'עץ', en:'tree'},
  'ญ': {name:'ญอ หญิง', romanName:'yo ying', cls:'low', initial:'y', final:'n', finalKind:'live', word:'หญิง', wordRoman:'ying', he:'אישה / נקבה', en:'woman / female'},
  'ฎ': {name:'ฎอ ชฎา', romanName:'do chada', cls:'middle', initial:'d', final:'t', finalKind:'dead', word:'ชฎา', wordRoman:'chada', he:'כתר/כיסוי ראש תאילנדי', en:'Thai headdress'},
  'ฏ': {name:'ฏอ ปฏัก', romanName:'to patak', cls:'middle', initial:'dt/t', final:'t', finalKind:'dead', word:'ปฏัก', wordRoman:'patak', he:'מוט דקירה / דרבן', en:'goad / spear-like prod'},
  'ฐ': {name:'ฐอ ฐาน', romanName:'tho than', cls:'high', initial:'th', final:'t', finalKind:'dead', word:'ฐาน', wordRoman:'than', he:'בסיס / כן', en:'base / pedestal'},
  'ฑ': {name:'ฑอ มณโฑ', romanName:'tho montho', cls:'low', initial:'th/d', final:'t', finalKind:'dead', word:'มณโฑ', wordRoman:'montho', he:'מונת׳ו — שם דמות', en:'Montho, a character name'},
  'ฒ': {name:'ฒอ ผู้เฒ่า', romanName:'tho phu thao', cls:'low', initial:'th', final:'t', finalKind:'dead', word:'ผู้เฒ่า', wordRoman:'phu thao', he:'זקן / אדם מבוגר', en:'elderly person'},
  'ณ': {name:'ณอ เณร', romanName:'no nen', cls:'low', initial:'n', final:'n', finalKind:'live', word:'เณร', wordRoman:'nen', he:'נזיר צעיר', en:'novice monk'},
  'ด': {name:'ดอ เด็ก', romanName:'do dek', cls:'middle', initial:'d', final:'t', finalKind:'dead', word:'เด็ก', wordRoman:'dek', he:'ילד', en:'child'},
  'ต': {name:'ตอ เต่า', romanName:'to tao / dto dtao', cls:'middle', initial:'dt / t', final:'t', finalKind:'dead', word:'เต่า', wordRoman:'tao / dtao', he:'צב', en:'turtle'},
  'ถ': {name:'ถอ ถุง', romanName:'tho thung', cls:'high', initial:'th', final:'t', finalKind:'dead', word:'ถุง', wordRoman:'thung', he:'שקית', en:'bag'},
  'ท': {name:'ทอ ทหาร', romanName:'tho thahan', cls:'low', initial:'th', final:'t', finalKind:'dead', word:'ทหาร', wordRoman:'thahan', he:'חייל', en:'soldier'},
  'ธ': {name:'ธอ ธง', romanName:'tho thong', cls:'low', initial:'th', final:'t', finalKind:'dead', word:'ธง', wordRoman:'thong', he:'דגל', en:'flag'},
  'น': {name:'นอ หนู', romanName:'no nuu', cls:'low', initial:'n', final:'n', finalKind:'live', word:'หนู', wordRoman:'nuu', he:'עכבר / כינוי עצמי לילד', en:'mouse / child’s self-pronoun'},
  'บ': {name:'บอ ใบไม้', romanName:'bo bai mai', cls:'middle', initial:'b', final:'p', finalKind:'dead', word:'ใบไม้', wordRoman:'bai mai', he:'עלה', en:'leaf'},
  'ป': {name:'ปอ ปลา', romanName:'po pla / bpo bplaa', cls:'middle', initial:'bp / p', final:'p', finalKind:'dead', word:'ปลา', wordRoman:'pla / bplaa', he:'דג', en:'fish'},
  'ผ': {name:'ผอ ผึ้ง', romanName:'pho phueng', cls:'high', initial:'ph', final:'rare', finalKind:'rare', word:'ผึ้ง', wordRoman:'phueng', he:'דבורה', en:'bee'},
  'ฝ': {name:'ฝอ ฝา', romanName:'fo fa', cls:'high', initial:'f', final:'rare', finalKind:'rare', word:'ฝา', wordRoman:'fa', he:'מכסה', en:'lid'},
  'พ': {name:'พอ พาน', romanName:'pho phan', cls:'low', initial:'ph', final:'p', finalKind:'dead', word:'พาน', wordRoman:'phan', he:'מגש טקסי', en:'ceremonial tray'},
  'ฟ': {name:'ฟอ ฟัน', romanName:'fo fan', cls:'low', initial:'f', final:'p', finalKind:'dead', word:'ฟัน', wordRoman:'fan', he:'שן', en:'tooth'},
  'ภ': {name:'ภอ สำเภา', romanName:'pho samphao', cls:'low', initial:'ph', final:'p', finalKind:'dead', word:'สำเภา', wordRoman:'samphao', he:'ספינת מפרש / ג׳ונקה', en:'junk / sailing ship'},
  'ม': {name:'มอ ม้า', romanName:'mo maa', cls:'low', initial:'m', final:'m', finalKind:'live', word:'ม้า', wordRoman:'maa', he:'סוס', en:'horse'},
  'ย': {name:'ยอ ยักษ์', romanName:'yo yak', cls:'low', initial:'y', final:'y', finalKind:'live', word:'ยักษ์', wordRoman:'yak', he:'ענק / שד', en:'giant / ogre'},
  'ร': {name:'รอ เรือ', romanName:'ro ruea', cls:'low', initial:'r', final:'n', finalKind:'live', word:'เรือ', wordRoman:'ruea', he:'סירה', en:'boat'},
  'ล': {name:'ลอ ลิง', romanName:'lo ling', cls:'low', initial:'l', final:'n', finalKind:'live', word:'ลิง', wordRoman:'ling', he:'קוף', en:'monkey'},
  'ว': {name:'วอ แหวน', romanName:'wo waen', cls:'low', initial:'w', final:'w', finalKind:'live', word:'แหวน', wordRoman:'waen', he:'טבעת', en:'ring'},
  'ศ': {name:'ศอ ศาลา', romanName:'so sala', cls:'high', initial:'s', final:'t', finalKind:'dead', word:'ศาลา', wordRoman:'sala', he:'ביתן / פביליון', en:'pavilion'},
  'ษ': {name:'ษอ ฤๅษี', romanName:'so rue-si', cls:'high', initial:'s', final:'t', finalKind:'dead', word:'ฤๅษี', wordRoman:'rue-si', he:'נזיר / חכם מתבודד', en:'hermit / sage'},
  'ส': {name:'สอ เสือ', romanName:'so suea', cls:'high', initial:'s', final:'t', finalKind:'dead', word:'เสือ', wordRoman:'suea', he:'נמר', en:'tiger'},
  'ห': {name:'หอ หีบ', romanName:'ho hiip / ho hib', cls:'high', initial:'h', final:'rare', finalKind:'rare', word:'หีบ', wordRoman:'hiip / hib', he:'תיבה / ארגז', en:'chest / box', usageHe:'לפני ง ญ น ม ย ร ล ว היא יכולה להיות ห นำ: לרוב לא שומעים h, אבל היא משפיעה על הטון. למשל หลง = long.', usageEn:'Before ง ญ น ม ย ร ล ว it can be ห นำ: the h is often not pronounced, but it affects tone. Example: หลง = long.'},
  'ฬ': {name:'ฬอ จุฬา', romanName:'lo chula', cls:'low', initial:'l', final:'n', finalKind:'live', word:'จุฬา', wordRoman:'chula', he:'עפיפון', en:'kite'},
  'อ': {name:'ออ อ่าง', romanName:'o aang', cls:'middle', initial:'silent carrier / ɔɔ', final:'—', finalKind:'carrier', word:'อ่าง', wordRoman:'aang', he:'אגן / כיור / גיגית', en:'basin / tub'},
  'ฮ': {name:'ฮอ นกฮูก', romanName:'ho nok huk', cls:'low', initial:'h', final:'rare', finalKind:'rare', word:'นกฮูก', wordRoman:'nok huk', he:'ינשוף', en:'owl'}
};

const THAI_SIGN_INFO = {
  'ะ': {name:'สระอะ', romanName:'sara a', sound:'short a', kind:'vowel', ruleHe:'נכתב אחרי העיצור; מסמן הברה פתוחה קצרה.', ruleEn:'Written after the consonant; marks a short open syllable.'},
  'า': {name:'สระอา', romanName:'sara aa', sound:'long aa', kind:'vowel', ruleHe:'נכתב אחרי העיצור.', ruleEn:'Written after the consonant.'},
  'ิ': {name:'สระอิ', romanName:'sara i', sound:'short i', kind:'vowel', ruleHe:'נכתב מעל העיצור.', ruleEn:'Written above the consonant.'},
  'ี': {name:'สระอี', romanName:'sara ii', sound:'long ii / ee', kind:'vowel', ruleHe:'נכתב מעל העיצור.', ruleEn:'Written above the consonant.'},
  'ึ': {name:'สระอึ', romanName:'sara ue / sara eu', sound:'short ue/eu', kind:'vowel', ruleHe:'נכתב מעל העיצור.', ruleEn:'Written above the consonant.'},
  'ื': {name:'สระอือ', romanName:'sara uue / sara euu', sound:'long uue/euu', kind:'vowel', ruleHe:'נכתב מעל העיצור; בהברה פתוחה מוסיפים לרוב อ.', ruleEn:'Written above the consonant; open syllables often add อ.'},
  'ุ': {name:'สระอุ', romanName:'sara u', sound:'short u', kind:'vowel', ruleHe:'נכתב מתחת לעיצור.', ruleEn:'Written below the consonant.'},
  'ู': {name:'สระอู', romanName:'sara uu', sound:'long uu / oo', kind:'vowel', ruleHe:'נכתב מתחת לעיצור.', ruleEn:'Written below the consonant.'},
  'เ': {name:'สระเอ / part of เ-ะ', romanName:'sara e', sound:'e / ee family', kind:'leading vowel', ruleHe:'נכתב לפני העיצור; הוא חלק מצורות כמו เ-ะ, เ-, เ-อ, เ-ือ.', ruleEn:'Written before the consonant; part of forms such as เ-ะ, เ-, เ-อ, เ-ือ.'},
  'แ': {name:'สระแอ / part of แ-ะ', romanName:'sara ae', sound:'ae family', kind:'leading vowel', ruleHe:'נכתב לפני העיצור; חלק מצורות ae קצר/ארוך.', ruleEn:'Written before the consonant; part of short/long ae forms.'},
  'โ': {name:'สระโอ / part of โ-ะ', romanName:'sara o', sound:'o / oo family', kind:'leading vowel', ruleHe:'נכתב לפני העיצור; חלק ממשפחת o/oo.', ruleEn:'Written before the consonant; part of the o/oo family.'},
  'ใ': {name:'สระใอ', romanName:'sara ai mai muan', sound:'ai', kind:'leading vowel', ruleHe:'נכתב לפני העיצור; אחד משני סימני ai.', ruleEn:'Written before the consonant; one of two ai signs.'},
  'ไ': {name:'สระไอ', romanName:'sara ai mai malai', sound:'ai', kind:'leading vowel', ruleHe:'נכתב לפני העיצור; אחד משני סימני ai.', ruleEn:'Written before the consonant; one of two ai signs.'},
  'ำ': {name:'สระอำ', romanName:'sara am', sound:'am', kind:'vowel', ruleHe:'סימן תנועה אחד שנכתב מעל/אחרי העיצור.', ruleEn:'One vowel sign written above/after the consonant.'},
  'ั': {name:'ไม้หันอากาศ', romanName:'mai han-akat', sound:'short a / part of ua', kind:'vowel mark', ruleHe:'נכתב מעל העיצור; מופיע למשל כחלק מ־-ัว וגם כסימן a קצר בהברה סגורה.', ruleEn:'Written above the consonant; appears as part of -ัว and also as short a in closed syllables.'},
  '็': {name:'ไม้ไต่คู้', romanName:'mai taikhu', sound:'vowel shortener', kind:'special mark', ruleHe:'לא סימן טון. נכתב מעל העיצור ומקצר תנועה לפני עיצור סופי, למשל เด็ก / แข็ง / ล็อก.', ruleEn:'Not a tone mark. Written above the consonant to shorten a vowel before a final consonant, e.g. เด็ก / แข็ง / ล็อก.'},
  '่': {name:'ไม้เอก', romanName:'mai ek', sound:'tone mark 1', kind:'tone mark', ruleHe:'סימן טון. התוצאה תלויה בקבוצת העיצור ובסוג ההברה.', ruleEn:'Tone mark. The resulting tone depends on consonant class and syllable type.'},
  '้': {name:'ไม้โท', romanName:'mai tho', sound:'tone mark 2', kind:'tone mark', ruleHe:'סימן טון. התוצאה תלויה בקבוצת העיצור ובסוג ההברה.', ruleEn:'Tone mark. The resulting tone depends on consonant class and syllable type.'},
  '๊': {name:'ไม้ตรี', romanName:'mai tri', sound:'tone mark 3', kind:'tone mark', ruleHe:'סימן טון, נפוץ בעיקר עם עיצורים מקבוצה אמצעית.', ruleEn:'Tone mark, used mainly with middle-class consonants.'},
  '๋': {name:'ไม้จัตวา', romanName:'mai chattawa', sound:'tone mark 4', kind:'tone mark', ruleHe:'סימן טון, נפוץ בעיקר עם עיצורים מקבוצה אמצעית.', ruleEn:'Tone mark, used mainly with middle-class consonants.'},
  '์': {name:'การันต์ / ไม้ทัณฑฆาต', romanName:'garan / mai thanthakhat', sound:'silent mark', kind:'special mark', ruleHe:'מסמן שאות לא נהגית.', ruleEn:'Marks a letter as silent.'},
  'ๆ': {name:'ไม้ยมก', romanName:'mai yamok', sound:'repetition mark', kind:'special mark', ruleHe:'חוזר על המילה או הביטוי הקודמים.', ruleEn:'Repeats the previous word or phrase.'}
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
    const x = THAI_CONSONANT_INFO[ch];
    const usage = isHebrew() ? (x.usageHe || '') : (x.usageEn || '');
    const boardLine = isHebrew()
      ? `מילת לוח: ${x.word} (${x.wordRoman}) — ${x.he} / ${x.en}`
      : `Board word: ${x.word} (${x.wordRoman}) — ${x.en} / ${x.he}`;
    if(isHebrew()){
      return `<div><b>${escapeHtml(ch)} — ${escapeHtml(x.name)} <span dir="ltr">(${escapeHtml(x.romanName)})</span></b></div><div>${escapeHtml(boardLine)}</div><div>קבוצה: ${escapeHtml(consonantClassLabel(x.cls))}</div><div>תחילה: <span dir="ltr">${escapeHtml(x.initial)}</span> · סוף: <span dir="ltr">${escapeHtml(x.final)}</span></div><div>${escapeHtml(finalKindLabel(x.finalKind))}</div>${usage ? `<div class="char-note">${escapeHtml(usage)}</div>` : ''}`;
    }
    return `<div><b>${escapeHtml(ch)} — ${escapeHtml(x.name)} <span dir="ltr">(${escapeHtml(x.romanName)})</span></b></div><div>${escapeHtml(boardLine)}</div><div>Class: ${escapeHtml(consonantClassLabel(x.cls))}</div><div>Initial: <span dir="ltr">${escapeHtml(x.initial)}</span> · Final: <span dir="ltr">${escapeHtml(x.final)}</span></div><div>${escapeHtml(finalKindLabel(x.finalKind))}</div>${usage ? `<div class="char-note">${escapeHtml(usage)}</div>` : ''}`;
  }
  if(THAI_SIGN_INFO[ch]){
    const x = THAI_SIGN_INFO[ch];
    const rule = isHebrew() ? x.ruleHe : x.ruleEn;
    if(isHebrew()){
      return `<div><b>${escapeHtml(ch)} — ${escapeHtml(x.name)} <span dir="ltr">(${escapeHtml(x.romanName)})</span></b></div><div>סוג: ${escapeHtml(signKindLabel(x.kind))}</div><div>צליל/תפקיד: <span dir="ltr">${escapeHtml(x.sound)}</span></div><div>${escapeHtml(rule)}</div>`;
    }
    return `<div><b>${escapeHtml(ch)} — ${escapeHtml(x.name)} <span dir="ltr">(${escapeHtml(x.romanName)})</span></b></div><div>Type: ${escapeHtml(signKindLabel(x.kind))}</div><div>Sound/function: <span dir="ltr">${escapeHtml(x.sound)}</span></div><div>${escapeHtml(rule)}</div>`;
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


function level12BoardFormNoteText(){
  return isHebrew()
    ? 'הערת יסוד: צורות הלוח מלמדות את הצליל/הסימן הבסיסי. במילים תאיות אמיתיות, בעיקר בתנועות, צורת הכתיבה יכולה להשתנות לפי העיצור והאות הסופית. דוגמה: เลอะ (ler) = er קצר — מלוכלך; לא כמו ล็อก (lok) = lock / לנעול, שבו ็ מקצר תנועה אחרת.'
    : 'Foundation note: Board forms teach the basic sound/sign. In real Thai words, especially with vowels, the written shape can change depending on the consonant and final consonant. Example: เลอะ (ler) = short er — dirty/messy; not the same as ล็อก (lok) = lock, where ็ shortens another vowel.';
}
function level12BoardFormNoteHtml(){
  return `<div class="foundation-note"><b>${escapeHtml(isHebrew() ? 'חשוב' : 'Important')}:</b> ${escapeHtml(level12BoardFormNoteText())}</div>`;
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
const LEVEL55_CHAT_ITEM = {id:'level55_chat', level:'5.5', thai:'', roman:'chat', hebrew:'שיחת כתיבה', english:'Writing chat', tone:'not_drilled'};
const LEVEL55_TOPICS = {
  intro: {
    he:'היכרות',
    en:'Introductions',
    examples:['ผมชื่อดני','ฉันมาจากอิสราเอล','ฉันชอบเรียนภาษาไทย'],
    turns:[
      {ask:'khun chue arai?', intentHe:'שם', intentEn:'name', accepted:['ชื่อ','ผมชื่อ','ฉันชื่อ','ดิฉันชื่อ'], correction:'ผมชื่อ... / ฉันชื่อ...', next:'yin di thi dai ru chak. khun ma chak prathet arai?'},
      {ask:'khun ma chak prathet arai?', intentHe:'מדינה', intentEn:'country', accepted:['มาจาก','ประเทศ','อิสราเอล','ยิสราเอล','ไทย'], correction:'ฉันมาจากอิสราเอล', next:'khun chop tham arai nai wan wang?'},
      {ask:'khun chop tham arai nai wan wang?', intentHe:'תחביב', intentEn:'hobby', accepted:['ชอบ','เรียน','กิน','เดิน','เที่ยว','ดู','ฟัง'], correction:'ฉันชอบเรียนภาษาไทย', next:'di mak. rao ja fui kan ik nit na.'}
    ]
  },
  food: {
    he:'אוכל',
    en:'Food',
    examples:['ฉันชอบผัดไทย','ผมอยากกินข้าว','ไม่เผ็ดครับ'],
    turns:[
      {ask:'khun chop ahaan arai?', intentHe:'אוכל אהוב', intentEn:'favorite food', accepted:['ชอบ','อาหาร','ข้าว','ผัดไทย','ต้มยำ','ก๋วยเตี๋ยว'], correction:'ฉันชอบผัดไทย / ผมชอบข้าว', next:'khun chop phet rue mai?'},
      {ask:'khun chop phet rue mai?', intentHe:'חריפות', intentEn:'spice level', accepted:['เผ็ด','ไม่เผ็ด','ชอบ','ไม่ชอบ','นิดหน่อย'], correction:'ชอบเผ็ด / ไม่เผ็ดครับ / เผ็ดนิดหน่อย', next:'khun yak duem nam arai?'},
      {ask:'khun yak duem nam arai?', intentHe:'שתייה', intentEn:'drink', accepted:['อยาก','ดื่ม','น้ำ','ชา','กาแฟ','เบียร์'], correction:'ฉันอยากดื่มน้ำ / ผมอยากดื่มกาแฟ', next:'aroi mak. pai kin kan.'}
    ]
  },
  travel: {
    he:'נסיעה',
    en:'Travel',
    examples:['ฉันอยากไปกรุงเทพ','ผมไปด้วยรถไฟ','ฉันพักที่โรงแรม'],
    turns:[
      {ask:'khun yak pai thii nai?', intentHe:'יעד', intentEn:'destination', accepted:['อยากไป','ไป','กรุงเทพ','เชียงใหม่','ภูเก็ต','พัทยา'], correction:'ฉันอยากไปกรุงเทพ', next:'khun ja pai yang rai?'},
      {ask:'khun ja pai yang rai?', intentHe:'תחבורה', intentEn:'transport', accepted:['รถ','รถไฟ','เครื่องบิน','แท็กซี่','เรือ','ไปด้วย'], correction:'ผมไปด้วยรถไฟ / ฉันไปด้วยแท็กซี่', next:'khun ja phak thii nai?'},
      {ask:'khun ja phak thii nai?', intentHe:'לינה', intentEn:'lodging', accepted:['พัก','โรงแรม','บ้าน','โฮสเทล','ที่'], correction:'ฉันพักที่โรงแรม', next:'thiao hai sanuk na.'}
    ]
  }
};
const LEVEL55_ROMAN_EXAMPLES = {
  intro:['phom chue Dani','chan ma chak Israel','chan chop rian phasa thai'],
  food:['chan chop phat thai','phom yak gin khao','mai phet khrap'],
  travel:['chan yak pai Krung Thep','phom pai duai rot fai','chan phak thi rong raem']
};
const LEVEL55_ROMAN_ACCEPTED = {
  name:['chue','phom chue','chan chue','dichan chue'],
  country:['ma chak','prathet','israel','thai','yisrael'],
  hobby:['chop','rian','gin','dern','thiao','du','fang','tham'],
  'favorite food':['chop','ahaan','khao','phat thai','tom yam','kuai tiao','gin'],
  'spice level':['phet','mai phet','chop','mai chop','nit noi'],
  drink:['yak','duem','nam','cha','gaa fae','beer'],
  destination:['yak pai','pai','krung thep','chiang mai','phuket','pattaya'],
  transport:['rot','rot fai','khruang bin','taxi','ruea','pai duai'],
  lodging:['phak','rong raem','ban','hostel','thi']
};
const LEVEL55_ROMAN_CORRECTIONS = {
  name:'phom chue ... / chan chue ...',
  country:'chan ma chak Israel',
  hobby:'chan chop rian phasa thai',
  'favorite food':'chan chop phat thai / phom chop khao',
  'spice level':'chop phet / mai phet khrap / phet nit noi',
  drink:'chan yak duem nam / phom yak duem gaa fae',
  destination:'chan yak pai Krung Thep',
  transport:'phom pai duai rot fai / chan pai duai taxi',
  lodging:'chan phak thi rong raem'
};
const STORAGE_KEY = 'thaiTrainerStateV3';
const VOICE_CHEER_AUDIO_SRCS = [
  'assets/audio/phuud-maak.mp4',
  'assets/audio/phuud-maak-alt.mp4'
];
const DAILY_BONUS_TARGET = 50;
const DAILY_BONUS_DURATION_MS = 2 * 60 * 60 * 1000;
const DAILY_BONUS_REQUIRED_ACCURACY = 0.7;
const DAILY_BONUS_REQUIRED_LEVEL12 = 10;
const DAILY_BONUS_REWARD = 25;
const THEMES = [
  {id:'ocean', he:'Ocean Calm 🌊', en:'Ocean Calm 🌊', points:0},
  {id:'notebook', he:'Thai Notebook ✍️', en:'Thai Notebook ✍️', points:0},
  {id:'neon', he:'Neon Bangkok 🌃', en:'Neon Bangkok 🌃', points:0},
  {id:'minimal', he:'Minimal Premium 🧊', en:'Minimal Premium 🧊', points:0},
  {id:'island', he:'Island Focus 🏝️', en:'Island Focus 🏝️', points:0},
  {id:'lotus', he:'Lotus Temple 🪷', en:'Lotus Temple 🪷', points:20, premium:true},
  {id:'sakura', he:'Sakura Ink 🌸', en:'Sakura Ink 🌸', points:45, premium:true},
  {id:'mango', he:'Mango Sticky ✨', en:'Mango Sticky ✨', points:75, premium:true},
  {id:'rainforest', he:'Thai Rainforest 🌿', en:'Thai Rainforest 🌿', points:110, premium:true},
  {id:'royal', he:'Royal Gold 👑', en:'Royal Gold 👑', points:150, premium:true},
  {id:'cyber', he:'Cyber Bangkok 🛸', en:'Cyber Bangkok 🛸', points:200, premium:true},
  {id:'midnight', he:'Midnight Scholar 🌙', en:'Midnight Scholar 🌙', points:260, premium:true},
  {id:'coral', he:'Coral Reef 🪸', en:'Coral Reef 🪸', points:330, premium:true},
  {id:'festival', he:'Lantern Festival 🏮', en:'Lantern Festival 🏮', points:420, premium:true},
  {id:'master', he:'Thai Master Aura 🔥', en:'Thai Master Aura 🔥', points:540, premium:true}
];
const DEFAULT_SYNC_URL = 'https://script.google.com/macros/s/AKfycbzGmWyS8bXJJMPzV9gMB9yQ1PYWO-IjAp0iPmSVt7Y-ZNxX2fFMXjR0UKZvIZV3ABZG/exec';
let deferredInstallPrompt = null;
let state = loadState();
let current = null;
let selectedTone = null;
let selectedVowelAnswer = null;
let level6McqAnswered = false;
let level55ChatState = null;
let voiceCheerAudio = null;
let voiceCheerAudioIndex = 0;
let dailyBonusModalTimer = null;
let dailyBonusTickTimer = null;
let drawing = false;
let lastPoint = null;
let smoothPoint = null;
let eraserMode = false;

const el = id => document.getElementById(id);
const canvas = el('writeCanvas');
const ctx = canvas.getContext('2d');

function defaultState(){
  return { stats:{correct:0,wrong:0,streak:0,total:0}, itemStats:{}, history:[], daily:{date:'',active:false,done:0,goal:15,correct:0,wrong:0,awarded:false,bonus:{status:'idle',startedAt:null,durationMs:DAILY_BONUS_DURATION_MS,total:0,correct:0,level12:0,target:DAILY_BONUS_TARGET,requiredAccuracy:DAILY_BONUS_REQUIRED_ACCURACY,requiredLevel12:DAILY_BONUS_REQUIRED_LEVEL12,reward:DAILY_BONUS_REWARD,awarded:false,warned15:false,warned5:false,boostNotice:false}}, coach:{points:0,unlocked:['ocean','notebook','neon','minimal','island'],lastAwardDate:'',voiceCheer:false,voiceCheerAutoEnabled:false}, achievements:{}, penSize:5, penMode:'regular', syncUrl:'', syncUrlCustom:false, lastSync:null, lang:'he', userId:'rif', theme:'ocean' };
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
  // v1.25.7: keep sync simple for normal users. Old bad URLs saved in localStorage are reset to the official endpoint.
  if(!state.syncUrl || (!state.syncUrlCustom && state.syncUrl !== DEFAULT_SYNC_URL)){ state.syncUrl = DEFAULT_SYNC_URL; state.syncUrlCustom = false; saveState(); }
  el('syncUrl').value = state.syncUrl || DEFAULT_SYNC_URL;
  el('userIdInput').value = state.userId || 'rif';
  if(el('penSizeInput')) el('penSizeInput').value = String(state.penSize || 5);
  if(el('premiumPenSelect')) el('premiumPenSelect').value = state.penMode || 'regular';
  updateSyncHealth();
  updateStats(); newQuestion();
  ensureDailyBonusTicker();
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
    {value:'5.5', label:`${t('level')} 5.5 - Chat Bot`},
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
  if(el('dailyPracticeBtn')) el('dailyPracticeBtn').addEventListener('click', toggleDailyPractice);
  if(el('penSizeInput')) el('penSizeInput').addEventListener('input', e => { state.penSize = Number(e.target.value) || 5; saveState(); });
  if(el('premiumPenSelect')) el('premiumPenSelect').addEventListener('change', e => {
    state.penMode = e.target.value === 'premium' && hasPremiumPen() ? 'premium' : 'regular';
    e.target.value = state.penMode;
    saveState();
    updatePremiumPenControl();
  });
  if(el('dailyBonusPanel')) el('dailyBonusPanel').addEventListener('click', e => {
    const btn = e.target && e.target.closest ? e.target.closest('[data-daily-bonus-action]') : null;
    if(btn) openDailyBonusIntro();
  });
  if(el('dailyBonusStartBtn')) el('dailyBonusStartBtn').addEventListener('click', confirmDailyBonusStart);
  if(el('dailyBonusModalClose')) el('dailyBonusModalClose').addEventListener('click', closeDailyBonusIntro);
  if(el('dailyBonusModal')) el('dailyBonusModal').addEventListener('click', e => { if(e.target === el('dailyBonusModal')) closeDailyBonusIntro(); });
  if(el('voiceCheerToggle')) el('voiceCheerToggle').addEventListener('change', e => {
    ensureDailyState();
    state.coach.voiceCheer = !!e.target.checked;
    state.coach.voiceCheerAutoEnabled = true;
    saveState();
    updateSkinPanel();
    if(state.coach.voiceCheer) playVoiceCheer({force:true});
  });
  el('clearBtn').addEventListener('click', clearCanvas);
  const eraserBtn = el('eraserToggleBtn');
  if(eraserBtn) eraserBtn.addEventListener('click', toggleEraserMode);
  el('showAnswerBtn').addEventListener('click', showAnswer);
  el('correctBtn').addEventListener('click', ()=>mark(true));
  el('wrongBtn').addEventListener('click', ()=>mark(false));
  el('levelSelect').addEventListener('change', newQuestion);
  el('modeSelect').addEventListener('change', newQuestion);
  if(el('level55Chat')){
    el('level55Chat').addEventListener('submit', handleLevel55Submit);
    el('level55Chat').addEventListener('click', handleLevel55Click);
    el('level55Chat').addEventListener('change', handleLevel55Change);
  }
  el('saveSyncUrlBtn').addEventListener('click', saveSyncUrl);
  if(el('resetSyncUrlBtn')) el('resetSyncUrlBtn').addEventListener('click', resetSyncUrl);
  el('syncUploadBtn').addEventListener('click', syncUpload);
  el('syncDownloadBtn').addEventListener('click', syncDownload);
  if(el('syncTestBtn')) el('syncTestBtn').addEventListener('click', syncTest);
  if(el('openSyncTestBtn')) el('openSyncTestBtn').addEventListener('click', openSyncTest);
  if(el('exportBackupBtn')) el('exportBackupBtn').addEventListener('click', exportLocalBackup);
  if(el('importBackupBtn')) el('importBackupBtn').addEventListener('click', () => el('importBackupInput').click());
  if(el('importBackupInput')) el('importBackupInput').addEventListener('change', importLocalBackup);
  el('syncUrl').addEventListener('input', updateSyncHealth);
  el('langToggle').addEventListener('click', toggleLanguage);
  el('themeToggle').addEventListener('click', cycleTheme);
  if(el('shareAppBtn')) el('shareAppBtn').addEventListener('click', shareApp);
  el('userIdInput').addEventListener('keydown', e => { if(e.key === 'Enter'){ e.preventDefault(); initUserSheet(); } });
  el('userIdInput').addEventListener('blur', () => { const v = cleanUserId(el('userIdInput').value); if(v && v !== state.userId){ state.userId=v; saveState(); updateSyncHealth(); } });
}
function setupPwa(){
  const installBtn = el('installBtn');
  if(!installBtn) return;
  installBtn.hidden = false;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredInstallPrompt = e;
    setSyncStatus(t('installReady'), 'ok');
  });
  installBtn.addEventListener('click', installApp);
}

function currentTheme(){ return THEMES.find(x=>x.id===state.theme) || THEMES[0]; }
function applyTheme(){
  unlockEligibleThemes();
  const theme = currentTheme();
  if(!isThemeUnlocked(theme)){
    state.theme = 'ocean';
    saveState();
  }
  const activeTheme = currentTheme();
  document.body.classList.remove(...THEMES.map(x=>'theme-'+x.id));
  document.body.classList.add('theme-'+activeTheme.id);
  const b = el('themeToggle');
  if(b) b.textContent = isHebrew() ? activeTheme.he : activeTheme.en;
  const meta = document.querySelector('meta[name="theme-color"]');
  if(meta){
    const colors = {ocean:'#07111f',notebook:'#f3efe6',neon:'#080014',minimal:'#edf7ff',island:'#062f3a',lotus:'#180f2e',sakura:'#2a1022',mango:'#241706',rainforest:'#06261d',royal:'#1f1604',cyber:'#03051f',midnight:'#050812',coral:'#042832',festival:'#220b13',master:'#17020b'};
    meta.setAttribute('content', colors[activeTheme.id] || '#07111f');
  }
}
function cycleTheme(){
  const availableThemes = THEMES.filter(isThemeUnlocked);
  const idx = availableThemes.findIndex(x=>x.id===state.theme);
  state.theme = availableThemes[(idx+1+availableThemes.length)%availableThemes.length].id;
  saveState();
  applyTheme();
  updateSkinPanel();
}
function applyLanguage(){
  document.documentElement.lang = lang();
  document.documentElement.dir = isHebrew() ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-en', !isHebrew());
  el('eyebrowText').textContent = t('eyebrow');
  el('mainTitle').textContent = t('title');
  el('subtitleText').textContent = t('subtitle');
  el('langToggle').textContent = t('langButton');
  if(el('shareAppBtn')){
    el('shareAppBtn').setAttribute('aria-label', t('shareApp'));
    el('shareAppBtn').setAttribute('title', t('shareApp'));
  }
  applyTheme();
  el('installBtn').textContent = t('install');
  el('levelLabel').textContent = t('levelLabel');
  el('modeLabelText').textContent = t('modeLabel');
  el('newQuestionBtn').textContent = t('newQuestion');
  if(el('dailyPracticeBtn')) el('dailyPracticeBtn').textContent = state.daily?.active ? t('dailyOn') : t('dailyPractice');
  el('clearBtn').textContent = t('clear');
  updateEraserButton();
  el('showAnswerBtn').textContent = t('showAnswer');
  el('correctBtn').textContent = t('correct');
  el('wrongBtn').textContent = t('wrong');
  el('correctLabel').textContent = t('correctStat');
  el('wrongLabel').textContent = t('wrongStat');
  el('streakLabel').textContent = t('streakStat');
  el('accuracyLabel').textContent = t('accuracyStat');
  if(el('achievementsTitle')) el('achievementsTitle').textContent = t('achievements');
  if(el('dueItemsLabel')) el('dueItemsLabel').textContent = t('dueItems');
  if(el('weakItemsLabel')) el('weakItemsLabel').textContent = t('weakItems');
  if(el('strongItemsLabel')) el('strongItemsLabel').textContent = t('strongItems');
  if(el('penSizeLabel')) el('penSizeLabel').textContent = t('penSize');
  if(el('premiumPenLabel')) el('premiumPenLabel').textContent = isHebrew() ? 'עט' : 'Pen';
  if(el('premiumPenSelect')){
    const opts = el('premiumPenSelect').options;
    if(opts[0]) opts[0].textContent = isHebrew() ? 'רגיל' : 'Regular';
    if(opts[1]) opts[1].textContent = isHebrew() ? 'פרימיום' : 'Premium';
  }
  if(el('premiumPenHint')) el('premiumPenHint').textContent = isHebrew()
    ? 'עט פרימיום: קו רך יותר, עובי משתנה לפי מהירות הכתיבה, והילה כחולה סביב הדיו.'
    : 'Premium pen: smoother line, width that varies with writing speed, and a blue glow around the ink.';
  if(el('skinsTitle')) el('skinsTitle').textContent = t('skins');
  if(el('voiceCheerLabel')) el('voiceCheerLabel').textContent = t('voiceCheer');
  if(el('syncAdvancedSummary')) el('syncAdvancedSummary').textContent = t('syncAdvanced');
  el('syncTitle').textContent = t('syncTitle');
  el('syncDescription').textContent = t('syncDescription');
  el('userLabel').textContent = t('userLabel');
  el('userIdInput').placeholder = t('userPlaceholder');
  el('saveSyncUrlBtn').textContent = t('saveUrl');
  if(el('resetSyncUrlBtn')) el('resetSyncUrlBtn').textContent = t('resetSyncUrl');
  el('syncUploadBtn').textContent = t('saveProgress');
  el('syncDownloadBtn').textContent = t('loadProgress');
  if(el('syncTestBtn')) el('syncTestBtn').textContent = t('testSync');
  if(el('openSyncTestBtn')) el('openSyncTestBtn').textContent = t('openSyncTest');
  if(el('exportBackupBtn')) el('exportBackupBtn').textContent = t('localBackup');
  if(el('importBackupBtn')) el('importBackupBtn').textContent = t('restoreBackup');
  if(el('lastSyncLabel')) el('lastSyncLabel').textContent = t('lastSync');
  updateSyncHealth();
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
async function installApp(){
  const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent || '');
  const isStandalone = window.matchMedia && window.matchMedia('(display-mode: standalone)').matches;
  const isAppleStandalone = window.navigator && window.navigator.standalone;
  if(isStandalone || isAppleStandalone){
    setSyncStatus(isHebrew() ? 'האפליקציה כבר פתוחה כקיצור דרך מותקן.' : 'The app is already running as an installed shortcut.', 'ok');
    return;
  }
  if(deferredInstallPrompt){
    try{
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice.catch(()=>null);
      deferredInstallPrompt = null;
      setSyncStatus(t('installDone'), 'ok');
      return;
    }catch(err){
      setSyncStatus(t('installManual'), 'error');
      return;
    }
  }
  setSyncStatus(isIos ? t('installIos') : t('installManual'), 'ok');
}
async function shareApp(){
  const url = window.location.href.split('#')[0];
  const title = 'Thai Trainer';
  const text = isHebrew()
    ? 'אפליקציית תרגול תאית'
    : 'Thai practice app';
  try{
    if(navigator.share){
      await navigator.share({title, text, url});
      return;
    }
    if(navigator.clipboard && navigator.clipboard.writeText){
      await navigator.clipboard.writeText(url);
      setSyncStatus(t('shareOk'), 'ok');
      return;
    }
    const temp = document.createElement('input');
    temp.value = url;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    temp.remove();
    setSyncStatus(t('shareOk'), 'ok');
  }catch(err){
    if(err && err.name === 'AbortError') return;
    setSyncStatus(t('shareErr'), 'error');
  }
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
function todayKey(){ return new Date().toISOString().slice(0,10); }
function ensureDailyState(){
  state.daily = {...defaultState().daily, ...(state.daily || {})};
  state.daily.bonus = {...defaultState().daily.bonus, ...((state.daily && state.daily.bonus) || {})};
  if(!['idle','intro','active','success','failed'].includes(state.daily.bonus.status)){
    state.daily.bonus = {...defaultState().daily.bonus};
  }
  state.coach = {...defaultState().coach, ...(state.coach || {})};
  state.coach.unlocked = [...new Set([...(defaultState().coach.unlocked || []), ...((state.coach && state.coach.unlocked) || [])])];
  if(state.daily.date !== todayKey()) state.daily = {...defaultState().daily, date:todayKey()};
  const premiumCount = THEMES.filter(theme => theme.premium && ((state.coach.unlocked || []).includes(theme.id) || (state.coach.points || 0) >= (theme.points || 0))).length;
  if(premiumCount < 3 && state.penMode === 'premium') state.penMode = 'regular';
}
function toggleDailyPractice(){
  ensureDailyState();
  state.daily.active = !state.daily.active;
  saveState();
  updateStats();
  newQuestion();
}
function itemMemory(item){
  const s = state.itemStats[item.id] || {correct:0,wrong:0,lastSeen:0,box:0,dueAt:0};
  const attempts = (s.correct || 0) + (s.wrong || 0);
  const accuracy = attempts ? (s.correct || 0) / attempts : 0;
  const now = Date.now();
  const due = !s.dueAt || s.dueAt <= now;
  const weak = attempts > 0 && (accuracy < 0.62 || (s.wrong || 0) > (s.correct || 0));
  const strong = attempts >= 4 && accuracy >= 0.82 && (s.box || 0) >= 3;
  return {s, attempts, accuracy, due, weak, strong};
}
function updateSchedule(item, correct){
  const s = state.itemStats[item.id] || {correct:0,wrong:0,lastSeen:0,modes:{}};
  const prevBox = s.box || 0;
  s.box = correct ? Math.min(5, prevBox + 1) : 0;
  const minutes = correct ? [20, 120, 720, 1440, 4320, 10080][s.box] : 8;
  s.dueAt = Date.now() + minutes * 60 * 1000;
  return s;
}
function isThemeUnlocked(theme){
  ensureDailyState();
  return !theme.premium || (state.coach.unlocked || []).includes(theme.id) || (state.coach.points || 0) >= (theme.points || 0);
}
function hasFirstPremiumSkin(){
  ensureDailyState();
  return THEMES.some(theme => theme.premium && isThemeUnlocked(theme));
}
function unlockedPremiumSkinCount(){
  ensureDailyState();
  return THEMES.filter(theme => theme.premium && ((state.coach.unlocked || []).includes(theme.id) || (state.coach.points || 0) >= (theme.points || 0))).length;
}
function hasPremiumPen(){
  return unlockedPremiumSkinCount() >= 3;
}
function dailyBonusAccuracy(){
  const bonus = state.daily?.bonus || {};
  return bonus.total ? (bonus.correct || 0) / bonus.total : 0;
}
function dailyBonusTimeLeft(){
  ensureDailyState();
  const bonus = state.daily.bonus;
  if(bonus.status !== 'active' || !bonus.startedAt) return bonus.durationMs || DAILY_BONUS_DURATION_MS;
  return Math.max(0, (bonus.startedAt + (bonus.durationMs || DAILY_BONUS_DURATION_MS)) - Date.now());
}
function formatBonusTime(ms){
  const total = Math.max(0, Math.ceil(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  if(h) return `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  return `${m}:${String(s).padStart(2,'0')}`;
}
function isDailyBonusActive(){
  ensureDailyState();
  return state.daily.bonus.status === 'active';
}
function openDailyBonusIntro(){
  ensureDailyState();
  const bonus = state.daily.bonus;
  if((state.daily.done || 0) < (state.daily.goal || 15) || bonus.awarded || bonus.status === 'failed' || bonus.status === 'success') return;
  bonus.status = 'intro';
  saveState();
  const modal = el('dailyBonusModal');
  if(!modal) return;
  el('dailyBonusModalKicker').textContent = isHebrew() ? 'בונוס יומי' : 'Daily bonus';
  el('dailyBonusModalTitle').textContent = isHebrew() ? 'אתגר עומס' : 'Load challenge';
  el('dailyBonusModalText').textContent = isHebrew()
    ? 'יש לך שעתיים לענות על 50 שאלות. צריך לעבור 70% דיוק, וחובה שלפחות 10 שאלות יהיו מרמה 1.2.'
    : 'You have two hours to answer 50 questions. You need more than 70% accuracy, and at least 10 questions must be from Level 1.2.';
  el('dailyBonusModalRules').innerHTML = `
    <span>${escapeHtml(isHebrew() ? 'זמן: שעתיים' : 'Time: 2 hours')}</span>
    <span>${escapeHtml(isHebrew() ? 'יעד: 50 שאלות' : 'Target: 50 questions')}</span>
    <span>${escapeHtml(isHebrew() ? 'דיוק: מעל 70%' : 'Accuracy: above 70%')}</span>
    <span>${escapeHtml(isHebrew() ? 'חובה: 10 שאלות רמה 1.2' : 'Required: 10 Level 1.2 questions')}</span>
    <span>${escapeHtml(isHebrew() ? `פרס: ${DAILY_BONUS_REWARD} נק׳ לסקין הבא` : `Reward: ${DAILY_BONUS_REWARD} pts toward the next skin`)}</span>`;
  el('dailyBonusStartBtn').textContent = isHebrew() ? 'צא לדרך' : 'Start challenge';
  modal.hidden = false;
  clearTimeout(dailyBonusModalTimer);
  dailyBonusModalTimer = setTimeout(closeDailyBonusIntro, 30000);
}
function closeDailyBonusIntro(){
  ensureDailyState();
  const modal = el('dailyBonusModal');
  if(modal) modal.hidden = true;
  clearTimeout(dailyBonusModalTimer);
  dailyBonusModalTimer = null;
  const bonus = state.daily.bonus;
  if(bonus.status === 'intro') bonus.status = 'idle';
  saveState();
  updateAchievementPanel();
}
function confirmDailyBonusStart(){
  ensureDailyState();
  const bonus = state.daily.bonus;
  if((state.daily.done || 0) < (state.daily.goal || 15) || bonus.awarded || bonus.status === 'failed' || bonus.status === 'success') return;
  Object.assign(bonus, {
    status:'active',
    startedAt:Date.now(),
    durationMs:DAILY_BONUS_DURATION_MS,
    total:0,
    correct:0,
    level12:0,
    target:DAILY_BONUS_TARGET,
    requiredAccuracy:DAILY_BONUS_REQUIRED_ACCURACY,
    requiredLevel12:DAILY_BONUS_REQUIRED_LEVEL12,
    reward:DAILY_BONUS_REWARD,
    awarded:false,
    warned15:false,
    warned5:false,
    boostNotice:false
  });
  closeDailyBonusIntro();
  bonus.status = 'active';
  saveState();
  ensureDailyBonusTicker();
  updateAchievementPanel();
  newQuestion();
}
function awardDailyBonusPoints(){
  ensureDailyState();
  const bonus = state.daily.bonus;
  if(bonus.awarded) return 0;
  const reward = bonus.reward || DAILY_BONUS_REWARD;
  state.coach.points = (state.coach.points || 0) + reward;
  bonus.awarded = true;
  bonus.status = 'success';
  state.achievements.dailyBonusAward = Date.now();
  unlockEligibleThemes();
  return reward;
}
function failDailyBonusChallenge(){
  ensureDailyState();
  const bonus = state.daily.bonus;
  if(bonus.status !== 'active') return;
  bonus.status = 'failed';
  bonus.awarded = false;
  saveState();
  updateAchievementPanel();
}
function showTransientChallengeNotice(message, type='neutral'){
  const panel = el('dailyBonusPanel');
  if(!panel) return;
  panel.classList.remove('notice-ok','notice-warn');
  if(type === 'ok') panel.classList.add('notice-ok');
  if(type === 'warn') panel.classList.add('notice-warn');
  panel.animate([{transform:'translateY(-4px)',opacity:.72},{transform:'translateY(0)',opacity:1}], {duration:380, easing:'ease-out'});
  setSyncStatus(message, type === 'warn' ? 'error' : 'ok');
}
function evaluateDailyBonusChallenge(){
  ensureDailyState();
  const bonus = state.daily.bonus;
  if(bonus.status !== 'active') return;
  const left = dailyBonusTimeLeft();
  if(left <= 0){
    failDailyBonusChallenge();
    showTransientChallengeNotice(isHebrew() ? 'הזמן נגמר. האתגר חוזר לשגרה עד מחר.' : 'Time is up. Challenge returns to normal until tomorrow.', 'warn');
    return;
  }
  if(left <= 15 * 60 * 1000 && !bonus.warned15){
    bonus.warned15 = true;
    showTransientChallengeNotice(isHebrew() ? 'התראת זמן: נשארו 15 דקות לאתגר.' : 'Time alert: 15 minutes left.', 'warn');
  }
  if(left <= 5 * 60 * 1000 && !bonus.warned5){
    bonus.warned5 = true;
    showTransientChallengeNotice(isHebrew() ? 'התראת זמן: נשארו 5 דקות.' : 'Time alert: 5 minutes left.', 'warn');
  }
  const acc = dailyBonusAccuracy();
  if((bonus.total || 0) >= (bonus.target || DAILY_BONUS_TARGET) && (bonus.level12 || 0) >= (bonus.requiredLevel12 || DAILY_BONUS_REQUIRED_LEVEL12) && acc > (bonus.requiredAccuracy || DAILY_BONUS_REQUIRED_ACCURACY)){
    const reward = awardDailyBonusPoints();
    showTransientChallengeNotice(isHebrew() ? `האתגר הושלם. קיבלת ${reward} נק׳.` : `Challenge complete. You earned ${reward} pts.`, 'ok');
    return;
  }
  if((bonus.total || 0) >= (bonus.target || DAILY_BONUS_TARGET) && acc <= (bonus.requiredAccuracy || DAILY_BONUS_REQUIRED_ACCURACY) && left > 0 && !bonus.boostNotice){
    bonus.boostNotice = true;
    showTransientChallengeNotice(isHebrew() ? 'ענית על 50 שאלות, אבל הדיוק עדיין נמוך. יש עוד זמן לשפר.' : 'You answered 50 questions, but accuracy is still low. Keep going while time remains.', 'warn');
  }
  saveState();
}
function ensureDailyBonusTicker(){
  if(dailyBonusTickTimer) clearInterval(dailyBonusTickTimer);
  dailyBonusTickTimer = setInterval(() => {
    if(isDailyBonusActive()){
      evaluateDailyBonusChallenge();
      updateAchievementPanel();
      updateQuestionProgressBadge();
    }
  }, 1000);
}
function unlockEligibleThemes(){
  ensureDailyState();
  const before = new Set(state.coach.unlocked || []);
  for(const theme of THEMES){
    if(isThemeUnlocked(theme)) before.add(theme.id);
  }
  state.coach.unlocked = [...before];
}
function awardDailyCoachPoints(){
  ensureDailyState();
  if(!state.daily.active || state.daily.awarded || (state.daily.done || 0) < (state.daily.goal || 15)) return 0;
  const correct = state.daily.correct || 0;
  const done = state.daily.done || 0;
  const acc = done ? correct / done : 0;
  let points = 10;
  if(acc >= 0.8) points += 4;
  if(acc >= 1) points += 6;
  if((state.stats.streak || 0) >= 10) points += 3;
  state.coach.points = (state.coach.points || 0) + points;
  state.coach.lastAwardDate = todayKey();
  state.daily.awarded = true;
  unlockEligibleThemes();
  return points;
}
function selectThaiCheerVoice(){
  if(!window.speechSynthesis || typeof window.speechSynthesis.getVoices !== 'function') return null;
  const voices = window.speechSynthesis.getVoices();
  return voices.find(voice => /^th\b/i.test(voice.lang) || /thai|ไทย/i.test(voice.name))
    || voices.find(voice => /^ja\b|^ko\b/i.test(voice.lang))
    || voices.find(voice => /^en\b/i.test(voice.lang))
    || voices[0]
    || null;
}
function playCheerFallbackTone(){
  try{
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if(!AudioCtx) return;
    const audio = new AudioCtx();
    const now = audio.currentTime;
    const notes = [740, 988, 1175];
    notes.forEach((freq, index) => {
      const osc = audio.createOscillator();
      const gain = audio.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + index * 0.09);
      gain.gain.setValueAtTime(0.0001, now + index * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.16, now + index * 0.09 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.09 + 0.16);
      osc.connect(gain);
      gain.connect(audio.destination);
      osc.start(now + index * 0.09);
      osc.stop(now + index * 0.09 + 0.18);
    });
    setTimeout(() => audio.close && audio.close(), 700);
  }catch(err){
    console.debug('Voice cheer fallback unavailable', err);
  }
}
function playVoiceCheer(options = {}){
  ensureDailyState();
  const force = !!options.force;
  const retry = options.retry || 0;
  if((!force && !state.coach.voiceCheer) || !hasFirstPremiumSkin()) return;
  if(!options.skipRecorded){
    try{
      const audioSrc = VOICE_CHEER_AUDIO_SRCS[voiceCheerAudioIndex % VOICE_CHEER_AUDIO_SRCS.length];
      voiceCheerAudioIndex = (voiceCheerAudioIndex + 1) % VOICE_CHEER_AUDIO_SRCS.length;
      voiceCheerAudio = new Audio(audioSrc);
      voiceCheerAudio.volume = 0.98;
      voiceCheerAudio.currentTime = 0;
      voiceCheerAudio.onended = () => { voiceCheerAudio = null; };
      const playPromise = voiceCheerAudio.play();
      if(playPromise && typeof playPromise.catch === 'function'){
        playPromise.catch(() => playVoiceCheer({...options, skipRecorded:true}));
      }
      return;
    }catch(err){
      console.debug('Recorded voice cheer unavailable', err);
    }
  }
  if(!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined'){
    playCheerFallbackTone();
    return;
  }
  try{
    const synth = window.speechSynthesis;
    const voices = typeof synth.getVoices === 'function' ? synth.getVoices() : [];
    if(!voices.length && retry < 2){
      const replay = () => playVoiceCheer({force, retry:retry + 1});
      synth.onvoiceschanged = replay;
      setTimeout(replay, 220);
      return;
    }
    synth.cancel();
    if(typeof synth.resume === 'function') synth.resume();
    const voice = selectThaiCheerVoice();
    const text = voice && /^th\b/i.test(voice.lang || '') ? 'พูดมาก!' : 'phuud maak!';
    const cheer = new SpeechSynthesisUtterance(text);
    cheer.lang = 'th-TH';
    cheer.rate = 1.18;
    cheer.pitch = 1.35;
    cheer.volume = 0.92;
    if(voice) cheer.voice = voice;
    cheer.onerror = () => playCheerFallbackTone();
    synth.speak(cheer);
  }catch(err){
    console.debug('Voice cheer unavailable', err);
    playCheerFallbackTone();
  }
}
function weightedPick(items){
  const recentIds = state.history.slice(-8).map(h=>h.id);
  const pool = items.map(item => {
    let weight = 10 - mastery(item);
    const mem = itemMemory(item);
    if(mem.due) weight += 5;
    if(mem.weak) weight += 8;
    if(mem.strong) weight *= 0.35;
    if(state.daily && state.daily.active){
      if(mem.weak || mem.due) weight += 8;
      if(!mem.attempts) weight += 2.5;
    }
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
  const bonus = state.daily && state.daily.bonus;
  const forceLevel12 = bonus && bonus.status === 'active' && (bonus.level12 || 0) < (bonus.requiredLevel12 || DAILY_BONUS_REQUIRED_LEVEL12);
  const mode = forceLevel12 ? 'level12_pair' : levelValue === '6' ? 'level6_pair' : levelValue === '5.5' ? 'level55_chat' : levelValue === '1.2' ? 'level12_pair' : pickMode();
  if(mode === 'level12_pair'){
    current = makeLevel12PairedQuestion();
  } else if(mode === 'level55_chat'){
    current = makeLevel55ChatQuestion();
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

function makeLevel55ChatQuestion(){
  const topic = (level55ChatState && LEVEL55_TOPICS[level55ChatState.topic]) ? level55ChatState.topic : 'intro';
  const scriptMode = (level55ChatState && level55ChatState.scriptMode) || 'thai';
  level55ChatState = {
    topic,
    scriptMode,
    turnIndex:0,
    mode:'thai-answer',
    understood:0,
    fixes:0,
    messages:[]
  };
  level55AddBotQuestion();
  return {item:LEVEL55_CHAT_ITEM, mode:'level55_chat'};
}

function level55Topic(){
  return LEVEL55_TOPICS[(level55ChatState && level55ChatState.topic) || 'intro'] || LEVEL55_TOPICS.intro;
}

function level55Turn(){
  const topic = level55Topic();
  return topic.turns[level55ChatState.turnIndex] || topic.turns[0];
}

function level55Text(he,en){
  return isHebrew() ? he : en;
}

function level55IsRomanMode(){
  return level55ChatState && level55ChatState.scriptMode === 'roman';
}

function level55HasThai(text){
  return /[\u0E00-\u0E7F]/.test(text || '');
}

function level55NormalizeRoman(text){
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g,' ')
    .replace(/\s+/g,' ')
    .trim();
}

function level55Clean(text){
  return String(text || '').trim().replace(/\s+/g,' ');
}

function level55AddMessage(role, html){
  if(!level55ChatState) return;
  level55ChatState.messages.push({role, html});
}

function level55AddBotQuestion(){
  const turn = level55Turn();
  level55AddMessage('bot', `
    <span class="level55-label">${escapeHtml(level55Text('Bot asks in transliteration', 'Bot asks in transliteration'))}</span>
    <div class="level55-roman">${escapeHtml(turn.ask)}</div>
  `);
}

function level55Understand(text, turn){
  if(level55IsRomanMode()){
    if(level55HasThai(text)) return {ok:false, reason:'thai-in-roman'};
    const compact = level55NormalizeRoman(text);
    if(!/[a-z]/.test(compact)) return {ok:false, reason:'missing-roman'};
    const accepted = LEVEL55_ROMAN_ACCEPTED[turn.intentEn] || [];
    const matched = accepted.some(word => compact.includes(level55NormalizeRoman(word)));
    return matched ? {ok:true} : {ok:false, reason:'unclear-intent'};
  }
  if(!level55HasThai(text)) return {ok:false, reason:'missing-thai'};
  const compact = text.replace(/\s/g,'');
  const matched = turn.accepted.some(word => compact.includes(String(word).replace(/\s/g,'')));
  return matched ? {ok:true} : {ok:false, reason:'unclear-intent'};
}

function level55CorrectionText(turn){
  const correction = level55IsRomanMode() ? (LEVEL55_ROMAN_CORRECTIONS[turn.intentEn] || turn.ask) : turn.correction;
  return level55Text('צורה מומלצת: ', 'Suggested form: ') + correction;
}

function level55Advance(){
  level55ChatState.turnIndex += 1;
  if(level55ChatState.turnIndex >= level55Topic().turns.length){
    level55AddMessage('bot', `
      <span class="level55-label">Bot</span>
      ${escapeHtml(level55Text('סיימת סבב שיחה קצר. אפשר להתחיל מחדש או להחליף נושא.', 'Short chat round complete. Start again or switch topic.'))}
      <div class="level55-feedback">${escapeHtml(level55Text('בגרסה הבאה אפשר לחבר כאן מנוע AI מלא להבנת תשובות חופשיות יותר.', 'A future version can connect this board to a full AI engine for freer answers.'))}</div>
    `);
    level55ChatState.mode = 'done';
    renderQuestion();
    return;
  }
  level55ChatState.mode = 'thai-answer';
  level55AddBotQuestion();
  renderQuestion();
}

function handleLevel55Submit(event){
  if(!event.target || !event.target.matches('#level55Form')) return;
  event.preventDefault();
  if(!current || current.mode !== 'level55_chat' || !level55ChatState || level55ChatState.mode === 'done') return;
  const input = el('level55Input');
  const text = level55Clean(input ? input.value : '');
  if(!text) return;
  input.value = '';
  const turn = level55Turn();
  if(level55ChatState.mode === 'clarify'){
    level55AddMessage('student', `
      <span class="level55-label">Student explains intent</span>
      ${escapeHtml(text)}
    `);
    level55AddMessage('bot', `
      <span class="level55-label">Bot correction</span>
      ${escapeHtml(level55Text('לפי ההסבר שלך, כדאי לכתוב כך:', 'Based on your explanation, write it like this:'))}
      <div class="level55-feedback">${escapeHtml(level55CorrectionText(turn))}</div>
      ${escapeHtml(level55Text('נמשיך בשיחה.', 'Let us continue.'))}
    `);
    level55Advance();
    return;
  }
  level55AddMessage('student', `
    <span class="level55-label">${escapeHtml(level55IsRomanMode() ? 'Student writes transliteration' : 'Student writes Thai')}</span>
    <div class="${level55IsRomanMode() ? 'level55-roman-answer' : 'level55-thai'}">${escapeHtml(text)}</div>
  `);
  const result = level55Understand(text, turn);
  if(result.ok){
    level55ChatState.understood += 1;
    level55AddMessage('bot', `
      <span class="level55-label">Bot understood</span>
      ${escapeHtml(level55Text('הבנתי את הכוונה. נמשיך.', 'I understood the intent. Continue.'))}
      <div class="level55-feedback">${escapeHtml(level55CorrectionText(turn))}</div>
    `);
    level55Advance();
    return;
  }
  level55ChatState.fixes += 1;
  level55ChatState.mode = 'clarify';
  const missing = result.reason === 'missing-thai' || result.reason === 'missing-roman';
  const wrongScript = result.reason === 'thai-in-roman';
  const issueText = wrongScript
    ? level55Text('במצב הזה מתרגלים תעתיק אנגלי בלבד, בלי כתב תאילנדי.', 'This mode practices English transliteration only, without Thai script.')
    : (missing
      ? (level55IsRomanMode()
        ? level55Text('לא זיהיתי תעתיק אנגלי בתשובה.', 'I did not detect English transliteration in the answer.')
        : level55Text('לא זיהיתי כתב תאילנדי בתשובה.', 'I did not detect Thai script in the answer.'))
      : level55Text('אני לא בטוח שהבנתי את הכוונה בתשובה.', 'I am not sure I understood the intent.'));
  level55AddMessage('bot', `
    <span class="level55-label">Bot asks for clarification</span>
    ${escapeHtml(issueText)}<br>
    ${escapeHtml(level55Text('מה רצית לומר בעברית או באנגלית?', 'What did you want to say in Hebrew or English?'))}
    <div class="level55-feedback warn">${escapeHtml(level55CorrectionText(turn))}</div>
  `);
  renderQuestion();
}

function handleLevel55Click(event){
  const btn = event.target && event.target.closest ? event.target.closest('[data-level55-action]') : null;
  if(!btn) return;
  const action = btn.getAttribute('data-level55-action');
  if(action === 'restart'){
    makeLevel55ChatQuestion();
    renderQuestion();
  }
}

function handleLevel55Change(event){
  if(!event.target || (event.target.id !== 'level55Topic' && event.target.id !== 'level55ScriptMode')) return;
  const topic = event.target.id === 'level55Topic' ? event.target.value : ((level55ChatState && level55ChatState.topic) || 'intro');
  const scriptMode = event.target.id === 'level55ScriptMode' ? event.target.value : ((level55ChatState && level55ChatState.scriptMode) || 'thai');
  if(!LEVEL55_TOPICS[topic]) return;
  level55ChatState = {topic, scriptMode: scriptMode === 'roman' ? 'roman' : 'thai'};
  makeLevel55ChatQuestion();
  renderQuestion();
}

function renderLevel55Chat(q){
  const box = el('level55Chat');
  if(!box) return;
  if(!q || q.mode !== 'level55_chat'){
    box.hidden = true;
    box.innerHTML = '';
    return;
  }
  if(!level55ChatState) makeLevel55ChatQuestion();
  const topicOptions = Object.keys(LEVEL55_TOPICS).map(key => {
    const topic = LEVEL55_TOPICS[key];
    const selected = key === level55ChatState.topic ? ' selected' : '';
    return `<option value="${escapeHtml(key)}"${selected}>${escapeHtml(isHebrew() ? topic.he : topic.en)}</option>`;
  }).join('');
  const scriptOptions = [
    {value:'thai', label:level55Text('כתיבה תאית', 'Thai script')},
    {value:'roman', label:level55Text('תעתיק בלבד', 'Transliteration only')}
  ].map(opt => `<option value="${opt.value}"${opt.value === level55ChatState.scriptMode ? ' selected' : ''}>${escapeHtml(opt.label)}</option>`).join('');
  const exampleList = level55IsRomanMode() ? (LEVEL55_ROMAN_EXAMPLES[level55ChatState.topic] || []) : level55Topic().examples;
  const examples = exampleList.map(x => `<span>${escapeHtml(x)}</span>`).join('');
  const messages = level55ChatState.messages.map(msg => `<article class="level55-msg ${escapeHtml(msg.role)}">${msg.html}</article>`).join('');
  const placeholder = level55ChatState.mode === 'clarify'
    ? level55Text('הסבר בעברית או באנגלית מה רצית לומר...', 'Explain in Hebrew or English what you wanted to say...')
    : (level55IsRomanMode() ? level55Text('כתוב כאן בתעתיק אנגלי...', 'Write English transliteration here...') : level55Text('כתוב כאן בתאית...', 'Write Thai here...'));
  const disabled = level55ChatState.mode === 'done' ? ' disabled' : '';
  box.hidden = false;
  box.innerHTML = `
    <div class="level55-toolbar">
      <label>
        <span>${escapeHtml(level55Text('נושא שיחה', 'Chat topic'))}</span>
        <select id="level55Topic">${topicOptions}</select>
      </label>
      <label>
        <span>${escapeHtml(level55Text('מצב כתיבה', 'Writing mode'))}</span>
        <select id="level55ScriptMode">${scriptOptions}</select>
      </label>
      <div class="level55-score">
        <div><strong>${level55ChatState.understood}</strong><span>${escapeHtml(level55Text('הבנות', 'Understood'))}</span></div>
        <div><strong>${level55ChatState.fixes}</strong><span>${escapeHtml(level55Text('תיקונים', 'Fixes'))}</span></div>
      </div>
      <button class="secondary" type="button" data-level55-action="restart">${escapeHtml(level55Text('התחל מחדש', 'Restart'))}</button>
    </div>
    <div class="level55-examples">${examples}</div>
    <div class="level55-thread">${messages}</div>
    <form id="level55Form" class="level55-form">
      <textarea id="level55Input" placeholder="${escapeHtml(placeholder)}"${disabled}></textarea>
      <button type="submit"${disabled}>${escapeHtml(level55Text('שלח', 'Send'))}</button>
    </form>
  `;
}
function updateQuestionProgressBadge(){
  const badge = el('progressBadge');
  if(!badge) return;
  badge.textContent = state.daily?.bonus?.status === 'active'
    ? `${isHebrew() ? 'עומס' : 'Load'}: ${state.daily.bonus.total || 0}/${state.daily.bonus.target || DAILY_BONUS_TARGET} · ${formatBonusTime(dailyBonusTimeLeft())}`
    : state.daily?.active
    ? `${t('todayGoal')}: ${state.daily.done || 0}/${state.daily.goal || 15}`
    : `${state.stats.total || 0} ${t('questions')}`;
}
function renderQuestion(){
  const {item, mode} = current;
  const itemLevel = mode === 'level55_chat' ? '5.5' : (mode === 'vowel_board' || mode === 'vowel_write' || mode === 'level6_pair') ? '6' : (mode === 'level12_pair' ? '1.2' : String(item.level));
  el('levelBadge').textContent = itemLevel === '6' ? `${t('level')} 6 — ${t('vowelLevel')}` : itemLevel === '1.2' ? t('foundationLevel') : `${t('level')} ${itemLevel}`;
  el('modeBadge').textContent = modeLabel(mode);
  updateQuestionProgressBadge();
  el('answerBox').hidden = true;
  renderLevel6Pair(current);
  renderLevel55Chat(current);
  renderStudyCard(current);
  const canvasWrap = document.querySelector('.canvas-wrap');
  if(canvasWrap) canvasWrap.hidden = mode === 'level55_chat' || ((mode === 'level6_pair' || mode === 'level12_pair') && !level6McqAnswered);
  const writingLocked = ((mode === 'level6_pair' || mode === 'level12_pair') && !level6McqAnswered);
  el('clearBtn').hidden = mode === 'level55_chat' || writingLocked;
  const eraserBtn = el('eraserToggleBtn');
  if(eraserBtn) eraserBtn.hidden = mode === 'level55_chat' || writingLocked;
  if(el('penControl')) el('penControl').hidden = mode === 'level55_chat' || writingLocked;
  if(el('premiumPenControl')) el('premiumPenControl').hidden = mode === 'level55_chat' || writingLocked || !hasPremiumPen();
  el('showAnswerBtn').hidden = mode === 'level55_chat' || writingLocked;
  el('toneChoices').hidden = mode === 'level55_chat' || !(mode === 'tone' || mode === 'vowel_board');
  el('toneChoices').innerHTML = '';
  const markRow = document.querySelector('.mark-row');
  if(markRow) markRow.hidden = mode === 'level55_chat';

  if(mode === 'level55_chat'){
    el('promptText').textContent = level55IsRomanMode()
      ? level55Text('רמה 5.5 - שיחה בתעתיק אנגלי', 'Level 5.5 - transliteration chat')
      : level55Text('רמה 5.5 - שיחת כתיבה בתאית', 'Level 5.5 - Thai writing chat');
    el('questionText').hidden = true;
    el('questionText').textContent = '';
    el('questionHint').textContent = level55IsRomanMode()
      ? level55Text('גם הבוט וגם התלמיד עובדים בתעתיק אנגלי כדי לתרגל אוצר מילים ותחביר.', 'Bot and student both use transliteration to practice vocabulary and sentence structure.')
      : level55Text('הבוט שואל בתעתיק אנגלי. התלמיד עונה בכתב תאילנדי.', 'The bot asks in transliteration. The student answers in Thai script.');
  } else if(mode === 'level6_pair' || mode === 'level12_pair'){
    el('promptText').textContent = mode === 'level12_pair' ? t('level12Choose') : t('level6Choose');
    el('questionText').hidden = true;
    el('questionText').textContent = '';
    el('questionHint').textContent = level6McqAnswered ? (mode === 'level12_pair' ? t('level12WriteIntro') : t('level6WriteIntro')) : t('level6WriteLocked');
  } else {
    el('questionText').hidden = false;
  }

  if(mode === 'level55_chat'){
    return;
  } else if(mode === 'vowel_write'){
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
  const foundationNote = q.mode === 'level12_pair' ? level12BoardFormNoteHtml() : '';
  box.innerHTML = `
    <div class="pair-card">
      <div class="pair-kicker">${escapeHtml(t('level6McqKicker'))}</div>
      <div class="pair-context">
        <span class="pair-symbol">${escapeHtml(item.symbol)}</span>
        <span class="pair-label">${escapeHtml(item.kind === 'consonant' ? (isHebrew() ? 'עיצור' : 'Consonant') : item.kind === 'vowel' ? (isHebrew() ? 'תנועה' : 'Vowel') : (isHebrew() ? 'סימן מיוחד' : 'Special sign'))} ${escapeHtml(item.emoji)} · ${escapeHtml(item.name)} · ${escapeHtml(isHebrew()?item.localHe:item.localEn)}</span>
      </div>
      <div class="pair-main">${escapeHtml(q.mcq.question)}</div>
      ${foundationNote}
      <div class="choices level6-choices">${choiceHtml}</div>
      ${feedback}
    </div>
    <div class="pair-card pair-write" ${selected ? '' : 'hidden'}>
      <div class="pair-kicker">${escapeHtml(t('level6WriteKicker'))}</div>
      <div class="pair-main">${escapeHtml(q.writing.prompt)}</div>
      ${foundationNote}
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
  return {read_meaning:t('readMeaning'),hebrew_write:t('meaningWrite'),tone:t('toneMode'),roman_write:t('romanWrite'),vowel_board:t('vowelBoard'),vowel_write:t('vowelBoard'),level55_chat:'Chat Bot',level6_pair:t('vowelBoard'),level12_pair:t('foundationLevel')}[mode] || t('mixed');
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
      ${mode === 'level12_pair' ? level12BoardFormNoteHtml() : ''}
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
function scrollToQuestionCard(){
  const target = document.querySelector('.question-card') || el('controlsPanel') || document.body;
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  requestAnimationFrame(() => {
    target.scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth', block:'start'});
  });
}
function mark(correct){
  if(!current) return;
  const {item, mode} = current;
  const premiumBefore = hasFirstPremiumSkin();
  state.stats.total++; correct ? state.stats.correct++ : state.stats.wrong++;
  state.stats.streak = correct ? (state.stats.streak + 1) : 0;
  const s = state.itemStats[item.id] || {correct:0,wrong:0,lastSeen:0,modes:{}};
  correct ? s.correct++ : s.wrong++;
  s.lastSeen = Date.now();
  s.modes[mode] = s.modes[mode] || {correct:0,wrong:0};
  correct ? s.modes[mode].correct++ : s.modes[mode].wrong++;
  state.itemStats[item.id] = s;
  updateSchedule(item, correct);
  state.history.push({id:item.id,mode,correct,at:Date.now()});
  if(state.history.length>250) state.history = state.history.slice(-250);
  ensureDailyState();
  if(state.daily.active){
    if((state.daily.done || 0) < (state.daily.goal || 15)){
      state.daily.done = Math.min(state.daily.goal || 15, (state.daily.done || 0) + 1);
      correct ? state.daily.correct++ : state.daily.wrong++;
      const awarded = awardDailyCoachPoints();
      if(awarded) state.achievements.dailyAward = Date.now();
    } else if(state.daily.bonus && state.daily.bonus.status === 'active'){
      state.daily.bonus.total = (state.daily.bonus.total || 0) + 1;
      if(correct) state.daily.bonus.correct = (state.daily.bonus.correct || 0) + 1;
      if(mode === 'level12_pair' || String(item.level) === '1.2') state.daily.bonus.level12 = (state.daily.bonus.level12 || 0) + 1;
      evaluateDailyBonusChallenge();
    }
  }
  const premiumJustUnlocked = !premiumBefore && hasFirstPremiumSkin();
  if(premiumJustUnlocked){
    state.coach.voiceCheer = true;
    state.coach.voiceCheerAutoEnabled = true;
  }
  updateAchievements(correct);
  if(correct) playVoiceCheer({force:premiumJustUnlocked});
  saveState(); updateStats(); newQuestion(); scrollToQuestionCard();
}
function updateAchievements(correct){
  state.achievements = state.achievements || {};
  if((state.stats.streak || 0) >= 5) state.achievements.streak5 = Date.now();
  if((state.stats.streak || 0) >= 10) state.achievements.streak10 = Date.now();
  if(state.daily && state.daily.done >= state.daily.goal) state.achievements.dailyComplete = Date.now();
  const recent = state.history.slice(-10);
  if(recent.length >= 10 && recent.filter(x=>x.correct).length >= 8) state.achievements.focused10 = Date.now();
  if(correct && state.stats.total >= 50) state.achievements.fifty = Date.now();
}
function updateStats(){
  ensureDailyState();
  const {correct,wrong,streak,total} = state.stats;
  const acc = total ? Math.round((correct/total)*100) : 0;
  el('correctCount').textContent = correct;
  el('wrongCount').textContent = wrong;
  el('streakCount').textContent = streak;
  el('accuracyCount').textContent = `${acc}%`;
  updateAchievementPanel();
  updateSkinPanel();
}
function practiceCounts(){
  const all = [...WORDS, ...BOARD_ITEMS];
  let due = 0, weak = 0, strong = 0;
  for(const item of all){
    const mem = itemMemory(item);
    if(mem.due && mem.attempts) due++;
    if(mem.weak) weak++;
    if(mem.strong) strong++;
  }
  return {due, weak, strong};
}
function achievementText(){
  const a = state.achievements || {};
  if(state.daily?.bonus?.status === 'success') return isHebrew() ? `אתגר עומס הושלם: +${state.daily.bonus.reward || DAILY_BONUS_REWARD} נק׳ לסקין הבא.` : `Load challenge complete: +${state.daily.bonus.reward || DAILY_BONUS_REWARD} pts toward the next skin.`;
  if(state.daily?.bonus?.status === 'active') return isHebrew() ? `אתגר עומס פעיל: ${state.daily.bonus.total || 0}/${state.daily.bonus.target || DAILY_BONUS_TARGET} · ${formatBonusTime(dailyBonusTimeLeft())}` : `Load challenge active: ${state.daily.bonus.total || 0}/${state.daily.bonus.target || DAILY_BONUS_TARGET} · ${formatBonusTime(dailyBonusTimeLeft())}`;
  if(state.daily?.bonus?.status === 'failed') return isHebrew() ? 'אתגר עומס הסתיים. חוזרים לשגרה עד מחר.' : 'Load challenge ended. Back to normal until tomorrow.';
  if(state.daily && state.daily.done >= state.daily.goal) return t('dailyDone');
  if(a.streak10) return isHebrew() ? 'רצף 10 תשובות נכונות. יפה.' : '10-correct streak. Nice.';
  if(a.focused10) return isHebrew() ? 'אימון מדויק: 8 מתוך 10 לאחרונה.' : 'Focused run: 8 of the last 10 correct.';
  if(a.streak5) return isHebrew() ? 'רצף 5 תשובות נכונות.' : '5-correct streak.';
  return state.daily?.active ? t('dailyOn') : (isHebrew() ? 'התחל אימון יומי כדי לקבל תמהיל חכם יותר.' : 'Start daily practice for a smarter mix.');
}
function renderDailyBonusPanel(){
  const panel = el('dailyBonusPanel');
  if(!panel) return;
  ensureDailyState();
  const bonus = state.daily.bonus;
  const dailyComplete = (state.daily.done || 0) >= (state.daily.goal || 15);
  if(!state.daily.active || !dailyComplete){
    panel.hidden = true;
    panel.innerHTML = '';
    return;
  }
  panel.hidden = false;
  const acc = Math.round(dailyBonusAccuracy() * 100);
  if(bonus.status === 'success' || bonus.awarded){
    panel.innerHTML = `<strong>${escapeHtml(isHebrew() ? 'אתגר עומס הושלם' : 'Load challenge complete')}</strong><span>${escapeHtml(isHebrew() ? `קיבלת ${bonus.reward || DAILY_BONUS_REWARD} נק׳ להתקדמות לסקין הבא. חוזרים לשגרה.` : `You earned ${bonus.reward || DAILY_BONUS_REWARD} pts toward the next skin. Back to normal.`)}</span>`;
    return;
  }
  if(bonus.status === 'failed'){
    panel.innerHTML = `<strong>${escapeHtml(isHebrew() ? 'אתגר עומס הסתיים' : 'Load challenge ended')}</strong><span>${escapeHtml(isHebrew() ? 'הזמן נגמר או שהיעד לא הושלם. מחר אפשר לנסות שוב.' : 'Time expired or the target was not completed. Try again tomorrow.')}</span>`;
    return;
  }
  if(bonus.status === 'active'){
    panel.innerHTML = `
      <div>
        <strong>${escapeHtml(isHebrew() ? 'אתגר עומס פעיל' : 'Load challenge active')}</strong>
        <span>${escapeHtml(isHebrew() ? `זמן שנותר: ${formatBonusTime(dailyBonusTimeLeft())}` : `Time left: ${formatBonusTime(dailyBonusTimeLeft())}`)}</span>
      </div>
      <div class="bonus-metrics">
        <span>${escapeHtml(isHebrew() ? `שאלות ${bonus.total || 0}/${bonus.target || DAILY_BONUS_TARGET}` : `Questions ${bonus.total || 0}/${bonus.target || DAILY_BONUS_TARGET}`)}</span>
        <span>${escapeHtml(isHebrew() ? `דיוק ${acc}% / מעל 70%` : `Accuracy ${acc}% / above 70%`)}</span>
        <span>${escapeHtml(isHebrew() ? `רמה 1.2 ${bonus.level12 || 0}/${bonus.requiredLevel12 || DAILY_BONUS_REQUIRED_LEVEL12}` : `Level 1.2 ${bonus.level12 || 0}/${bonus.requiredLevel12 || DAILY_BONUS_REQUIRED_LEVEL12}`)}</span>
      </div>`;
    return;
  }
  panel.innerHTML = `
    <div>
      <strong>${escapeHtml(isHebrew() ? 'אתגר עומס אחרי היעד' : 'After-goal load challenge')}</strong>
      <span>${escapeHtml(isHebrew() ? `שעתיים · 50 שאלות · מעל 70% · חובה 10 שאלות רמה 1.2 · פרס ${DAILY_BONUS_REWARD} נק׳.` : `2 hours · 50 questions · above 70% · 10 Level 1.2 required · ${DAILY_BONUS_REWARD} pts reward.`)}</span>
    </div>
    <button type="button" class="secondary" data-daily-bonus-action="start">${escapeHtml(isHebrew() ? 'פתח אתגר' : 'Open challenge')}</button>`;
}
function updatePremiumPenControl(){
  const wrap = el('premiumPenControl');
  const select = el('premiumPenSelect');
  if(!wrap || !select) return;
  const unlocked = hasPremiumPen();
  wrap.hidden = !unlocked;
  if(!unlocked) state.penMode = 'regular';
  select.value = state.penMode === 'premium' && unlocked ? 'premium' : 'regular';
  if(canvas) canvas.classList.toggle('premium-pen-mode', state.penMode === 'premium' && unlocked);
}
function updateAchievementPanel(){
  if(!el('dailyGoalBadge')) return;
  const goal = state.daily?.goal || 15;
  const done = state.daily?.done || 0;
  const counts = practiceCounts();
  el('dailyGoalBadge').textContent = `${done}/${goal}`;
  el('dailyGoalBadge').classList.toggle('complete', done >= goal);
  if(el('dailyPracticeBtn')){
    el('dailyPracticeBtn').textContent = state.daily?.active ? t('dailyOn') : t('dailyPractice');
    el('dailyPracticeBtn').classList.toggle('active', !!state.daily?.active);
  }
  el('dueItemsCount').textContent = counts.due;
  el('weakItemsCount').textContent = counts.weak;
  el('strongItemsCount').textContent = counts.strong;
  el('achievementNote').textContent = achievementText();
  renderDailyBonusPanel();
  updateSkinPanel();
}
function updateSkinPanel(){
  if(!el('skinGrid')) return;
  ensureDailyState();
  unlockEligibleThemes();
  const points = state.coach.points || 0;
  const premiumThemes = THEMES.filter(x=>x.premium);
  const next = premiumThemes.find(theme => !isThemeUnlocked(theme));
  const previousTarget = [...premiumThemes].reverse().find(theme => (theme.points || 0) <= points)?.points || 0;
  const nextTarget = next ? (next.points || 0) : (premiumThemes[premiumThemes.length - 1]?.points || points || 1);
  const span = Math.max(1, nextTarget - previousTarget);
  const progress = next ? Math.max(0, Math.min(100, ((points - previousTarget) / span) * 100)) : 100;
  const voiceUnlocked = hasFirstPremiumSkin();
  const voiceControl = el('voiceCheerControl');
  const voiceToggle = el('voiceCheerToggle');
  if(voiceControl && voiceToggle){
    voiceControl.hidden = !voiceUnlocked;
    if(voiceUnlocked && !state.coach.voiceCheerAutoEnabled){
      state.coach.voiceCheer = true;
      state.coach.voiceCheerAutoEnabled = true;
      saveState();
    }
    voiceToggle.checked = !!state.coach.voiceCheer;
  }
  updatePremiumPenControl();
  el('coachPointsBadge').textContent = next
    ? (isHebrew() ? `${points} נק׳ · עוד ${nextTarget - points}` : `${points} pts · ${nextTarget - points} left`)
    : (isHebrew() ? `${points} נק׳ · הכל פתוח` : `${points} pts · all unlocked`);
  if(el('skinProgressFill')) el('skinProgressFill').style.width = `${progress}%`;
  if(el('skinProgressText')){
    const percent = Math.round(progress);
    const premiumCount = unlockedPremiumSkinCount();
    el('skinProgressText').textContent = next
      ? (isHebrew()
        ? `התקדמות לפרס הבא: ${percent}% · חסרות ${Math.max(0, nextTarget - points)} נק׳. עט פרימיום נפתח אחרי 3 סקינים (${premiumCount}/3).`
        : `Next reward progress: ${percent}% · ${Math.max(0, nextTarget - points)} pts left. Premium pen unlocks after 3 skins (${premiumCount}/3).`)
      : (isHebrew()
        ? `כל הפרסים נפתחו. עט פרימיום ${hasPremiumPen() ? 'פתוח' : 'נעול'}.`
        : `All rewards unlocked. Premium pen ${hasPremiumPen() ? 'unlocked' : 'locked'}.`);
  }
  el('skinGrid').innerHTML = premiumThemes.map(theme => {
    const unlocked = isThemeUnlocked(theme);
    const active = state.theme === theme.id;
    const label = isHebrew() ? theme.he : theme.en;
    return `<button type="button" class="skin-card ${unlocked?'unlocked':'locked'} ${active?'active':''}" data-theme="${theme.id}" ${unlocked?'':'disabled'}>
      <span class="skin-swatch skin-${theme.id}"></span>
      <strong>${escapeHtml(label)}</strong>
      <small>${unlocked ? (active ? (isHebrew()?'פעיל':'Active') : (isHebrew()?'נפתח':'Unlocked')) : `${theme.points} ${isHebrew()?'נק׳':'pts'}`}</small>
    </button>`;
  }).join('');
  el('skinGrid').querySelectorAll('.skin-card.unlocked').forEach(btn => {
    btn.addEventListener('click', () => {
      state.theme = btn.getAttribute('data-theme');
      saveState();
      applyTheme();
      updateSkinPanel();
    });
  });
  el('nextSkinNote').textContent = next
    ? `${t('nextSkin')}: ${isHebrew()?next.he:next.en} · ${points}/${next.points} ${isHebrew()?'נק׳':'pts'}`
    : (isHebrew() ? 'כל הסקינים נפתחו. אגדה.' : 'All skins unlocked. Legendary.');
}


function updateEraserButton(){
  const btn = el('eraserToggleBtn');
  if(!btn) return;
  btn.classList.toggle('active', eraserMode);
  btn.setAttribute('aria-pressed', eraserMode ? 'true' : 'false');
  btn.setAttribute('title', t('eraserTitle'));
  btn.setAttribute('aria-label', eraserMode ? t('eraserActive') : t('eraser'));
  const label = btn.querySelector('.eraser-label');
  if(label) label.textContent = eraserMode ? t('eraserActive') : t('eraser');
  if(canvas) canvas.classList.toggle('eraser-mode', eraserMode);
}
function toggleEraserMode(){
  eraserMode = !eraserMode;
  updateEraserButton();
}

function setupCanvas(){
  const smoothWeight = 0.68;
  const premiumSmoothWeight = 0.52;
  const minPointDistance = 1.6;
  const isPremiumPenActive = () => {
    const premiumCount = THEMES.filter(theme => theme.premium && ((state.coach.unlocked || []).includes(theme.id) || (state.coach.points || 0) >= (theme.points || 0))).length;
    return state.penMode === 'premium' && premiumCount >= 3 && !eraserMode;
  };

  function drawGuideLines(){
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    ctx.save();
    ctx.setLineDash([]);
    ctx.clearRect(0, 0, w, h);
    ctx.restore();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    applyToolStyle();
  }

  function resizeCanvas(){
    const ratio = Math.max(1, window.devicePixelRatio || 1);
    const rect = canvas.getBoundingClientRect();
    if(!rect.width || !rect.height) return;
    canvas.width = Math.round(rect.width * ratio);
    canvas.height = Math.round(rect.height * ratio);
    ctx.setTransform(ratio,0,0,ratio,0,0);
    drawGuideLines();
  }
  const scheduleResize = () => requestAnimationFrame(resizeCanvas);
  window.addEventListener('resize', scheduleResize);
  window.addEventListener('orientationchange', () => setTimeout(resizeCanvas, 250));
  if(window.visualViewport) window.visualViewport.addEventListener('resize', scheduleResize);
  resizeCanvas();
  function applyToolStyle(dynamicWidth){
    ctx.globalCompositeOperation = eraserMode ? 'destination-out' : 'source-over';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.miterLimit = 2;
    const penWidth = Math.max(3, Math.min(10, Number(state.penSize) || 5));
    ctx.lineWidth = eraserMode ? Math.max(24, penWidth * 6) : (dynamicWidth || penWidth);
    ctx.strokeStyle = '#020617';
    ctx.shadowColor = eraserMode ? 'transparent' : (isPremiumPenActive() ? 'rgba(34, 211, 238, .28)' : 'rgba(2, 6, 23, .10)');
    ctx.shadowBlur = eraserMode ? 0 : (isPremiumPenActive() ? 2.2 : 0.45);
  }

  const getPoint = e => {
    const r = canvas.getBoundingClientRect();
    const rawPressure = typeof e.pressure === 'number' && e.pressure > 0 ? e.pressure : 0.5;
    return {x:e.clientX-r.left,y:e.clientY-r.top,pressure:rawPressure};
  };
  const getTouchPoint = e => {
    const touch = (e.touches && e.touches[0]) || (e.changedTouches && e.changedTouches[0]);
    if(!touch) return null;
    const r = canvas.getBoundingClientRect();
    return {x: touch.clientX - r.left, y: touch.clientY - r.top, pressure:0.5};
  };
  const distance = (a,b) => Math.hypot(a.x-b.x, a.y-b.y);
  const blendPoint = (from, to) => {
    const weight = isPremiumPenActive() ? premiumSmoothWeight : smoothWeight;
    return {
    x: from.x + (to.x - from.x) * weight,
    y: from.y + (to.y - from.y) * weight,
    pressure: to.pressure || from.pressure || 0.5
  };
  };

  const beginStroke = point => {
    applyToolStyle();
    drawing = true;
    lastPoint = point;
    smoothPoint = point;
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
  };
  const moveStroke = point => {
    if(!drawing) return;
    applyToolStyle();
    const nextPoint = smoothPoint ? blendPoint(smoothPoint, point) : point;
    const segmentDistance = lastPoint ? distance(lastPoint, nextPoint) : 0;
    if(lastPoint && segmentDistance < minPointDistance) return;
    if(isPremiumPenActive()){
      const baseWidth = Math.max(3, Math.min(10, Number(state.penSize) || 5));
      const dynamicWidth = Math.max(baseWidth * 0.72, Math.min(baseWidth * 1.24, baseWidth + (7 - Math.min(7, segmentDistance)) * 0.22));
      applyToolStyle(dynamicWidth);
    }
    const midPoint = lastPoint
      ? {x:(lastPoint.x + nextPoint.x) / 2, y:(lastPoint.y + nextPoint.y) / 2}
      : nextPoint;
    ctx.quadraticCurveTo(lastPoint.x, lastPoint.y, midPoint.x, midPoint.y);
    ctx.stroke();
    lastPoint = nextPoint;
    smoothPoint = nextPoint;
  };
  const endStroke = () => {
    if(!drawing) return;
    if(lastPoint){
      ctx.lineTo(lastPoint.x, lastPoint.y);
      ctx.stroke();
    }
    drawing = false;
    lastPoint = null;
    smoothPoint = null;
  };

  // Older iPads can expose partial PointerEvent support but fail to deliver reliable canvas strokes.
  // Keep touch listeners active as a real fallback, while ignoring duplicate touch events after pointer strokes.
  canvas.addEventListener('contextmenu', e => e.preventDefault());
  let lastPointerEventAt = 0;
  let lastTouchEventAt = 0;
  if(window.PointerEvent){
    canvas.addEventListener('pointerdown', e=>{
      if(e.pointerType === 'mouse' && e.button !== 0) return;
      e.preventDefault();
      lastPointerEventAt = Date.now();
      if(canvas.setPointerCapture){ canvas.setPointerCapture(e.pointerId); }
      beginStroke(getPoint(e));
    });
    canvas.addEventListener('pointermove', e=>{
      if(!drawing) return;
      e.preventDefault();
      lastPointerEventAt = Date.now();
      moveStroke(getPoint(e));
    });
    const stopPointer = e=>{
      if(!drawing) return;
      e.preventDefault();
      lastPointerEventAt = Date.now();
      endStroke();
    };
    canvas.addEventListener('pointerup', stopPointer);
    canvas.addEventListener('pointercancel', stopPointer);
    canvas.addEventListener('pointerleave', stopPointer);
  }
  const recentPointerEvent = () => Date.now() - lastPointerEventAt < 700;
  const recentTouchEvent = () => Date.now() - lastTouchEventAt < 700;
  canvas.addEventListener('touchstart', e=>{
    if(recentPointerEvent()) return;
    if(e.touches && e.touches.length > 1) return;
    e.preventDefault();
    lastTouchEventAt = Date.now();
    const p = getTouchPoint(e);
    if(p) beginStroke(p);
  }, {passive:false});
  canvas.addEventListener('touchmove', e=>{
    if(recentPointerEvent()) return;
    if(!drawing) return;
    e.preventDefault();
    lastTouchEventAt = Date.now();
    const p = getTouchPoint(e);
    if(p) moveStroke(p);
  }, {passive:false});
  canvas.addEventListener('touchend', e=>{
    if(recentPointerEvent()) return;
    e.preventDefault();
    lastTouchEventAt = Date.now();
    endStroke();
  }, {passive:false});
  canvas.addEventListener('touchcancel', e=>{
    if(recentPointerEvent()) return;
    e.preventDefault();
    lastTouchEventAt = Date.now();
    endStroke();
  }, {passive:false});

  canvas.addEventListener('mousedown', e=>{ if(recentTouchEvent()) return; e.preventDefault(); beginStroke(getPoint(e)); });
  canvas.addEventListener('mousemove', e=>{ if(recentTouchEvent() || !drawing) return; e.preventDefault(); moveStroke(getPoint(e)); });
  window.addEventListener('mouseup', endStroke);

  window.__drawGuideLines = drawGuideLines;
  window.clearCanvas = function(){ drawGuideLines(); };
}
function clearCanvas(){
  if(window.__drawGuideLines){ window.__drawGuideLines(); updateEraserButton(); return; }
  const rect = canvas.getBoundingClientRect();
  ctx.clearRect(0, 0, rect.width, rect.height);
}

function cleanUserId(value){
  return String(value || '').trim().replace(/\s+/g,'_').replace(/[^A-Za-z0-9_\-א-תก-๙]/g,'').slice(0,60) || 'rif';
}
async function initUserSheet(){
  try{
    setSyncBusy(true);
    setSyncStatus(t('syncWorking'), 'loading');
    const userId = cleanUserId(el('userIdInput').value);
    state.userId = userId;
    el('userIdInput').value = userId;
    saveState();
    const json = await jsonpRequest({action:'inituser', userId});
    if(!json.ok) throw new Error(json.error || 'init failed');
    updateSyncHealth();
    setSyncStatus(`${t('initUserOk')} — ${json.sheetName || userId}`, 'ok');
  } catch(err){ setSyncStatus(t('initUserErr') + err.message, 'error'); }
  finally{ setSyncBusy(false); }
}
function saveSyncUrl(silent=false){
  state.syncUrl = normalizeSyncUrlValue(el('syncUrl').value.trim() || state.syncUrl || DEFAULT_SYNC_URL);
  state.syncUrlCustom = state.syncUrl !== DEFAULT_SYNC_URL;
  el('syncUrl').value = state.syncUrl;
  state.userId = cleanUserId(el('userIdInput').value || state.userId);
  el('userIdInput').value = state.userId;
  saveState();
  updateSyncHealth();
  if(!silent) setSyncStatus(t('syncSaved'), 'ok');
}
function resetSyncUrl(){
  state.syncUrl = DEFAULT_SYNC_URL;
  state.syncUrlCustom = false;
  el('syncUrl').value = DEFAULT_SYNC_URL;
  saveState();
  updateSyncHealth();
  setSyncStatus(t('syncUrlReset'), 'ok');
}
function formatTime(ts){
  if(!ts) return t('neverSynced');
  try{ return new Intl.DateTimeFormat(isHebrew() ? 'he-IL' : 'en-US', {dateStyle:'short', timeStyle:'short'}).format(new Date(ts)); }
  catch{ return new Date(ts).toLocaleString(); }
}
function updateSyncHealth(){
  if(el('lastSyncValue')) el('lastSyncValue').textContent = formatTime(state.lastSync);
  if(el('syncUrlPreview')){
    const url = normalizeSyncUrlValue(state.syncUrl || DEFAULT_SYNC_URL);
    el('syncUrlPreview').textContent = url ? url.replace(/^https:\/\/script\.google\.com\/macros\/s\//, '.../') : (isHebrew() ? 'לא הוגדר' : 'Not set');
  }
}
function setSyncBusy(isBusy){
  const ids = ['saveSyncUrlBtn','resetSyncUrlBtn','syncUploadBtn','syncDownloadBtn','syncTestBtn','openSyncTestBtn','exportBackupBtn','importBackupBtn'];
  for(const id of ids){ if(el(id)) el(id).disabled = !!isBusy; }
  if(el('syncStatus')) el('syncStatus').classList.toggle('is-loading', !!isBusy);
}
function downloadTextFile(filename, text){
  const blob = new Blob([text], {type:'application/json;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); }, 0);
}
function exportLocalBackup(){
  try{
    const backup = {...state, exportedAt: Date.now(), appVersion: APP_VERSION, owner: PROJECT_OWNER};
    const stamp = new Date().toISOString().slice(0,19).replace(/[:T]/g,'-');
    downloadTextFile(`thai-trainer-backup-${cleanUserId(state.userId)}-${stamp}.json`, JSON.stringify(backup, null, 2));
    setSyncStatus(t('exportOk'), 'ok');
  }catch(err){ setSyncStatus((isHebrew() ? 'שגיאת גיבוי: ' : 'Backup error: ') + err.message, 'error'); }
}
async function importLocalBackup(event){
  const input = event.target;
  const file = input.files && input.files[0];
  input.value = '';
  if(!file) return;
  try{
    const text = await file.text();
    const imported = JSON.parse(text);
    if(!imported || typeof imported !== 'object') throw new Error('invalid backup file');
    if(!confirm(t('importConfirm'))) return;
    state = {...defaultState(), ...imported, syncUrl: state.syncUrl, userId: cleanUserId(imported.userId || state.userId), lang: state.lang};
    saveState();
    el('userIdInput').value = state.userId;
    el('syncUrl').value = state.syncUrl || DEFAULT_SYNC_URL;
    updateSyncHealth(); updateStats(); newQuestion();
    setSyncStatus(t('importOk'), 'ok');
  }catch(err){ setSyncStatus(t('importErr') + err.message, 'error'); }
}

function encodePayload(obj){
  return btoa(unescape(encodeURIComponent(JSON.stringify(obj))));
}
function decodePayload(str){
  if(str && typeof str === 'object') return str;
  const raw = String(str || '').trim();
  if(!raw) throw new Error(isHebrew() ? 'הענן החזיר שמירה ריקה.' : 'The cloud returned an empty save.');
  if(raw.startsWith('<')) throw new Error(isHebrew() ? 'הסקריפט החזיר דף HTML במקום נתוני התקדמות. ודא שה־Apps Script נפרס כ-Web app עם גישה Anyone.' : 'The script returned HTML instead of progress data. Make sure Apps Script is deployed as a Web app with Anyone access.');
  if(raw.startsWith('{')) return JSON.parse(raw);
  const variants = [
    raw,
    raw.replace(/-/g, '+').replace(/_/g, '/'),
  ].map(value => value + '='.repeat((4 - (value.length % 4)) % 4));
  let lastErr = null;
  for(const value of variants){
    try{
      const binary = atob(value);
      const bytes = Uint8Array.from(binary, ch => ch.charCodeAt(0));
      const text = new TextDecoder('utf-8').decode(bytes);
      return JSON.parse(text);
    }catch(err){
      lastErr = err;
    }
  }
  throw new Error((isHebrew() ? 'השמירה בענן אינה מקודדת בפורמט שהאפליקציה יודעת לקרוא: ' : 'Cloud save is not encoded in a readable format: ') + (lastErr?.message || 'decode failed'));
}
function isTrainerState(value){
  return !!(value && typeof value === 'object' && (
    value.stats || value.itemStats || value.history || value.daily || value.coach
  ));
}
function noCloudDataMessage(userId){
  return isHebrew()
    ? `לא נמצאה שמירה בענן עבור המשתמש "${userId}". במכשיר הראשי לחץ קודם "שמור התקדמות", ואז במכשיר הזה ודא שאותו שם משתמש ואותה כתובת סקריפט מודבקים ולחץ "טען התקדמות".`
    : `No cloud save was found for "${userId}". On the main device, click "Save progress" first, then use the same username and script URL here and click "Load progress".`;
}
function invalidCloudDataMessage(userId){
  return isHebrew()
    ? `נמצאה בענן שורה עבור "${userId}", אבל היא לא נראית כמו שמירת Thai Trainer. נסה ללחוץ "שמור התקדמות" מהמכשיר הראשי ואז לטעון שוב.`
    : `A cloud row was found for "${userId}", but it does not look like Thai Trainer progress. Save progress from the main device, then load again.`;
}
function normalizeSyncUrlValue(value){
  let url = String(value || '').trim();
  if(!url) return '';
  url = url.replace(/\s+/g, '');
  url = url.replace(/\/$/, '');
  // Users often paste the deployment URL without the final /exec. Fix that automatically.
  if(/^https:\/\/script\.google\.com\/macros\/s\/[^/?#]+$/.test(url)) url += '/exec';
  // /dev URLs are for the owner only; /exec is the deployed web-app URL used by students/devices.
  url = url.replace(/\/dev(?:\?.*)?$/, '/exec');
  return url;
}
function normalizedSyncUrl(){
  const url = normalizeSyncUrlValue(state.syncUrl || DEFAULT_SYNC_URL || el('syncUrl')?.value || '');
  if(!url) throw new Error('אין כתובת Apps Script');
  if(!/^https:\/\/script\.google\.com\/macros\/s\/[^/?#]+\/exec(?:\?.*)?$/.test(url)){
    throw new Error('כתובת הסקריפט אינה תקינה. צריך URL שמתחיל ב-script.google.com/macros/s ומסתיים ב-/exec');
  }
  return url;
}
function syncUrlWithParams(params){
  const url = normalizedSyncUrl();
  const qs = new URLSearchParams({...params, t: String(Date.now())});
  return url + (url.includes('?') ? '&' : '?') + qs.toString();
}
function jsonpRequest(params, timeoutMs=12000){
  return new Promise((resolve, reject)=>{
    saveSyncUrl(true);
    let src;
    try{
      const callbackName = 'thaiSyncCb_' + Date.now() + '_' + Math.floor(Math.random()*100000);
      src = syncUrlWithParams({...params, callback: callbackName});
      const script = document.createElement('script');
      let callbackCalled = false;
      const cleanup = () => { try{ delete window[callbackName]; }catch{}; script.remove(); clearTimeout(timer); };
      const timer = setTimeout(()=>{ cleanup(); reject(new Error('timeout — Google Apps Script did not answer')); }, timeoutMs);
      window[callbackName] = data => { callbackCalled = true; cleanup(); resolve(data); };
      script.async = true;
      script.referrerPolicy = 'no-referrer-when-downgrade';
      script.src = src;
      script.onerror = () => {
        if(callbackCalled) return;
        cleanup();
        reject(new Error('script load failed — ' + t('scriptBlockedHe')));
      };
      document.body.appendChild(script);
    }catch(err){ reject(err); }
  });
}
function validateSyncResponse(json){
  if(!json || typeof json !== 'object') throw new Error(isHebrew() ? 'תשובת הסנכרון אינה אובייקט תקין.' : 'Sync response is not a valid object.');
  if(!json.ok) throw new Error(json.error || 'sync failed');
  return json;
}
async function downloadViaBestRoute(userId){
  let firstErr = null;
  try{
    return validateSyncResponse(await jsonpRequest({action:'download', userId}));
  }catch(err){
    firstErr = err;
  }
  try{
    return validateSyncResponse(await iframeBridgeDownload({userId}));
  }catch(err){
    throw new Error((firstErr?.message || 'primary route failed') + ' | fallback: ' + err.message);
  }
}
async function syncTest(){
  try{
    setSyncBusy(true);
    setSyncStatus(t('syncWorking'), 'loading');
    const json = await jsonpRequest({action:'ping', userId: cleanUserId(el('userIdInput').value || state.userId)}, 10000);
    if(!json.ok) throw new Error(json.error || 'ping failed');
    setSyncStatus(t('syncTestOk'), 'ok');
  }catch(err){ setSyncStatus(t('syncTestErr') + err.message, 'error'); }
  finally{ setSyncBusy(false); }
}
function openSyncTest(){
  try{
    saveSyncUrl(true);
    const url = syncUrlWithParams({action:'ping', userId: cleanUserId(el('userIdInput').value || state.userId)});
    window.open(url, '_blank', 'noopener,noreferrer');
    setSyncStatus(isHebrew() ? 'נפתחה בדיקת חיבור בחלון חדש. אם אתה רואה JSON עם ok:true — הסקריפט תקין והדפדפן חסם את הקריאה מתוך האפליקציה.' : 'Opened a connection test in a new tab. If you see JSON with ok:true, the script is OK and the browser blocked the in-app request.');
  }catch(err){ setSyncStatus(t('syncTestErr') + err.message); }
}
function formPostUpload(params, timeoutMs=15000){
  return new Promise((resolve, reject)=>{
    saveSyncUrl(true);
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
function iframeBridgeDownload(params, timeoutMs=15000){
  return new Promise((resolve, reject)=>{
    saveSyncUrl();
    const requestId = 'thaiSyncReq_' + Date.now() + '_' + Math.floor(Math.random()*100000);
    let url;
    try{
      const targetOrigin = window.location.origin && window.location.origin !== 'null' ? window.location.origin : '*';
      url = syncUrlWithParams({...params, action:'download_bridge', requestId, targetOrigin});
    }catch(err){ reject(err); return; }

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    const cleanup = () => {
      window.removeEventListener('message', onMessage);
      iframe.remove();
      clearTimeout(timer);
    };
    const timer = setTimeout(()=>{ cleanup(); reject(new Error('timeout')); }, timeoutMs);
    const onMessage = event => {
      if(event.source !== iframe.contentWindow) return;
      const data = event.data || {};
      if(data.source !== 'thai-trainer-sync' || data.requestId !== requestId) return;
      cleanup();
      if(!data.ok) reject(new Error(data.error || 'sync failed'));
      else resolve(data);
    };
    iframe.onerror = () => { cleanup(); reject(new Error('iframe download failed')); };
    window.addEventListener('message', onMessage);
    document.body.appendChild(iframe);
    iframe.src = url;
  });
}
async function syncUpload(){
  try{
    setSyncBusy(true);
    setSyncStatus(t('syncWorking'), 'loading');
    const safeState = {...state, lastSync: Date.now()};
    const data = encodePayload(safeState);
    // First try JSONP, because it gives a real success/error response.
    try{
      const json = await jsonpRequest({action:'upload', userId: cleanUserId(el('userIdInput').value || state.userId), data});
      if(!json.ok) throw new Error(json.error || 'sync failed');
      state.lastSync = Date.now(); saveState(); updateSyncHealth(); setSyncStatus(t('uploadOk'), 'ok');
      return;
    }catch(jsonpErr){
      // Some browsers/extensions block script.googleusercontent.com as a script.
      // Fallback: submit a hidden form POST. It avoids CORS and usually bypasses script blockers.
      await formPostUpload({action:'upload', userId: cleanUserId(el('userIdInput').value || state.userId), data});
      state.lastSync = Date.now(); saveState(); updateSyncHealth(); setSyncStatus(t('uploadSent'), 'ok');
    }
  } catch(err){ setSyncStatus(t('uploadErr')+err.message, 'error'); }
  finally{ setSyncBusy(false); }
}
async function syncDownload(){
  try{
    setSyncBusy(true);
    setSyncStatus(t('syncWorking'), 'loading');
    const userId = cleanUserId(el('userIdInput').value || state.userId);
    state.userId = userId;
    state.syncUrl = state.syncUrl || DEFAULT_SYNC_URL;
    saveState();
    let json = await downloadViaBestRoute(userId);
    if(!json.data && !json.state) throw new Error(noCloudDataMessage(userId));
    const cloudState = json.state && isTrainerState(json.state) ? json.state : decodePayload(json.data);
    if(!isTrainerState(cloudState)) throw new Error(invalidCloudDataMessage(userId));
    state = {...defaultState(),...cloudState, syncUrl:state.syncUrl || DEFAULT_SYNC_URL, lang:state.lang, userId};
    el('userIdInput').value = userId;
    el('syncUrl').value = state.syncUrl || DEFAULT_SYNC_URL;
    saveState(); updateStats(); newQuestion();
    state.lastSync = Date.now(); saveState(); updateSyncHealth();
    setSyncStatus(t('downloadOk'), 'ok');
  } catch(err){ setSyncStatus(t('downloadErr')+err.message, 'error'); }
  finally{ setSyncBusy(false); }
}
function setSyncStatus(msg, type='neutral'){
  const status = el('syncStatus');
  status.textContent = msg;
  status.classList.remove('is-ok','is-error','is-loading');
  if(type === 'ok') status.classList.add('is-ok');
  if(type === 'error') status.classList.add('is-error');
  if(type === 'loading') status.classList.add('is-loading');
}
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
  lines.push(`Level 5.5: ${Object.keys(LEVEL55_TOPICS).length} guided chat topics x 2 writing modes`);
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
