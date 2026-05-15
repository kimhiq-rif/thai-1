// Thai Trainer — Google Apps Script sync endpoint
// 1. Create a new Google Sheet.
// 2. Extensions -> Apps Script.
// 3. Paste this code.
// 4. Deploy -> New deployment -> Web app.
// 5. Execute as: Me. Who has access: Anyone with the link.
// 6. Copy the Web App URL into the Thai Trainer sync box.

const SHEET_NAME = 'ThaiTrainerSync';
const USER_KEY = 'default_user';

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['userKey', 'updatedAt', 'payloadJson']);
  }
  return sh;
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents || '{}');
    if (body.action !== 'upload') throw new Error('Unsupported action');
    const sh = getSheet_();
    const payload = JSON.stringify(body.payload || {});
    const values = sh.getDataRange().getValues();
    let row = -1;
    for (let i = 1; i < values.length; i++) {
      if (values[i][0] === USER_KEY) { row = i + 1; break; }
    }
    if (row === -1) sh.appendRow([USER_KEY, new Date().toISOString(), payload]);
    else sh.getRange(row, 1, 1, 3).setValues([[USER_KEY, new Date().toISOString(), payload]]);
    return json_({ok:true});
  } catch (err) { return json_({ok:false, error:String(err.message || err)}); }
}

function doGet(e) {
  try {
    const action = e.parameter.action || 'download';
    if (action !== 'download') throw new Error('Unsupported action');
    const sh = getSheet_();
    const values = sh.getDataRange().getValues();
    for (let i = 1; i < values.length; i++) {
      if (values[i][0] === USER_KEY) {
        return json_({ok:true, updatedAt: values[i][1], payload: JSON.parse(values[i][2] || '{}')});
      }
    }
    return json_({ok:true, payload:null});
  } catch (err) { return json_({ok:false, error:String(err.message || err)}); }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
