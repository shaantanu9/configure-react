const fs = require("fs");
const sameFileExists = (fileName) => {
  const files = fs.readdirSync("./");
  return files.includes(fileName);
};

module.exports = sameFileExists;
