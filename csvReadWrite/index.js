const fs = require("fs");
const { parse } = require("csv-parse/sync");
const { stringify } = require("csv-stringify/sync");
const filePath = process.argv[2];
const inputString = process.argv[3];

if (inputString === undefined) {
  const inputData = fs.readFileSync(filePath, { encoding: "utf8" });
  console.log(inputData);
} else {
  const inputData = fs.readFileSync(filePath, { encoding: "utf8" });
  const parsedData = parse(inputData, { columns: false });
  parsedData.push(inputString.split(','));
  const outputData = stringify(parsedData, { header: false });
  fs.writeFileSync(filePath, outputData, { encoding: "utf8" });
  console.log(outputData);
}
