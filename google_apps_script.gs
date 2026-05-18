// Thai Trainer — Google Apps Script sync endpoint v1.6
// Supports JSONP GET and hidden-form POST fallback.
// Paste into Extensions -> Apps Script inside the Google Sheet.
// Deploy -> Manage deployments -> Edit -> Version: New version -> Deploy.
// Execute as: Me. Who has access: Anyone.

const SHEET_NAME = 'ThaiTrainerSync';
const DEFAULT_USER_ID = 'rif';

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['userId', 'updatedAt', 'payloadBase64']);
  }
  return sh;
}

function handle_(params) {
  const action = String(params.action || 'ping').toLowerCase();
  const userId = String(params.userId || DEFAULT_USER_ID);
  const sh = getSheet_();

  if (action === 'ping') {
    return { ok: true, message: 'Thai Trainer sync is working', time: new Date().toISOString() };
  }

  if (action === 'testwrite') {
    const now = new Date().toISOString();
    sh.appendRow([userId, now, Utilities.base64EncodeWebSafe(JSON.stringify({ test: true, time: now }))]);
    return { ok: true, message: 'Test row written', userId, updatedAt: now };
  }

  if (action === 'upload') {
    const data = String(params.data || '');
    if (!data) throw new Error('Missing data');
    const values = sh.getDataRange().getValues();
    let row = -1;
    for (let i = 1; i < values.length; i++) {
      if (String(values[i][0]) === userId) { row = i + 1; break; }
    }
    const now = new Date().toISOString();
    if (row === -1) sh.appendRow([userId, now, data]);
    else sh.getRange(row, 1, 1, 3).setValues([[userId, now, data]]);
    return { ok: true, message: 'Uploaded', userId, updatedAt: now };
  }

  if (action === 'download') {
    const values = sh.getDataRange().getValues();
    for (let i = values.length - 1; i >= 1; i--) {
      if (String(values[i][0]) === userId) {
        return { ok: true, userId, updatedAt: values[i][1] || null, data: values[i][2] || null };
      }
    }
    return { ok: true, userId, updatedAt: null, data: null };
  }

  throw new Error('Unsupported action: ' + action);
}

function doGet(e) {
  try {
    return output_(handle_(e.parameter || {}), (e.parameter || {}).callback || '');
  } catch (err) {
    return output_({ ok: false, error: String(err.message || err) }, (e.parameter || {}).callback || '');
  }
}

function doPost(e) {
  try {
    return output_(handle_((e && e.parameter) || {}), '');
  } catch (err) {
    return output_({ ok: false, error: String(err.message || err) }, '');
  }
}

function output_(obj, callback) {
  const json = JSON.stringify(obj);
  if (callback) {
    return ContentService
      .createTextOutput(callback + '(' + json + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService
    .createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}
