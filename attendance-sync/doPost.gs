// Google Apps Script Web App endpoint for the ZK Teco attendance clock sync.
// Paste this into the Sheet's Apps Script project, then:
//   Deploy -> Manage deployments -> edit (pencil) -> Version: New version -> Deploy
//
// Two modes:
//   * Array payload  -> historical bulk import: one batched write, no emails.
//   * Object payload -> single live punch: appends one row and sends the alert email.

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

    sheet.appendRow([timestamp, empId, empName, status]);

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
