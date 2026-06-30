const { test } = require('@playwright/test');
const xlsx = require('xlsx');
const path = require('path');

test('excel write and read', async () => {

  const filePath = path.join(__dirname, "testData.xlsx");

  const data = [
    { name: "John", age: 25 },
    { name: "Alice", age: 28 }
  ];

  const sheet = xlsx.utils.json_to_sheet(data);
  const workbook = xlsx.utils.book_new();

  xlsx.utils.book_append_sheet(workbook, sheet, "Sheet1");
  xlsx.writeFile(workbook, filePath);

  console.log("Excel written");

  const newWorkbook = xlsx.readFile(filePath);
  const newSheet = newWorkbook.Sheets["Sheet1"];

  const readData = xlsx.utils.sheet_to_json(newSheet);

  console.log(readData);
  console.log(readData);
})
//this looks good
//a
//npx playwright test tests/login.spec.js
//queuebank
