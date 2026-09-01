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

// Who the live-punch alerts go to. Kept up here so doGet can report it: an
// address with a typo in it fails silently from the script's side.
var ALERT_RECIPIENTS = "wirasakmanclash@gmail.com,info@stellabungalows.com";

// Who gets the end-of-day summary. Separate from ALERT_RECIPIENTS so the daily
// report and the per-punch alerts can go to different people.
var REPORT_RECIPIENTS = "rifpnima@gmail.com,wirasakmanclash@gmail.com,info@stellabungalows.com";

function doGet(e) {
  // ?action=report sends the day's summary now, for checking it before
  // tomorrow's trigger fires. It only ever mails REPORT_RECIPIENTS, so a URL
  // that leaks cannot be pointed at anyone else.
  if (e && e.parameter && e.parameter.action === 'report') {
    var sent = sendDailyReport();
    return ContentService.createTextOutput(JSON.stringify(sent, null, 2))
      .setMimeType(ContentService.MimeType.JSON);
  }
  if (e && e.parameter && e.parameter.action === 'notice') {
    var notice = sendServiceNotice();
    return ContentService.createTextOutput(JSON.stringify(notice, null, 2))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // Opening the URL with no parameters reports which spreadsheet doPost actually
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
    "rowsInTab": sheet.getLastRow(),
    // Rows land before the mail is sent, so a row in the sheet says nothing
    // about whether its alert went out. These three do: a quota of 0 is why
    // sending throws, and the other two catch mail that is being sent
    // correctly to the wrong place, or from an account nobody is watching.
    "remainingEmailQuota": MailApp.getRemainingDailyQuota(),
    "alertsSentFrom": Session.getEffectiveUser().getEmail(),
    "alertsSentTo": ALERT_RECIPIENTS
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

    var emailTo = ALERT_RECIPIENTS;
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
    .addItem('Email today\'s report now', 'sendDailyReport')
    .addItem('Schedule daily report (19:00)', 'createDailyReportTrigger')
    .addSeparator()
    .addItem('Send service notice (EN + TH)', 'sendServiceNotice')
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


// ---------------------------------------------------------------------------
// End-of-day report
// ---------------------------------------------------------------------------

function todaysRows_(targetDate) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var log = ss.getSheetByName(LOG_TAB);
  var values = log.getDataRange().getValues();
  var wanted = Utilities.formatDate(targetDate, Session.getScriptTimeZone(), 'yyyy-MM-dd');

  var byEmployee = {};
  var flagged = [];

  for (var i = 0; i < values.length; i++) {
    var when = parsePunchDate_(values[i][0]);
    if (!when) {
      continue;
    }
    var name = String(values[i][2]);
    if (name === 'EMAIL TEST' || name === 'CONNECTION TEST') {
      continue;
    }
    if (dateKey_(when) !== wanted) {
      continue;
    }

    // The service rewrites an impossible date to the time it arrived and keeps
    // what the device claimed in the status, so those rows are still today's.
    var status = String(values[i][3]);
    if (status.indexOf('device clock was wrong') !== -1) {
      flagged.push(name + ' at ' + Utilities.formatDate(
        when, Session.getScriptTimeZone(), 'HH:mm:ss') + ' - ' + status);
    }

    var key = String(values[i][1]);
    var emp = byEmployee[key];
    if (!emp) {
      emp = byEmployee[key] = {
        name: name, id: key, first: when, last: when, count: 0
      };
    }
    if (when < emp.first) { emp.first = when; }
    if (when > emp.last) { emp.last = when; }
    emp.count++;
  }

  return { byEmployee: byEmployee, flagged: flagged, dateLabel: wanted };
}

function sendDailyReport(targetDate) {
  var day = targetDate || new Date();
  var data = todaysRows_(day);
  var tz = Session.getScriptTimeZone();

  var employees = [];
  for (var k in data.byEmployee) {
    employees.push(data.byEmployee[k]);
  }
  employees.sort(function (a, b) {
    return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
  });

  var lines = [];
  lines.push('Attendance summary for ' + data.dateLabel);
  lines.push('');

  if (employees.length === 0) {
    lines.push('No punches recorded today.');
  } else {
    for (var i = 0; i < employees.length; i++) {
      var e = employees[i];
      var entry = Utilities.formatDate(e.first, tz, 'HH:mm:ss');
      // One punch means an entry with nothing to pair it to, not a zero-hour
      // shift, so report it as missing rather than printing entry == exit.
      var single = e.count < 2;
      var exit = single ? '(no exit recorded)' : Utilities.formatDate(e.last, tz, 'HH:mm:ss');
      var hours = single ? '-' :
        (Math.round(((e.last - e.first) / 3600000) * 100) / 100) + 'h';

      lines.push(e.name + ' (id ' + e.id + ')');
      lines.push('    Entry:   ' + entry);
      lines.push('    Exit:    ' + exit);
      lines.push('    Hours:   ' + hours);
      lines.push('    Punches: ' + e.count);
      lines.push('');
    }
  }

  if (data.flagged.length > 0) {
    lines.push('---');
    lines.push('The clock reported an impossible date on ' + data.flagged.length +
               ' punch(es) today. They were recorded at the time they arrived:');
    for (var j = 0; j < data.flagged.length; j++) {
      lines.push('  ' + data.flagged[j]);
    }
    lines.push('');
    lines.push('Repeated occurrences mean the clock\'s backup battery needs replacing.');
    lines.push('');
  }

  lines.push('---');
  lines.push('Sheet: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl());

  var body = lines.join('\n');
  var subject = 'Attendance summary ' + data.dateLabel +
                ' (' + employees.length + ' employee(s))';

  GmailApp.sendEmail(REPORT_RECIPIENTS, subject, body);

  return {
    "result": "report sent",
    "date": data.dateLabel,
    "employees": employees.length,
    "flaggedPunches": data.flagged.length,
    "sentTo": REPORT_RECIPIENTS,
    "remainingEmailQuota": MailApp.getRemainingDailyQuota()
  };
}

function createDailyReportTrigger() {
  // Installing twice would mail the report twice, so clear ours out first.
  var existing = ScriptApp.getProjectTriggers();
  for (var i = 0; i < existing.length; i++) {
    if (existing[i].getHandlerFunction() === 'sendDailyReport') {
      ScriptApp.deleteTrigger(existing[i]);
    }
  }
  ScriptApp.newTrigger('sendDailyReport')
    .timeBased()
    .atHour(19)
    .everyDays(1)
    .create();
  SpreadsheetApp.getActiveSpreadsheet().toast(
    'Daily report scheduled for ~19:00 every day.', 'Attendance', 5);
}


// ---------------------------------------------------------------------------
// One-off service notice
// ---------------------------------------------------------------------------
// Today's summary with an apology for the outage, in English and Thai. Sent by
// hand from the menu, not on a schedule - it is about one specific day.

function thaiDate_(d) {
  // Thai dates are written in the Buddhist era, 543 years ahead of the
  // Gregorian one, and Windows here is already displaying dates that way.
  var months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
                'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
  return d.getDate() + ' ' + months[d.getMonth()] + ' ' + (d.getFullYear() + 543);
}

function englishDate_(d) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];
  return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
}

