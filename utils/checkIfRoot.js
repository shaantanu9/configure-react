const shell = require("shelljs");
const path = require("path");
const fs = require("fs");

const checkIfRoot = (args) => {
  if (args[0] !== ".") return false;
  const currentPath = process.cwd();
  const packageJsonPath = path.join(currentPath, "./package.json");
  const packageJsonData = fs.readFileSync(packageJsonPath, "utf8");
  const packageJsonDataObject = JSON.parse(packageJsonData);
  const packageJsonDataObjectScripts = packageJsonDataObject.scripts;
  if (
    packageJsonDataObjectScripts["start"] !== "react-scripts start" ||
    packageJsonData.dependencies.react === undefined
  ) {
    return false;
  }

  return true;
};

module.exports = checkIfRoot;
