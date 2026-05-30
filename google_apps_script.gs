// Thai Trainer — Google Apps Script sync endpoint v1.8
// Central spreadsheet, one tab per username.
// Supports JSONP GET and hidden-form POST fallback.
// Paste into Extensions -> Apps Script inside the Google Sheet.
// Deploy -> Manage deployments -> Edit -> Version: New version -> Deploy.
// Execute as: Me. Who has access: Anyone.

const INDEX_SHEET_NAME = 'ThaiTrainerUsers';
const DEFAULT_USER_ID = 'rif';

function cleanUserId_(value) {
  const raw = String(value || DEFAULT_USER_ID).trim() || DEFAULT_USER_ID;
  const cleaned = raw
    .replace(/\s+/g, '_')
    .replace(/[^A-Za-z0-9_\-א-תก-๙]/g, '')
    .slice(0, 60);
  return cleaned || DEFAULT_USER_ID;
}

function safeSheetName_(userId) {
  const base = cleanUserId_(userId).replace(/[\\/?*\[\]:]/g, '_').slice(0, 80) || DEFAULT_USER_ID;
  return 'user_' + base;
}

function getIndexSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(INDEX_SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(INDEX_SHEET_NAME);
    sh.appendRow(['userId', 'sheetName', 'createdAt', 'updatedAt']);
  }
  return sh;
}

function getUserSheet_(userId, createIfMissing) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const clean = cleanUserId_(userId);
  const sheetName = safeSheetName_(clean);
  let sh = ss.getSheetByName(sheetName);
  if (!sh && createIfMissing) {
    sh = ss.insertSheet(sheetName);
    sh.appendRow(['updatedAt', 'payloadBase64']);
    registerUser_(clean, sheetName);
  }
  return { sh, userId: clean, sheetName };
}

function registerUser_(userId, sheetName) {
  const idx = getIndexSheet_();
  const values = idx.getDataRange().getValues();
  const now = new Date().toISOString();
  for (let i = 1; i < values.length; i++) {
    if (String(values[i][0]) === userId) {
      idx.getRange(i + 1, 2, 1, 3).setValues([[sheetName, values[i][2] || now, now]]);
      return;
    }
  }
  idx.appendRow([userId, sheetName, now, now]);
}

function latestPayload_(sh) {
  const values = sh.getDataRange().getValues();
  for (let i = values.length - 1; i >= 1; i--) {
    if (values[i][1]) return { updatedAt: values[i][0] || null, data: values[i][1] || null };
  }
  return { updatedAt: null, data: null };
}

function handle_(params) {
  const action = String(params.action || 'ping').toLowerCase();
  const userId = cleanUserId_(params.userId || DEFAULT_USER_ID);

  if (action === 'ping') {
    return { ok: true, message: 'Thai Trainer sync is working', time: new Date().toISOString() };
  }

  if (action === 'inituser' || action === 'init') {
    const res = getUserSheet_(userId, true);
    registerUser_(res.userId, res.sheetName);
    return { ok: true, message: 'User sheet ready', userId: res.userId, sheetName: res.sheetName };
  }

  if (action === 'testwrite') {
    const res = getUserSheet_(userId, true);
    const now = new Date().toISOString();
    res.sh.appendRow([now, Utilities.base64EncodeWebSafe(JSON.stringify({ test: true, time: now, userId: res.userId }))]);
    registerUser_(res.userId, res.sheetName);
    return { ok: true, message: 'Test row written', userId: res.userId, sheetName: res.sheetName, updatedAt: now };
  }

  if (action === 'upload') {
    const data = String(params.data || '');
    if (!data) throw new Error('Missing data');
    const res = getUserSheet_(userId, true);
    const now = new Date().toISOString();

    // Keep one current row per user tab: header + latest payload.
    const lastRow = res.sh.getLastRow();
    if (lastRow < 2) res.sh.appendRow([now, data]);
    else res.sh.getRange(2, 1, 1, 2).setValues([[now, data]]);

    registerUser_(res.userId, res.sheetName);
    return { ok: true, message: 'Uploaded', userId: res.userId, sheetName: res.sheetName, updatedAt: now };
  }

  if (action === 'download') {
    const res = getUserSheet_(userId, false);
    if (!res.sh) return { ok: true, userId: res.userId, sheetName: res.sheetName, updatedAt: null, data: null };
    const latest = latestPayload_(res.sh);
    return { ok: true, userId: res.userId, sheetName: res.sheetName, updatedAt: latest.updatedAt, data: latest.data };
  }

  throw new Error('Unsupported action: ' + action);
}

function doGet(e) {
  try {
    return output_(handle_((e && e.parameter) || {}), ((e && e.parameter) || {}).callback || '');
  } catch (err) {
    return output_({ ok: false, error: String(err.message || err) }, ((e && e.parameter) || {}).callback || '');
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
