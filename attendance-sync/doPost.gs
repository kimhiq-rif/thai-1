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