function sendServiceNotice() {
  var today = new Date();
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  var data = todaysRows_(today);
  var tz = Session.getScriptTimeZone();

  var employees = [];
  for (var k in data.byEmployee) {
    employees.push(data.byEmployee[k]);
  }
  employees.sort(function (a, b) {
    return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
  });

  // Built once and used in both halves of the mail: the times are the same
  // figures either way, and re-formatting them twice invites them to disagree.
  var table = [];
  if (employees.length === 0) {
    table.push('  (no punches recorded)');
  } else {
    for (var i = 0; i < employees.length; i++) {
      var e = employees[i];
      var single = e.count < 2;
      var entry = Utilities.formatDate(e.first, tz, 'HH:mm');
      var exit = single ? '--:--' : Utilities.formatDate(e.last, tz, 'HH:mm');
      var hours = single ? '--' :
        (Math.round(((e.last - e.first) / 3600000) * 100) / 100) + 'h';
      table.push('  ' + e.name + '  |  in ' + entry + '  |  out ' + exit + '  |  ' + hours);
    }
  }
  var tableText = table.join('\n');

  var english = [
    'ATTENDANCE REPORT - ' + englishDate_(today),
    '',
    'Dear all,',
    '',
    'Below is the attendance record for today.',
    '',
    tableText,
    '',
    'Please accept our apologies: the attendance system did not work correctly',
    'today. Some punches were not reported by email as they should have been.',
    'The cause has been found and corrected.',
    '',
    'From tomorrow, ' + englishDate_(tomorrow) + ', the system is expected to run',
    'normally again: every punch will be recorded automatically and the alerts',
    'will be sent as configured.',
    '',
    'Thank you for your understanding.'
  ].join('\n');

  var thai = [
    'รายงานเวลาเข้า-ออกงาน - ' + thaiDate_(today),
    '',
    'เรียน ทุกท่าน',
    '',
    'ด้านล่างนี้คือบันทึกเวลาเข้า-ออกงานของวันนี้',
    '',
    tableText,
    '',
    'เราต้องขออภัยเป็นอย่างยิ่ง ระบบบันทึกเวลาทำงานวันนี้ทำงานไม่ถูกต้อง',
    'ทำให้การบันทึกเวลาบางรายการไม่ได้ถูกแจ้งเตือนทางอีเมลตามที่ควรจะเป็น',
    'เราได้ตรวจพบสาเหตุและแก้ไขเรียบร้อยแล้ว',
    '',
    'ตั้งแต่พรุ่งนี้ วันที่ ' + thaiDate_(tomorrow) + ' ระบบจะกลับมาทำงานตามปกติ',
    'ทุกการบันทึกเวลาจะถูกบันทึกโดยอัตโนมัติ และการแจ้งเตือนจะถูกส่งตามที่ตั้งค่าไว้',
    '',
    'ขอบคุณสำหรับความเข้าใจ'
  ].join('\n');

  var separator = '\n\n' + new Array(60).join('-') + '\n\n';
  var body = english + separator + thai;
  var subject = 'Attendance report ' + englishDate_(today) +
                ' / รายงานเวลาเข้า-ออกงาน';

  GmailApp.sendEmail(REPORT_RECIPIENTS, subject, body);

  return {
    "result": "service notice sent",
    "date": Utilities.formatDate(today, tz, 'yyyy-MM-dd'),
    "employees": employees.length,
    "sentTo": REPORT_RECIPIENTS,
    "remainingEmailQuota": MailApp.getRemainingDailyQuota()
  };
}
