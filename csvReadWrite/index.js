const fs = require("fs");
const { parse } = require("csv-parse/sync");
const { stringify } = require("csv-stringify/sync");
const filePath = process.argv[2];
const inputString = process.argv[3];

try {
  if (inputString === undefined) {
    const inputData = fs.readFileSync(filePath, { encoding: "utf8" });
    console.log(inputData);
  } else {
    const inputData = fs.readFileSync(filePath, { encoding: "utf8" });
    const parsedData = parse(inputData, { columns: false });
    const inputRecordArray = inputString.split(",");
    if (parsedData[0].length !== inputRecordArray.length) {
      console.log("レコードのカラム数が一致しません");
      process.exit(1);
    }
    parsedData.push(inputRecordArray);
    const outputData = stringify(parsedData, { header: false });
    fs.writeFileSync(filePath, outputData, { encoding: "utf8" });
    console.log(outputData);
  }
} catch (error) {
  console.error(error.message);
}
