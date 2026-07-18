'use strict';

const APP_VERSION = '1.25.35';
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
    langButton:'English', title:'קריאה, כתיבה, טונים ומשמעות',
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
    dailyPractice:'אימון יומי', dailyOn:'אימון יומי פעיל', dailyDone:'האימון היומי הושלם', dueItems:'לחזרה', weakItems:'חלשים', strongItems:'חזקים', todayGoal:'יעד היום', achievements:'הישגים', penSize:'עובי עט', skins:'סקינים פרימיום', coachPoints:'נק׳ מאמן', nextSkin:'הסקין הבא', voiceCheer:'מחווה קולית ב"צדקתי"', voiceCheerLocked:'ייפתח אחרי הסקין הראשון',
    docTitle:'Thai Trainer — תרגול תאית', controlsAria:'בקרות תרגול', levelSelectAria:'בחר רמת קושי', modeSelectAria:'בחר מצב שאלה', canvasAria:'אזור כתיבה חופשית', close:'סגור',
    inputModeAria:'מצב קלט', inputModeWrite:'כתיבה ביד', inputModeType:'מקלדת', inkJudge:'שפוט את הכתב ✦', inkReplay:'שחזר את הכתב ▶', inkGif:'שמור GIF ⤓',
    dexTitle:'דקס אותיות', dexNote:'שלוט באות (תרגול רמה 1.2) והיא תיצבע זהב. השלם את כל 44 העיצורים → בונוס! לחיצה ארוכה על אות = מידע.',
    vowelDexToggle:'דקס התנועות', vowelDexNote:'לחיצה ארוכה על תנועה = שם, איך מתפקדת, ותכונות מיוחדות.',
    viewJourney:'צפה במסע 🗺️', sfx:'אפקטי צליל וחגיגה', boardWordLine:'מילת לוח', syncNoUrl:'אין כתובת Apps Script', syncBadUrl:'כתובת הסקריפט אינה תקינה. צריך URL שמתחיל ב-script.google.com/macros/s ומסתיים ב-/exec'
  },
  en: {
    langButton:'עברית', title:'Reading, writing, tones and meaning',
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
    dailyPractice:'Daily practice', dailyOn:'Daily practice active', dailyDone:'Daily practice complete', dueItems:'Due', weakItems:'Weak', strongItems:'Strong', todayGoal:'Today goal', achievements:'Achievements', penSize:'Pen size', skins:'Premium skins', coachPoints:'coach pts', nextSkin:'Next skin', voiceCheer:'Voice cheer on correct', voiceCheerLocked:'Unlocks after first skin',
    docTitle:'Thai Trainer — Thai practice', controlsAria:'Practice controls', levelSelectAria:'Choose difficulty level', modeSelectAria:'Choose question mode', canvasAria:'Free writing area', close:'Close',
    inputModeAria:'Input mode', inputModeWrite:'Handwrite', inputModeType:'Keyboard', inkJudge:'Judge my writing ✦', inkReplay:'Replay writing ▶', inkGif:'Save GIF ⤓',
    dexTitle:'Letter Dex', dexNote:'Master a letter (Level 1.2 practice) and it turns gold. Complete all 44 consonants → bonus! Long-press a letter for info.',
    vowelDexToggle:'Vowel Dex', vowelDexNote:'Long-press a vowel for its name, how it works, and special traits.',
    viewJourney:'View the journey 🗺️', sfx:'Sound & celebration effects', boardWordLine:'Board word', syncNoUrl:'No Apps Script URL set', syncBadUrl:'The script URL is invalid. It must start with script.google.com/macros/s and end with /exec'
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
  {id:'l1_018',level:1,cefr:'A1',thai:'เนื้อ',roman:'nuea',hebrew:'בשר',english:'meat',tone:'high'},
  {id:'l1_019',level:1,cefr:'A1',thai:'ไก่',roman:'gai',hebrew:'תרנגול / עוף',english:'chicken',tone:'low'},
  {id:'l1_020',level:1,cefr:'A1',thai:'แมว',roman:'maew',hebrew:'חתול',english:'cat',tone:'mid'},
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
  {id:'l4_001',level:4,thai:'พูดเล่น',roman:'phut len',hebrew:'סתם צוחק / אומר בצחוק',english:'just joking / saying jokingly',tone:'falling-falling'},
  {id:'l4_002',level:4,thai:'ล้อเล่น',roman:'law len',hebrew:'מתבדח / עובד עליך',english:'joking / teasing',tone:'high-falling'},
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
  {id:'l4_033',level:4,cefr:'B2',thai:'วัฒนธรรม',roman:'wat tha na tham',hebrew:'תרבות',english:'culture',tone:'high-high-mid'},
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
  {id:"uv19_0001",level:3,thai:"สำคัญ",roman:"sam-kan",hebrew:"חשוב",english:"important",tone:'rising-mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0002",level:3,thai:"ขนม",roman:"kha-num",hebrew:"חטיף",english:"snack",tone:'low-rising',source:"תומר 1,csv.txt"},
  {id:"uv19_0003",level:3,thai:"หวี",roman:"wii",hebrew:"אשכול/יחידת בננות; מסרק",english:"banana bunch/classifier; comb",tone:'rising',source:"תומר 1,csv.txt"},
  {id:"uv19_0004",level:3,thai:"มาครับ",roman:"ma-krap",hebrew:"באתי / אני בא (זכר מנומס)",english:"I came / I am coming (male polite)",tone:'mid-high',source:"תומר 1,csv.txt"},
  {id:"uv19_0005",level:1,thai:"ไหว้",roman:"waai",hebrew:"לחלוק כבוד",english:"wai greeting / pay respect",tone:'falling',source:"תומר 1,csv.txt"},
  {id:"uv19_0006",level:1,thai:"น้ำ",roman:"nam",hebrew:"מים",english:"water",tone:'high',source:"תומר 1,csv.txt"},
  {id:"uv19_0007",level:3,thai:"ปากกา",roman:"bpaag-gaa",hebrew:"עט",english:"pen",tone:'low-mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0008",level:1,thai:"ปาก",roman:"bpaag",hebrew:"פה / מקור",english:"mouth / beak",tone:'low',source:"תומר 1,csv.txt"},
  {id:"uv19_0009",level:1,thai:"กา",roman:"gaa",hebrew:"עורב",english:"crow",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0010",level:3,thai:"ว่ายน้ำ",roman:"waai-nam",hebrew:"לשחות",english:"swim",tone:'falling-high',source:"תומר 1,csv.txt"},
  {id:"uv19_0011",level:1,thai:"ครู",roman:"kru",hebrew:"מורה",english:"teacher",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0012",level:5,thai:"คุณชื่ออะไร",roman:"kun cheuu a-rai?",hebrew:"מה השם שלך?",english:"What is your name?",tone:'mid-falling-mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0013",level:4,thai:"ผมชื่อ…",roman:"pom cheuu (name)",hebrew:"השם שלי הוא...",english:"My name is… (male)",tone:'rising-falling',source:"תומר 1,csv.txt"},
  {id:"uv19_0014",level:4,thai:"ฉันชื่อ…",roman:"chan cheuu (name)",hebrew:"השם שלי הוא...",english:"My name is… (female)",tone:'rising-falling',source:"תומר 1,csv.txt"},
  {id:"uv19_0015",level:1,thai:"มา",roman:"maa",hebrew:"לבוא",english:"come",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0016",level:1,thai:"ไป",roman:"bpai",hebrew:"ללכת",english:"go",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0017",level:1,thai:"อยู่",roman:"yuu",hebrew:"להיות / לגור",english:"be / live / stay",tone:'low',source:"תומר 1,csv.txt"},
  {id:"uv19_0018",level:1,thai:"ท้อง",roman:"thong",hebrew:"בטן",english:"belly",tone:'high',source:"תומר 1,csv.txt"},
  {id:"uv19_0019",level:1,thai:"หิน",roman:"hin",hebrew:"אבן",english:"stone",tone:'rising',source:"תומר 1,csv.txt"},
  {id:"uv19_0020",level:1,thai:"กอง",roman:"kong",hebrew:"ערימה",english:"pile",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0021",level:4,thai:"ผมอยู่…",roman:"pom yuu (place)",hebrew:"אני גר ב...",english:"I live/stay in…",tone:'rising-low',source:"תומר 1,csv.txt"},
  {id:"uv19_0022",level:1,thai:"หวาน",roman:"waan",hebrew:"מתוק",english:"sweet",tone:'rising',source:"תומר 1,csv.txt"},
  {id:"uv19_0023",level:1,thai:"ค่าย",roman:"kaai",hebrew:"מחנה",english:"camp",tone:'falling',source:"תומר 1,csv.txt"},
  {id:"uv19_0024",level:1,thai:"ชา",roman:"chaa",hebrew:"תה",english:"tea",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0025",level:5,thai:"อะไร",roman:"a-rai",hebrew:"מה?",english:"what",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0026",level:1,thai:"ดื่ม",roman:"deuum",hebrew:"לשתות",english:"drink",tone:'low',source:"תומר 1,csv.txt"},
  {id:"uv19_0027",level:1,thai:"บ้าน",roman:"baan",hebrew:"בית",english:"house / home",tone:'falling',source:"תומר 1,csv.txt"},
  {id:"uv19_0028",level:1,thai:"ใต้",roman:"dtai",hebrew:"דרום / מתחת",english:"south / under",tone:'falling',source:"תומר 1,csv.txt"},
  {id:"uv19_0029",level:1,thai:"ร้อน",roman:"rawn",hebrew:"חם",english:"hot",tone:'high',source:"תומר 1,csv.txt"},
  {id:"uv19_0030",level:1,thai:"ไหม",roman:"mai?",hebrew:"מילת שאלה (כן/לא)",english:"yes/no question particle",tone:'rising',source:"תומר 1,csv.txt"},
  {id:"uv19_0031",level:5,thai:"ใช่ไหม",roman:"chai mai?",hebrew:"נכון?",english:"right? / correct?",tone:'falling-rising',source:"תומר 1,csv.txt"},
  {id:"uv19_0032",level:1,thai:"ไม่",roman:"mai",hebrew:"לא / אל",english:"not / no",tone:'falling',source:"תומר 1,csv.txt"},
  {id:"uv19_0033",level:1,thai:"สวย",roman:"suai",hebrew:"יפה",english:"beautiful",tone:'rising',source:"תומר 1,csv.txt"},
  {id:"uv19_0034",level:5,thai:"สบายดีไหม",roman:"sa-baai dii mai?",hebrew:"מה שלומך?",english:"How are you?",tone:'low-mid-mid-rising',source:"תומר 1,csv.txt"},
  {id:"uv19_0035",level:4,thai:"สบายดี",roman:"sa-baai dii",hebrew:"הכל טוב / בסדר",english:"I am fine / okay",tone:'low-mid-mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0036",level:4,thai:"ไม่สบาย",roman:"mai sa-baai",hebrew:"לא מרגיש טוב",english:"not feeling well",tone:'falling-low-mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0037",level:3,thai:"ตีหมา",roman:"dtii maa",hebrew:"להרביץ לכלב",english:"hit a dog",tone:'mid-rising',source:"תומר 1,csv.txt"},
  {id:"uv19_0038",level:1,thai:"ตอบ",roman:"dtawb",hebrew:"לענות",english:"answer",tone:'low',source:"תומר 1,csv.txt"},
  {id:"uv19_0039",level:1,thai:"งู",roman:"nguu",hebrew:"נחש",english:"snake",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0040",level:1,thai:"เงิน",roman:"ngoen",hebrew:"כסף",english:"money",tone:'mid',source:"תומר 1,csv.txt"},
  {id:"uv19_0041",level:1,thai:"งาน",roman:"ngaan",hebrew:"עבודה",english:"work / job",tone:'mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0042",level:1,thai:"มี",roman:"mii",hebrew:"יש",english:"have / there is",tone:'mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0043",level:3,thai:"ทำงาน",roman:"tam-ngaan",hebrew:"לעבוד",english:"work",tone:'mid-mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0044",level:1,thai:"ทำ",roman:"tam",hebrew:"לעשות / להכין",english:"do / make",tone:'mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0046",level:3,thai:"อร่อย",roman:"a-roi",hebrew:"טעים",english:"delicious",tone:'mid-low',source:"תומר 2,csv.txt"},
  {id:"uv19_0047",level:3,thai:"นิดหน่อย",roman:"nit-noi",hebrew:"קצת",english:"a little",tone:'high-low',source:"תומר 2,csv.txt"},
  {id:"uv19_0048",level:1,thai:"จะ",roman:"ja",hebrew:"מילת עתיד",english:"future marker / will",tone:'low',source:"תומר 2,csv.txt"},
  {id:"uv19_0049",level:5,thai:"กินอะไร",roman:"gin a-rai?",hebrew:"מה אתה אוכל?",english:"What are you eating?",tone:'mid-mid-mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0050",level:4,thai:"ผม/ฉันรักคุณ",roman:"pom/chan rak kun",hebrew:"אני אוהב/ת אותך",english:"I love you",tone:'rising-rising-high-mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0051",level:5,thai:"คุณรักผม/ฉันไหม",roman:"khun rak phom/chan mai?",hebrew:"אתה אוהב אותי?",english:"Do you love me?",tone:'mid-high-rising-rising-rising',source:"תומר 2,csv.txt"},
  {id:"uv19_0052",level:1,thai:"เปิด",roman:"bpoed",hebrew:"להדליק / לפתוח",english:"open / turn on",tone:'low',source:"תומר 2,csv.txt"},
  {id:"uv19_0053",level:1,thai:"ชอบ",roman:"chawb",hebrew:"לאהוב / לחבב",english:"like",tone:'falling',source:"תומר 2,csv.txt"},
  {id:"uv19_0054",level:3,thai:"โรงเรียน",roman:"rong-rian",hebrew:"בית ספר",english:"school",tone:'mid-mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0055",level:1,thai:"เรียน",roman:"rian",hebrew:"ללמוד",english:"study / learn",tone:'mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0056",level:1,thai:"โรง",roman:"rong",hebrew:"מקום מפגש",english:"building / hall",tone:'mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0057",level:3,thai:"ขอโทษ",roman:"kaw-tohd",hebrew:"סליחה",english:"sorry / excuse me",tone:'rising-falling',source:"תומר 2,csv.txt"},
  {id:"uv19_0058",level:1,thai:"คน",roman:"khon",hebrew:"אנשים",english:"person / people",tone:'mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0059",level:1,thai:"เขียน",roman:"kian",hebrew:"לכתוב",english:"write",tone:'rising',source:"תומר 2,csv.txt"},
  {id:"uv19_0060",level:4,thai:"ข้าวเหนียวมะม่วง",roman:"kaaw-niaw ma-muang",hebrew:"סטיקי רייס מנגו",english:"mango sticky rice",tone:'falling-rising-high-falling',source:"תומר 2,csv.txt"},
  {id:"uv19_0061",level:1,thai:"ผัด",roman:"pad",hebrew:"מוקפץ",english:"stir-fried",tone:'low',source:"תומר 2,csv.txt"},
  {id:"uv19_0062",level:1,thai:"ขอ",roman:"koh",hebrew:"אפשר לקבל...",english:"request / may I have",tone:'rising',source:"תומר 2,csv.txt"},
  {id:"uv19_0063",level:5,thai:"เรียกว่าอะไร",roman:"riag waa a-rai",hebrew:"איך קוראים ל...?",english:"What is it called?",tone:'falling-mid-mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0064",level:5,thai:"คุณล่ะ",roman:"kun la",hebrew:"ואתה/ואת?",english:"and you?",tone:'mid-low',source:"תומר 2,csv.txt"},
  {id:"uv19_0065",level:3,thai:"เช่นกัน",roman:"chen-gan",hebrew:"אותו הדבר / גם אני",english:"same / likewise",tone:'falling-mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0066",level:3,thai:"ยินดี",roman:"yin-dii",hebrew:"ברוך הבא",english:"welcome / pleased",tone:'mid-mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0067",level:1,thai:"รู้",roman:"ruu",hebrew:"לדעת (מידע)",english:"know",tone:'high',source:"תומר 2,csv.txt"},
  {id:"uv19_0068",level:3,thai:"รู้จัก",roman:"ruu-jag",hebrew:"להכיר (אנשים/מקומות)",english:"know / be acquainted with",tone:'high-low',source:"תומר 2,csv.txt"},
  {id:"uv19_0069",level:5,thai:"รู้ไหม",roman:"ruu mai?",hebrew:"אתה יודע?",english:"Do you know?",tone:'high-rising',source:"תומר 2,csv.txt"},
  {id:"uv19_0070",level:3,thai:"ไม่รู้",roman:"mai ruu",hebrew:"לא יודע",english:"do not know",tone:'falling-high',source:"תומר 2,csv.txt"},
  {id:"uv19_0071",level:4,thai:"ยังไม่รู้",roman:"yang mai ruu",hebrew:"עדיין לא יודע",english:"do not know yet",tone:'mid-falling-high',source:"תומר 2,csv.txt"},
  {id:"uv19_0072",level:3,thai:"นาที",roman:"naa-tii",hebrew:"דקה",english:"minute",tone:'mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0073",level:1,thai:"หาด",roman:"haad",hebrew:"חוף",english:"beach",tone:'low',source:"תומר 2,csv.txt"},
  {id:"uv19_0074",level:1,thai:"ได้",roman:"dai",hebrew:"יכול",english:"can / able",tone:'falling',source:"תומר 2,csv.txt"},
  {id:"uv19_0075",level:1,thai:"พูด",roman:"puud",hebrew:"לדבר",english:"speak",tone:'falling',source:"תומר 2,csv.txt"},
  {id:"uv19_0076",level:5,thai:"พูดไทยได้ไหม",roman:"puud Thai dai mai?",hebrew:"אתה יכול לדבר תאילנדית?",english:"Can you speak Thai?",tone:'falling-mid-falling-rising',source:"תומר 2,csv.txt"},
  {id:"uv19_0077",level:1,thai:"พริก",roman:"prik",hebrew:"צ'ילי",english:"chili",tone:'high',source:"תומר 2,csv.txt"},
  {id:"uv19_0078",level:3,thai:"ไม่ใส่",roman:"mai sai",hebrew:"בלי / לא לשים",english:"without / do not put",tone:'falling-low',source:"תומר 2,csv.txt"},
  {id:"uv19_0079",level:3,thai:"น้ำตาล",roman:"nam dtaan",hebrew:"סוכר",english:"sugar",tone:'high-mid',source:"תומר 2,csv.txt"},
  {id:"uv19_0080",level:1,thai:"เพิ่ม",roman:"peum",hebrew:"להוסיף",english:"add / increase",tone:'falling',source:"תומר 2,csv.txt"},
  {id:"uv19_0081",level:3,thai:"ที่นี่",roman:"tii-nii",hebrew:"פה",english:"here",tone:'falling-falling',source:"תומר 3,csv.txt"},
  {id:"uv19_0082",level:3,thai:"ภาษา",roman:"paa-saa",hebrew:"שפה",english:"language",tone:'mid-rising',source:"תומר 3,csv.txt"},
  {id:"uv19_0083",level:3,thai:"ประเทศ",roman:"bpra-ted",hebrew:"מדינה",english:"country",tone:'low-falling',source:"תומר 3,csv.txt"},
  {id:"uv19_0084",level:3,thai:"ทุกคน",roman:"tuk-kon",hebrew:"כולם",english:"everyone",tone:'high-mid',source:"תומר 3,csv.txt"},
  {id:"uv19_0085",level:3,thai:"อย่ารอ",roman:"yaa ror",hebrew:"אל תחכה",english:"do not wait",tone:'low-mid',source:"תומר 3,csv.txt"},
  {id:"uv19_0086",level:5,thai:"พอไหม",roman:"phaw mai?",hebrew:"זה מספיק?",english:"Is it enough?",tone:'mid-rising',source:"תומר 3,csv.txt"},
  {id:"uv19_0087",level:5,thai:"ไปไหน",roman:"bpai nai?",hebrew:"לאן אתה הולך?",english:"Where are you going?",tone:'mid-rising',source:"תומר 3,csv.txt"},
  {id:"uv19_0088",level:3,thai:"ทบทวน",roman:"tobp-tuan",hebrew:"לחזור (על חומר)",english:"review",tone:'high-mid',source:"תומר 3,csv.txt"},
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
  {id:"uv19_0114",level:1,thai:"หม้อ",roman:"maw",hebrew:"סיר",english:"pot",tone:'falling',source:"תומר 3,csv.txt"},
  {id:"uv19_0115",level:1,thai:"หมอ",roman:"maws",hebrew:"רופא",english:"doctor",tone:'rising',source:"תומר 3,csv.txt"},
  {id:"uv19_0116",level:1,thai:"บวก",roman:"buag",hebrew:"פלוס",english:"plus",tone:'low',source:"תומר 3,csv.txt"},
  {id:"uv19_0117",level:1,thai:"ลบ",roman:"löb",hebrew:"מינוס",english:"minus",tone:'high',source:"תומר 3,csv.txt"},
  {id:"uv19_0118",level:3,thai:"เท่ากับ",roman:"ta-gab",hebrew:"שווה",english:"equals",tone:'falling-low',source:"תומר 3,csv.txt"},
  {id:"uv19_0119",level:3,thai:"เท่า",roman:"tao",hebrew:"שווה / באותה מידה",english:"equal / as much as",tone:'falling',source:"תומר 3,csv.txt"},
  {id:"uv19_0120",level:3,thai:"เท่าไร",roman:"tao-rai",hebrew:"כמה (מחיר)",english:"how much?",tone:'falling-mid',source:"תומר 3,csv.txt"},
  {id:"uv19_0121",level:4,thai:"แล้วแต่คุณ",roman:"laew-dtae kun",hebrew:"תלוי בך",english:"up to you",tone:'high-low-mid',source:"תומר4,csv.txt"},
  {id:"uv19_0122",level:5,thai:"กี่โมง",roman:"gii mong?",hebrew:"איזו שעה?",english:"what time?",tone:'low-mid',source:"תומר4,csv.txt"},
  {id:"uv19_0123",level:3,thai:"ตอนนี้",roman:"dtawn-nii",hebrew:"עכשיו",english:"now",tone:'mid-high',source:"תומר4,csv.txt"},
  {id:"uv19_0124",level:3,thai:"วันนี้",roman:"wan-nii",hebrew:"היום",english:"today",tone:'mid-high',source:"תומר4,csv.txt"},
  {id:"uv19_0125",level:3,thai:"พรุ่งนี้",roman:"phrung-nii",hebrew:"מחר",english:"tomorrow",tone:'falling-high',source:"תומר4,csv.txt"},
  {id:"uv19_0126",level:3,thai:"เมื่อวาน",roman:"meua-wan",hebrew:"אתמול",english:"yesterday",tone:'falling-mid',source:"תומר4,csv.txt"},
  {id:"uv19_0127",level:3,thai:"ตอนเช้า",roman:"dtawn-chao",hebrew:"בוקר",english:"morning",tone:'mid-high',source:"תומר4,csv.txt"},
  {id:"uv19_0128",level:3,thai:"ตอนเที่ยง",roman:"dtawn-tiang",hebrew:"צהריים",english:"noon",tone:'mid-falling',source:"תומר4,csv.txt"},
  {id:"uv19_0129",level:3,thai:"ตอนเย็น",roman:"dtawn-yen",hebrew:"ערב",english:"evening",tone:'mid-mid',source:"תומר4,csv.txt"},
  {id:"uv19_0130",level:4,thai:"ตอนกลางคืน",roman:"dtawn-klang-keun",hebrew:"לילה",english:"night",tone:'mid-mid-mid',source:"תומר4,csv.txt"},
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
  {id:"uv19_0160",level:1,thai:"เหงื่อ",roman:"ngeua",hebrew:"זיעה",english:"sweat",tone:'low',source:"תומר 5,csv.txt"},
  {id:"uv19_0161",level:3,thai:"เหงื่อออก",roman:"ngeua-awk",hebrew:"להזיע",english:"sweat / perspire",tone:'low-low',source:"תומר 5,csv.txt"},
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
  {id:"uv19_0178",level:3,thai:"เจอกัน",roman:"jer-gan",hebrew:"נתראה",english:"see you",tone:'mid-mid',source:"תומר 5,csv.txt"},
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
  {id:"uv19_0196",level:3,thai:"เพราะว่า",roman:"phro-waa",hebrew:"בגלל ש...",english:"because",tone:'high-falling',source:"תומר 5,csv.txt"},
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
  {id:"uv19_0213",level:4,thai:"สับปะรด",roman:"sup-pa-rot",hebrew:"אננס",english:"pineapple",tone:'low-low-high',source:"תומר 6,csv.txt"},
  {id:"uv19_0215",level:3,thai:"น้ำแข็ง",roman:"nam-kaeng",hebrew:"קרח",english:"ice",tone:'high-rising',source:"תומר 6,csv.txt"},
  {id:"uv19_0216",level:3,thai:"น้ำส้ม",roman:"nam-som",hebrew:"מיץ תפוזים",english:"orange juice",tone:'high-falling',source:"תומר 6,csv.txt"},
  {id:"uv19_0217",level:3,thai:"กาแฟ",roman:"ga-fe",hebrew:"קפה",english:"coffee",tone:'mid-mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0218",level:1,thai:"นม",roman:"nom",hebrew:"חלב",english:"milk",tone:'mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0219",level:1,thai:"เบียร์",roman:"beer",hebrew:"בירה",english:"beer",tone:'mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0220",level:1,thai:"เหล้า",roman:"lao",hebrew:"אלכוהול / וויסקי",english:"alcohol / whiskey",tone:'falling',source:"תומר 6,csv.txt"},
  {id:"uv19_0221",level:1,thai:"กับ",roman:"gap",hebrew:"עם",english:"with",tone:'low',source:"תומר 6,csv.txt"},
  {id:"uv19_0222",level:1,thai:"เอา",roman:"ao",hebrew:"רוצה / לקחת",english:"want / take",tone:'mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0223",level:3,thai:"ไม่เอา",roman:"mai ao",hebrew:"לא רוצה",english:"do not want",tone:'falling-mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0224",level:4,thai:"เอาอันนี้",roman:"ao-an-nii",hebrew:"רוצה את זה",english:"want this one",tone:'mid-mid-high',source:"תומר 6,csv.txt"},
  {id:"uv19_0225",level:1,thai:"เรือ",roman:"reua",hebrew:"סירה",english:"boat",tone:'mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0226",level:3,thai:"เรือบิน",roman:"reua-bin",hebrew:"מטוס",english:"airplane",tone:'mid-mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0227",level:1,thai:"รถ",roman:"rot",hebrew:"מכונית",english:"car / vehicle",tone:'high',source:"תומר 6,csv.txt"},
  {id:"uv19_0228",level:3,thai:"รถเมล์",roman:"rot-mae",hebrew:"אוטובוס",english:"bus",tone:'high-mid',source:"תומר 6,csv.txt"},
  {id:"uv19_0229",level:3,thai:"รถไฟ",roman:"rot-fai",hebrew:"רכבת",english:"train",tone:'high-mid',source:"תומר 6,csv.txt"},
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
  {id:"uv19_0242",level:1,thai:"เล็ก",roman:"lek",hebrew:"קטן",english:"small",tone:'high',source:"תומר 7,csv.txt"},
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
  {id:"uv19_0276",level:3,thai:"ร้องไห้",roman:"rong-hai",hebrew:"לבכות",english:"cry",tone:'high-falling',source:"תומר 8,csv.txt"},
  {id:"uv19_0277",level:3,thai:"อิจฉา",roman:"it-chaa",hebrew:"לקנא",english:"envy / jealous",tone:'low-rising',source:"תומר 8,csv.txt"},
  {id:"uv19_0278",level:3,thai:"โมโห",roman:"mo-ho",hebrew:"עצבני",english:"angry / annoyed",tone:'mid-rising',source:"תומר 8,csv.txt"},
  {id:"uv19_0279",level:3,thai:"รำคาญ",roman:"ram-kaan",hebrew:"מעצבן",english:"annoyed / annoying",tone:'mid-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0280",level:1,thai:"หวัง",roman:"wang",hebrew:"לקוות",english:"hope",tone:'rising',source:"תומר 8,csv.txt"},
  {id:"uv19_0281",level:3,thai:"มั่นใจ",roman:"man-jai",hebrew:"בטוח",english:"confident",tone:'falling-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0282",level:4,thai:"น่าสงสาร",roman:"naa-song-saan",hebrew:"מסכן",english:"pitiful / poor thing",tone:'falling-rising-rising',source:"תומר 8,csv.txt"},
  {id:"uv19_0283",level:3,thai:"ภูมิใจ",roman:"pum-jai",hebrew:"גאה",english:"proud",tone:'mid-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0284",level:3,thai:"เสียดาย",roman:"sia-daai",hebrew:"חבל / בזבוז",english:"what a pity / waste",tone:'rising-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0285",level:3,thai:"ตื่นเต้น",roman:"dteun-dten",hebrew:"מתרגש",english:"excited",tone:'low-falling',source:"תומר 8,csv.txt"},
  {id:"uv19_0286",level:1,thai:"ง่วง",roman:"nguang",hebrew:"ישנוני",english:"sleepy",tone:'falling',source:"תומר 8,csv.txt"},
  {id:"uv19_0287",level:3,thai:"ตกใจ",roman:"dtok-jai",hebrew:"מבוהל",english:"shocked / startled",tone:'low-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0288",level:1,thai:"รวม",roman:"ruam",hebrew:"ביחד",english:"together / include",tone:'mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0289",level:3,thai:"ชื่อจริง",roman:"cheuu-jing",hebrew:"שם אמיתי",english:"real name",tone:'falling-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0290",level:3,thai:"ชื่อเล่น",roman:"cheuu-len",hebrew:"כינוי",english:"nickname",tone:'falling-falling',source:"תומר 8,csv.txt"},
  {id:"uv19_0291",level:4,thai:"นามสกุล",roman:"naam-sa-kun",hebrew:"שם משפחה",english:"surname",tone:'mid-low-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0292",level:1,thai:"คือ",roman:"keuu",hebrew:"זה / הוא (הגדרה)",english:"is / means",tone:'mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0293",level:1,thai:"เบื่อ",roman:"beaua",hebrew:"משעמם",english:"bored",tone:'low',source:"תומר 8,csv.txt"},
  {id:"uv19_0294",level:3,thai:"สมอง",roman:"sa-mawng",hebrew:"מוח",english:"brain",tone:'low-rising',source:"תומר 8,csv.txt"},
  {id:"uv19_0295",level:4,thai:"สมองไม่ทำงาน",roman:"sa-mawng mai tam-ngaan",hebrew:"המוח לא עובד",english:"brain not working",tone:'low-rising-falling-mid-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0296",level:1,thai:"บน",roman:"bon",hebrew:"על (מעל)",english:"on / above",tone:'mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0297",level:3,thai:"ต่อไป",roman:"dtor-bpai",hebrew:"הבא",english:"next",tone:'low-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0298",level:1,thai:"เห็น",roman:"hen",hebrew:"רואה",english:"see",tone:'rising',source:"תומר 8,csv.txt"},
  {id:"uv19_0299",level:3,thai:"หน้าต่าง",roman:"naa-dtang",hebrew:"חלון",english:"window",tone:'falling-low',source:"תומר 8,csv.txt"},
  {id:"uv19_0300",level:1,thai:"ห้อง",roman:"hawng",hebrew:"חדר",english:"room",tone:'falling',source:"תומר 8,csv.txt"},
  {id:"uv19_0301",level:3,thai:"พ่อแม่",roman:"poh-mae",hebrew:"הורים",english:"parents",tone:'falling-falling',source:"תומר 8,csv.txt"},
  {id:"uv19_0302",level:3,thai:"กับข้าว",roman:"kap-kaao",hebrew:"אוכל (שאוכלים עם אורז)",english:"food eaten with rice",tone:'low-falling',source:"תומר 8,csv.txt"},
  {id:"uv19_0303",level:3,thai:"นักเรียน",roman:"nag-rian",hebrew:"סטודנט / תלמיד",english:"student",tone:'high-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0304",level:4,thai:"ร้านอาหาร",roman:"raan-aa-haan",hebrew:"מסעדה",english:"restaurant",tone:'falling-mid-rising',source:"תומר 8,csv.txt"},
  {id:"uv19_0305",level:3,thai:"เจ้าของ",roman:"jao-kawng",hebrew:"הבעלים",english:"owner",tone:'falling-rising',source:"תומר 8,csv.txt"},
  {id:"uv19_0306",level:1,thai:"แม่",roman:"mae",hebrew:"אמא",english:"mother",tone:'falling',source:"תומר 8,csv.txt"},
  {id:"uv19_0307",level:3,thai:"ผู้หญิง",roman:"puu-ying",hebrew:"אישה / נקבה",english:"woman / female",tone:'falling-rising',source:"תומר 8,csv.txt"},
  {id:"uv19_0308",level:3,thai:"ผู้ชาย",roman:"puu-chaai",hebrew:"גבר / זכר",english:"man / male",tone:'falling-mid',source:"תומר 8,csv.txt"},
  {id:"uv19_0309",level:4,thai:"ในหลวง",roman:"nai-lu-ang",hebrew:"המלך",english:"king",tone:'mid-rising',source:"תומר 8,csv.txt"},
  {id:"uv19_0310",level:4,thai:"พระเจ้าอยู่หัว",roman:"pra-jao-yuu-hua",hebrew:"המלך (תואר רשמי)",english:"king (formal title)",tone:'high-falling-low-rising',source:"תומר 8,csv.txt"},
  {id:"uv19_0311",level:3,thai:"หมู่",roman:"muu",hebrew:"קבוצה / כפר / חבורה",english:"group / village / category",tone:'low',source:"תומר 8,csv.txt"},
  {id:"uv19_0312",level:3,thai:"ชาวเผ่า",roman:"chaao-pao",hebrew:"אנשי שבט",english:"tribal people",tone:'mid-low',source:"תומר 8,csv.txt"},
  {id:"uv19_0314",level:3,thai:"ภูเขา",roman:"puu-kao",hebrew:"הר",english:"mountain",tone:'mid-rising',source:"תומר 8,csv.txt"},
  {id:"uv19_0315",level:1,thai:"ผ้า",roman:"paa",hebrew:"בד / בגד",english:"cloth / fabric / clothing",tone:'falling',source:"תומר 8,csv.txt"},
  {id:"uv19_0316",level:3,thai:"ตลาดนัด",roman:"dtalard-nat",hebrew:"שוק",english:"market",tone:'low-high',source:"תומר 8,csv.txt"},
  {id:"uv19_0317",level:2,thai:"อีก",roman:"iig()",hebrew:"שוב (Again)",english:"again / more",tone:'low',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0318",level:3,thai:"พักผ่อน",roman:"pag-pawn(-)",hebrew:"לנוח",english:"rest",tone:'high-low',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0319",level:3,thai:"ไปเที่ยว",roman:"bpai-tiao(-)",hebrew:"לטייל / להסתובב בכיף",english:"go out / travel for fun",tone:'mid-falling',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0320",level:2,thai:"เสร็จ",roman:"sed()",hebrew:"סיים / נגמר",english:"finish / done",tone:'low',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0321",level:2,thai:"หมด",roman:"mod()",hebrew:"הכל נגמר / אזל",english:"finished / used up",tone:'low',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0322",level:2,thai:"ตื่น",roman:"dteun",hebrew:"להתעורר",english:"wake up",tone:'low',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0323",level:2,thai:"หลง",roman:"long()",hebrew:"ללכת לאיבוד",english:"lost",tone:'rising',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0324",level:4,thai:"ความอดทน",roman:"kwaam-od-ton(--)",hebrew:"סבלנות",english:"patience",tone:'mid-low-mid',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0325",level:2,thai:"ปลา",roman:"bplaa()",hebrew:"דג",english:"fish",tone:'mid',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0326",level:2,thai:"กุ้ง",roman:"gung()",hebrew:"שרימפס",english:"shrimp",tone:'falling',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0327",level:2,thai:"หอย",roman:"hoi()",hebrew:"צדפה",english:"shellfish",tone:'rising',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0328",level:3,thai:"ปลาหมึก",roman:"bpla-meuk",hebrew:"דיונון",english:"squid",tone:'mid-low',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0329",level:4,thai:"อาหารทะเล",roman:"aa-haan-ta-lay(()---)",hebrew:"פירות ים",english:"seafood",tone:'mid-rising-high-mid',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0330",level:3,thai:"เมื่อไร",roman:"meua-rai(-)",hebrew:"מתי",english:"when?",tone:'falling-mid',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0331",level:5,thai:"ยังไง",roman:"yang-ngai",hebrew:"איך?",english:"how?",tone:'mid-mid',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0332",level:2,thai:"ใคร",roman:"khrai()",hebrew:"מי (או מי זה)",english:"who",tone:'mid',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0333",level:3,thai:"วันเกิด",roman:"wan-geut(-)",hebrew:"יום הולדת",english:"birthday",tone:'mid-low',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0334",level:2,thai:"เคย",roman:"koey()",hebrew:"אי פעם",english:"ever",tone:'mid',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0335",level:4,thai:"สมาชิก",roman:"sa-ma-chik(--)",hebrew:"חבר (במועדון / קבוצה)",english:"member",tone:'low-mid-high',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0336",level:2,thai:"เด็ก",roman:"dek()",hebrew:"ילד",english:"child",tone:'low',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0337",level:3,thai:"น้ำมัน",roman:"nam-man(-)",hebrew:"שמן / דלק",english:"oil / fuel",tone:'high-mid',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0338",level:4,thai:"ปั๊มน้ำมัน",roman:"bpum-nam-man(--)",hebrew:"תחנת דלק",english:"gas station",tone:'high-high-mid',source:"אלמוג 1,CSV.txt"},
  {id:"uv19_0339",level:2,thai:"กัน",roman:"gan()",hebrew:"אחד את השני / ביחד",english:"each other / together",tone:'mid',source:"אלמוג 1,CSV.txt"},
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
  {id:"uv19_0361",level:4,thai:"ไม่มีทาง",roman:"mai mee taang",hebrew:"אין מצב / אין סיכוי",english:"no way",tone:'falling-mid-mid',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0362",level:5,thai:"ว่าไง",roman:"waa ngai",hebrew:"מה קורה? / מה נשמע?",english:"what’s up?",tone:'falling-mid',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0363",level:4,thai:"ไม่เก็ทอะ",roman:"mai get a",hebrew:"אני לא מבין / לא קולט",english:"I do not get it",tone:'falling-low-low',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0364",level:5,thai:"แล้วไง",roman:"laew ngai",hebrew:"אז מה?",english:"so what?",tone:'high-mid',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0365",level:3,thai:"คิดว่า",roman:"khit waa",hebrew:"לחשוב ש...",english:"think that",tone:'high-falling',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0366",level:3,thai:"พูดว่า",roman:"phuut waa",hebrew:"לומר ש...",english:"say that...",tone:'falling-falling',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0367",level:3,thai:"บอกว่า",roman:"bok waa",hebrew:"לספר / להגיד ש...",english:"tell / say that",tone:'low-falling',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0368",level:4,thai:"รู้สึกว่า",roman:"ruu seuk waa",hebrew:"להרגיש ש...",english:"feel that",tone:'high-low-falling',source:"אלמוג 5(2).apkg"},
  {id:"uv19_0369",level:3,thai:"เพราะว่า",roman:"phroh waa",hebrew:"בגלל ש...",english:"because",tone:'high-falling',source:"אלמוג 5(2).apkg"},
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
  {id:"uv19_0385",level:5,thai:"ดีใจที่ได้เจอ",roman:"dii-jai tii dai jer",hebrew:"נחמד לראותך",english:"nice to see you",tone:'mid-mid-falling-falling-mid',source:"אלמוג 4(1).apkg"},
  {id:"uv19_0386",level:1,thai:"ผึ้ง",roman:"phueng",hebrew:"דבורה",english:"bee",tone:'falling',source:"אלמוג 4(1).apkg"},
  {id:"uv19_0387",level:3,thai:"ต่อย",roman:"dtoy",hebrew:"אגרוף / לעקוץ",english:"to punch / to sting",tone:'low',source:"אלמוג 4(1).apkg"},

  {id:"nw_0001",level:1,cefr:'A1',thai:"ลูก",roman:"luuk",hebrew:"ילד/בן",english:"child",tone:'falling',source:"curriculum-2026-07"},
  {id:"nw_0002",level:1,cefr:'A1',thai:"น้อง",roman:"nong",hebrew:"אח/אחות צעירים",english:"younger sibling",tone:'high',source:"curriculum-2026-07"},
  {id:"nw_0003",level:1,cefr:'A1',thai:"เช้า",roman:"chao",hebrew:"בוקר",english:"morning",tone:'high',source:"curriculum-2026-07"},
  {id:"nw_0004",level:2,cefr:'A2',thai:"คืน",roman:"kheun",hebrew:"לילה",english:"night",tone:'mid',source:"curriculum-2026-07"},
  {id:"nw_0005",level:2,cefr:'A2',thai:"ชั่วโมง",roman:"chua-mong",hebrew:"שעה",english:"hour",tone:'falling-mid',source:"curriculum-2026-07"},
  {id:"nw_0006",level:1,cefr:'A1',thai:"อาหาร",roman:"aahaan",hebrew:"אוכל",english:"food",tone:'mid-rising',source:"curriculum-2026-07"},
  {id:"nw_0007",level:2,cefr:'A2',thai:"อยาก",roman:"yaak",hebrew:"לרצות",english:"to want",tone:'low',source:"curriculum-2026-07"},
  {id:"nw_0008",level:2,cefr:'A2',thai:"ถูก",roman:"thuuk",hebrew:"זול/נכון",english:"cheap/correct",tone:'low',source:"curriculum-2026-07"},
  {id:"nw_0009",level:1,cefr:'A1',thai:"สี",roman:"sii",hebrew:"צבע",english:"color",tone:'rising',source:"curriculum-2026-07"},
  {id:"nw_0010",level:1,cefr:'A1',thai:"แดง",roman:"daeng",hebrew:"אדום",english:"red",tone:'mid',source:"curriculum-2026-07"},
  {id:"nw_0011",level:1,cefr:'A1',thai:"ขาว",roman:"khaao",hebrew:"לבן",english:"white",tone:'rising',source:"curriculum-2026-07"},
  {id:"nw_0012",level:1,cefr:'A1',thai:"ดำ",roman:"dam",hebrew:"שחור",english:"black",tone:'mid',source:"curriculum-2026-07"},
  {id:"nw_0013",level:1,cefr:'A1',thai:"หัว",roman:"hua",hebrew:"ראש",english:"head",tone:'rising',source:"curriculum-2026-07"},
  {id:"nw_0014",level:1,cefr:'A1',thai:"ตลาด",roman:"dtalaat",hebrew:"שוק",english:"market",tone:'low-low',source:"curriculum-2026-07"},
  {id:"nw_0015",level:1,cefr:'A1',thai:"ครับ",roman:"khrap",hebrew:"מילת נימוס (גבר)",english:"polite particle (male)",tone:'high',source:"curriculum-2026-07"},
  {id:"nw_0016",level:1,cefr:'A1',thai:"ค่ะ",roman:"kha",hebrew:"מילת נימוס (אישה)",english:"polite particle (female)",tone:'falling',source:"curriculum-2026-07"},
  {id:"nw_0017",level:1,cefr:'A1',thai:"ใช่",roman:"chai",hebrew:"כן",english:"yes/correct",tone:'falling',source:"curriculum-2026-07"},
  {id:"nw_0018",level:6,cefr:'B2',thai:"อย่างไรก็ตาม",roman:"yaang-rai-gor-dtaam",hebrew:"אולם, עם זאת",english:"however, nevertheless",tone:'low-mid-falling-mid',source:"curriculum-2026-07"},
  {id:"nw_0019",level:4,cefr:'B1',thai:"เพราะฉะนั้น",roman:"phror-cha-nan",hebrew:"לכן, משום כך",english:"therefore",tone:'high-low-high',source:"curriculum-2026-07"},
  {id:"nw_0020",level:6,cefr:'B2',thai:"ถึงแม้ว่า",roman:"theung-mae-waa",hebrew:"למרות ש-, אף על פי ש-",english:"even though, although",tone:'rising-high-falling',source:"curriculum-2026-07"},
  {id:"nw_0021",level:4,cefr:'B1',thai:"ดังนั้น",roman:"dang-nan",hebrew:"לפיכך, אם כך",english:"therefore, thus",tone:'mid-high',source:"curriculum-2026-07"},
  {id:"nw_0022",level:6,cefr:'B2',thai:"นอกจากนี้",roman:"nork-jaak-nee",hebrew:"בנוסף לכך, מלבד זאת",english:"furthermore, in addition",tone:'falling-low-high',source:"curriculum-2026-07"},
  {id:"nw_0023",level:6,cefr:'B2',thai:"เนื่องจาก",roman:"neuang-jaak",hebrew:"מכיוון ש-, עקב",english:"due to, since",tone:'falling-low',source:"curriculum-2026-07"},
  {id:"nw_0024",level:6,cefr:'B2',thai:"ในขณะที่",roman:"nai-kha-na-thee",hebrew:"בעוד ש-, בזמן ש-",english:"while, whereas",tone:'mid-low-high-falling',source:"curriculum-2026-07"},
  {id:"nw_0025",level:4,cefr:'B1',thai:"ความรู้สึก",roman:"khwaam-ruu-seuk",hebrew:"הרגשה, תחושה",english:"feeling",tone:'mid-high-low',source:"curriculum-2026-07"},
  {id:"nw_0026",level:4,cefr:'B1',thai:"ผิดหวัง",roman:"phit-wang",hebrew:"מאוכזב",english:"disappointed",tone:'low-rising',source:"curriculum-2026-07"},
  {id:"nw_0027",level:3,cefr:'B1',thai:"กังวล",roman:"gang-won",hebrew:"מודאג, חרד",english:"worried, anxious",tone:'mid-mid',source:"curriculum-2026-07"},
  {id:"nw_0028",level:4,cefr:'B1',thai:"เครียด",roman:"khriat",hebrew:"לחוץ, במתח",english:"stressed",tone:'falling',source:"curriculum-2026-07"},
  {id:"nw_0029",level:6,cefr:'B2',thai:"ประทับใจ",roman:"bpra-thap-jai",hebrew:"מתרשם, מוקסם",english:"impressed",tone:'low-high-mid',source:"curriculum-2026-07"},
  {id:"nw_0030",level:4,cefr:'B1',thai:"ความคิดเห็น",roman:"khwaam-khit-hen",hebrew:"דעה",english:"opinion",tone:'mid-high-rising',source:"curriculum-2026-07"},
  {id:"nw_0031",level:3,cefr:'B1',thai:"สงสัย",roman:"song-sai",hebrew:"לתהות, לחשוד",english:"to wonder, to suspect",tone:'rising-rising',source:"curriculum-2026-07"},
  {id:"nw_0032",level:3,cefr:'B1',thai:"แน่ใจ",roman:"nae-jai",hebrew:"בטוח, משוכנע",english:"sure, certain",tone:'falling-mid',source:"curriculum-2026-07"},
  {id:"nw_0033",level:4,cefr:'B1',thai:"ตัดสินใจ",roman:"dtat-sin-jai",hebrew:"להחליט",english:"to decide",tone:'low-rising-mid',source:"curriculum-2026-07"},
  {id:"nw_0034",level:5,cefr:'B2',thai:"ยอมรับ",roman:"yorm-rap",hebrew:"לקבל, להודות ב-",english:"to accept, to admit",tone:'mid-high',source:"curriculum-2026-07"},
  {id:"nw_0035",level:4,cefr:'B1',thai:"ประสบการณ์",roman:"bpra-sop-gaan",hebrew:"ניסיון",english:"experience",tone:'low-low-mid',source:"curriculum-2026-07"},
  {id:"nw_0036",level:6,cefr:'B2',thai:"ความสามารถ",roman:"khwaam-saa-maat",hebrew:"יכולת, כישרון",english:"ability, capability",tone:'mid-rising-falling',source:"curriculum-2026-07"},
  {id:"nw_0037",level:4,cefr:'B1',thai:"เงินเดือน",roman:"ngern-deuan",hebrew:"משכורת",english:"salary",tone:'mid-mid',source:"curriculum-2026-07"},
  {id:"nw_0038",level:4,cefr:'B1',thai:"ประชุม",roman:"bpra-chum",hebrew:"ישיבה, להתכנס",english:"meeting, to meet",tone:'low-mid',source:"curriculum-2026-07"},
  {id:"nw_0039",level:6,cefr:'B2',thai:"โครงการ",roman:"khroong-gaan",hebrew:"פרויקט, תוכנית",english:"project, program",tone:'mid-mid',source:"curriculum-2026-07"},
  {id:"nw_0040",level:3,cefr:'B1',thai:"สมัคร",roman:"sa-mak",hebrew:"להירשם, להגיש מועמדות",english:"to apply, to sign up",tone:'low-low',source:"curriculum-2026-07"},
  {id:"nw_0041",level:6,cefr:'B2',thai:"สัมภาษณ์",roman:"sam-phaat",hebrew:"ראיון, לראיין",english:"interview, to interview",tone:'rising-falling',source:"curriculum-2026-07"},
  {id:"nw_0042",level:5,cefr:'B2',thai:"ลาออก",roman:"laa-ork",hebrew:"להתפטר",english:"to resign, to quit",tone:'mid-low',source:"curriculum-2026-07"},
  {id:"nw_0043",level:3,cefr:'B1',thai:"ฝึก",roman:"feuk",hebrew:"להתאמן, לתרגל",english:"to practice, to train",tone:'low',source:"curriculum-2026-07"},
  {id:"nw_0044",level:4,cefr:'B1',thai:"เส้นทาง",roman:"sen-thaang",hebrew:"מסלול, נתיב",english:"route, path",tone:'falling-mid',source:"curriculum-2026-07"},
  {id:"nw_0045",level:4,cefr:'B1',thai:"แผนที่",roman:"phaen-thee",hebrew:"מפה",english:"map",tone:'rising-falling',source:"curriculum-2026-07"},
  {id:"nw_0046",level:3,cefr:'B1',thai:"จอง",roman:"jorng",hebrew:"להזמין מראש",english:"to book, to reserve",tone:'mid',source:"curriculum-2026-07"},
  {id:"nw_0047",level:4,cefr:'B1',thai:"ยกเลิก",roman:"yok-lerk",hebrew:"לבטל",english:"to cancel",tone:'high-falling',source:"curriculum-2026-07"},
  {id:"nw_0048",level:4,cefr:'B1',thai:"ต่างประเทศ",roman:"dtaang-bpra-theet",hebrew:"חוץ לארץ",english:"abroad, foreign country",tone:'low-low-falling',source:"curriculum-2026-07"},
  {id:"nw_0049",level:4,cefr:'B1',thai:"เที่ยวบิน",roman:"thiao-bin",hebrew:"טיסה",english:"flight",tone:'falling-mid',source:"curriculum-2026-07"},
  {id:"nw_0050",level:4,cefr:'B1',thai:"สุขภาพ",roman:"suk-kha-phaap",hebrew:"בריאות",english:"health",tone:'low-low-falling',source:"curriculum-2026-07"},
  {id:"nw_0051",level:3,cefr:'B1',thai:"อาการ",roman:"aa-gaan",hebrew:"תסמין, מצב רפואי",english:"symptom, condition",tone:'mid-mid',source:"curriculum-2026-07"},
  {id:"nw_0052",level:3,cefr:'B1',thai:"รักษา",roman:"rak-saa",hebrew:"לרפא, לטפל",english:"to treat, to cure",tone:'high-rising',source:"curriculum-2026-07"},
  {id:"nw_0053",level:5,cefr:'B2',thai:"ผ่าตัด",roman:"phaa-dtat",hebrew:"ניתוח, לנתח",english:"surgery, to operate",tone:'low-low',source:"curriculum-2026-07"},
  {id:"nw_0054",level:4,cefr:'B1',thai:"ออกกำลังกาย",roman:"ork-gam-lang-gaai",hebrew:"להתעמל",english:"to exercise",tone:'low-mid-mid-mid',source:"curriculum-2026-07"},
  {id:"nw_0055",level:4,cefr:'B1',thai:"แข็งแรง",roman:"khaeng-raeng",hebrew:"חזק, בריא",english:"strong, healthy",tone:'rising-mid',source:"curriculum-2026-07"},
  {id:"nw_0056",level:6,cefr:'B2',thai:"เศรษฐกิจ",roman:"seet-tha-git",hebrew:"כלכלה",english:"economy",tone:'low-low-low',source:"curriculum-2026-07"},
  {id:"nw_0057",level:5,cefr:'B2',thai:"สาเหตุ",roman:"saa-heet",hebrew:"גורם, סיבה",english:"cause",tone:'rising-low',source:"curriculum-2026-07"},
  {id:"nw_0058",level:6,cefr:'B2',thai:"ผลกระทบ",roman:"phon-gra-thop",hebrew:"השפעה, השלכה",english:"impact, effect",tone:'rising-low-high',source:"curriculum-2026-07"},
  {id:"nw_0059",level:4,cefr:'B1',thai:"ข้อมูล",roman:"khor-muun",hebrew:"מידע, נתונים",english:"information, data",tone:'falling-mid',source:"curriculum-2026-07"},
  {id:"nw_0060",level:4,cefr:'B1',thai:"เป้าหมาย",roman:"bpao-maai",hebrew:"מטרה, יעד",english:"goal, target",tone:'falling-rising',source:"curriculum-2026-07"},
  {id:"nw_0061",level:6,cefr:'B2',thai:"ความสำเร็จ",roman:"khwaam-sam-ret",hebrew:"הצלחה",english:"success",tone:'mid-rising-low',source:"curriculum-2026-07"},
  {id:"nw_0062",level:6,cefr:'B2',thai:"ปรับตัว",roman:"bprap-dtua",hebrew:"להסתגל",english:"to adapt",tone:'low-mid',source:"curriculum-2026-07"},
  {id:"nw_0063",level:5,cefr:'B2',thai:"แก้ไข",roman:"gae-khai",hebrew:"לתקן",english:"to fix, to correct",tone:'falling-rising',source:"curriculum-2026-07"},
  {id:"nw_0064",level:4,cefr:'B1',thai:"อธิบาย",roman:"a-thi-baai",hebrew:"להסביר",english:"to explain",tone:'low-high-mid',source:"curriculum-2026-07"},
  {id:"nw_0065",level:3,cefr:'B1',thai:"แนะนำ",roman:"nae-nam",hebrew:"להמליץ, להציג",english:"to recommend, to introduce",tone:'high-mid',source:"curriculum-2026-07"},
  {id:"nw_0066",level:4,cefr:'B1',thai:"พยายาม",roman:"pha-yaa-yaam",hebrew:"להשתדל, לנסות",english:"to try, to make an effort",tone:'high-mid-mid',source:"curriculum-2026-07"},
  {id:"nw_0067",level:5,cefr:'B2',thai:"ปฏิเสธ",roman:"bpa-dti-seet",hebrew:"לסרב, להכחיש",english:"to refuse, to deny",tone:'low-low-low',source:"curriculum-2026-07"},
  {id:"nw_0068",level:6,cefr:'B2',thai:"เหมาะสม",roman:"mor-som",hebrew:"מתאים, הולם",english:"appropriate, suitable",tone:'low-rising',source:"curriculum-2026-07"},
  {id:"nw_0069",level:4,cefr:'B1',thai:"แตกต่าง",roman:"dtaek-dtaang",hebrew:"שונה, להיבדל",english:"different, to differ",tone:'low-low',source:"curriculum-2026-07"},
  {id:"nw_0070",level:5,cefr:'B2',thai:"ชัดเจน",roman:"chat-jen",hebrew:"ברור",english:"clear, obvious",tone:'high-mid',source:"curriculum-2026-07"},
  {id:"nw_0071",level:6,cefr:'B2',thai:"ซับซ้อน",roman:"sap-sorn",hebrew:"מסובך, מורכב",english:"complicated, complex",tone:'high-high',source:"curriculum-2026-07"},
  {id:"jw_0001",level:2,thai:"กระจก",roman:"gra-jok",hebrew:"מראה",english:"Mirror",tone:'mid-low',source:"batch-2026-07-13"},
  {id:"jw_0002",level:4,thai:"กล่าวโทษ",roman:"glaao-toht",hebrew:"להאשים",english:"Blame",tone:'low-falling',source:"batch-2026-07-13"},
  {id:"jw_0003",level:3,thai:"การขอโทษ",roman:"gaan-kor-toht",hebrew:"התנצלות",english:"Apology",tone:'mid-rising-falling',source:"batch-2026-07-13"},
  {id:"jw_0004",level:5,thai:"การตระหนัก",roman:"gaan-dtra-nak",hebrew:"מודעות",english:"Awareness",tone:'mid-low-low',source:"batch-2026-07-13"},
  {id:"jw_0005",level:4,thai:"การตัดสิน",roman:"gaan-dtat-sin",hebrew:"החלטה / שפיטה",english:"Judgement",tone:'mid-low-rising',source:"batch-2026-07-13"},
  {id:"jw_0006",level:3,thai:"การตัดสินใจ",roman:"gaan-dtat-sin-jai",hebrew:"החלטה",english:"Decision",tone:'mid-low-rising-mid',source:"batch-2026-07-13"},
  {id:"jw_0007",level:4,thai:"การติดเชื้อ",roman:"gaan-dtit-cheua",hebrew:"זיהום",english:"Infection",tone:'mid-low-high',source:"batch-2026-07-13"},
  {id:"jw_0008",level:5,thai:"การนับถือ",roman:"gaan-nap-teu",hebrew:"הערכה / כבוד",english:"Appreciation",tone:'mid-high-rising',source:"batch-2026-07-13"},
  {id:"jw_0009",level:5,thai:"การนำมาใช้",roman:"gaan-nam-maa-chai",hebrew:"אימוץ / שימוש",english:"Adoption",tone:'mid-mid-mid-high',source:"batch-2026-07-13"},
  {id:"jw_0010",level:5,thai:"การบริหาร",roman:"gaan-bor-ri-haan",hebrew:"מנהל / ניהול",english:"Administration",tone:'mid-low-high-rising',source:"batch-2026-07-13"},
  {id:"jw_0011",level:5,thai:"การประมูล",roman:"gaan-bpra-moon",hebrew:"מכירה פומבית",english:"Auction",tone:'mid-low-mid',source:"batch-2026-07-13"},
  {id:"jw_0012",level:4,thai:"การผจญภัย",roman:"gaan-pa-jon-pai",hebrew:"הרפתקה",english:"Adventure",tone:'mid-low-mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0013",level:4,thai:"การยืนยัน",roman:"gaan-yeun-yan",hebrew:"אישור / אימות",english:"Affirmation",tone:'mid-mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0014",level:3,thai:"การศึกษา",roman:"gaan-seuk-saa",hebrew:"חינוך / השכלה",english:"Education",tone:'mid-low-rising',source:"batch-2026-07-13"},
  {id:"jw_0015",level:3,thai:"การสนทนา",roman:"gaan-son-ta-naa",hebrew:"שיחה",english:"Conversation",tone:'mid-rising-high-mid',source:"batch-2026-07-13"},
  {id:"jw_0016",level:2,thai:"การสอบ",roman:"gaan-sop",hebrew:"בחינה / מבחן",english:"Exam",tone:'mid-low',source:"batch-2026-07-13"},
  {id:"jw_0017",level:4,thai:"การสื่อสาร",roman:"gaan-seu-saan",hebrew:"תקשורת",english:"Communication",tone:'mid-low-rising',source:"batch-2026-07-13"},
  {id:"jw_0018",level:4,thai:"การสู้รบ",roman:"gaan-soo-rop",hebrew:"קרב / לחימה",english:"Battle",tone:'mid-falling-high',source:"batch-2026-07-13"},
  {id:"jw_0019",level:3,thai:"การออกเดินทาง",roman:"gaan-ook-dern-taang",hebrew:"עזיבה / יציאה לדרך",english:"Departure",tone:'mid-low-mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0020",level:4,thai:"การันตี",roman:"gaa-ran-dtee",hebrew:"אחריות / להבטיח",english:"Guarantee",tone:'mid-mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0021",level:4,thai:"การเฉลิมฉลอง",roman:"gaan-cha-lerm-cha-long",hebrew:"חגיגה",english:"Celebration",tone:'mid-low-rising-low-rising',source:"batch-2026-07-13"},
  {id:"jw_0022",level:5,thai:"การเน้นย้ำ",roman:"gaan-nen-yam",hebrew:"דגש",english:"Emphasis",tone:'mid-high-high',source:"batch-2026-07-13"},
  {id:"jw_0023",level:3,thai:"การแข่งขัน",roman:"gaan-kaeng-kan",hebrew:"תחרות",english:"Competition",tone:'mid-low-rising',source:"batch-2026-07-13"},
  {id:"jw_0024",level:4,thai:"การแนบ",roman:"gaan-naep",hebrew:"קובץ מצורף / צירוף",english:"Attachment",tone:'mid-falling',source:"batch-2026-07-13"},
  {id:"jw_0025",level:3,thai:"ขึ้นอยู่กับ",roman:"keun-yoo-gap",hebrew:"תלוי ב",english:"Depend",tone:'falling-low-low',source:"batch-2026-07-13"},
  {id:"jw_0026",level:5,thai:"ข้อมูลเชิงลึก",roman:"kor-moon-cherng-leuk",hebrew:"תובנה / מידע מעמיק",english:"Insight",tone:'falling-mid-mid-high',source:"batch-2026-07-13"},
  {id:"jw_0027",level:4,thai:"ข้อโต้แย้ง",roman:"kor-dtoh-yaeng",hebrew:"טיעון / ויכוח",english:"Argument",tone:'falling-falling-high',source:"batch-2026-07-13"},
  {id:"jw_0028",level:3,thai:"ความกลัว",roman:"kwaam-glua",hebrew:"פחד",english:"Fear",tone:'mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0029",level:3,thai:"ความงาม",roman:"kwaam-ngaam",hebrew:"יופי",english:"Beauty",tone:'mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0030",level:4,thai:"ความจุ",roman:"kwaam-ju",hebrew:"קיבולת",english:"Capacity",tone:'mid-low',source:"batch-2026-07-13"},
  {id:"jw_0031",level:3,thai:"ความตาย",roman:"kwaam-dtaai",hebrew:"מוות",english:"Death",tone:'mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0032",level:4,thai:"ความท้าทาย",roman:"kwaam-taa-taai",hebrew:"אתגר",english:"Challenge",tone:'mid-high-mid',source:"batch-2026-07-13"},
  {id:"jw_0033",level:4,thai:"ความบันเทิง",roman:"kwaam-ban-terng",hebrew:"בידור",english:"Amusement",tone:'mid-mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0034",level:3,thai:"ความผิดพลาด",roman:"kwaam-pit-plaat",hebrew:"טעות / שגיאה",english:"Mistake",tone:'mid-low-falling',source:"batch-2026-07-13"},
  {id:"jw_0035",level:4,thai:"ความพยายาม",roman:"kwaam-pa-yaa-yaam",hebrew:"מאמץ",english:"Effort",tone:'mid-high-mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0036",level:5,thai:"ความยุติธรรม",roman:"kwaam-yut-dti-tam",hebrew:"צדק",english:"Justice",tone:'mid-high-low-mid',source:"batch-2026-07-13"},
  {id:"jw_0037",level:5,thai:"ความศรัทธา",roman:"kwaam-sat-taa",hebrew:"אמונה",english:"Faith",tone:'mid-low-mid',source:"batch-2026-07-13"},
  {id:"jw_0038",level:4,thai:"ความสงบ",roman:"kwaam-sa-ngop",hebrew:"שלווה / רוגע",english:"Calm",tone:'mid-low-low',source:"batch-2026-07-13"},
  {id:"jw_0039",level:4,thai:"ความสมดุล",roman:"kwaam-som-dun",hebrew:"איזון",english:"Balance",tone:'mid-rising-mid',source:"batch-2026-07-13"},
  {id:"jw_0040",level:4,thai:"ความสยองขวัญ",roman:"kwaam-sa-yong-kwan",hebrew:"אימה",english:"Horror",tone:'mid-low-rising-rising',source:"batch-2026-07-13"},
  {id:"jw_0041",level:5,thai:"ความแม่นยำ",roman:"kwaam-maen-yam",hebrew:"דיוק",english:"Accuracy",tone:'mid-falling-mid',source:"batch-2026-07-13"},
  {id:"jw_0042",level:5,thai:"คาดการณ์",roman:"kaat-gaan",hebrew:"לחזות / לצפות",english:"Anticipate",tone:'falling-mid',source:"batch-2026-07-13"},
  {id:"jw_0043",level:2,thai:"คำตอบ",roman:"kam-dtop",hebrew:"תשובה",english:"Answer",tone:'mid-low',source:"batch-2026-07-13"},
  {id:"jw_0044",level:3,thai:"คำนวณ",roman:"kam-nuan",hebrew:"לחשב",english:"Calculate",tone:'mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0045",level:3,thai:"คุ้นเคย",roman:"kun-koey",hebrew:"מוכר / רגיל",english:"Familiar",tone:'high-mid',source:"batch-2026-07-13"},
  {id:"jw_0046",level:3,thai:"ค้นพบ",roman:"kon-pop",hebrew:"לגלות",english:"Discover",tone:'high-high',source:"batch-2026-07-13"},
  {id:"jw_0047",level:3,thai:"จบการศึกษา",roman:"jop-gaan-seuk-saa",hebrew:"לסיים לימודים",english:"Graduate",tone:'low-mid-low-rising',source:"batch-2026-07-13"},
  {id:"jw_0048",level:3,thai:"จัดการ",roman:"jat-gaan",hebrew:"לנהל / לטפל",english:"Manage",tone:'low-mid',source:"batch-2026-07-13"},
  {id:"jw_0049",level:2,thai:"จับ",roman:"jap",hebrew:"לתפוס",english:"Capture",tone:'low',source:"batch-2026-07-13"},
  {id:"jw_0050",level:3,thai:"จ้าง",roman:"jaang",hebrew:"לשכור (עובד)",english:"Hire",tone:'falling',source:"batch-2026-07-13"},
  {id:"jw_0051",level:3,thai:"จ้างงาน",roman:"jaang-ngaan",hebrew:"העסקה",english:"Employ",tone:'falling-mid',source:"batch-2026-07-13"},
  {id:"jw_0052",level:3,thai:"ชนิด",roman:"cha-nit",hebrew:"סוג",english:"Genre",tone:'high-high',source:"batch-2026-07-13"},
  {id:"jw_0053",level:2,thai:"ชั้นเรียน",roman:"chan-rian",hebrew:"כיתה",english:"Class",tone:'high-mid',source:"batch-2026-07-13"},
  {id:"jw_0054",level:2,thai:"ชายหาด",roman:"chaai-haat",hebrew:"חוף",english:"Beach",tone:'mid-low',source:"batch-2026-07-13"},
  {id:"jw_0055",level:4,thai:"ชายแดน",roman:"chaai-daen",hebrew:"גבול",english:"Border",tone:'mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0056",level:4,thai:"ชื่นชม",roman:"cheun-chom",hebrew:"להעריץ / לשבח",english:"Admire",tone:'falling-mid',source:"batch-2026-07-13"},
  {id:"jw_0057",level:3,thai:"ซ่อมแซม",roman:"som-saem",hebrew:"לתקן",english:"Fix",tone:'falling-mid',source:"batch-2026-07-13"},
  {id:"jw_0058",level:4,thai:"ดั้งเดิม",roman:"dang-derm",hebrew:"מקורי / מסורתי",english:"Original",tone:'falling-mid',source:"batch-2026-07-13"},
  {id:"jw_0059",level:5,thai:"ดาราศาสตร์",roman:"daa-raa-saat",hebrew:"אסטרונומיה",english:"Astronomy",tone:'mid-mid-low',source:"batch-2026-07-13"},
  {id:"jw_0060",level:4,thai:"ดึงดูด",roman:"deung-doot",hebrew:"למשוך (תשומת לב)",english:"Attract",tone:'mid-low',source:"batch-2026-07-13"},
  {id:"jw_0061",level:4,thai:"ดูดซึม",roman:"doot-seum",hebrew:"לספוג",english:"Absorb",tone:'low-mid',source:"batch-2026-07-13"},
  {id:"jw_0062",level:2,thai:"ตกลง",roman:"dtok-long",hebrew:"להסכים",english:"Agree",tone:'low-mid',source:"batch-2026-07-13"},
  {id:"jw_0063",level:3,thai:"ตัดสิน",roman:"dtat-sin",hebrew:"לשפוט / להכריע",english:"Judge",tone:'low-rising',source:"batch-2026-07-13"},
  {id:"jw_0064",level:4,thai:"ตัวตน",roman:"dtua-dton",hebrew:"זהות / עצמי",english:"Identity",tone:'mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0065",level:3,thai:"ตัวเลือก",roman:"dtua-leuak",hebrew:"בחירה / אפשרות",english:"Choice",tone:'mid-falling',source:"batch-2026-07-13"},
  {id:"jw_0066",level:2,thai:"ตั๋ว",roman:"dtua",hebrew:"כרטיס",english:"Ticket",tone:'rising',source:"batch-2026-07-13"},
  {id:"jw_0067",level:3,thai:"ตาบอด",roman:"dtaa-boot",hebrew:"עיוור",english:"Blind",tone:'mid-low',source:"batch-2026-07-13"},
  {id:"jw_0068",level:4,thai:"ต่อรอง",roman:"dtor-rong",hebrew:"להתמקח",english:"Bargain",tone:'low-mid',source:"batch-2026-07-13"},
  {id:"jw_0069",level:2,thai:"ต่างกัน",roman:"dtaang-gan",hebrew:"שונה / נבדל",english:"Different",tone:'low-mid',source:"batch-2026-07-13"},
  {id:"jw_0070",level:2,thai:"ต่ำ",roman:"dtam",hebrew:"נמוך",english:"Low",tone:'low',source:"batch-2026-07-13"},
  {id:"jw_0071",level:4,thai:"ต้นฉบับ",roman:"dton-cha-bap",hebrew:"מקור (טקסט)",english:"Original",tone:'falling-low-low',source:"batch-2026-07-13"},
  {id:"jw_0072",level:5,thai:"ถกเถียง",roman:"tok-tiang",hebrew:"להתווכח / לדון",english:"Debate",tone:'low-rising',source:"batch-2026-07-13"},
  {id:"jw_0073",level:3,thai:"ถอยหลัง",roman:"toi-lang",hebrew:"אחורה",english:"Backwards",tone:'rising-rising',source:"batch-2026-07-13"},
  {id:"jw_0074",level:4,thai:"ถูกกฎหมาย",roman:"took-got-maai",hebrew:"חוקי",english:"Legal",tone:'low-low-rising',source:"batch-2026-07-13"},
  {id:"jw_0075",level:2,thai:"ถูกต้อง",roman:"took-dtong",hebrew:"נכון",english:"Correct",tone:'low-falling',source:"batch-2026-07-13"},
  {id:"jw_0076",level:5,thai:"ทะเยอทะยาน",roman:"ta-yer-ta-yaan",hebrew:"שאפתן",english:"Ambitious",tone:'high-mid-high-mid',source:"batch-2026-07-13"},
  {id:"jw_0077",level:3,thai:"ทำอันตราย",roman:"tam-an-dta-raai",hebrew:"להזיק",english:"Harm",tone:'mid-mid-low-mid',source:"batch-2026-07-13"},
  {id:"jw_0078",level:3,thai:"ทำให้แน่ใจ",roman:"tam-hai-nae-jai",hebrew:"לוודא",english:"Ensure",tone:'mid-falling-falling-mid',source:"batch-2026-07-13"},
  {id:"jw_0079",level:3,thai:"ทิศทาง",roman:"tit-taang",hebrew:"כיוון",english:"Direction",tone:'high-mid',source:"batch-2026-07-13"},
  {id:"jw_0080",level:3,thai:"ที่พัก",roman:"tee-pak",hebrew:"מקום לינה",english:"Accommodation",tone:'falling-high',source:"batch-2026-07-13"},
  {id:"jw_0081",level:4,thai:"ที่เป็นประโยชน์",roman:"tee-bpen-bpra-yoht",hebrew:"מועיל",english:"Advantageous",tone:'falling-mid-low-low',source:"batch-2026-07-13"},
  {id:"jw_0082",level:3,thai:"ธรรมชาติ",roman:"tam-ma-chaat",hebrew:"טבע",english:"Nature",tone:'mid-high-falling',source:"batch-2026-07-13"},
  {id:"jw_0083",level:3,thai:"นักกีฬา",roman:"nak-gii-laa",hebrew:"ספורטאי",english:"Athlete",tone:'high-mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0084",level:2,thai:"นักท่องเที่ยว",roman:"nak-tong-tiaao",hebrew:"תייר",english:"Tourist",tone:'high-falling-falling',source:"batch-2026-07-13"},
  {id:"jw_0085",level:5,thai:"นามธรรม",roman:"naam-ma-tam",hebrew:"מופשט",english:"Abstract",tone:'mid-high-mid',source:"batch-2026-07-13"},
  {id:"jw_0086",level:4,thai:"น่าหลงใหล",roman:"naa-long-lai",hebrew:"מרתק",english:"Fascinating",tone:'falling-rising-rising',source:"batch-2026-07-13"},
  {id:"jw_0087",level:4,thai:"น่าอับอาย",roman:"naa-ap-aai",hebrew:"מביך",english:"Embarrassing",tone:'falling-low-mid',source:"batch-2026-07-13"},
  {id:"jw_0088",level:3,thai:"น้ำท่วม",roman:"naam-tuam",hebrew:"שיטפון / הצפה",english:"Flood",tone:'high-falling',source:"batch-2026-07-13"},
  {id:"jw_0089",level:2,thai:"น้ำหอม",roman:"naam-hom",hebrew:"בושם",english:"Perfume",tone:'high-rising',source:"batch-2026-07-13"},
  {id:"jw_0090",level:5,thai:"บรรณาธิการ",roman:"ban-naa-ti-gaan",hebrew:"עורך (טקסט)",english:"Editor",tone:'mid-mid-high-mid',source:"batch-2026-07-13"},
  {id:"jw_0091",level:3,thai:"บรรยากาศ",roman:"ban-yaa-gaat",hebrew:"אווירה",english:"Atmosphere",tone:'mid-mid-low',source:"batch-2026-07-13"},
  {id:"jw_0092",level:4,thai:"บรรลุ",roman:"ban-lu",hebrew:"להשיג",english:"Attain",tone:'mid-high',source:"batch-2026-07-13"},
  {id:"jw_0093",level:5,thai:"บอกเป็นนัย",roman:"bok-bpen-nai",hebrew:"לרמוז",english:"Imply",tone:'low-mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0094",level:3,thai:"บัญชี",roman:"ban-chee",hebrew:"חשבון",english:"Account",tone:'mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0095",level:3,thai:"บันทึก",roman:"ban-teuk",hebrew:"יומן / רישום",english:"Journal",tone:'mid-high',source:"batch-2026-07-13"},
  {id:"jw_0096",level:5,thai:"บำรุงรักษา",roman:"bam-rung-rak-saa",hebrew:"לתחזק",english:"Maintain",tone:'mid-mid-low-rising',source:"batch-2026-07-13"},
  {id:"jw_0097",level:3,thai:"ประกาศ",roman:"bpra-gaat",hebrew:"להכריז",english:"Announce",tone:'low-low',source:"batch-2026-07-13"},
  {id:"jw_0098",level:5,thai:"ประทาน",roman:"bpra-taan",hebrew:"להעניק (רשמי/מלוכה)",english:"Grant",tone:'low-mid',source:"batch-2026-07-13"},
  {id:"jw_0099",level:4,thai:"ประพฤติตัว",roman:"bpra-preut-dtua",hebrew:"להתנהג",english:"Behave",tone:'low-high-mid',source:"batch-2026-07-13"},
  {id:"jw_0100",level:3,thai:"ประเภท",roman:"bpra-peht",hebrew:"סוג / קטגוריה",english:"Genre",tone:'low-falling',source:"batch-2026-07-13"},
  {id:"jw_0101",level:3,thai:"ประโยชน์",roman:"bpra-yoht",hebrew:"תועלת / יתרון",english:"Benefit",tone:'low-low',source:"batch-2026-07-13"},
  {id:"jw_0102",level:3,thai:"ปรับปรุง",roman:"bprap-bprung",hebrew:"לשפר",english:"Enhance",tone:'low-mid',source:"batch-2026-07-13"},
  {id:"jw_0103",level:3,thai:"ปรากฏ",roman:"bpraa-got",hebrew:"להופיע",english:"Appear",tone:'mid-low',source:"batch-2026-07-13"},
  {id:"jw_0104",level:3,thai:"ปล่อย",roman:"bploi",hebrew:"לשחרר / להשיק",english:"Launch",tone:'low',source:"batch-2026-07-13"},
  {id:"jw_0105",level:1,thai:"ผม",roman:"pom",hebrew:"שיער",english:"Hair",tone:'rising',source:"batch-2026-07-13"},
  {id:"jw_0106",level:3,thai:"ผิวหนัง",roman:"piu-nang",hebrew:"עור (של גוף)",english:"Skin",tone:'rising-rising',source:"batch-2026-07-13"},
  {id:"jw_0107",level:5,thai:"ผู้บริหาร",roman:"poo-bor-ri-haan",hebrew:"מנהל בכיר",english:"Administrator",tone:'falling-low-high-rising',source:"batch-2026-07-13"},
  {id:"jw_0108",level:5,thai:"ผู้สนับสนุน",roman:"poo-sa-nap-sa-nun",hebrew:"תומך",english:"Advocate",tone:'falling-low-high-low-rising',source:"batch-2026-07-13"},
  {id:"jw_0109",level:5,thai:"ผู้อพยพ",roman:"poo-op-pa-yop",hebrew:"מהגר / פליט",english:"Immigrant",tone:'falling-low-high-high',source:"batch-2026-07-13"},
  {id:"jw_0110",level:2,thai:"ผู้ใหญ่",roman:"poo-yai",hebrew:"מבוגר",english:"Adult",tone:'falling-low',source:"batch-2026-07-13"},
  {id:"jw_0111",level:2,thai:"ผ้าเช็ดตัว",roman:"paa-chet-dtua",hebrew:"מגבת",english:"Towel",tone:'falling-high-mid',source:"batch-2026-07-13"},
  {id:"jw_0112",level:4,thai:"ฝุ่นผง",roman:"fun-pong",hebrew:"אבק",english:"Dust",tone:'low-rising',source:"batch-2026-07-13"},
  {id:"jw_0113",level:4,thai:"พนัน",roman:"pa-nan",hebrew:"להמר",english:"Bet",tone:'high-mid',source:"batch-2026-07-13"},
  {id:"jw_0114",level:3,thai:"พรม",roman:"prom",hebrew:"שטיח",english:"Carpet",tone:'mid',source:"batch-2026-07-13"},
  {id:"jw_0115",level:3,thai:"พร้อมใช้งาน",roman:"prom-chai-ngaan",hebrew:"זמין / מוכן לשימוש",english:"Available",tone:'high-high-mid',source:"batch-2026-07-13"},
  {id:"jw_0116",level:4,thai:"พฤติกรรม",roman:"preut-dti-gam",hebrew:"התנהגות",english:"Behavior",tone:'high-low-mid',source:"batch-2026-07-13"},
  {id:"jw_0117",level:5,thai:"พฤติกรรมรุนแรง",roman:"preut-dti-gam-run-raeng",hebrew:"התנהגות אלימה",english:"Aggression",tone:'high-low-mid-mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0118",level:6,thai:"พหุนาม",roman:"pa-hu-naam",hebrew:"אלגברה (פולינום)",english:"Algebra",tone:'high-low-mid',source:"batch-2026-07-13"},
  {id:"jw_0119",level:4,thai:"พาดหัวข่าว",roman:"paat-hua-kaao",hebrew:"כותרת (בחדשות)",english:"Headline",tone:'falling-rising-low',source:"batch-2026-07-13"},
  {id:"jw_0120",level:4,thai:"พิธีการ",roman:"pi-tee-gaan",hebrew:"טקס",english:"Ceremony",tone:'high-mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0121",level:2,thai:"พิเศษ",roman:"pi-seht",hebrew:"מיוחד",english:"Extraordinary",tone:'high-low',source:"batch-2026-07-13"},
  {id:"jw_0122",level:5,thai:"ภาวะแพ้",roman:"paa-wa-paae",hebrew:"אלרגיה",english:"Allergy",tone:'mid-high-high',source:"batch-2026-07-13"},
  {id:"jw_0123",level:3,thai:"มหาสมุทร",roman:"ma-haa-sa-mut",hebrew:"אוקיינוס",english:"Ocean",tone:'high-rising-low-low',source:"batch-2026-07-13"},
  {id:"jw_0124",level:4,thai:"มะเร็ง",roman:"ma-reng",hebrew:"סרטן (מחלה)",english:"Cancer",tone:'high-mid',source:"batch-2026-07-13"},
  {id:"jw_0125",level:4,thai:"มารยาท",roman:"maa-ra-yaat",hebrew:"נימוסים",english:"Manner",tone:'mid-high-falling',source:"batch-2026-07-13"},
  {id:"jw_0126",level:5,thai:"มีประสิทธิภาพ",roman:"mee-bpra-sit-ti-paap",hebrew:"יעיל",english:"Effective",tone:'mid-low-low-high-falling',source:"batch-2026-07-13"},
  {id:"jw_0127",level:4,thai:"มุ่งมั่น",roman:"mung-man",hebrew:"נחוש / ממוקד",english:"Concentrate",tone:'falling-falling',source:"batch-2026-07-13"},
  {id:"jw_0128",level:2,thai:"ยา",roman:"yaa",hebrew:"תרופה",english:"Medicine",tone:'mid',source:"batch-2026-07-13"},
  {id:"jw_0129",level:2,thai:"ยาก",roman:"yaak",hebrew:"קשה",english:"Difficult",tone:'falling',source:"batch-2026-07-13"},
  {id:"jw_0130",level:4,thai:"ยินยอม",roman:"yin-yom",hebrew:"להסכים / לאשר",english:"Grant",tone:'mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0131",level:4,thai:"ยืดหยุ่น",roman:"yeut-yun",hebrew:"גמיש",english:"Flexible",tone:'falling-low',source:"batch-2026-07-13"},
  {id:"jw_0132",level:5,thai:"ยืนกราน",roman:"yeun-graan",hebrew:"להתעקש / לטעון בתוקף",english:"Assert",tone:'mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0133",level:2,thai:"ยืม",roman:"yeum",hebrew:"ללוות",english:"Borrow",tone:'mid',source:"batch-2026-07-13"},
  {id:"jw_0134",level:4,thai:"ยุติธรรม",roman:"yut-dti-tam",hebrew:"הוגן / צודק",english:"Fair",tone:'high-low-mid',source:"batch-2026-07-13"},
  {id:"jw_0135",level:2,thai:"รถบัส",roman:"rot-bat",hebrew:"אוטובוס",english:"Bus",tone:'high-high',source:"batch-2026-07-13"},
  {id:"jw_0136",level:4,thai:"รวบรวม",roman:"ruap-ruam",hebrew:"לאסוף / לקבץ",english:"Gather",tone:'falling-mid',source:"batch-2026-07-13"},
  {id:"jw_0137",level:3,thai:"ระมัดระวัง",roman:"ra-mat-ra-wang",hebrew:"זהיר",english:"Careful",tone:'high-high-high-mid',source:"batch-2026-07-13"},
  {id:"jw_0138",level:2,thai:"ระหว่าง",roman:"ra-waang",hebrew:"בין (משהו למשהו)",english:"Between",tone:'high-low',source:"batch-2026-07-13"},
  {id:"jw_0139",level:5,thai:"รัฐมนตรี",roman:"rat-ta-mon-dtree",hebrew:"שר (בממשלה)",english:"Minister",tone:'high-low-mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0140",level:4,thai:"รับประกัน",roman:"rap-bpra-gan",hebrew:"להבטיח / אחריות",english:"Guarantee",tone:'high-low-mid',source:"batch-2026-07-13"},
  {id:"jw_0141",level:4,thai:"รับมือ",roman:"rap-meu",hebrew:"להתמודד עם / לטפל ב-",english:"Handle",tone:'high-mid',source:"batch-2026-07-13"},
  {id:"jw_0142",level:4,thai:"ร้องเรียน",roman:"rong-rian",hebrew:"להתלונן",english:"Complain",tone:'high-mid',source:"batch-2026-07-13"},
  {id:"jw_0143",level:5,thai:"ลงคะแนนเลือก",roman:"long-ka-naen-leuak",hebrew:"להצביע",english:"Ballot",tone:'mid-high-mid-falling',source:"batch-2026-07-13"},
  {id:"jw_0144",level:4,thai:"ละทิ้ง",roman:"la-ting",hebrew:"לנטוש",english:"Abandon",tone:'high-high',source:"batch-2026-07-13"},
  {id:"jw_0145",level:4,thai:"ลังเล",roman:"lang-leh",hebrew:"להסס",english:"Hesitate",tone:'mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0146",level:3,thai:"ลำบาก",roman:"lam-baak",hebrew:"קשה / מסובך",english:"Difficult",tone:'mid-low',source:"batch-2026-07-13"},
  {id:"jw_0147",level:3,thai:"ลูกจ้าง",roman:"look-jaang",hebrew:"שכיר / עובד",english:"Employee",tone:'falling-falling',source:"batch-2026-07-13"},
  {id:"jw_0148",level:3,thai:"ล้มเหลว",roman:"lom-leo",hebrew:"להיכשל",english:"Fail",tone:'high-rising',source:"batch-2026-07-13"},
  {id:"jw_0149",level:2,thai:"วันหยุด",roman:"wan-yut",hebrew:"חופש / יום מנוחה",english:"Vacation",tone:'mid-low',source:"batch-2026-07-13"},
  {id:"jw_0150",level:4,thai:"วัสดุ",roman:"wat-sa-du",hebrew:"חומר",english:"Material",tone:'high-low-low',source:"batch-2026-07-13"},
  {id:"jw_0151",level:2,thai:"สนามบิน",roman:"sa-naam-bin",hebrew:"נמל תעופה",english:"Airport",tone:'low-rising-mid',source:"batch-2026-07-13"},
  {id:"jw_0152",level:2,thai:"สบู่",roman:"sa-boo",hebrew:"סבון",english:"Soap",tone:'low-low',source:"batch-2026-07-13"},
  {id:"jw_0153",level:4,thai:"สภาพแวดล้อม",roman:"sa-paap-waet-lom",hebrew:"סביבה",english:"Environment",tone:'low-falling-falling-high',source:"batch-2026-07-13"},
  {id:"jw_0154",level:2,thai:"สะดวก",roman:"sa-duak",hebrew:"נוח",english:"Convenient",tone:'low-low',source:"batch-2026-07-13"},
  {id:"jw_0155",level:3,thai:"สะดวกสบาย",roman:"sa-duak-sa-baai",hebrew:"נוח / נעים",english:"Comfortable",tone:'low-low-low-mid',source:"batch-2026-07-13"},
  {id:"jw_0156",level:4,thai:"สะสม",roman:"sa-som",hebrew:"לצבור",english:"Accumulate",tone:'low-rising',source:"batch-2026-07-13"},
  {id:"jw_0157",level:3,thai:"สามารถ",roman:"saa-maat",hebrew:"מסוגל / יכול",english:"Able",tone:'rising-falling',source:"batch-2026-07-13"},
  {id:"jw_0158",level:4,thai:"สูญหาย",roman:"soon-haai",hebrew:"אבוד / נעדר",english:"Lost",tone:'rising-rising',source:"batch-2026-07-13"},
  {id:"jw_0159",level:3,thai:"ส่งเสียงดัง",roman:"song-siang-dang",hebrew:"להרעיש",english:"Loud",tone:'low-rising-mid',source:"batch-2026-07-13"},
  {id:"jw_0160",level:4,thai:"หนี้สิน",roman:"nee-sin",hebrew:"חובות",english:"Debt",tone:'falling-rising',source:"batch-2026-07-13"},
  {id:"jw_0161",level:3,thai:"หน้าที่",roman:"naa-tee",hebrew:"תפקיד / חובה",english:"Duty",tone:'falling-falling',source:"batch-2026-07-13"},
  {id:"jw_0162",level:5,thai:"อภิปราย",roman:"a-pi-bpraai",hebrew:"לדון / לנהל דיון",english:"Debate",tone:'low-high-mid',source:"batch-2026-07-13"},
  {id:"jw_0163",level:3,thai:"อย่างง่ายดาย",roman:"yaang-ngaai-daai",hebrew:"בקלות",english:"Easily",tone:'low-falling-mid',source:"batch-2026-07-13"},
  {id:"jw_0164",level:5,thai:"อย่างแม่นยำ",roman:"yaang-maen-yam",hebrew:"במדויק",english:"Accurately",tone:'low-falling-mid',source:"batch-2026-07-13"},
  {id:"jw_0165",level:6,thai:"อัตชีวประวัติ",roman:"at-dta-chee-wa-bpra-wat",hebrew:"אוטוביוגרפיה",english:"Autobiography",tone:'low-low-mid-high-low-low',source:"batch-2026-07-13"},
  {id:"jw_0166",level:5,thai:"อัตลักษณ์",roman:"at-dta-lak",hebrew:"זהות",english:"Identity",tone:'low-low-low',source:"batch-2026-07-13"},
  {id:"jw_0167",level:2,thai:"อาบน้ำ",roman:"aap-naam",hebrew:"להתקלח",english:"Shower",tone:'low-high',source:"batch-2026-07-13"},
  {id:"jw_0168",level:4,thai:"อารมณ์ขัน",roman:"aa-rom-kan",hebrew:"חוש הומור",english:"Humor",tone:'mid-mid-rising',source:"batch-2026-07-13"},
  {id:"jw_0169",level:4,thai:"อึดอัด",roman:"eut-at",hebrew:"לא נוח / מעיק",english:"Awkward",tone:'low-low',source:"batch-2026-07-13"},
  {id:"jw_0170",level:5,thai:"อุดมคติ",roman:"u-dom-ka-dti",hebrew:"אידיאל",english:"Ideal",tone:'low-mid-high-low',source:"batch-2026-07-13"},
  {id:"jw_0171",level:4,thai:"อ่อนโยน",roman:"on-yohn",hebrew:"עדין",english:"Gentle",tone:'low-mid',source:"batch-2026-07-13"},
  {id:"jw_0172",level:4,thai:"อ้อนวอน",roman:"on-won",hebrew:"להתחנן",english:"Beg",tone:'falling-mid',source:"batch-2026-07-13"},
  {id:"jw_0173",level:5,thai:"เกษตรกรรม",roman:"ga-seht-dtra-gam",hebrew:"חקלאות",english:"Agriculture",tone:'low-low-low-mid',source:"batch-2026-07-13"},
  {id:"jw_0174",level:3,thai:"เข้าถึง",roman:"khao-teung",hebrew:"גישה / להגיע ל-",english:"Access",tone:'falling-rising',source:"batch-2026-07-13"},
  {id:"jw_0175",level:3,thai:"เครื่องสำอาง",roman:"kreuang-sam-aang",hebrew:"איפור / קוסמטיקה",english:"Makeup",tone:'falling-rising-mid',source:"batch-2026-07-13"},
  {id:"jw_0176",level:2,thai:"เงินสด",roman:"ngern-sot",hebrew:"מזומן",english:"Cash",tone:'mid-low',source:"batch-2026-07-13"},
  {id:"jw_0177",level:4,thai:"เฉลิมฉลอง",roman:"cha-lerm-cha-long",hebrew:"לחגוג",english:"Celebrate",tone:'low-rising-low-rising',source:"batch-2026-07-13"},
  {id:"jw_0178",level:4,thai:"เชื่อมโยง",roman:"cheuam-yong",hebrew:"לקשר",english:"Associate",tone:'falling-mid',source:"batch-2026-07-13"},
  {id:"jw_0179",level:2,thai:"เนื้อวัว",roman:"neua-wua",hebrew:"בשר בקר",english:"Beef",tone:'high-mid',source:"batch-2026-07-13"},
  {id:"jw_0180",level:3,thai:"เป็นของ",roman:"bpen-kong",hebrew:"שייך ל",english:"Belong",tone:'mid-rising',source:"batch-2026-07-13"},
  {id:"jw_0181",level:3,thai:"เพดาน",roman:"peh-daan",hebrew:"תקרה",english:"Ceiling",tone:'mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0182",level:5,thai:"เพิกเฉย",roman:"perk-choey",hebrew:"להתעלם",english:"Ignore",tone:'falling-rising',source:"batch-2026-07-13"},
  {id:"jw_0183",level:5,thai:"เมินเฉย",roman:"mern-choey",hebrew:"להתעלם (בהפגנתיות)",english:"Ignore",tone:'mid-rising',source:"batch-2026-07-13"},
  {id:"jw_0184",level:2,thai:"เริ่ม",roman:"rerm",hebrew:"להתחיל",english:"Begin",tone:'falling',source:"batch-2026-07-13"},
  {id:"jw_0185",level:2,thai:"เรียก",roman:"riak",hebrew:"לקרוא",english:"Call",tone:'falling',source:"batch-2026-07-13"},
  {id:"jw_0186",level:2,thai:"เรียนรู้",roman:"rian-roo",hebrew:"ללמוד",english:"Learn",tone:'mid-high',source:"batch-2026-07-13"},
  {id:"jw_0187",level:3,thai:"เร่งรีบ",roman:"reng-reep",hebrew:"למהר",english:"Hurry",tone:'falling-falling',source:"batch-2026-07-13"},
  {id:"jw_0188",level:5,thai:"เลินเล่อ",roman:"lern-ler",hebrew:"רשלני",english:"Careless",tone:'mid-falling',source:"batch-2026-07-13"},
  {id:"jw_0189",level:2,thai:"เลือก",roman:"leuak",hebrew:"לבחור",english:"Choose",tone:'falling',source:"batch-2026-07-13"},
  {id:"jw_0190",level:3,thai:"เสนอ",roman:"sa-ner",hebrew:"להציע",english:"Offer",tone:'low-rising',source:"batch-2026-07-13"},
  {id:"jw_0191",level:4,thai:"เสริม",roman:"serm",hebrew:"לחזק / להוסיף",english:"Enhance",tone:'rising',source:"batch-2026-07-13"},
  {id:"jw_0192",level:2,thai:"แคบ",roman:"kaep",hebrew:"צר",english:"Narrow",tone:'falling',source:"batch-2026-07-13"},
  {id:"jw_0193",level:3,thai:"แจ้ง",roman:"jaeng",hebrew:"להודיע",english:"Inform",tone:'falling',source:"batch-2026-07-13"},
  {id:"jw_0194",level:2,thai:"แตก",roman:"dtaek",hebrew:"להישבר",english:"Break",tone:'low',source:"batch-2026-07-13"},
  {id:"jw_0195",level:3,thai:"แท้",roman:"tae",hebrew:"אמיתי / מקורי",english:"Authentic",tone:'high',source:"batch-2026-07-13"},
  {id:"jw_0196",level:4,thai:"แผ่นดินไหว",roman:"paen-din-wai",hebrew:"רעידת אדמה",english:"Earthquake",tone:'low-mid-rising',source:"batch-2026-07-13"},
  {id:"jw_0197",level:4,thai:"แม่นยำ",roman:"maen-yam",hebrew:"מדויק",english:"Accurate",tone:'falling-mid',source:"batch-2026-07-13"},
  {id:"jw_0198",level:4,thai:"แรงงาน",roman:"raeng-ngaan",hebrew:"כוח אדם / פועלים",english:"Labor",tone:'mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0199",level:3,thai:"แลกเปลี่ยน",roman:"laek-bplian",hebrew:"להחליף",english:"Exchange",tone:'falling-low',source:"batch-2026-07-13"},
  {id:"jw_0200",level:3,thai:"โฆษณา",roman:"koht-sa-naa",hebrew:"פרסומת",english:"Advertisement",tone:'falling-low-mid',source:"batch-2026-07-13"},
  {id:"jw_0201",level:4,thai:"โดยทันทีทันใด",roman:"dooy-tan-tee-tan-dai",hebrew:"באופן מיידי",english:"Immediately",tone:'mid-mid-mid-mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0202",level:4,thai:"โดยประมาณ",roman:"dooy-bpra-maan",hebrew:"בערך",english:"Approximate",tone:'mid-low-mid',source:"batch-2026-07-13"},
  {id:"jw_0203",level:2,thai:"โทร",roman:"toh",hebrew:"להתקשר",english:"Call",tone:'mid',source:"batch-2026-07-13"},
  {id:"jw_0204",level:3,thai:"โปรด",roman:"bproht",hebrew:"אנא",english:"Please",tone:'low',source:"batch-2026-07-13"},
  {id:"jw_0205",level:2,thai:"โรงแรม",roman:"rong-raem",hebrew:"מלון",english:"Hotel",tone:'mid-mid',source:"batch-2026-07-13"},
  {id:"jw_0206",level:3,thai:"ใจกว้าง",roman:"jai-gwaang",hebrew:"נדיב",english:"Generous",tone:'mid-falling',source:"batch-2026-07-13"},
  {id:"jw_0207",level:3,thai:"ใจร้อน",roman:"jai-ron",hebrew:"חסר סבלנות / פזיז",english:"Impatient",tone:'mid-high',source:"batch-2026-07-13"},
  {id:"jw_0208",level:5,thai:"ให้ความสำคัญ",roman:"hai-kwaam-sam-kan",hebrew:"לתת חשיבות / להדגיש",english:"Emphasize",tone:'falling-mid-rising-mid',source:"batch-2026-07-13"},
  {id:"jw_0209",level:3,thai:"ได้รับ",roman:"daai-rap",hebrew:"לקבל / לזכות",english:"Gain",tone:'falling-high',source:"batch-2026-07-13"},
  {id:"jw_0210",level:4,thai:"ไม่ระบุชื่อ",roman:"mai-ra-bu-cheu",hebrew:"אנונימי",english:"Anonymous",tone:'falling-high-low-falling',source:"batch-2026-07-13"},
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
  {kind:'consonant',cls:'mid',id:'c_gor_gai',symbol:'ก',name:'กอ ไก่',localHe:'עיצור g/k — go gai',localEn:'g/k consonant — go gai',sound:'g / k',he:'g / k',boardWord:'ไก่',boardMeaningHe:'תרנגולת',boardMeaningEn:'chicken',emoji:'🐔',writingHe:'Middle class. משמש כ־g/k בתחילת הברה וכ־k בסוף.',writingEn:'Middle class. g/k at the start; k at the end.',noteHe:'מהעיצורים הבסיסיים ביותר.',noteEn:'One of the core consonants.'},
  {kind:'consonant',cls:'mid',id:'c_jor_jaan',symbol:'จ',name:'จอ จาน',localHe:'עיצור j — jo jaan',localEn:'j consonant — jo jaan',sound:'j',he:'j',boardWord:'จาน',boardMeaningHe:'צלחת',boardMeaningEn:'plate',emoji:'🍽️',writingHe:'Middle class. בתחילת הברה j; בסוף נשמע t.',writingEn:'Middle class. j at the start; t at the end.',noteHe:'จาน = צלחת.',noteEn:'จาน = plate.'},
  {kind:'consonant',cls:'mid',id:'c_dor_dek',symbol:'ด',name:'ดอ เด็ก',localHe:'עיצור d — do dek',localEn:'d consonant — do dek',sound:'d',he:'d',boardWord:'เด็ก',boardMeaningHe:'ילד',boardMeaningEn:'child',emoji:'🧒',writingHe:'Middle class. d בתחילה; t בסוף.',writingEn:'Middle class. d initially; t finally.',noteHe:'דוגמה: ดู = לראות.',noteEn:'Example: ดู = to look.'},
  {kind:'consonant',cls:'mid',id:'c_tor_tao',symbol:'ต',name:'ตอ เต่า',localHe:'עיצור dt/t — dto dtao',localEn:'dt/t consonant — dto dtao',sound:'dt / t',he:'dt / t',boardWord:'เต่า',boardMeaningHe:'צב',boardMeaningEn:'turtle',emoji:'🐢',writingHe:'Middle class. צליל לא מנושף dt/t.',writingEn:'Middle class. Unaspirated dt/t sound.',noteHe:'ตาย = למות.',noteEn:'ตาย = to die.'},
  {kind:'consonant',cls:'mid',id:'c_bor_baimai',symbol:'บ',name:'บอ ใบไม้',localHe:'עיצור b — bo baimai',localEn:'b consonant — bo baimai',sound:'b',he:'b',boardWord:'ใบไม้',boardMeaningHe:'עלה',boardMeaningEn:'leaf',emoji:'🍃',writingHe:'Middle class. b בתחילה; p בסוף.',writingEn:'Middle class. b initially; p finally.',noteHe:'บ้าน מתחיל ב־บ.',noteEn:'บ้าน starts with บ.'},
  {kind:'consonant',cls:'mid',id:'c_bpor_bplaa',symbol:'ป',name:'ปอ ปลา',localHe:'עיצור bp/p — bpo bplaa',localEn:'bp/p consonant — bpo bplaa',sound:'bp / p',he:'bp / p',boardWord:'ปลา',boardMeaningHe:'דג',boardMeaningEn:'fish',emoji:'🐟',writingHe:'Middle class. p לא מנושף / bp.',writingEn:'Middle class. Unaspirated p / bp.',noteHe:'ไป = ללכת.',noteEn:'ไป = to go.'},
  {kind:'consonant',cls:'mid',id:'c_o_ang',symbol:'อ',name:'ออ อ่าง',localHe:'עיצור נשא / o aang',localEn:'silent carrier / o aang',sound:'silent carrier / ɔɔ',he:'עיצור נשא / ɔɔ',boardWord:'อ่าง',boardMeaningHe:'אגן / כיור / גיגית',boardMeaningEn:'basin / tub',emoji:'🛁',writingHe:'יכול לשמש עיצור נשא בתחילת מילה, וגם חלק מתנועת ɔɔ ארוכה.',writingEn:'Can be a silent vowel carrier at the start, and can also mark long ɔɔ.',noteHe:'חשוב מאוד במילים שמתחילות בתנועה.',noteEn:'Very important for vowel-initial words.'},
  {kind:'consonant',cls:'low',id:'c_ngo_nguu',symbol:'ง',name:'งอ งู',localHe:'עיצור ng — ngo nguu',localEn:'ng consonant — ngo nguu',sound:'ng',he:'ng',boardWord:'งู',boardMeaningHe:'נחש',boardMeaningEn:'snake',emoji:'🐍',writingHe:'יכול להופיע בתחילת הברה או כסוף ng.',writingEn:'Can appear initially or as final ng.',noteHe:'งาน = עבודה.',noteEn:'งาน = work.'},
  {kind:'consonant',cls:'low',id:'c_yo_yak',symbol:'ย',name:'ยอ ยักษ์',localHe:'עיצור y — yo yaak',localEn:'y consonant — yo yak',sound:'y',he:'y',boardWord:'ยักษ์',boardMeaningHe:'ענק / מפלצת',boardMeaningEn:'giant / ogre',emoji:'👹',writingHe:'y בתחילה או סוף y.',writingEn:'y initially or final y.',noteHe:'ตาย מסתיים ב־ย.',noteEn:'ตาย ends with ย.'},
  {kind:'consonant',cls:'low',id:'c_wo_waen',symbol:'ว',name:'วอ แหวน',localHe:'עיצור w — wo waen',localEn:'w consonant — wo waen',sound:'w',he:'w',boardWord:'แหวน',boardMeaningHe:'טבעת',boardMeaningEn:'ring',emoji:'💍',writingHe:'w בתחילה או סוף w; משתתף גם בתנועות ua.',writingEn:'w initially or final w; also part of ua vowels.',noteHe:'อ้วน משתמש ב־ว.',noteEn:'อ้วน uses ว.'},
  {kind:'consonant',cls:'low',id:'c_mo_maa',symbol:'ม',name:'มอ ม้า',localHe:'עיצור m — mo maa',localEn:'m consonant — mo maa',sound:'m',he:'m',boardWord:'ม้า',boardMeaningHe:'סוס',boardMeaningEn:'horse',emoji:'🐴',writingHe:'m בתחילה או סוף m.',writingEn:'m initially or final m.',noteHe:'ตาม מסתיים ב־ม.',noteEn:'ตาม ends with ม.'},
  {kind:'consonant',cls:'low',id:'c_no_nuu',symbol:'น',name:'นอ หนู',localHe:'עיצור n — no nuu',localEn:'n consonant — no nuu',sound:'n',he:'n',boardWord:'หนู',boardMeaningHe:'עכבר / אני הקטן',boardMeaningEn:'mouse / little me',emoji:'🐭',writingHe:'n בתחילה או סוף n.',writingEn:'n initially or final n.',noteHe:'นอน = לישון.',noteEn:'นอน = to sleep.'},
  {kind:'consonant',cls:'mid',id:'c_dor_chada',symbol:'ฎ',name:'ฎอ ชฎา',nameRoman:'do cha-daa',localHe:'עיצור d — do chada',localEn:'d consonant — do chada',sound:'d',he:'d',boardWord:'ชฎา',boardMeaningHe:'כתר ריקוד תאי',boardMeaningEn:'Thai dance crown',emoji:'👑',writingHe:'מחלקה אמצעית. d בתחילה, t בסוף. נדיר יחסית.',writingEn:'Middle class. d initially, t finally. Fairly rare.',noteHe:'תאום נדיר של ด.',noteEn:'Rare twin of ด.'},
  {kind:'consonant',cls:'mid',id:'c_tor_bpatak',symbol:'ฏ',name:'ฏอ ปฏัก',nameRoman:'dto bpa-dtak',localHe:'עיצור dt/t — dto bpatak',localEn:'dt/t consonant — dto bpatak',sound:'dt / t',he:'dt / t',boardWord:'ปฏัก',boardMeaningHe:'מַלְמָד (מוט דרבון)',boardMeaningEn:'goad / cattle prod',emoji:'🔱',writingHe:'מחלקה אמצעית. dt/t לא מנושף. נדיר.',writingEn:'Middle class. Unaspirated dt/t. Rare.',noteHe:'תאום נדיר של ต.',noteEn:'Rare twin of ต.'},
  {kind:'consonant',cls:'high',id:'c_khor_khai',symbol:'ข',name:'ขอ ไข่',nameRoman:'kho khai',localHe:'עיצור kh — kho khai',localEn:'kh consonant — kho khai',sound:'kh',he:'kh',boardWord:'ไข่',boardMeaningHe:'ביצה',boardMeaningEn:'egg',emoji:'🥚',writingHe:'מחלקה גבוהה. kh מנושף.',writingEn:'High class. Aspirated kh.',noteHe:'תאום גבוה של ค.',noteEn:'High twin of ค.'},
  {kind:'consonant',cls:'high',id:'c_khor_khuat',symbol:'ฃ',name:'ฃอ ขวด',nameRoman:'kho khuat',localHe:'עיצור kh — kho khuat (מיושן)',localEn:'kh consonant — kho khuat (obsolete)',sound:'kh',he:'kh',boardWord:'ขวด',boardMeaningHe:'בקבוק',boardMeaningEn:'bottle',emoji:'🍾',writingHe:'מחלקה גבוהה. אות מיושנת שאינה בשימוש כיום.',writingEn:'High class. Obsolete letter, no longer used.',noteHe:'הוחלפה ב־ข.',noteEn:'Replaced by ข.'},
  {kind:'consonant',cls:'high',id:'c_chor_ching',symbol:'ฉ',name:'ฉอ ฉิ่ง',nameRoman:'cho ching',localHe:'עיצור ch — cho ching',localEn:'ch consonant — cho ching',sound:'ch',he:'ch',boardWord:'ฉิ่ง',boardMeaningHe:'מצלתיים קטנים',boardMeaningEn:'small cymbals',emoji:'🥁',writingHe:'מחלקה גבוהה. ch מנושף.',writingEn:'High class. Aspirated ch.',noteHe:'תאום גבוה של ช.',noteEn:'High twin of ช.'},
  {kind:'consonant',cls:'high',id:'c_thor_than',symbol:'ฐ',name:'ฐอ ฐาน',nameRoman:'tho thaan',localHe:'עיצור th — tho than',localEn:'th consonant — tho than',sound:'th',he:'th',boardWord:'ฐาน',boardMeaningHe:'בסיס / כַּן',boardMeaningEn:'base / pedestal',emoji:'🏛️',writingHe:'מחלקה גבוהה. th מנושף.',writingEn:'High class. Aspirated th.',noteHe:'תאום גבוה מסוג th.',noteEn:'High-class th.'},
  {kind:'consonant',cls:'high',id:'c_thor_thung',symbol:'ถ',name:'ถอ ถุง',nameRoman:'tho thung',localHe:'עיצור th — tho thung',localEn:'th consonant — tho thung',sound:'th',he:'th',boardWord:'ถุง',boardMeaningHe:'שקית',boardMeaningEn:'bag',emoji:'🛍️',writingHe:'מחלקה גבוהה. th מנושף.',writingEn:'High class. Aspirated th.',noteHe:'ถุง = שקית.',noteEn:'ถุง = bag.'},
  {kind:'consonant',cls:'high',id:'c_phor_phueng',symbol:'ผ',name:'ผอ ผึ้ง',localHe:'עיצור ph — pho phueng',localEn:'ph consonant — pho phueng',sound:'ph',he:'ph',boardWord:'ผึ้ง',boardMeaningHe:'דבורה',boardMeaningEn:'bee',emoji:'🐝',writingHe:'מחלקה גבוהה. ph מנושף (לא f).',writingEn:'High class. Aspirated ph (not f).',noteHe:'תאום גבוה של พ.',noteEn:'High twin of พ.'},
  {kind:'consonant',cls:'high',id:'c_for_faa',symbol:'ฝ',name:'ฝอ ฝา',nameRoman:'fo faa',localHe:'עיצור f — fo faa',localEn:'f consonant — fo faa',sound:'f',he:'f',boardWord:'ฝา',boardMeaningHe:'מכסה',boardMeaningEn:'lid',emoji:'🫙',writingHe:'מחלקה גבוהה. צליל f.',writingEn:'High class. f sound.',noteHe:'תאום גבוה של ฟ.',noteEn:'High twin of ฟ.'},
  {kind:'consonant',cls:'high',id:'c_sor_saalaa',symbol:'ศ',name:'ศอ ศาลา',nameRoman:'so saa-laa',localHe:'עיצור s — so saalaa',localEn:'s consonant — so saalaa',sound:'s',he:'s',boardWord:'ศาลา',boardMeaningHe:'ביתן / סוכה',boardMeaningEn:'pavilion',emoji:'🛖',writingHe:'מחלקה גבוהה. צליל s.',writingEn:'High class. s sound.',noteHe:'משמש במילים ממקור סנסקריט.',noteEn:'Used in Sanskrit-origin words.'},
  {kind:'consonant',cls:'high',id:'c_sor_ruesi',symbol:'ษ',name:'ษอ ฤๅษี',nameRoman:'so rue-sii',localHe:'עיצור s — so ruesi',localEn:'s consonant — so ruesi',sound:'s',he:'s',boardWord:'ฤๅษี',boardMeaningHe:'נזיר מתבודד',boardMeaningEn:'hermit',emoji:'🧘',writingHe:'מחלקה גבוהה. צליל s.',writingEn:'High class. s sound.',noteHe:'משמש במילים ממקור סנסקריט.',noteEn:'Used in Sanskrit-origin words.'},
  {kind:'consonant',cls:'high',id:'c_sor_suea',symbol:'ส',name:'สอ เสือ',nameRoman:'so suea',localHe:'עיצור s — so suea',localEn:'s consonant — so suea',sound:'s',he:'s',boardWord:'เสือ',boardMeaningHe:'נמר',boardMeaningEn:'tiger',emoji:'🐯',writingHe:'מחלקה גבוהה. צליל s הנפוץ ביותר.',writingEn:'High class. The most common s.',noteHe:'เสือ = נמר.',noteEn:'เสือ = tiger.'},
  {kind:'consonant',cls:'high',id:'c_hor_hiip',symbol:'ห',name:'หอ หีบ',nameRoman:'ho hiip',localHe:'עיצור h — ho hiip',localEn:'h consonant — ho hiip',sound:'h',he:'h',boardWord:'หีบ',boardMeaningHe:'תיבה / ארגז',boardMeaningEn:'chest / box',emoji:'🧰',writingHe:'מחלקה גבוהה. גם משמש כ־ห นำ שמשנה טון.',writingEn:'High class. Also used as leading ห that changes tone.',noteHe:'ห นำ: לרוב לא נהגית אך משפיעה על הטון.',noteEn:'Leading ห: usually silent but sets the tone.'},
  {kind:'consonant',cls:'low',id:'c_khor_khwai',symbol:'ค',name:'คอ ควาย',localHe:'עיצור kh — kho khwai',localEn:'kh consonant — kho khwai',sound:'kh',he:'kh',boardWord:'ควาย',boardMeaningHe:'תאו',boardMeaningEn:'buffalo',emoji:'🐃',writingHe:'מחלקה נמוכה. kh מנושף.',writingEn:'Low class. Aspirated kh.',noteHe:'תאום נמוך של ข.',noteEn:'Low twin of ข.'},
  {kind:'consonant',cls:'low',id:'c_khor_khon',symbol:'ฅ',name:'ฅอ คน',nameRoman:'kho khon',localHe:'עיצור kh — kho khon (מיושן)',localEn:'kh consonant — kho khon (obsolete)',sound:'kh',he:'kh',boardWord:'คน',boardMeaningHe:'אדם',boardMeaningEn:'person',emoji:'🧑',writingHe:'מחלקה נמוכה. אות מיושנת שאינה בשימוש כיום.',writingEn:'Low class. Obsolete letter, no longer used.',noteHe:'הוחלפה ב־ค.',noteEn:'Replaced by ค.'},
  {kind:'consonant',cls:'low',id:'c_khor_rakhang',symbol:'ฆ',name:'ฆอ ระฆัง',nameRoman:'kho ra-khang',localHe:'עיצור kh — kho rakhang',localEn:'kh consonant — kho rakhang',sound:'kh',he:'kh',boardWord:'ระฆัง',boardMeaningHe:'פעמון',boardMeaningEn:'bell',emoji:'🔔',writingHe:'מחלקה נמוכה. kh מנושף. נדיר.',writingEn:'Low class. Aspirated kh. Rare.',noteHe:'תאום נמוך נדיר מסוג kh.',noteEn:'Rare low-class kh.'},
  {kind:'consonant',cls:'low',id:'c_chor_chang',symbol:'ช',name:'ชอ ช้าง',localHe:'עיצור ch — cho chang',localEn:'ch consonant — cho chang',sound:'ch',he:'ch',boardWord:'ช้าง',boardMeaningHe:'פיל',boardMeaningEn:'elephant',emoji:'🐘',writingHe:'מחלקה נמוכה. ch מנושף.',writingEn:'Low class. Aspirated ch.',noteHe:'תאום נמוך של ฉ.',noteEn:'Low twin of ฉ.'},
  {kind:'consonant',cls:'low',id:'c_sor_soo',symbol:'ซ',name:'ซอ โซ่',localHe:'עיצור s — so soo',localEn:'s consonant — so soo',sound:'s',he:'s',boardWord:'โซ่',boardMeaningHe:'שרשרת',boardMeaningEn:'chain',emoji:'⛓️',writingHe:'מחלקה נמוכה. צליל s.',writingEn:'Low class. s sound.',noteHe:'תאום נמוך של ส.',noteEn:'Low twin of ส.'},
  {kind:'consonant',cls:'low',id:'c_chor_choe',symbol:'ฌ',name:'ฌอ เฌอ',nameRoman:'cho choe',localHe:'עיצור ch — cho choe',localEn:'ch consonant — cho choe',sound:'ch',he:'ch',boardWord:'เฌอ',boardMeaningHe:'עץ (לשון גבוהה)',boardMeaningEn:'tree (poetic)',emoji:'🌳',writingHe:'מחלקה נמוכה. ch מנושף. נדיר.',writingEn:'Low class. Aspirated ch. Rare.',noteHe:'נדיר מאוד בשימוש.',noteEn:'Very rare in use.'},
  {kind:'consonant',cls:'low',id:'c_yor_ying',symbol:'ญ',name:'ญอ หญิง',localHe:'עיצור y — yo ying',localEn:'y consonant — yo ying',sound:'y',he:'y',boardWord:'หญิง',boardMeaningHe:'אישה',boardMeaningEn:'woman',emoji:'👩',writingHe:'מחלקה נמוכה. y בתחילה; n בסוף הברה.',writingEn:'Low class. y initially; n as a final.',noteHe:'תאום נמוך מסוג y.',noteEn:'Low-class y.'},
  {kind:'consonant',cls:'low',id:'c_thor_monthoo',symbol:'ฑ',name:'ฑอ มณโฑ',nameRoman:'tho mon-tho',localHe:'עיצור th — tho monthoo',localEn:'th consonant — tho monthoo',sound:'th',he:'th',boardWord:'มณโฑ',boardMeaningHe:'מונתו (דמות ברמאקיאן)',boardMeaningEn:'Montho (Ramakien figure)',emoji:'👸',writingHe:'מחלקה נמוכה. לרוב th, לעיתים d במילים מסוימות.',writingEn:'Low class. Usually th, sometimes d in some words.',noteHe:'נדיר.',noteEn:'Rare.'},
  {kind:'consonant',cls:'low',id:'c_thor_phuthao',symbol:'ฒ',name:'ฒอ ผู้เฒ่า',nameRoman:'tho phuu-thao',localHe:'עיצור th — tho phuthao',localEn:'th consonant — tho phuthao',sound:'th',he:'th',boardWord:'ผู้เฒ่า',boardMeaningHe:'זקן / ישיש',boardMeaningEn:'elder',emoji:'👴',writingHe:'מחלקה נמוכה. th מנושף. נדיר.',writingEn:'Low class. Aspirated th. Rare.',noteHe:'נדיר בשימוש.',noteEn:'Rare in use.'},
  {kind:'consonant',cls:'low',id:'c_nor_nen',symbol:'ณ',name:'ณอ เณร',nameRoman:'no nen',localHe:'עיצור n — no nen',localEn:'n consonant — no nen',sound:'n',he:'n',boardWord:'เณร',boardMeaningHe:'נזיר צעיר',boardMeaningEn:'novice monk',emoji:'🧎',writingHe:'מחלקה נמוכה. צליל n. משמש במילים ממקור סנסקריט.',writingEn:'Low class. n sound. Used in Sanskrit-origin words.',noteHe:'תאום נמוך של น.',noteEn:'Low twin of น.'},
  {kind:'consonant',cls:'low',id:'c_thor_thahan',symbol:'ท',name:'ทอ ทหาร',localHe:'עיצור th — tho thahan',localEn:'th consonant — tho thahan',sound:'th',he:'th',boardWord:'ทหาร',boardMeaningHe:'חייל',boardMeaningEn:'soldier',emoji:'💂',writingHe:'מחלקה נמוכה. th מנושף הנפוץ ביותר.',writingEn:'Low class. The most common aspirated th.',noteHe:'ทหาร = חייל.',noteEn:'ทหาร = soldier.'},
  {kind:'consonant',cls:'low',id:'c_thor_thong',symbol:'ธ',name:'ธอ ธง',nameRoman:'tho thong',localHe:'עיצור th — tho thong',localEn:'th consonant — tho thong',sound:'th',he:'th',boardWord:'ธง',boardMeaningHe:'דגל',boardMeaningEn:'flag',emoji:'🚩',writingHe:'מחלקה נמוכה. th מנושף.',writingEn:'Low class. Aspirated th.',noteHe:'ธง = דגל.',noteEn:'ธง = flag.'},
  {kind:'consonant',cls:'low',id:'c_phor_phaan',symbol:'พ',name:'พอ พาน',localHe:'עיצור ph — pho phaan',localEn:'ph consonant — pho phaan',sound:'ph',he:'ph',boardWord:'พาน',boardMeaningHe:'מגש טקסי',boardMeaningEn:'ceremonial tray',emoji:'🍽️',writingHe:'מחלקה נמוכה. ph מנושף (לא f).',writingEn:'Low class. Aspirated ph (not f).',noteHe:'תאום נמוך של ผ.',noteEn:'Low twin of ผ.'},
  {kind:'consonant',cls:'low',id:'c_for_fan',symbol:'ฟ',name:'ฟอ ฟัน',localHe:'עיצור f — fo fan',localEn:'f consonant — fo fan',sound:'f',he:'f',boardWord:'ฟัน',boardMeaningHe:'שן',boardMeaningEn:'tooth',emoji:'🦷',writingHe:'מחלקה נמוכה. צליל f.',writingEn:'Low class. f sound.',noteHe:'תאום נמוך של ฝ.',noteEn:'Low twin of ฝ.'},
  {kind:'consonant',cls:'low',id:'c_phor_samphao',symbol:'ภ',name:'ภอ สำเภา',nameRoman:'pho sam-phao',localHe:'עיצור ph — pho samphao',localEn:'ph consonant — pho samphao',sound:'ph',he:'ph',boardWord:'สำเภา',boardMeaningHe:'ספינת מפרש',boardMeaningEn:'junk sailboat',emoji:'⛵',writingHe:'מחלקה נמוכה. ph מנושף.',writingEn:'Low class. Aspirated ph.',noteHe:'תאום נמוך מסוג ph.',noteEn:'Low-class ph.'},
  {kind:'consonant',cls:'low',id:'c_ror_ruea',symbol:'ร',name:'รอ เรือ',localHe:'עיצור r — ro ruea',localEn:'r consonant — ro ruea',sound:'r',he:'r',boardWord:'เรือ',boardMeaningHe:'סירה',boardMeaningEn:'boat',emoji:'🚤',writingHe:'מחלקה נמוכה. r מתגלגל; בסוף הברה נשמע n.',writingEn:'Low class. Rolled r; sounds like n as a final.',noteHe:'เรือ = סירה.',noteEn:'เรือ = boat.'},
  {kind:'consonant',cls:'low',id:'c_lor_ling',symbol:'ล',name:'ลอ ลิง',localHe:'עיצור l — lo ling',localEn:'l consonant — lo ling',sound:'l',he:'l',boardWord:'ลิง',boardMeaningHe:'קוף',boardMeaningEn:'monkey',emoji:'🐒',writingHe:'מחלקה נמוכה. l בתחילה; n בסוף הברה.',writingEn:'Low class. l initially; n as a final.',noteHe:'ลิง = קוף.',noteEn:'ลิง = monkey.'},
  {kind:'consonant',cls:'low',id:'c_lor_chulaa',symbol:'ฬ',name:'ฬอ จุฬา',nameRoman:'lo ju-laa',localHe:'עיצור l — lo chulaa',localEn:'l consonant — lo chulaa',sound:'l',he:'l',boardWord:'จุฬา',boardMeaningHe:'עפיפון מסורתי',boardMeaningEn:'traditional kite',emoji:'🪁',writingHe:'מחלקה נמוכה. צליל l. נדיר.',writingEn:'Low class. l sound. Rare.',noteHe:'תאום נמוך נדיר של ล.',noteEn:'Rare low twin of ล.'},
  {kind:'consonant',cls:'low',id:'c_hor_nokhuuk',symbol:'ฮ',name:'ฮอ นกฮูก',nameRoman:'ho nok-huuk',localHe:'עיצור h — ho nokhuuk',localEn:'h consonant — ho nokhuuk',sound:'h',he:'h',boardWord:'นกฮูก',boardMeaningHe:'ינשוף',boardMeaningEn:'owl',emoji:'🦉',writingHe:'מחלקה נמוכה. צליל h.',writingEn:'Low class. h sound.',noteHe:'תאום נמוך של ห.',noteEn:'Low twin of ห.'}
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
      ? `${t('boardWordLine')}: ${x.word} (${x.wordRoman}) — ${x.he} / ${x.en}`
      : `${t('boardWordLine')}: ${x.word} (${x.wordRoman}) — ${x.en}`;
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
// M6: tone/consonant-class rules (from the owner's Anki deck) as Level 1.2 questions.
const TONE_CLASS_PAIRS = [
  {id:'tone_kh', sound:'kh (כּ/ק)', high:'ข ฃ',   low:'ค ฅ ฆ',    hi1:'ข', lo1:'ค', table:'ขา עולה · ข่า נמוך · คา אמצעי · ค่า יורד · ค้า גבוה'},
  {id:'tone_ch', sound:'ch (צ׳)',  high:'ฉ',      low:'ช ฌ',      hi1:'ฉ', lo1:'ช', table:'ฉา עולה · ฉ่า נמוך · ชา אמצעי · ช่า יורד · ช้า גבוה'},
  {id:'tone_th', sound:'th (ת/ט)', high:'ถ ฐ',    low:'ท ธ ฒ ฑ',  hi1:'ถ', lo1:'ท', table:'ถา עולה · ถ่า נמוך · ทา אמצעי · ท่า יורד · ท้า גבוה'},
  {id:'tone_ph', sound:'ph (פּ)',  high:'ผ',      low:'พ ภ',      hi1:'ผ', lo1:'พ', table:'ผา עולה · ผ่า נמוך · พา אמצעי · พ่า יורד · พ้า גבוה'},
  {id:'tone_f',  sound:'f (פ)',    high:'ฝ',      low:'ฟ',        hi1:'ฝ', lo1:'ฟ', table:'ฝา עולה · ฝ่า נמוך · ฟา אמצעי · ฟ่า יורד · ฟ้า גבוה'},
  {id:'tone_s',  sound:'s (ס/ש)',  high:'ส ศ ษ',  low:'ซ',        hi1:'ส', lo1:'ซ', table:'สา עולה · ส่า נמוך · ซา אמצעי · ซ่า יורד · ซ้า גבוה'},
  {id:'tone_h',  sound:'h (ה)',    high:'ห',      low:'ฮ',        hi1:'ห', lo1:'ฮ', table:'หา עולה · ห่า נמוך · ฮา אמצעי · ฮ่า יורד · ฮ้า גבוה'},
];
const TONE_RULE_CARDS = [
  {id:'tone_maiek_low',  mark:'่', markName:'Mai Ek (่)',  answerHe:'יורד (Falling)', answerEn:'Falling', example:'ค่า',
   explainHe:'באות גבוהה Mai Ek נותן טון נמוך, אבל ב-Low class הוא קופץ רמה אחת למעלה — לטון יורד.',
   explainEn:'On a high-class letter Mai Ek gives a low tone, but on a Low-class letter it jumps up one step — to Falling.'},
  {id:'tone_maitho_low', mark:'้', markName:'Mai Tho (้)', answerHe:'גבוה (High)',    answerEn:'High',    example:'ค้า',
   explainHe:'באות גבוהה Mai Tho נותן טון יורד, אבל ב-Low class הוא קופץ רמה אחת למעלה — לטון גבוה.',
   explainEn:'On a high-class letter Mai Tho gives a falling tone, but on a Low-class letter it jumps up one step — to High.'},
];
const TONE_OPTIONS_HE = ['עולה (Rising)','נמוך (Low)','אמצעי (Mid)','יורד (Falling)','גבוה (High)'];
const TONE_OPTIONS_EN = ['Rising','Low','Mid','Falling','High'];
function makeToneRulePair(){
  const he = isHebrew();
  if(Math.random() < 0.72){
    const c = TONE_CLASS_PAIRS[Math.floor(Math.random()*TONE_CLASS_PAIRS.length)];
    const item = {id:c.id, symbol:c.hi1, kind:'consonant', emoji:'🎼',
      name: he ? 'מחלקות גבוהה↔נמוכה' : 'High↔Low classes', localHe:'חוק טונים · צליל '+c.sound, localEn:'Tone rule · '+c.sound};
    const correct = c.low;
    const distractors = TONE_CLASS_PAIRS.filter(x => x.id !== c.id).map(x => x.low);
    const choices = sampleChoices(correct, distractors, 4);
    const mcq = { type:'tone_pair',
      question: he ? `מחלקה גבוהה (${c.high}) בצליל ${c.sound} — מהו התאום הנמוך (Low class)?`
                   : `High class (${c.high}) for the ${c.sound} sound — what is the Low-class twin?`,
      correct, choices,
      explanation: he ? `התאום הנמוך: ${c.low}. חוק הטונים המשולב: ${c.table}`
                      : `Low twin: ${c.low}. Combined tone rule: ${c.table}` };
    const writing = {
      prompt: he ? `כתוב את התאום הנמוך של הצליל ${c.sound}: ${c.lo1}` : `Write the Low-class twin of ${c.sound}: ${c.lo1}`,
      expected: c.lo1,
      hint: he ? `רמז — התאומים הנמוכים: ${c.low}` : `Hint — low twins: ${c.low}` };
    return { item, mode:'level12_pair', mcq, writing, expected: c.lo1 };
  }
  const c = TONE_RULE_CARDS[Math.floor(Math.random()*TONE_RULE_CARDS.length)];
  const item = {id:c.id, symbol:c.mark, kind:'sign', emoji:'🎵',
    name:c.markName, localHe:'סימן טון על מחלקה נמוכה', localEn:'Tone mark on Low class'};
  const correct = he ? c.answerHe : c.answerEn;
  const opts = he ? TONE_OPTIONS_HE : TONE_OPTIONS_EN;
  const choices = sampleChoices(correct, opts.filter(o => o !== correct), 5);
  const mcq = { type:'tone_rule',
    question: he ? `סימן הטון ${c.markName} מעל אות Low class — איזה טון מתקבל בהברה חיה?`
                 : `Tone mark ${c.markName} on a Low-class letter — which tone results (live syllable)?`,
    correct, choices, explanation: he ? c.explainHe : c.explainEn };
  const writing = {
    prompt: he ? `כתוב דוגמה בתאית שמדגימה את החוק: ${c.example}` : `Write a Thai example of this rule: ${c.example}`,
    expected: c.example,
    hint: he ? `דוגמה: ${c.example}` : `Example: ${c.example}` };
  return { item, mode:'level12_pair', mcq, writing, expected: c.example };
}
function makeLevel12PairedQuestion(){
  // ~30% of Level 1.2 questions teach the tone/consonant-class rules.
  if(Math.random() < 0.30) return makeToneRulePair();
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
const DEFAULT_SYNC_URL = 'https://script.google.com/macros/s/AKfycbzYtqebOW77JYzd8OEHzDFzxscn6P8F-kTJIKfzEYS9B-Xz2lmcPYoAMhlmIfEzji8/exec';
// The pre-gzip deployment (v1.10). It rejects compressed payloads, so any device
// still pointing at it — even one that saved it as a "custom" URL — is force-migrated
// to DEFAULT_SYNC_URL on load (see init) so uploads reach the v1.11+ endpoint.
const RETIRED_SYNC_URLS = ['https://script.google.com/macros/s/AKfycbzGmWyS8bXJJMPzV9gMB9yQ1PYWO-IjAp0iPmSVt7Y-ZNxX2fFMXjR0UKZvIZV3ABZG/exec'];
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
let lastFxTheme = null;
let drawing = false;
let lastPoint = null;
// M4: capture strokes (CSS coords) for Ink Replay + GIF export.
let capturedStrokes = [];
let currentStroke = null;
let smoothPoint = null;
let eraserMode = false;

const el = id => document.getElementById(id);
const canvas = el('writeCanvas');
const ctx = canvas.getContext('2d');

// M1: functional reward tokens earned from load challenges.
const TOKEN_META = {
  hint:  {emoji:'💡', he:'רמז',        en:'Hint'},
  freeze:{emoji:'❄️', he:'הקפאת רצף',  en:'Freeze'},
  boost: {emoji:'⚡', he:'בוסט',        en:'Boost'},
};
// M1b: two daily challenges. Config lives in RewardsCore.CHALLENGES; labels here.
const CHALLENGE_LABELS = {
  load:   {he:'אתגר עומס',   en:'Load challenge'},
  sprint: {he:'אתגר ספרינט', en:'Sprint challenge'},
};
function challengeConfig(type){
  const reg = (typeof RewardsCore !== 'undefined') ? RewardsCore.CHALLENGES : null;
  if(reg && reg[type]) return reg[type];
  if(reg && reg.load) return reg.load;
  return {id:'load', target:DAILY_BONUS_TARGET, requiredAccuracy:DAILY_BONUS_REQUIRED_ACCURACY, durationMs:DAILY_BONUS_DURATION_MS, reward:DAILY_BONUS_REWARD, requiredLevel12:DAILY_BONUS_REQUIRED_LEVEL12, requiredLevel:null};
}
function challengeLabel(type){ const l = CHALLENGE_LABELS[type] || CHALLENGE_LABELS.load; return isHebrew() ? l.he : l.en; }
function challengeDurationText(cfg){
  const mins = Math.round((cfg.durationMs || 0) / 60000);
  if(mins % 60 === 0){
    const hours = mins / 60;
    if(isHebrew()) return hours === 1 ? 'שעה' : hours === 2 ? 'שעתיים' : `${hours} שעות`;
    return `${hours}h`;
  }
  return isHebrew() ? `${mins} דק׳` : `${mins} min`;
}
function defaultState(){
  return { stats:{correct:0,wrong:0,streak:0,total:0}, itemStats:{}, history:[], daily:{date:'',active:false,done:0,goal:15,correct:0,wrong:0,awarded:false,bonus:{status:'idle',startedAt:null,durationMs:DAILY_BONUS_DURATION_MS,total:0,correct:0,level12:0,target:DAILY_BONUS_TARGET,requiredAccuracy:DAILY_BONUS_REQUIRED_ACCURACY,requiredLevel12:DAILY_BONUS_REQUIRED_LEVEL12,reward:DAILY_BONUS_REWARD,awarded:false,warned15:false,warned5:false,boostNotice:false},completed:{}}, coach:{points:0,unlocked:['ocean','notebook','neon','minimal','island'],lastAwardDate:'',voiceCheer:false,voiceCheerAutoEnabled:false,tokens:{hint:0,freeze:0,boost:0},exams:{},dexClaimed:false}, achievements:{}, penSize:5, penMode:'regular', inputMode:'write', syncUrl:'', syncUrlCustom:false, lastSync:null, lang:'he', userId:'rif', theme:'ocean', prefs:{sfx:true,skinMode:'dark'} };
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
  try {
    const defaults = defaultState();
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    return { ...defaults, ...saved, prefs:{...defaults.prefs, ...(saved.prefs || {})} };
  }
  catch { return defaultState(); }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function init(){
  setupLevels(); setupModes(); setupCanvas(); setupEvents(); setupPwa(); applyTheme(); applyLanguage(); runQA();
  // v1.25.35: force-migrate off the retired pre-gzip deployment even if saved as custom.
  if(state.syncUrl && RETIRED_SYNC_URLS.includes(state.syncUrl.replace(/\/$/, ''))){ state.syncUrl = DEFAULT_SYNC_URL; state.syncUrlCustom = false; saveState(); }
  // v1.25.7: keep sync simple for normal users. Old bad URLs saved in localStorage are reset to the official endpoint.
  if(!state.syncUrl || (!state.syncUrlCustom && state.syncUrl !== DEFAULT_SYNC_URL)){ state.syncUrl = DEFAULT_SYNC_URL; state.syncUrlCustom = false; saveState(); }
  el('syncUrl').value = state.syncUrl || DEFAULT_SYNC_URL;
  el('userIdInput').value = state.userId || 'rif';
  if(el('penSizeInput')) el('penSizeInput').value = String(state.penSize || 5);
  if(el('premiumPenSelect')) el('premiumPenSelect').value = state.penMode || 'regular';
  updateSyncHealth();
  // M2: celebration/juice overlay + sound preference.
  if(!state.prefs || typeof state.prefs !== 'object') state.prefs = {sfx:true,skinMode:'dark'};
  if(typeof state.prefs.sfx !== 'boolean') state.prefs.sfx = true;
  if(state.prefs.skinMode !== 'light') state.prefs.skinMode = 'dark';
  if(typeof Juice !== 'undefined'){ Juice.init({medallion:'assets/medallion.png?v=1.25.21'}); Juice.setSound(state.prefs.sfx); }
  if(el('sfxToggle')) el('sfxToggle').checked = state.prefs.sfx;
  if(el('skinModeToggle')) el('skinModeToggle').checked = state.prefs.skinMode === 'light';
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
    {value:'6', label:`${t('level')} 6`}
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
    if(btn) openDailyBonusIntro(btn.getAttribute('data-challenge') || 'load');
  });
  if(el('dailyBonusStartBtn')) el('dailyBonusStartBtn').addEventListener('click', confirmDailyBonusStart);
  if(el('dailyBonusModalClose')) el('dailyBonusModalClose').addEventListener('click', closeDailyBonusIntro);
  if(el('dailyBonusModal')) el('dailyBonusModal').addEventListener('click', e => { if(e.target === el('dailyBonusModal')) closeDailyBonusIntro(); });
  if(el('viewJourneyBtn')) el('viewJourneyBtn').addEventListener('click', () => openProgressMap((state.coach && state.coach.points) || 0, (state.coach && state.coach.points) || 0, {manual:true}));
  document.querySelectorAll('.input-mode-btn').forEach(function(b){ b.addEventListener('click', function(){ setInputMode(b.getAttribute('data-input-mode')); }); });
  if(el('voiceCheerToggle')) el('voiceCheerToggle').addEventListener('change', e => {
    ensureDailyState();
    state.coach.voiceCheer = !!e.target.checked;
    state.coach.voiceCheerAutoEnabled = true;
    saveState();
    updateSkinPanel();
    if(state.coach.voiceCheer) playVoiceCheer({force:true});
  });
  if(el('sfxToggle')) el('sfxToggle').addEventListener('change', e => {
    if(!state.prefs || typeof state.prefs !== 'object') state.prefs = {sfx:true,skinMode:'dark'};
    state.prefs.sfx = !!e.target.checked;
    if(typeof Juice !== 'undefined'){ Juice.setSound(state.prefs.sfx); if(state.prefs.sfx) Juice.correct(document.querySelector('.question-card'), currentThemeJuice()); }
    saveState();
  });
  if(el('skinModeToggle')) el('skinModeToggle').addEventListener('change', e => {
    if(!state.prefs || typeof state.prefs !== 'object') state.prefs = {sfx:true,skinMode:'dark'};
    state.prefs.skinMode = e.target.checked ? 'light' : 'dark';
    saveState();
    applyTheme();
  });
  if(el('inkJudgeBtn')) el('inkJudgeBtn').addEventListener('click', judgeInk);
  if(el('inkReplayBtn')) el('inkReplayBtn').addEventListener('click', replayInk);
  if(el('inkGifBtn')) el('inkGifBtn').addEventListener('click', exportInkGif);
  setupDexInteractions();
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
function currentThemeJuice(){
  const profiles = {
    royal:{palette:['#f9d976','#d49b22','#fff3b0','#7f1d1d'],accent:'#f9d976',sound:'royal'},
    cyber:{palette:['#22d3ee','#38bdf8','#2563eb','#39ff88'],accent:'#22d3ee',sound:'cyber'},
    midnight:{palette:['#a5b4fc','#818cf8','#e0e7ff','#fbbf24'],accent:'#a5b4fc',sound:'midnight'},
    coral:{palette:['#67e8f9','#2dd4bf','#fb7185','#f97316'],accent:'#67e8f9',sound:'coral'},
    festival:{palette:['#fbbf24','#fb7185','#f97316','#fff7ed'],accent:'#fbbf24',sound:'festival'},
    master:{palette:['#f97316','#ef4444','#facc15','#fff7ed'],accent:'#f97316',sound:'master'}
  };
  const id = currentTheme().id;
  const profile = profiles[id];
  return profile ? {...profile,id,character:`assets/skins/${id}/character.webp`} : null;
}
function applyTheme(){
  unlockEligibleThemes();
  const theme = currentTheme();
  if(!isThemeUnlocked(theme)){
    state.theme = 'ocean';
    saveState();
  }
  const activeTheme = currentTheme();
  if(!state.prefs || typeof state.prefs !== 'object') state.prefs = {sfx:true,skinMode:'dark'};
  if(state.prefs.skinMode !== 'light') state.prefs.skinMode = 'dark';
  document.body.classList.remove(...THEMES.map(x=>'theme-'+x.id));
  document.body.classList.add('theme-'+activeTheme.id);
  document.body.classList.toggle('mode-light', state.prefs.skinMode === 'light');
  if(el('skinModeToggle')) el('skinModeToggle').checked = state.prefs.skinMode === 'light';
  if(el('skinModeLabel')) el('skinModeLabel').textContent = isHebrew()
    ? (state.prefs.skinMode === 'light' ? 'מצב מואר פעיל' : 'מצב מוחשך פעיל')
    : (state.prefs.skinMode === 'light' ? 'Light skin mode' : 'Dark skin mode');
  const b = el('themeToggle');
  if(b) b.textContent = isHebrew() ? activeTheme.he : activeTheme.en;
  const meta = document.querySelector('meta[name="theme-color"]');
  if(meta){
    const colors = {ocean:'#07111f',notebook:'#f3efe6',neon:'#080014',minimal:'#edf7ff',island:'#062f3a',lotus:'#180f2e',sakura:'#2a1022',mango:'#241706',rainforest:'#06261d',royal:'#1f1604',cyber:'#03051f',midnight:'#050812',coral:'#042832',festival:'#220b13',master:'#17020b'};
    const lightColors = {royal:'#f7edcf',cyber:'#e7f8fc',midnight:'#eef0ff',coral:'#e6fbfb',festival:'#fff3df',master:'#fff0df'};
    const lightColor = state.prefs.skinMode === 'light' ? lightColors[activeTheme.id] : null;
    meta.setAttribute('content', lightColor || colors[activeTheme.id] || '#07111f');
  }
  if(typeof SkinsFX !== 'undefined'){
    const skinChanged = activeTheme.id !== lastFxTheme;
    lastFxTheme = activeTheme.id;
    if(skinChanged){
      if(typeof SkinsFX.stop === 'function') SkinsFX.stop();
      if(typeof SkinsFX.ambient === 'function') SkinsFX.ambient(activeTheme.id);
      if(typeof SkinsFX.enter === 'function') SkinsFX.enter(activeTheme.id);
    }
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
  document.title = t('docTitle');
  el('eyebrowText').textContent = 'Thai Trainer 🇹🇭 · v' + APP_VERSION;   // same in both languages; APP_VERSION is the only version to bump
  el('mainTitle').textContent = t('title');
  el('subtitleText').textContent = t('subtitle');
  el('langToggle').textContent = t('langButton');
  if(el('shareAppBtn')){
    el('shareAppBtn').setAttribute('aria-label', t('shareApp'));
    el('shareAppBtn').setAttribute('title', t('shareApp'));
  }
  applyTheme();
  el('installBtn').textContent = t('install');
  if(el('controlsPanel')) el('controlsPanel').setAttribute('aria-label', t('controlsAria'));
  el('levelLabel').textContent = t('levelLabel');
  el('levelSelect').setAttribute('aria-label', t('levelSelectAria'));
  el('modeLabelText').textContent = t('modeLabel');
  el('modeSelect').setAttribute('aria-label', t('modeSelectAria'));
  el('newQuestionBtn').textContent = t('newQuestion');
  if(el('dailyPracticeBtn')) el('dailyPracticeBtn').textContent = state.daily?.active ? t('dailyOn') : t('dailyPractice');
  el('clearBtn').textContent = t('clear');
  updateEraserButton();
  if(el('inputModeToggle')) el('inputModeToggle').setAttribute('aria-label', t('inputModeAria'));
  if(el('inputModeWriteLabel')) el('inputModeWriteLabel').textContent = t('inputModeWrite');
  if(el('inputModeTypeLabel')) el('inputModeTypeLabel').textContent = t('inputModeType');
  if(el('writeCanvas')) el('writeCanvas').setAttribute('aria-label', t('canvasAria'));
  if(el('inkJudgeBtn')) el('inkJudgeBtn').textContent = t('inkJudge');
  if(el('inkReplayBtn')) el('inkReplayBtn').textContent = t('inkReplay');
  if(el('inkGifBtn')) el('inkGifBtn').textContent = t('inkGif');
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
  if(el('dexTitle')) el('dexTitle').textContent = t('dexTitle');
  if(el('dexNote')) el('dexNote').textContent = t('dexNote');
  if(el('vowelDexToggleLabel')) el('vowelDexToggleLabel').textContent = t('vowelDexToggle');
  if(el('vowelDexNote')) el('vowelDexNote').textContent = t('vowelDexNote');
  if(el('skinsTitle')) el('skinsTitle').textContent = t('skins');
  if(el('viewJourneyBtn')) el('viewJourneyBtn').textContent = t('viewJourney');
  if(el('voiceCheerLabel')) el('voiceCheerLabel').textContent = t('voiceCheer');
  if(el('sfxLabel')) el('sfxLabel').textContent = t('sfx');
  if(el('dailyBonusModalClose')) el('dailyBonusModalClose').setAttribute('aria-label', t('close'));
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
  if(el('toneDexToggleLabel')) el('toneDexToggleLabel').textContent = isHebrew() ? 'דקס חוקי הטונים' : 'Tone Rules Dex';
  if(el('toneDexNote')) el('toneDexNote').textContent = isHebrew()
    ? 'חוקי הטון של תאית בנגקוקית: מחלקת העיצור, הברה חיה/מתה, סימני טון וחריגי דיבור.'
    : 'Bangkok Thai tone rules: consonant class, live/dead syllables, tone marks, and spoken exceptions.';
  if(el('toneDexDrawer') && el('toneDexDrawer').classList.contains('open')) renderToneDex();
  el('qaSummary').textContent = t('qa');
  if(el('syncStatus').textContent === 'מוכן.' || el('syncStatus').textContent === 'Ready.') el('syncStatus').textContent = t('ready');
  setupLevels();
  setupModes();
  updateAchievementPanel();   // skin grid, token wallet and coach badge bake the language in at render time
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
  // Backward-compatible defaults for reward fields added after V3 saves (M0).
  state.coach.tokens = (typeof RewardsCore !== 'undefined') ? RewardsCore.mergeTokens(state.coach.tokens) : {hint:0,freeze:0,boost:0, ...(state.coach.tokens || {})};
  if(!state.coach.exams || typeof state.coach.exams !== 'object') state.coach.exams = {};
  if(!state.daily.completed || typeof state.daily.completed !== 'object') state.daily.completed = {};
  if(state.daily.date !== todayKey()) state.daily = {...defaultState().daily, date:todayKey()};
  const premiumCount = THEMES.filter(theme => theme.premium && ((state.coach.unlocked || []).includes(theme.id) || (state.coach.points || 0) >= (theme.points || 0))).length;
  if(premiumCount < 3 && state.penMode === 'premium') state.penMode = 'regular';
  if(state.inputMode !== 'type' && state.inputMode !== 'write') state.inputMode = 'write';
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
// Generic tier gate for functional rewards: unlocked once >= N premium skins.
function hasTierReward(tier){
  const count = unlockedPremiumSkinCount();
  return (typeof RewardsCore !== 'undefined') ? RewardsCore.hasTierUnlock(count, tier) : count >= tier;
}
function hasPremiumPen(){
  return hasTierReward((typeof RewardsCore !== 'undefined') ? RewardsCore.TIER.premiumPen : 3);
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
function openDailyBonusIntro(type){
  ensureDailyState();
  type = (type === 'sprint') ? 'sprint' : 'load';
  const bonus = state.daily.bonus;
  if((state.daily.done || 0) < (state.daily.goal || 15)) return;
  if(state.daily.completed && state.daily.completed[type]) return; // used today
  if(bonus.status === 'active') return; // one at a time
  const cfg = challengeConfig(type);
  bonus.pendingType = type;
  bonus.status = 'intro';
  saveState();
  const modal = el('dailyBonusModal');
  if(!modal) return;
  const timeStr = challengeDurationText(cfg);
  const accPct = Math.round((cfg.requiredAccuracy || 0) * 100);
  el('dailyBonusModalKicker').textContent = isHebrew() ? 'בונוס יומי' : 'Daily bonus';
  el('dailyBonusModalTitle').textContent = challengeLabel(type);
  el('dailyBonusModalText').textContent = type === 'sprint'
    ? (isHebrew()
        ? `ספרינט קצר: ${timeStr} ל־${cfg.target} שאלות מרמה 3 בלבד, מעל ${accPct}% דיוק.`
        : `Short sprint: ${timeStr} for ${cfg.target} Level-3 questions, above ${accPct}% accuracy.`)
    : (isHebrew()
        ? `יש לך ${timeStr} לענות על ${cfg.target} שאלות. צריך לעבור ${accPct}% דיוק, וחובה שלפחות ${cfg.requiredLevel12} שאלות יהיו מרמה 1.2.`
        : `You have ${timeStr} to answer ${cfg.target} questions. You need more than ${accPct}% accuracy, and at least ${cfg.requiredLevel12} must be from Level 1.2.`);
  const rules = [
    isHebrew() ? `זמן: ${timeStr}` : `Time: ${timeStr}`,
    isHebrew() ? `יעד: ${cfg.target} שאלות` : `Target: ${cfg.target} questions`,
    isHebrew() ? `דיוק: מעל ${accPct}%` : `Accuracy: above ${accPct}%`,
  ];
  if(cfg.requiredLevel12 > 0) rules.push(isHebrew() ? `חובה: ${cfg.requiredLevel12} שאלות רמה 1.2` : `Required: ${cfg.requiredLevel12} Level 1.2 questions`);
  if(cfg.requiredLevel) rules.push(isHebrew() ? `כל השאלות מרמה ${cfg.requiredLevel}` : `All questions from Level ${cfg.requiredLevel}`);
  rules.push(isHebrew() ? `פרס: ${cfg.reward} נק׳ לסקין הבא` : `Reward: ${cfg.reward} pts toward the next skin`);
  el('dailyBonusModalRules').innerHTML = rules.map(r => `<span>${escapeHtml(r)}</span>`).join('');
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
  const type = bonus.pendingType || 'load';
  const cfg = challengeConfig(type);
  if((state.daily.done || 0) < (state.daily.goal || 15)) return;
  if(state.daily.completed && state.daily.completed[type]) return; // already used today
  if(bonus.status === 'active') return; // one challenge at a time
  Object.assign(bonus, {
    type,
    status:'active',
    startedAt:Date.now(),
    durationMs:cfg.durationMs,
    total:0,
    correct:0,
    level12:0,
    target:cfg.target,
    requiredAccuracy:cfg.requiredAccuracy,
    requiredLevel12:cfg.requiredLevel12,
    requiredLevel:cfg.requiredLevel || null,
    reward:cfg.reward,
    awarded:false,
    warned15:false,
    warned5:false,
    boostNotice:false,
    tokensAwarded:null
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
  // M1: reward the skill with functional tokens (in addition to the points).
  bonus.tokensAwarded = awardChallengeTokens(bonus);
  // M1b: this challenge type is used up for today.
  if(state.daily.completed) state.daily.completed[bonus.type || 'load'] = true;
  unlockEligibleThemes();
  return reward;
}
// M1: grant load-challenge tokens into the wallet; returns the delta for UI.
function awardChallengeTokens(bonus){
  const delta = (typeof RewardsCore !== 'undefined') ? RewardsCore.computeChallengeTokens(bonus) : {hint:1,freeze:0,boost:0};
  if(typeof RewardsCore !== 'undefined') state.coach.tokens = RewardsCore.addTokens(state.coach.tokens, delta);
  return delta;
}
// M5: open a mystery box (guaranteed floor), apply the reward, return its label.
function awardMysteryBox(){
  if(typeof RewardsCore === 'undefined') return '';
  const r = RewardsCore.openMysteryBox();
  if(r.type === 'points'){
    state.coach.points = (state.coach.points || 0) + r.amount;
    unlockEligibleThemes();
    return isHebrew() ? `🎁 תיבה מסתורית: +${r.amount} נק׳` : `🎁 Mystery box: +${r.amount} pts`;
  }
  if(r.type === 'token'){
    state.coach.tokens = RewardsCore.addTokens(state.coach.tokens, {[r.token]:1});
    const m = TOKEN_META[r.token];
    return isHebrew() ? `🎁 תיבה מסתורית: ${m.emoji} ${m.he}` : `🎁 Mystery box: ${m.emoji} ${m.en}`;
  }
  return '';
}
// Short human summary of a token delta, e.g. "💡 רמז ×1 · ❄️ הקפאת רצף ×1".
function tokenDeltaSummary(delta){
  if(!delta) return '';
  return Object.keys(TOKEN_META)
    .filter(k => (delta[k] || 0) > 0)
    .map(k => `${TOKEN_META[k].emoji} ${isHebrew() ? TOKEN_META[k].he : TOKEN_META[k].en} ×${delta[k]}`)
    .join(' · ');
}
function failDailyBonusChallenge(){
  ensureDailyState();
  const bonus = state.daily.bonus;
  if(bonus.status !== 'active') return;
  bonus.status = 'failed';
  bonus.awarded = false;
  // M1b: a failed attempt still consumes this challenge type for today.
  if(state.daily.completed) state.daily.completed[bonus.type || 'load'] = true;
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
  const won = (typeof RewardsCore !== 'undefined')
    ? RewardsCore.isChallengeWon(bonus)
    : ((bonus.total || 0) >= (bonus.target || DAILY_BONUS_TARGET) && (bonus.level12 || 0) >= (bonus.requiredLevel12 || DAILY_BONUS_REQUIRED_LEVEL12) && acc > (bonus.requiredAccuracy || DAILY_BONUS_REQUIRED_ACCURACY));
  if(won){
    const pmOld = (state.coach.points) || 0;
    const reward = awardDailyBonusPoints();
    const tokens = tokenDeltaSummary(bonus.tokensAwarded);
    const mystery = awardMysteryBox();   // M5: guaranteed-floor variable reward
    const pmNew = (state.coach.points) || 0;
    const base = isHebrew() ? `האתגר הושלם. קיבלת ${reward} נק׳.` : `Challenge complete. You earned ${reward} pts.`;
    let msg = tokens ? `${base} ${isHebrew() ? 'ועוד' : 'plus'} ${tokens}` : base;
    if(mystery) msg += ` · ${mystery}`;
    showTransientChallengeNotice(msg, 'ok');
    if(typeof Juice !== 'undefined') Juice.win(currentThemeJuice());
    updateSkinPanel();
    renderDex();
    // v1.26: the journey overlay always headlines a challenge/box win.
    openProgressMap(pmOld, pmNew, {reason:'challenge'});
    return;
  }
  if((bonus.total || 0) >= (bonus.target || DAILY_BONUS_TARGET) && acc <= (bonus.requiredAccuracy || DAILY_BONUS_REQUIRED_ACCURACY) && left > 0 && !bonus.boostNotice){
    bonus.boostNotice = true;
    const tgt = bonus.target || DAILY_BONUS_TARGET;
    showTransientChallengeNotice(isHebrew() ? `ענית על ${tgt} שאלות, אבל הדיוק עדיין נמוך. יש עוד זמן לשפר.` : `You answered ${tgt} questions, but accuracy is still low. Keep going while time remains.`, 'warn');
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
  const pmOld = state.coach.points || 0;
  state.coach.points = (state.coach.points || 0) + points;
  state.coach.lastAwardDate = todayKey();
  state.daily.awarded = true;
  unlockEligibleThemes();
  // v1.26: only surface the journey when this award crosses a station.
  maybeShowProgressMap(pmOld, state.coach.points || 0);
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
  const active = bonus && bonus.status === 'active';
  // M1b: an active challenge can steer the question pool.
  //   sprint -> force its requiredLevel (e.g. '3'); load -> force 1.2 until quota.
  let effectiveLevel = levelValue;
  let forceLevel12 = false;
  if(active){
    if(bonus.requiredLevel){ effectiveLevel = String(bonus.requiredLevel); }
    else if((bonus.requiredLevel12 || 0) > 0 && (bonus.level12 || 0) < bonus.requiredLevel12){ forceLevel12 = true; }
  }
  // M6: Level 6 is now a regular (hardest) vocab level — vowel-board content lives in Level 1.2.
  const mode = forceLevel12 ? 'level12_pair' : effectiveLevel === '5.5' ? 'level55_chat' : effectiveLevel === '1.2' ? 'level12_pair' : pickMode();
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
    let items = WORDS.filter(w=>String(w.level) === String(effectiveLevel));
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
  const itemLevel = mode === 'level55_chat' ? '5.5' : (mode === 'vowel_board' || mode === 'vowel_write' || mode === 'level6_pair') ? '1.2' : (mode === 'level12_pair' ? '1.2' : String(item.level));
  el('levelBadge').textContent = itemLevel === '1.2' ? t('foundationLevel') : `${t('level')} ${itemLevel}`;
  el('modeBadge').textContent = modeLabel(mode);
  updateQuestionProgressBadge();
  el('answerBox').hidden = true;
  renderLevel6Pair(current);
  renderLevel55Chat(current);
  renderStudyCard(current);
  const writingLocked = ((mode === 'level6_pair' || mode === 'level12_pair') && !level6McqAnswered);
  const canvasHidden = mode === 'level55_chat' || writingLocked;   // writing area not usable in this mode
  const typeMode = (state.inputMode || 'write') === 'type';
  const useKeyboard = typeMode && !canvasHidden;                   // keyboard board replaces the canvas
  const canvasWrap = document.querySelector('.canvas-wrap');
  if(canvasWrap) canvasWrap.hidden = canvasHidden || useKeyboard;
  if(el('keyboardBoard')) el('keyboardBoard').hidden = !useKeyboard;
  const modeToggle = el('inputModeToggle');
  if(modeToggle){
    modeToggle.hidden = canvasHidden;
    modeToggle.querySelectorAll('.input-mode-btn').forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-input-mode') === (typeMode ? 'type' : 'write'));
    });
  }
  if(useKeyboard) resetKeyboardBoard();
  el('clearBtn').hidden = canvasHidden || useKeyboard;
  const eraserBtn = el('eraserToggleBtn');
  if(eraserBtn) eraserBtn.hidden = canvasHidden || useKeyboard;
  if(el('penControl')) el('penControl').hidden = canvasHidden || useKeyboard;
  if(el('premiumPenControl')) el('premiumPenControl').hidden = canvasHidden || useKeyboard || !hasPremiumPen();
  updateInkJudge(mode, writingLocked || useKeyboard);
  updateInkReplay();
  if(useKeyboard && el('inkReplay')) el('inkReplay').hidden = true;
  el('showAnswerBtn').hidden = canvasHidden;
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
    options = TONES.map(tt=>({id:tt.id, label: isHebrew() ? `${tt.he} (${tt.en})` : tt.en}));
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
      const b = state.daily.bonus;
      // M1b: only answers matching the challenge's level rule count toward its target.
      const counts = (typeof RewardsCore !== 'undefined') ? RewardsCore.answerCountsToward(b, item.level) : true;
      if(counts){
        b.total = (b.total || 0) + 1;
        if(correct) b.correct = (b.correct || 0) + 1;
      }
      if(mode === 'level12_pair' || String(item.level) === '1.2') b.level12 = (b.level12 || 0) + 1;
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
  if(correct && typeof Juice !== 'undefined') Juice.correct(document.querySelector('.question-card'), currentThemeJuice());
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
  renderDex();
}
// M5: character dex — consonant mastery grid + set-completion bonus.
const DEX_THRESHOLD = 3;
function renderDex(){
  const grid = el('dexGrid'); if(!grid || typeof RewardsCore === 'undefined') return;
  ensureDailyState();
  const cons = BOARD_ITEMS.filter(x => x.kind === 'consonant');
  const ids = cons.map(c => c.id);
  const prog = RewardsCore.dexProgress(state.itemStats, ids, DEX_THRESHOLD);
  if(prog.total > 0 && prog.mastered >= prog.total && !state.coach.dexClaimed){
    state.coach.dexClaimed = true;
    const pmOld = state.coach.points || 0;
    state.coach.points = (state.coach.points || 0) + 50;
    unlockEligibleThemes();
    saveState();
    showTransientChallengeNotice(isHebrew() ? '🏆 השלמת את כל 44 העיצורים! +50 נק׳' : '🏆 All 44 consonants mastered! +50 pts', 'ok');
    if(typeof Juice !== 'undefined') Juice.win(currentThemeJuice());
    maybeShowProgressMap(pmOld, state.coach.points || 0);
  }
  const badge = el('dexBadge'); if(badge) badge.textContent = `${prog.mastered}/${prog.total}`;
  grid.innerHTML = cons.map(c => {
    const st = RewardsCore.dexItemStatus(state.itemStats && state.itemStats[c.id], DEX_THRESHOLD);
    return `<span class="dex-cell dex-${st}" data-dex-id="${escapeHtml(c.id)}" title="${escapeHtml(c.name)}">${escapeHtml(c.symbol)}</span>`;
  }).join('');
}
// M5b: vowel dex — same board data, no mastery colouring.
function renderVowelDex(){
  const grid = el('vowelDexGrid'); if(!grid) return;
  const vows = BOARD_ITEMS.filter(x => x.kind === 'vowel');
  grid.innerHTML = vows.map(v =>
    `<span class="dex-cell dex-vowel" data-dex-id="${escapeHtml(v.id)}" title="${escapeHtml(v.name)}">${escapeHtml(v.symbol)}</span>`
  ).join('');
}
// M5c: Tone Rules Dex — bilingual reference for how consonant class, live/dead
// syllables, tone marks, class-hijacking and Bangkok-spoken exceptions set the tone.
const TONE_LBL = {
  mid:    {he:'אמצעי',  en:'mid',     mark:'สามัญ (Saman)'},
  low:    {he:'נמוך',   en:'low',     mark:'เอก (Ek)'},
  falling:{he:'יורד',   en:'falling', mark:'โท (Tho)'},
  high:   {he:'גבוה',   en:'high',    mark:'ตรี (Tri)'},
  rising: {he:'עולה',   en:'rising',  mark:'จัตวา (Chattawa)'},
};
function toneName(k){ const x = TONE_LBL[k]; return `${isHebrew() ? x.he : x.en} · ${x.mark}`; }
const TONE_DEX = [
  { group:{he:'סוג ההברה', en:'Syllable type'}, cards:[
    { title:{he:'הברה חיה', en:'Live syllable'}, rules:[
      {when:{he:'מסתיימת בתנועה ארוכה או בעיצור סונורנטי', en:'Ends in a long vowel or a sonorant final'},
       note:{he:'עיצורים סופיים: n · m · ng · y · w', en:'Final consonants: n · m · ng · y · w'}} ] },
    { title:{he:'הברה מתה', en:'Dead syllable'}, rules:[
      {when:{he:'מסתיימת בעיצור סותם (p · t · k), או בתנועה קצרה בלי עיצור סופי', en:'Ends in a stop (p · t · k), or a short vowel with no final'},
       note:{he:'תנועה קצרה בלי סוף = עצירה גלוטלית → נחשבת מתה', en:'Short vowel + no final = glottal stop → counts as dead'}} ] },
  ]},
  { group:{he:'חוקי בסיס — בלי סימני טון', en:'Base rules — no tone marks'}, cards:[
    { title:{he:'מחלקה אמצעית', en:'Mid class'}, rules:[
      {when:{he:'הברה חיה', en:'Live'}, then:'mid'},
      {when:{he:'הברה מתה (קצרה/ארוכה)', en:'Dead (short/long)'}, then:'low'} ] },
    { title:{he:'מחלקה גבוהה', en:'High class'}, rules:[
      {when:{he:'הברה חיה', en:'Live'}, then:'rising'},
      {when:{he:'הברה מתה (קצרה/ארוכה)', en:'Dead (short/long)'}, then:'low'} ] },
    { title:{he:'מחלקה נמוכה', en:'Low class'}, rules:[
      {when:{he:'הברה חיה', en:'Live'}, then:'mid'},
      {when:{he:'הברה מתה קצרה', en:'Dead + short vowel'}, then:'high'},
      {when:{he:'הברה מתה ארוכה', en:'Dead + long vowel'}, then:'falling'} ],
      examples:[{thai:'ลบ', roman:'lop', he:'למחוק / חיסור', en:'erase / subtract'}] },
  ]},
  { group:{he:'סימני טון — דורסים את חוקי הבסיס', en:'Tone marks — override the base rules'}, cards:[
    { title:{he:'מחלקה אמצעית וגבוהה', en:'Mid & high class'}, rules:[
      {when:{he:'מאי אק (่)', en:'Mai ek (่)'}, then:'low'},
      {when:{he:'מאי טהו (้)', en:'Mai tho (้)'}, then:'falling'} ],
      examples:[{thai:'บ่อย', roman:'boi', he:'לעתים קרובות', en:'often'}] },
    { title:{he:'מחלקה נמוכה', en:'Low class'}, rules:[
      {when:{he:'מאי אק (่)', en:'Mai ek (่)'}, then:'falling'},
      {when:{he:'מאי טהו (้)', en:'Mai tho (้)'}, then:'high'} ] },
  ]},
  { group:{he:'חטיפת מחלקה', en:'Class hijacking'}, cards:[
    { title:{he:'ห מובילה אילמת', en:'Silent ห lead'}, rules:[
      {when:{he:'ห אילמת לפני עיצור יחיד ממחלקה נמוכה', en:'Silent ห before a single low-class consonant'},
       note:{he:'כל ההברה עוברת לחוקי מחלקה גבוהה', en:'The whole syllable follows High-class rules'}} ],
      examples:[{thai:'ไหว้', roman:'wai', he:'להצדיע / להשתחוות (וואי)', en:'to wai / greet'}] },
    { title:{he:'อ מובילה אילמת', en:'Silent อ lead'}, rules:[
      {when:{he:'อ אילמת לפני ย', en:'Silent อ before ย'},
       note:{he:'ההברה עוברת לחוקי מחלקה אמצעית', en:'The syllable follows Mid-class rules'}} ],
      examples:[
        {thai:'อย่า', roman:'yaa', he:'אל (שלילה)', en:"don't"},
        {thai:'อยาก', roman:'yaak', he:'לרצות', en:'to want'},
        {thai:'อยู่', roman:'yuu', he:'להיות (במקום)', en:'to be at'},
        {thai:'อย่าง', roman:'yaang', he:'סוג / אופן', en:'kind / manner'} ],
      note:{he:'חל רק על ארבע המילים האלה.', en:'Applies only to these four words.'} },
  ]},
  { group:{he:'חריגים בדיבור בנגקוקי', en:'Bangkok spoken exceptions'}, cards:[
    { title:{he:'และ — "ו / וגם"', en:'และ — "and"'}, rules:[
      {when:{he:'לפי החוק: מתה קצרה → גבוה', en:'By rule: short dead → high'},
       note:{he:'בדיבור בנגקוק: אמצעי — התנועה מתארכת', en:'Bangkok speech: mid — the vowel elongates'}} ],
      examples:[{thai:'และ', roman:'lae', he:'ו / וגם', en:'and'}] },
    { title:{he:'ไหม — מילת שאלה', en:'ไหม — question particle'}, rules:[
      {when:{he:'לפי החוק: ห מובילה + חיה → עולה', en:'By rule: ho-hip lead + live → rising'},
       note:{he:'בדיבור: גבוה — נכתב לרוב มั้ย', en:'Speech: high — often written มั้ย'}} ],
      examples:[{thai:'ไหม', roman:'mai', he:'מילת שאלה (כן/לא)', en:'yes/no question particle'}] },
    { title:{he:'ย אילמת בסוף (การันต์ ์)', en:'Silent final ย (karan ์)'}, rules:[
      {when:{he:'ย סופית עם סימן การัน (์)', en:'Final ย carrying a karan mark (์)'},
       note:{he:'מתעלמים מה־ย; הטון נקבע לפי העיצור שלפניה', en:'The ย is ignored; tone comes from the preceding consonant'}} ],
      examples:[{thai:'แพทย์', roman:'phaet', he:'רופא', en:'doctor / physician'}] },
  ]},
];
function renderToneDex(){
  const box = el('toneDexBody'); if(!box) return;
  const he = isHebrew();
  box.innerHTML = TONE_DEX.map(section => {
    const cards = section.cards.map(card => {
      const rules = card.rules.map(r => {
        const then = r.then
          ? `<span class="tone-then tone-${r.then}">${escapeHtml(toneName(r.then))}</span>`
          : `<span class="tone-note">${escapeHtml(he ? r.note.he : r.note.en)}</span>`;
        const when = `<span class="tone-when">${escapeHtml(he ? r.when.he : r.when.en)}</span>`;
        return `<div class="tone-rule">${when}<span class="tone-arrow">→</span>${then}</div>`;
      }).join('');
      const ex = (card.examples || []).map(e =>
        `<div class="tone-ex">${escapeHtml(e.thai)} <span class="tone-ex-rom">(${escapeHtml(e.roman)})</span> — ${escapeHtml(he ? e.he : e.en)}</div>`
      ).join('');
      const note = card.note ? `<div class="tone-cardnote">${escapeHtml(he ? card.note.he : card.note.en)}</div>` : '';
      return `<div class="tone-card"><div class="tone-card-title">${escapeHtml(he ? card.title.he : card.title.en)}</div>${rules}${ex}${note}</div>`;
    }).join('');
    return `<div class="tone-group">${escapeHtml(he ? section.group.he : section.group.en)}</div><div class="tone-cards">${cards}</div>`;
  }).join('');
}
// M5b: hold-to-show info card for a board item (consonant or vowel).
const CLS_LABEL = { high:{he:'מחלקה גבוהה',en:'High class'}, mid:{he:'מחלקה אמצעית',en:'Mid class'}, low:{he:'מחלקה נמוכה',en:'Low class'} };
function dexInfoHtml(item){
  const he = isHebrew();
  const name = `${item.symbol} · ${thaiNameWithRoman(item)}`;
  const rows = [];
  if(item.kind === 'consonant'){
    const c = CLS_LABEL[item.cls] ? (he ? CLS_LABEL[item.cls].he : CLS_LABEL[item.cls].en) : (he ? 'מחלקה לא ידועה' : 'Unknown class');
    rows.push([he ? 'מחלקה' : 'Class', c]);
    rows.push([he ? 'תכונות מיוחדות' : 'Special', (he ? item.noteHe : item.noteEn) || (he ? '—' : '—')]);
  } else {
    rows.push([he ? 'איך מתפקדת' : 'How it works', (he ? item.writingHe : item.writingEn) || '—']);
    rows.push([he ? 'תכונות מיוחדות' : 'Special', (he ? item.noteHe : item.noteEn) || '—']);
  }
  return `<div class="dex-pop-name">${escapeHtml(item.emoji || '')} ${escapeHtml(name)}</div>` +
    rows.map(r => `<div class="dex-pop-row"><b>${escapeHtml(r[0])}:</b> ${escapeHtml(r[1])}</div>`).join('');
}
function showDexPopup(id, anchor){
  const pop = el('dexPopup'); if(!pop) return;
  const item = BOARD_ITEMS.find(x => x.id === id); if(!item) return;
  pop.innerHTML = dexInfoHtml(item);
  pop.hidden = false;
  // position above the pressed cell, clamped to the viewport
  const r = anchor.getBoundingClientRect();
  const pw = Math.min(300, window.innerWidth - 16);
  pop.style.width = pw + 'px';
  let left = r.left + r.width/2 - pw/2;
  left = Math.max(8, Math.min(left, window.innerWidth - pw - 8));
  pop.style.left = left + 'px';
  const ph = pop.offsetHeight;
  let top = r.top - ph - 10;
  if(top < 8) top = r.bottom + 10;   // flip below if no room above
  pop.style.top = top + 'px';
}
function hideDexPopup(){ const pop = el('dexPopup'); if(pop) pop.hidden = true; }
function setupDexInteractions(){
  const panel = document.querySelector('.dex-panel'); if(!panel) return;
  // hold-to-show (pointer covers mouse + touch)
  panel.addEventListener('pointerdown', e => {
    const cell = e.target.closest && e.target.closest('.dex-cell[data-dex-id]');
    if(!cell) return;
    e.preventDefault();
    showDexPopup(cell.getAttribute('data-dex-id'), cell);
  });
  const release = () => hideDexPopup();
  window.addEventListener('pointerup', release);
  window.addEventListener('pointercancel', release);
  panel.addEventListener('pointerleave', release);
  panel.addEventListener('contextmenu', e => { if(e.target.closest && e.target.closest('.dex-cell')) e.preventDefault(); });
  // vowel dex drawer toggle
  const toggle = el('vowelDexToggle');
  if(toggle) toggle.addEventListener('click', () => {
    const drawer = el('vowelDexDrawer'); if(!drawer) return;
    const open = drawer.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    const chev = toggle.querySelector('.dex-chev'); if(chev) chev.textContent = open ? '▲' : '▼';
    if(open) renderVowelDex();
  });
  const toneToggle = el('toneDexToggle');
  if(toneToggle) toneToggle.addEventListener('click', () => {
    const drawer = el('toneDexDrawer'); if(!drawer) return;
    const open = drawer.classList.toggle('open');
    toneToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    const chev = toneToggle.querySelector('.dex-chev'); if(chev) chev.textContent = open ? '▲' : '▼';
    if(open) renderToneDex();
  });
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

  // One challenge active -> live metrics only (one at a time).
  if(bonus.status === 'active'){
    const acc = Math.round(dailyBonusAccuracy() * 100);
    const accPct = Math.round((bonus.requiredAccuracy || 0) * 100);
    const metrics = [
      isHebrew() ? `שאלות ${bonus.total || 0}/${bonus.target || 0}` : `Questions ${bonus.total || 0}/${bonus.target || 0}`,
      isHebrew() ? `דיוק ${acc}% / מעל ${accPct}%` : `Accuracy ${acc}% / above ${accPct}%`,
    ];
    if((bonus.requiredLevel12 || 0) > 0) metrics.push(isHebrew() ? `רמה 1.2 ${bonus.level12 || 0}/${bonus.requiredLevel12}` : `Level 1.2 ${bonus.level12 || 0}/${bonus.requiredLevel12}`);
    if(bonus.requiredLevel) metrics.push(isHebrew() ? `רמה ${bonus.requiredLevel} בלבד` : `Level ${bonus.requiredLevel} only`);
    panel.innerHTML = `
      <div>
        <strong>${escapeHtml(isHebrew() ? `${challengeLabel(bonus.type)} פעיל` : `${challengeLabel(bonus.type)} active`)}</strong>
        <span>${escapeHtml(isHebrew() ? `זמן שנותר: ${formatBonusTime(dailyBonusTimeLeft())}` : `Time left: ${formatBonusTime(dailyBonusTimeLeft())}`)}</span>
      </div>
      <div class="bonus-metrics">${metrics.map(m => `<span>${escapeHtml(m)}</span>`).join('')}</div>`;
    return;
  }

  // Otherwise: offer each challenge not yet used today; show a done note for the rest.
  const completed = state.daily.completed || {};
  const rows = ['load','sprint'].map(type => {
    const cfg = challengeConfig(type);
    const label = challengeLabel(type);
    if(completed[type]){
      return `<div class="challenge-row done"><div><strong>${escapeHtml(label)}</strong><span>${escapeHtml(isHebrew() ? 'הושלם היום ✓ · חוזר מחר' : 'Done today ✓ · back tomorrow')}</span></div></div>`;
    }
    const accPct = Math.round((cfg.requiredAccuracy || 0) * 100);
    const lvl = cfg.requiredLevel
      ? (isHebrew() ? `רמה ${cfg.requiredLevel}` : `Level ${cfg.requiredLevel}`)
      : (isHebrew() ? `חובה ${cfg.requiredLevel12} ברמה 1.2` : `${cfg.requiredLevel12} at Level 1.2`);
    const desc = `${challengeDurationText(cfg)} · ${cfg.target} ${isHebrew() ? 'שאלות' : 'q'} · ${isHebrew() ? 'מעל' : '>'} ${accPct}% · ${lvl} · ${cfg.reward} ${isHebrew() ? 'נק׳' : 'pts'}`;
    return `<div class="challenge-row"><div><strong>${escapeHtml(label)}</strong><span>${escapeHtml(desc)}</span></div>
      <button type="button" class="secondary" data-daily-bonus-action="start" data-challenge="${type}">${escapeHtml(isHebrew() ? 'פתח' : 'Open')}</button></div>`;
  });
  panel.innerHTML = rows.join('');
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
// ---- M3: Ink Judge — score the learner's handwriting vs the target glyph ----
const INK_N = 48;                 // comparison grid resolution
const INK_FONT = '"Noto Sans Thai","Leelawadee UI","Tahoma",sans-serif';
let inkGhostTimer = null;
function inkJudgeUnlocked(){ return hasTierReward((typeof RewardsCore !== 'undefined') ? RewardsCore.TIER.inkJudge : 5); }
function rasterCanvasToGrid(src, N){
  const off = document.createElement('canvas'); off.width = N; off.height = N;
  const o = off.getContext('2d'); o.clearRect(0,0,N,N);
  o.drawImage(src, 0,0, N, N);
  const d = o.getImageData(0,0,N,N).data, g = new Uint8Array(N*N);
  for(let i=0;i<N*N;i++) g[i] = d[i*4+3] > 24 ? 1 : 0;
  return g;
}
function renderTargetGlyph(text, w, h){
  const off = document.createElement('canvas'); off.width = Math.max(8,w); off.height = Math.max(8,h);
  const o = off.getContext('2d');
  o.fillStyle = '#000'; o.textAlign = 'center'; o.textBaseline = 'middle';
  let fs = Math.floor(h * 0.7); o.font = `700 ${fs}px ${INK_FONT}`;
  const maxW = w * 0.82, m = o.measureText(text).width;
  if(m > maxW && m > 0){ fs = Math.max(12, Math.floor(fs * maxW / m)); o.font = `700 ${fs}px ${INK_FONT}`; }
  o.fillText(text, w/2, h/2);
  return off;
}
function judgeInk(){
  if(!inkJudgeUnlocked()) return;
  const target = current && current.item && current.item.thai;
  if(!target){ return; }
  const rect = canvas.getBoundingClientRect();
  const userGrid = rasterCanvasToGrid(canvas, INK_N);
  const glyphCanvas = renderTargetGlyph(target, Math.round(rect.width), Math.round(rect.height));
  const targetGrid = rasterCanvasToGrid(glyphCanvas, INK_N);
  const res = RewardsCore.inkScore(userGrid, targetGrid, INK_N, 3);
  renderInkJudgeResult(res, target);
  if(!res.empty) showInkGhost(glyphCanvas, res);
}
function renderInkJudgeResult(res, target){
  const box = el('inkJudgeResult'); if(!box) return;
  if(res.empty){
    box.className = 'ink-judge-result';
    box.innerHTML = `<span class="ink-empty">${escapeHtml(isHebrew() ? 'כתוב את האות קודם, ואז שפוט.' : 'Write the letter first, then judge.')}</span>`;
    return;
  }
  const v = RewardsCore.inkVerdict(res.score);
  const labels = isHebrew()
    ? {great:'מעולה! הכתב מדויק', good:'יפה מאוד', fair:'לא רע — כדאי לתרגל', low:'ננסה שוב? עקוב אחרי הצורה'}
    : {great:'Excellent! Crisp writing', good:'Nicely done', fair:'Not bad — keep practicing', low:'Try again — follow the shape'};
  box.className = 'ink-judge-result ink-' + v;
  box.innerHTML =
    `<span class="ink-score">${res.score}%</span>` +
    `<span class="ink-meta"><span class="ink-label">${escapeHtml(labels[v])}</span>` +
    `<span class="ink-sub">${escapeHtml(isHebrew() ? `כיסוי ${Math.round(res.recall*100)}% · דיוק ${Math.round(res.precision*100)}%` : `coverage ${Math.round(res.recall*100)}% · precision ${Math.round(res.precision*100)}%`)}</span></span>`;
}
function showInkGhost(glyphCanvas, res){
  const gc = el('inkGhost'); if(!gc) return;
  const rect = canvas.getBoundingClientRect();
  const ratio = Math.max(1, window.devicePixelRatio || 1);
  gc.width = Math.round(rect.width*ratio); gc.height = Math.round(rect.height*ratio);
  gc.style.width = rect.width+'px'; gc.style.height = rect.height+'px';
  const g = gc.getContext('2d'); g.setTransform(ratio,0,0,ratio,0,0);
  g.clearRect(0,0,rect.width,rect.height);
  g.globalAlpha = 0.30; g.drawImage(glyphCanvas, 0,0, rect.width, rect.height);
  g.globalCompositeOperation = 'source-in';
  g.fillStyle = res.score >= 65 ? '#E0A93B' : '#F97316';
  g.fillRect(0,0,rect.width,rect.height);
  g.globalCompositeOperation = 'source-over'; g.globalAlpha = 1;
  gc.classList.add('show');
  clearTimeout(inkGhostTimer);
  inkGhostTimer = setTimeout(() => gc.classList.remove('show'), 1900);
}
function updateInkJudge(mode, writingLocked){
  const box = el('inkJudge'); if(!box) return;
  const target = current && current.item && current.item.thai;
  const canWrite = mode !== 'level55_chat' && !writingLocked;
  const show = canWrite && inkJudgeUnlocked() && !!target;
  box.hidden = !show;
  const r = el('inkJudgeResult'); if(r) r.innerHTML = '';
  const gc = el('inkGhost'); if(gc) gc.classList.remove('show');
}
// ---- M4: Ink Replay — replay your own handwriting + export a GIF ----
function inkReplayUnlocked(){ return hasTierReward((typeof RewardsCore !== 'undefined') ? RewardsCore.TIER.inkReplay : 8); }
function totalCapturedPoints(){ return capturedStrokes.reduce((s,st) => s + st.length, 0); }
function drawStrokesUpTo(g, upto, lineWidth){
  g.lineCap = 'round'; g.lineJoin = 'round'; g.strokeStyle = '#0b1220'; g.lineWidth = lineWidth || 5;
  let count = 0;
  for(const st of capturedStrokes){
    if(count >= upto) break;
    g.beginPath();
    for(let i=0;i<st.length;i++){
      if(count >= upto) break;
      const p = st[i];
      if(i === 0) g.moveTo(p.x, p.y); else g.lineTo(p.x, p.y);
      count++;
    }
    g.stroke();
  }
}
function currentTargetGlyphCanvas(){
  const target = current && current.item && current.item.thai;
  if(!target) return null;
  const rect = canvas.getBoundingClientRect();
  return renderTargetGlyph(target, Math.round(rect.width), Math.round(rect.height));
}
function replayInk(){
  if(!inkReplayUnlocked() || !capturedStrokes.length) return;
  const gc = el('inkGhost'); if(!gc) return;
  const rect = canvas.getBoundingClientRect();
  const ratio = Math.max(1, window.devicePixelRatio || 1);
  gc.width = Math.round(rect.width*ratio); gc.height = Math.round(rect.height*ratio);
  gc.style.width = rect.width+'px'; gc.style.height = rect.height+'px';
  const g = gc.getContext('2d'); g.setTransform(ratio,0,0,ratio,0,0);
  const glyph = currentTargetGlyphCanvas();
  const total = totalCapturedPoints();
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  gc.classList.add('show');
  const paint = (upto) => {
    g.clearRect(0,0,rect.width,rect.height);
    if(glyph){ g.globalAlpha = 0.16; g.drawImage(glyph, 0,0, rect.width, rect.height); g.globalAlpha = 1; }
    drawStrokesUpTo(g, upto, 5);
  };
  if(reduced){ paint(total); setTimeout(() => gc.classList.remove('show'), 1400); return; }
  const durationMs = 1800, start = performance.now();
  function frame(now){
    const t = Math.min(1, (now - start) / durationMs);
    paint(Math.ceil(t * total));
    if(t < 1) requestAnimationFrame(frame);
    else setTimeout(() => gc.classList.remove('show'), 900);
  }
  requestAnimationFrame(frame);
}
function exportInkGif(){
  if(!inkReplayUnlocked() || !capturedStrokes.length || typeof GIFEncoder === 'undefined') return;
  const rect = canvas.getBoundingClientRect();
  const gw = 260, gh = Math.max(80, Math.round(gw * rect.height / Math.max(1, rect.width)));
  const scale = gw / Math.max(1, rect.width);
  const off = document.createElement('canvas'); off.width = gw; off.height = gh;
  const o = off.getContext('2d');
  const glyph = currentTargetGlyphCanvas();
  const palette = [[247,251,255],[11,18,32],[224,169,59],[150,163,178],[240,216,160],[90,100,120]];
  const enc = GIFEncoder(gw, gh, palette);
  const total = totalCapturedPoints(), frames = 24;
  for(let f=1; f<=frames; f++){
    const p = f / frames;
    o.setTransform(1,0,0,1,0,0);
    o.fillStyle = '#f7fbff'; o.fillRect(0,0,gw,gh);
    if(glyph){ o.globalAlpha = 0.16; o.drawImage(glyph, 0,0, gw, gh); o.globalAlpha = 1; }
    o.setTransform(scale,0,0,scale,0,0);
    drawStrokesUpTo(o, Math.ceil(p * total), 6);
    o.setTransform(1,0,0,1,0,0);
    enc.addFrame(o.getImageData(0,0,gw,gh).data, 70);
  }
  const blob = new Blob([enc.finish()], {type:'image/gif'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'thai-writing.gif';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
  if(typeof Juice !== 'undefined') Juice.correct(document.querySelector('.question-card'), currentThemeJuice());
}
function updateInkReplay(){
  const box = el('inkReplay'); if(!box) return;
  const wrap = document.querySelector('.canvas-wrap');
  const canWrite = wrap && !wrap.hidden;
  box.hidden = !(canWrite && inkReplayUnlocked() && capturedStrokes.length > 0);
}
// M1: render the reward-token wallet (hidden until the first token is earned).
function renderTokenWallet(){
  const wrap = el('tokenWallet');
  if(!wrap) return;
  const tokens = (state.coach && state.coach.tokens) || {hint:0,freeze:0,boost:0};
  const total = Object.keys(TOKEN_META).reduce((s,k)=>s+(tokens[k]||0),0);
  wrap.hidden = total === 0;
  wrap.innerHTML = Object.keys(TOKEN_META).map(k => {
    const name = isHebrew() ? TOKEN_META[k].he : TOKEN_META[k].en;
    return `<span class="token-chip" title="${name}">${TOKEN_META[k].emoji} ${name} <b>${tokens[k] || 0}</b></span>`;
  }).join('');
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
  renderTokenWallet();
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
    // Premium pen ink is per-skin. Royal Gold writes in glowing gold; other
    // premium skins keep the default (dark ink + subtle cyan glow).
    const premiumInk = !eraserMode && isPremiumPenActive();
    const royalPen = premiumInk && state.theme === 'royal';
    ctx.strokeStyle = royalPen ? '#F7C948' : '#020617';
    ctx.shadowColor = eraserMode ? 'transparent'
      : royalPen ? 'rgba(255, 176, 40, .6)'
      : premiumInk ? 'rgba(34, 211, 238, .28)'
      : 'rgba(2, 6, 23, .10)';
    ctx.shadowBlur = eraserMode ? 0 : (royalPen ? 6 : (premiumInk ? 2.2 : 0.45));
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
    currentStroke = eraserMode ? null : [{x:point.x, y:point.y}];   // M4: capture ink strokes only
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
    if(currentStroke) currentStroke.push({x:nextPoint.x, y:nextPoint.y});   // M4
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
    if(currentStroke && currentStroke.length > 1) capturedStrokes.push(currentStroke);   // M4
    currentStroke = null;
    if(typeof updateInkReplay === 'function') updateInkReplay();
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
  window.clearCanvas = function(){ drawGuideLines(); capturedStrokes = []; if(typeof updateInkReplay === 'function') updateInkReplay(); };
}
function clearCanvas(){
  capturedStrokes = [];
  if(typeof updateInkReplay === 'function') updateInkReplay();
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

function bytesToBase64(bytes){
  let bin = '';
  const chunk = 0x8000;   // build the binary string in chunks so large states don't overflow the call stack
  for(let i=0; i<bytes.length; i+=chunk){
    bin += String.fromCharCode.apply(null, bytes.subarray(i, i+chunk));
  }
  return btoa(bin);
}
function base64ToBytes(b64){
  const norm = b64.replace(/-/g, '+').replace(/_/g, '/');
  const padded = norm + '='.repeat((4 - (norm.length % 4)) % 4);
  const bin = atob(padded);
  const bytes = new Uint8Array(bin.length);
  for(let i=0; i<bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}
function gzipSupported(){
  return typeof CompressionStream !== 'undefined' && typeof DecompressionStream !== 'undefined';
}
async function gzipStringToBase64(str){
  const input = new TextEncoder().encode(str);
  const stream = new Blob([input]).stream().pipeThrough(new CompressionStream('gzip'));
  const buf = await new Response(stream).arrayBuffer();
  return bytesToBase64(new Uint8Array(buf));
}
async function gunzipBytesToString(bytes){
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
  return await new Response(stream).text();
}
// Payload = base64(gzip(JSON)) where supported, else base64(UTF-8 JSON). A full
// state's plain base64 (~97KB) exceeds the 50000-char Sheets cell limit and gets
// rejected; gzip brings it to ~14KB. The server (v1.11+) stores either form.
async function encodePayload(obj){
  const json = JSON.stringify(obj);
  if(gzipSupported()){
    try{ return await gzipStringToBase64(json); }
    catch(err){ /* fall through to uncompressed */ }
  }
  return btoa(unescape(encodeURIComponent(json)));
}
async function decodePayload(str){
  if(str && typeof str === 'object') return str;
  const raw = String(str || '').trim();
  if(!raw) throw new Error(isHebrew() ? 'הענן החזיר שמירה ריקה.' : 'The cloud returned an empty save.');
  if(raw.startsWith('<')) throw new Error(isHebrew() ? 'הסקריפט החזיר דף HTML במקום נתוני התקדמות. ודא שה־Apps Script נפרס כ-Web app עם גישה Anyone.' : 'The script returned HTML instead of progress data. Make sure Apps Script is deployed as a Web app with Anyone access.');
  if(raw.startsWith('{')) return JSON.parse(raw);
  let bytes;
  try{ bytes = base64ToBytes(raw); }
  catch(err){ throw new Error((isHebrew() ? 'השמירה בענן אינה מקודדת בפורמט שהאפליקציה יודעת לקרוא: ' : 'Cloud save is not encoded in a readable format: ') + (err?.message || 'decode failed')); }
  // gzip streams start with 0x1f 0x8b → decompress; otherwise it's legacy plain UTF-8 JSON.
  if(bytes.length >= 2 && bytes[0] === 0x1f && bytes[1] === 0x8b){
    if(!gzipSupported()) throw new Error(isHebrew() ? 'השמירה דחוסה אך הדפדפן לא תומך בפענוח. עדכן את הדפדפן ונסה שוב.' : 'The save is compressed but this browser cannot decompress it. Please update the browser and try again.');
    return JSON.parse(await gunzipBytesToString(bytes));
  }
  return JSON.parse(new TextDecoder('utf-8').decode(bytes));
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
  if(!url) throw new Error(t('syncNoUrl'));
  if(!/^https:\/\/script\.google\.com\/macros\/s\/[^/?#]+\/exec(?:\?.*)?$/.test(url)){
    throw new Error(t('syncBadUrl'));
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
function stateRichness(s){
  return {
    total: (s && s.stats && s.stats.total) || 0,
    points: (s && s.coach && s.coach.points) || 0,
    skins: (s && s.coach && Array.isArray(s.coach.unlocked)) ? s.coach.unlocked.length : 0,
    items: (s && s.itemStats) ? Object.keys(s.itemStats).length : 0,
  };
}
// "Richer" = cloud leads on at least one headline metric and local leads on none —
// i.e. the local save looks like a subset/behind the cloud. Ambiguous cases (each
// ahead on something) pass through without nagging.
function cloudIsRicher(cloud, local){
  const c = stateRichness(cloud), l = stateRichness(local);
  const cloudAhead = c.total > l.total || c.points > l.points || c.skins > l.skins || c.items > l.items;
  const localAhead = l.total > c.total || l.points > c.points || l.skins > c.skins || l.items > c.items;
  return cloudAhead && !localAhead;
}
function overwriteWarnMsg(cloud, local){
  const c = stateRichness(cloud), l = stateRichness(local);
  return isHebrew()
    ? `שים לב: בענן יש התקדמות גדולה יותר מהמכשיר הזה.\n\nענן: ${c.total} שאלות · ${c.points} נק׳ · ${c.skins} סקינים\nמכשיר זה: ${l.total} שאלות · ${l.points} נק׳ · ${l.skins} סקינים\n\nלהעלות בכל זאת ולדרוס את שמירת הענן?`
    : `Heads up: the cloud has more progress than this device.\n\nCloud: ${c.total} questions · ${c.points} pts · ${c.skins} skins\nThis device: ${l.total} questions · ${l.points} pts · ${l.skins} skins\n\nUpload anyway and overwrite the cloud save?`;
}
async function syncUpload(){
  try{
    setSyncBusy(true);
    setSyncStatus(t('syncWorking'), 'loading');
    const uid = cleanUserId(el('userIdInput').value || state.userId);
    // Overwrite guard: never silently clobber a richer cloud save with a thinner
    // local one — a fresh browser or thin device could otherwise wipe real progress
    // in a single click (exactly how armon's cloud kept losing to a default state).
    try{
      const existing = await downloadViaBestRoute(uid);
      const cloud = existing && (existing.state && isTrainerState(existing.state)
        ? existing.state
        : (existing.data ? await decodePayload(existing.data) : null));
      if(cloud && isTrainerState(cloud) && cloudIsRicher(cloud, state)){
        if(!confirm(overwriteWarnMsg(cloud, state))){
          setSyncStatus(isHebrew() ? 'השמירה בוטלה — הענן לא שונה.' : 'Save cancelled — cloud unchanged.', 'neutral');
          return;
        }
      }
    }catch(guardErr){ /* cannot read the cloud to compare — proceed with the save */ }
    const safeState = {...state, lastSync: Date.now()};
    const data = await encodePayload(safeState);
    // First try JSONP, because it gives a real success/error response.
    try{
      const json = await jsonpRequest({action:'upload', userId: uid, data});
      if(!json.ok) throw new Error(json.error || 'sync failed');
      state.lastSync = Date.now(); saveState(); updateSyncHealth(); setSyncStatus(t('uploadOk'), 'ok');
      return;
    }catch(jsonpErr){
      // Some browsers/extensions block script.googleusercontent.com as a script.
      // Fallback: submit a hidden form POST. It avoids CORS and usually bypasses script blockers.
      await formPostUpload({action:'upload', userId: uid, data});
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
    const cloudState = json.state && isTrainerState(json.state) ? json.state : await decodePayload(json.data);
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

/* ===================================================================
 * v1.26 — Progress Map ("the journey")
 * An overlay that appears on a progress event and slides the traveler
 * forward along a winding path of stations. Stations = the premium skins,
 * placed at their exact coach-point thresholds (from THEMES). Position =
 * state.coach.points. NOT a page — it pops, animates, and is dismissed.
 *
 * Art note: each station medallion carries an empty <image class="pm-art">
 * slot. Blender temple renders drop into that href later (Stage A) with no
 * structural change — the medallion/Roman-numeral is a neutral placeholder,
 * not the final identity.
 * =================================================================== */
const PM_COLORS = {
  ocean:'#94a3b8', lotus:'#ec4899', sakura:'#f472b6', mango:'#f59e0b',
  rainforest:'#22c55e', royal:'#eab308', cyber:'#06b6d4', midnight:'#6366f1',
  coral:'#fb7185', festival:'#ef4444', master:'#f97316'
};
const PM_ROMAN = ['⌂','I','II','III','IV','V','VI','VII','VIII','IX','X'];
const PM_NS = 'http://www.w3.org/2000/svg';
const PM_VIEWH = 420, PM_WORLDH = 1560, PM_CX = 150;
let pmDom = null, pmLaidOut = false, pmPathLen = 0, pmRAF = 0, pmMax = 540;

// Stations: the village (0) + every premium skin, in threshold order.
function pmNodes(){
  const village = { id:'ocean', he:'הכפר', en:'Village', points:0 };
  const premium = THEMES.filter(t => t.premium)
    .map(t => ({ id:t.id, he:(t.he||'').replace(/\s*[\p{Emoji}️]+\s*$/u,''), en:(t.en||'').replace(/\s*[\p{Emoji}️]+\s*$/u,''), points:t.points }))
    .sort((a,b) => a.points - b.points);
  return [village, ...premium];
}

function pmBuildDom(){
  if(pmDom) return pmDom;
  const ov = document.createElement('div');
  ov.className = 'pm-overlay';
  ov.setAttribute('hidden','');
  ov.innerHTML =
    '<div class="pm-card" role="dialog" aria-modal="true" aria-label="'+(isHebrew()?'מפת המסע':'The journey')+'">'
    + '<button type="button" class="pm-close" aria-label="'+(isHebrew()?'סגור':'Close')+'">✕</button>'
    + '<div class="pm-card-head">'
    +   '<div class="pm-hud"><b id="pmPtsVal">0</b><small>'+(isHebrew()?'נק׳ מאמן':'coach pts')+'</small></div>'
    +   '<div class="pm-next" id="pmNextVal"></div>'
    + '</div>'
    + '<div class="pm-viewport">'
    +   '<svg id="pmSvg" viewBox="0 0 300 420" preserveAspectRatio="xMidYMid meet" aria-hidden="true">'
    +     '<defs><filter id="pmGlow" x="-60%" y="-60%" width="220%" height="220%">'
    +       '<feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>'
    +     '</filter></defs><g id="pmCam"></g></svg>'
    +   '<div class="pm-fog pm-fog-t"></div><div class="pm-fog pm-fog-b"></div>'
    + '</div>'
    + '<button type="button" class="pm-continue">'+(isHebrew()?'המשך':'Continue')+'</button>'
    + '</div>';
  document.body.appendChild(ov);
  ov.querySelector('.pm-close').addEventListener('click', pmClose);
  ov.querySelector('.pm-continue').addEventListener('click', pmClose);
  ov.addEventListener('click', e => { if(e.target === ov) pmClose(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape' && !ov.hasAttribute('hidden')) pmClose(); });
  pmDom = { ov, cam: ov.querySelector('#pmCam'), pts: ov.querySelector('#pmPtsVal'), next: ov.querySelector('#pmNextVal') };
  return pmDom;
}

// Build the path + station groups once, in world coordinates. Needs the SVG
// visible (getTotalLength/getPointAtLength), so we call this on first open.
function pmLayout(){
  const cam = pmDom.cam;
  cam.innerHTML = '';
  const nodes = pmNodes();
  pmMax = nodes[nodes.length - 1].points || 540;
  const yB = PM_WORLDH - 70, yT = 70, amp = 88, waves = 5, steps = 220;
  let d = '';
  for(let i = 0; i <= steps; i++){
    const f = i / steps, y = yB - f * (yB - yT), x = PM_CX + Math.sin(f * Math.PI * waves) * amp * (0.55 + 0.45 * f);
    d += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1) + ' ';
  }
  const back = document.createElementNS(PM_NS, 'path');
  back.setAttribute('d', d); back.setAttribute('fill', 'none');
  back.setAttribute('stroke', 'var(--border)'); back.setAttribute('stroke-width', '16');
  back.setAttribute('stroke-linecap', 'round'); back.setAttribute('opacity', '.5');
  cam.appendChild(back);
  const done = document.createElementNS(PM_NS, 'path');
  done.setAttribute('d', d); done.setAttribute('fill', 'none');
  done.setAttribute('stroke', 'var(--orange)'); done.setAttribute('stroke-width', '7');
  done.setAttribute('stroke-linecap', 'round');
  cam.appendChild(done);
  pmPathLen = back.getTotalLength();
  done.style.strokeDasharray = pmPathLen;
  pmDom.back = back; pmDom.done = done;

  pmDom.nodeEls = nodes.map((n, i) => {
    const pt = back.getPointAtLength((n.points / pmMax) * pmPathLen);
    n.x = pt.x; n.y = pt.y; n.color = PM_COLORS[n.id] || '#94a3b8';
    const g = document.createElementNS(PM_NS, 'g');
    g.setAttribute('transform', 'translate(' + pt.x + ',' + pt.y + ')');
    const halo = document.createElementNS(PM_NS, 'circle');
    halo.setAttribute('r', '20'); halo.setAttribute('fill', n.color); halo.setAttribute('opacity', '0');
    const ring = document.createElementNS(PM_NS, 'circle');
    ring.setAttribute('r', '17'); ring.setAttribute('fill', 'var(--panel2)');
    ring.setAttribute('stroke', n.color); ring.setAttribute('stroke-width', '2.5');
    // Art slot — Blender temple render drops in here later (href set in Stage A).
    const art = document.createElementNS(PM_NS, 'image');
    art.setAttribute('class', 'pm-art'); art.setAttribute('x', '-15'); art.setAttribute('y', '-15');
    art.setAttribute('width', '30'); art.setAttribute('height', '30');
    const mark = document.createElementNS(PM_NS, 'text');
    mark.setAttribute('text-anchor', 'middle'); mark.setAttribute('dy', '5'); mark.setAttribute('font-size', '13');
    mark.setAttribute('font-weight', '900'); mark.textContent = PM_ROMAN[i] || '';
    const name = document.createElementNS(PM_NS, 'text');
    name.setAttribute('class', 'pm-node-name'); name.setAttribute('text-anchor', 'middle'); name.setAttribute('y', '35');
    const sub = document.createElementNS(PM_NS, 'text');
    sub.setAttribute('class', 'pm-node-sub'); sub.setAttribute('text-anchor', 'middle'); sub.setAttribute('y', '46');
    g.appendChild(halo); g.appendChild(ring); g.appendChild(art); g.appendChild(mark); g.appendChild(name); g.appendChild(sub);
    cam.appendChild(g);
    return { n, g, halo, ring, mark, name, sub };
  });

  const trav = document.createElementNS(PM_NS, 'g');
  const td = document.createElementNS(PM_NS, 'circle');
  td.setAttribute('r', '11'); td.setAttribute('fill', 'var(--text)'); td.setAttribute('stroke', 'var(--orange)'); td.setAttribute('stroke-width', '3');
  const ti = document.createElementNS(PM_NS, 'circle');
  ti.setAttribute('r', '4'); ti.setAttribute('fill', 'var(--orange)');
  trav.appendChild(td); trav.appendChild(ti);
  cam.appendChild(trav);
  pmDom.trav = trav; pmDom.nodes = nodes;
  pmLaidOut = true;
}

function pmNextIdx(p){
  const nodes = pmDom.nodes;
  for(let i = 0; i < nodes.length; i++){ if(nodes[i].points > p) return i; }
  return nodes.length;
}

function pmRender(p){
  const frac = Math.max(0, Math.min(1, p / pmMax)), len = frac * pmPathLen;
  const pt = pmDom.back.getPointAtLength(len);
  pmDom.trav.setAttribute('transform', 'translate(' + pt.x + ',' + pt.y + ')');
  pmDom.done.style.strokeDashoffset = pmPathLen - len;
  const camY = Math.max(0, Math.min(PM_WORLDH - PM_VIEWH, pt.y - PM_VIEWH * 0.52));
  pmDom.cam.setAttribute('transform', 'translate(0,' + (-camY) + ')');
  const ni = pmNextIdx(p);
  pmDom.nodeEls.forEach((e, i) => {
    const passed = e.n.points <= p, isNext = (i === ni), beyond = i > ni;
    e.ring.setAttribute('fill', passed ? e.n.color : 'var(--panel2)');
    e.ring.setAttribute('r', isNext ? '19' : '17');
    e.ring.style.animation = isNext ? 'pmPulse 1.4s ease-in-out infinite' : 'none';
    e.mark.textContent = beyond ? '?' : (PM_ROMAN[i] || '');
    e.mark.setAttribute('fill', passed ? '#0b1020' : 'var(--text)');
    e.g.setAttribute('opacity', beyond ? (i > ni + 1 ? '0.3' : '0.6') : '1');
    e.g.style.filter = (passed || isNext) ? 'url(#pmGlow)' : 'none';
    e.halo.setAttribute('opacity', passed ? '0.16' : '0');
    e.name.textContent = beyond ? '' : (isHebrew() ? e.n.he : e.n.en);
    e.sub.textContent = beyond ? '? ? ?' : (passed ? (isHebrew() ? '✓ נפתח' : '✓ open') : (e.n.points + (isHebrew() ? ' נק׳' : 'pts')));
  });
}

function pmUpdHud(p){
  pmDom.pts.textContent = Math.round(p);
  const ni = pmNextIdx(p), nx = pmDom.nodes[ni];
  pmDom.next.textContent = nx
    ? (isHebrew() ? 'התחנה הבאה: ' + nx.he + ' · עוד ' + (nx.points - Math.round(p)) : 'Next: ' + nx.en + ' · ' + (nx.points - Math.round(p)) + ' to go')
    : (isHebrew() ? 'הגעת לרמת המאסטר 🔥' : 'Master reached 🔥');
}

function pmBurst(idx){
  const e = pmDom.nodeEls[idx]; if(!e) return;
  e.halo.style.transition = 'none'; e.halo.setAttribute('r', '20'); e.halo.setAttribute('opacity', '0.55');
  requestAnimationFrame(() => {
    e.halo.style.transition = 'r .6s ease-out, opacity .6s ease-out';
    e.halo.setAttribute('r', '42'); e.halo.setAttribute('opacity', '0');
  });
}

function pmAnimate(oldP, newP){
  if(pmRAF) cancelAnimationFrame(pmRAF);
  const crossings = pmDom.nodes.map((n, i) => i).filter(i => pmDom.nodes[i].points > oldP && pmDom.nodes[i].points <= newP);
  if(newP <= oldP){ pmRender(newP); pmUpdHud(newP); return; }
  const dur = Math.min(1700, 650 + (newP - oldP) * 14);
  let t0 = null, fired = 0;
  const step = ts => {
    if(!t0) t0 = ts;
    const k = Math.min(1, (ts - t0) / dur);
    const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
    const cur = oldP + (newP - oldP) * e;
    pmRender(cur); pmUpdHud(cur);
    while(fired < crossings.length && cur >= pmDom.nodes[crossings[fired]].points){ pmBurst(crossings[fired]); fired++; if(typeof Juice !== 'undefined' && Juice.pop) Juice.pop(); }
    if(k < 1) pmRAF = requestAnimationFrame(step);
    else { pmRAF = 0; pmRender(newP); pmUpdHud(newP); }
  };
  pmRAF = requestAnimationFrame(step);
}

// Public: show the overlay and animate oldP -> newP. Manual open (from the
// coach panel) passes oldP === newP for a static "where am I" view.
function openProgressMap(oldP, newP, opts){
  opts = opts || {};
  pmBuildDom();
  pmDom.ov.setAttribute('dir', isHebrew() ? 'rtl' : 'ltr');
  pmDom.ov.removeAttribute('hidden');
  if(!pmLaidOut) pmLayout(); else { pmMax = pmDom.nodes[pmDom.nodes.length - 1].points || 540; }
  pmRender(oldP); pmUpdHud(oldP);
  requestAnimationFrame(() => pmAnimate(oldP, newP));
}

// Crossing-only gate: surface the journey only when a point gain moves the
// traveler past at least one station (avoids popping on tiny gains).
function maybeShowProgressMap(oldP, newP){
  if(pmNodes().some(n => n.points > oldP && n.points <= newP)) openProgressMap(oldP, newP, {reason:'cross'});
}

function pmClose(){
  if(!pmDom) return;
  if(pmRAF){ cancelAnimationFrame(pmRAF); pmRAF = 0; }
  pmDom.ov.setAttribute('hidden', '');
}

/* ===================================================================
 * v1.26 — Keyboard board (type mode)
 * A keyboard alternative to the handwriting canvas: an on-screen Thai
 * keyboard (also accepts the device's physical keyboard) whose consonant
 * keys are coloured by tone class read from BOARD_ITEMS.cls (high/mid/low),
 * with vowels & signs monochrome. Same flow: assemble the answer, then the
 * existing Show-answer / correct-wrong buttons. Toggle is manual + persisted.
 * =================================================================== */
const KB_COMBINING = new Set(['ั','ิ','ี','ึ','ื','ุ','ู','็','่','้','๊','๋','์','ฺ']);
const KB_VOWELS = ['ะ','ั','า','ำ','ิ','ี','ึ','ื','ุ','ู','เ','แ','โ','ใ','ไ','ฤ','ๅ','ๆ','ฯ'];
const KB_SIGNS = ['่','้','๊','๋','็','์','ฺ'];
let kbBuiltLang = null;

function kbConsonants(){
  const board = (typeof BOARD_ITEMS !== 'undefined' ? BOARD_ITEMS : []);
  return board.filter(x => x.kind === 'consonant' && x.symbol)
    .map(x => ({ ch:x.symbol, cls:(x.cls === 'high' || x.cls === 'mid' || x.cls === 'low') ? x.cls : 'low' }))
    .sort((a,b) => a.ch.charCodeAt(0) - b.ch.charCodeAt(0));   // standard Thai alphabetical order
}

function buildKeyboardBoard(){
  const host = el('keyboardBoard'); if(!host) return;
  if(kbBuiltLang === lang() && host.firstChild) return;   // rebuild only on first use / language change
  function keyHtml(ch, clsName){
    const disp = KB_COMBINING.has(ch) ? ('◌' + ch) : ch;
    return '<button type="button" class="kb-key' + (clsName ? ' ' + clsName : '') + '" data-ch="' + ch + '"><span class="kb-glyph">' + disp + '</span></button>';
  }
  const cons = kbConsonants();
  host.innerHTML =
    '<div class="kb-field" id="kbInput" contenteditable="true" dir="ltr" spellcheck="false" data-placeholder="' + (isHebrew() ? 'הקלד כאן…' : 'Type here…') + '" aria-label="' + (isHebrew() ? 'שדה תשובה' : 'Answer field') + '"></div>'
    + '<div class="kb-check" id="kbCheck" aria-live="polite"></div>'
    + '<div class="kb-board">'
    +   '<div class="kb-sec"><div class="kb-sechead"><span class="kb-sectitle">' + (isHebrew() ? 'עיצורים' : 'Consonants') + '</span>'
    +     '<span class="kb-legend"><span class="kb-lg high">' + (isHebrew() ? 'גבוה' : 'high') + '</span><span class="kb-lg mid">' + (isHebrew() ? 'אמצע' : 'mid') + '</span><span class="kb-lg low">' + (isHebrew() ? 'נמוך' : 'low') + '</span></span></div>'
    +     '<div class="kb-keys">' + cons.map(function(k){ return keyHtml(k.ch, 'c-' + k.cls); }).join('') + '</div></div>'
    +   '<div class="kb-sec"><div class="kb-sechead"><span class="kb-sectitle">' + (isHebrew() ? 'תנועות' : 'Vowels') + '</span></div>'
    +     '<div class="kb-keys">' + KB_VOWELS.map(function(ch){ return keyHtml(ch, ''); }).join('') + '</div></div>'
    +   '<div class="kb-sec"><div class="kb-sechead"><span class="kb-sectitle">' + (isHebrew() ? 'סימנים וטונים' : 'Signs & tones') + '</span></div>'
    +     '<div class="kb-keys">' + KB_SIGNS.map(function(ch){ return keyHtml(ch, ''); }).join('') + '</div></div>'
    + '</div>'
    + '<div class="kb-ctrl">'
    +   '<button type="button" class="kb-c" data-kb-act="space">␣ ' + (isHebrew() ? 'רווח' : 'space') + '</button>'
    +   '<button type="button" class="kb-c" data-kb-act="back">⌫ ' + (isHebrew() ? 'מחק' : 'back') + '</button>'
    +   '<button type="button" class="kb-c" data-kb-act="clear">' + (isHebrew() ? 'נקה' : 'clear') + '</button>'
    + '</div>';
  const field = el('kbInput');
  host.querySelectorAll('.kb-key').forEach(function(b){ b.addEventListener('click', function(){ kbInsert(b.getAttribute('data-ch')); }); });
  host.querySelectorAll('[data-kb-act]').forEach(function(b){ b.addEventListener('click', function(){
    const a = b.getAttribute('data-kb-act'); field.focus();
    if(a === 'space') field.textContent += ' ';
    else if(a === 'back') field.textContent = field.textContent.slice(0, -1);
    else if(a === 'clear') field.textContent = '';
    kbCheck();
  }); });
  field.addEventListener('input', kbCheck);   // physical-keyboard typing also checks
  kbBuiltLang = lang();
}

function kbInsert(ch){
  const field = el('kbInput'); if(!field) return;
  field.focus();
  field.textContent += ch;
  try{ const r = document.createRange(); r.selectNodeContents(field); r.collapse(false); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }catch(e){}
  kbCheck();
}

function kbNormalize(s){ return (s || '').replace(/\s+/g, '').trim(); }

function kbCheck(){
  const field = el('kbInput'); const out = el('kbCheck'); if(!field || !out) return;
  const target = current && current.item && current.item.thai;
  const typed = kbNormalize(field.textContent);
  if(target && typed && typed === kbNormalize(target)){
    out.textContent = isHebrew() ? '✓ נכון!' : '✓ Correct!'; out.className = 'kb-check ok';
  } else {
    out.textContent = ''; out.className = 'kb-check';   // stay quiet until exact; self-mark still available
  }
}

function resetKeyboardBoard(){
  buildKeyboardBoard();
  const field = el('kbInput'); if(field) field.textContent = '';
  const out = el('kbCheck'); if(out){ out.textContent = ''; out.className = 'kb-check'; }
}

function setInputMode(mode){
  state.inputMode = (mode === 'type') ? 'type' : 'write';
  saveState();
  if(typeof current !== 'undefined' && current) renderQuestion();
}

document.addEventListener('DOMContentLoaded', init);
