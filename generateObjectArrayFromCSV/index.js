const fs = require("fs").promises;
const filePath = process.argv[2];

fs.readFile(filePath, "utf8")
  .then((data) => {
    const inputDataArray = data.split("\n");
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
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
