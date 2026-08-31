// Google Apps Script Web App endpoint for the ZK Teco attendance clock sync.
//
// Paste this over everything in the Apps Script project, then deploy:
//   Deploy -> New deployment -> Web app
//   Execute as:      Me
//   Who has access:  Anyone      <-- NOT "Anyone with Google account".
//                                    Python sends no Google credentials, so
//                                    anything stricter bounces it with a 404
//                                    before doPost ever runs.
//
// doPost handles two payload shapes:
//   * Array  -> historical bulk import: one batched write, no emails.
//   * Object -> single live punch: appends one row and sends the alert email.

function doGet(e) {
  // Opening the URL in a browser reports which spreadsheet doPost actually
  // writes to. getActiveSpreadsheet() resolves to whatever this project is
  // bound to, which is not necessarily the file someone happens to be looking
  // at, and rows landing in a second copy is indistinguishable from rows never
  // being written at all.
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var info = {
    "status": "deployment is live",
    "spreadsheetName": ss.getName(),
    "spreadsheetUrl": ss.getUrl(),
    "sheetTab": sheet.getName(),
    "rowsInTab": sheet.getLastRow()
  };
  return ContentService.createTextOutput(JSON.stringify(info, null, 2))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Batch mode: array of records (historical bulk sync) - no emails, single write
    if (Array.isArray(data)) {
      var rows = data.map(function (r) {
        return [r.timestamp, r.id, r.name, r.status];
      });
      if (rows.length > 0) {
        sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, 4).setValues(rows);
      }
      return ContentService.createTextOutput(JSON.stringify({ "result": "success", "count": rows.length }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Single record mode: live punch - with email
    var empName = data.name;
    var empId = data.id;
    var timestamp = data.timestamp;
    var status = data.status;

    // Goes in at the top, not the bottom: the historical import writes newest
    // first, and appending live punches underneath would bury them below the
    // oldest rows in the sheet.
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, 4).setValues([[timestamp, empId, empName, status]]);

    var emailTo = "wirasakmanclash@gmail.com,info@stellabungalows.com";
    var subject = "Attendance Update: " + empName;
    var body = "A new attendance punch was received in the system:\n\n" +
      "Employee Name: " + empName + "\n" +
      "Punch Time: " + timestamp + "\n" +
      "Status: " + status;
    GmailApp.sendEmail(emailTo, subject, body);

    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "error": error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}


// ---------------------------------------------------------------------------
// Daily summary
// ---------------------------------------------------------------------------
// The log holds one row per punch, so a day's entries and exits sit in
// separate clusters once the rows are sorted by time. buildDailySummary()
// collapses them into one row per employee per day, with the first punch as
// the entry and the last as the exit.

var LOG_TAB = 'Sheet1';
var SUMMARY_TAB = 'Daily';

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Attendance')
    .addItem('Rebuild daily summary', 'buildDailySummary')
    .addToUi();
}

function parsePunchDate_(value) {
  if (value instanceof Date) {
    return value;
  }
  var text = String(value || '').trim();
  if (!text) {
    return null;
  }
  // "2026-08-31 17:30:48" - build the date explicitly rather than leaving it
  // to Date.parse, whose handling of that shape varies.
  var m = text.match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2}):(\d{2})/);
  if (m) {
    return new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6]);
  }
  var d = new Date(text);
  return isNaN(d.getTime()) ? null : d;
}

function dateKey_(d) {
  return Utilities.formatDate(d, Session.getScriptTimeZone(), 'yyyy-MM-dd');
}

function buildDailySummary() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var log = ss.getSheetByName(LOG_TAB);
  if (!log) {
    throw new Error('No tab named ' + LOG_TAB);
  }

  var values = log.getDataRange().getValues();  // timestamp, id, name, status
  var earliest = new Date(2020, 0, 1);
  var latest = new Date();
  latest.setDate(latest.getDate() + 1);

  var days = {};
  var skipped = 0;

  for (var i = 0; i < values.length; i++) {
    var when = parsePunchDate_(values[i][0]);
    if (!when) {
      continue;
    }
    // A clock that lost its date stamps punches in 2119 or 2035; those would
    // otherwise sort to the top and bury the real days.
    if (when < earliest || when > latest) {
      skipped++;
      continue;
    }

    var id = String(values[i][1]);
    var name = String(values[i][2]);
    if (name === 'EMAIL TEST' || name === 'CONNECTION TEST') {
      continue;
    }

    var key = dateKey_(when) + '|' + id;
    var day = days[key];
    if (!day) {
      day = days[key] = {
        date: dateKey_(when), id: id, name: name,
        first: when, last: when, count: 0
      };
    }
    if (when < day.first) { day.first = when; }
    if (when > day.last) { day.last = when; }
    day.count++;
  }

  var rows = [];
  for (var k in days) {
    var d = days[k];
    var single = d.count < 2;
    var hours = single ? '' :
      Math.round(((d.last - d.first) / 3600000) * 100) / 100;
    rows.push([
      d.date,
      d.name,
      d.id,
      Utilities.formatDate(d.first, Session.getScriptTimeZone(), 'HH:mm:ss'),
      single ? '' : Utilities.formatDate(d.last, Session.getScriptTimeZone(), 'HH:mm:ss'),
      hours,
      d.count,
      single ? 'Only one punch - no exit recorded' : ''
    ]);
  }

  // Newest day first, and within a day keep employees together by name.
  rows.sort(function (a, b) {
    if (a[0] !== b[0]) { return a[0] < b[0] ? 1 : -1; }
    return a[1] < b[1] ? -1 : (a[1] > b[1] ? 1 : 0);
  });

  var out = ss.getSheetByName(SUMMARY_TAB);
  if (!out) {
    out = ss.insertSheet(SUMMARY_TAB);
  }
  out.clear();

  var header = ['Date', 'Employee', 'ID', 'Entry', 'Exit', 'Hours', 'Punches', 'Note'];
  out.getRange(1, 1, 1, header.length).setValues([header]).setFontWeight('bold');
  if (rows.length > 0) {
    out.getRange(2, 1, rows.length, header.length).setValues(rows);
  }
  out.setFrozenRows(1);
  out.autoResizeColumns(1, header.length);

  var note = skipped > 0
    ? skipped + ' punch row(s) skipped: timestamp outside 2020-' + (latest.getFullYear()) +
      ' (check the clock date)'
    : '';
  out.getRange(1, header.length + 2).setValue(note);

  SpreadsheetApp.getActiveSpreadsheet().toast(
    rows.length + ' day rows built' + (skipped ? ', ' + skipped + ' skipped' : ''),
    'Daily summary', 5);
}
