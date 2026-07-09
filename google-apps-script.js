/**
 * Google Apps Script to save form submissions to Google Sheets
 * 
 * Instructions:
 * 1. Open a Google Sheet.
 * 2. Click "Extensions" -> "Apps Script" in the menu.
 * 3. Delete any default code inside the editor and paste this code.
 * 4. Click "Save" (floppy disk icon).
 * 5. Click "Deploy" -> "New deployment" in the top right.
 * 6. Select configuration type "Web app" (click the gear icon next to "Select type").
 * 7. Set Description (e.g. "Portfolio Contact Form API").
 * 8. Set "Execute as" to "Me (your-email@gmail.com)".
 * 9. Set "Who has access" to "Anyone". This is critical so the server can submit data.
 * 10. Click "Deploy". Authorize permissions if prompted by Google.
 * 11. Copy the generated "Web app URL" and save it in your project's `.env` file:
 *     GOOGLE_SHEETS_SCRIPT_URL="https://script.google.com/macros/s/.../exec"
 */

function doPost(e) {
  // Set up CORS-like headers for safety
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create headers if the sheet is completely empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Full Name",
        "Email",
        "Phone Number",
        "Selected Service",
        "Project Description",
        "Budget",
        "Preferred Deadline",
        "Status"
      ]);
    }
    
    // Format timestamp
    var timestamp = new Date();
    
    // Add row to spreadsheet
    sheet.appendRow([
      timestamp,
      data.fullName || "",
      data.email || "",
      data.phone || "",
      data.service || "",
      data.description || "",
      data.budget || "",
      data.deadline || "",
      data.status || "New"
    ]);
    
    var response = {
      status: "success",
      message: "Submission saved to Google Sheet successfully."
    };
    
    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    var errorResponse = {
      status: "error",
      message: error.toString()
    };
    
    return ContentService.createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle preflight requests
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}
