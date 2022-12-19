const fs = require("fs");
const filePath = process.argv[2];

try {
  const inputData = fs.readFileSync(filePath, { encoding: "utf8" });
  const inputDataArray = inputData.split("\n");
  const keyArray = inputDataArray[0].split(",");
  const objectArray = [];
  inputDataArray.slice(1).forEach((value) => {
    const columnValueArray = value.split(",");
    if (keyArray.length < columnValueArray.length) {
      console.error("CSVファイルのカラム数が正しくありません");
      process.exit(1);
    }
    const object = {};
    keyArray.forEach((keyValue, keyIndex) => {
      object[keyValue] = columnValueArray[keyIndex];
    });
    objectArray.push(object);
  });
  console.log(objectArray);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
