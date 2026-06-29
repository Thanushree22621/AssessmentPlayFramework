const xlsx = require("xlsx");
const fs = require("fs");
const path = require("path");

class ExcelUtils {

  //  Create file if not exists + write data
  static writeExcel(filePath, sheetName, data) {
    let workbook;

    // check file exists
    if (fs.existsSync(filePath)) {
      workbook = xlsx.readFile(filePath);
    } else {
      workbook = xlsx.utils.book_new();
    }

    // convert JSON → sheet
    const sheet = xlsx.utils.json_to_sheet(data);

    // append sheet
    xlsx.utils.book_append_sheet(workbook, sheet, sheetName);

    // write file
    xlsx.writeFile(workbook, filePath);
  }

  //  Read Excel data (generic)
  static readExcel(filePath, sheetName) {
    const workbook = xlsx.readFile(filePath);
    const sheet = workbook.Sheets[sheetName];

    if (!sheet) {
      throw new Error(`Sheet ${sheetName} not found`);
    }

    return xlsx.utils.sheet_to_json(sheet);
  }

}

module.exports = ExcelUtils;