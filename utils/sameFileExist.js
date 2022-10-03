const fs = require("fs");
const sameFileExist = (fileName) => {
  const files = fs.readdirSync("./");
  return files.includes(fileName);
};

module.exports = sameFileExist;
