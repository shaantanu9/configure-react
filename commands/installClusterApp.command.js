const fs = require("fs");
const path = require("path");
const shell = require("shelljs");
const { editReadme, endingScreen } = require("configure-react/utils");

const changePackageJson = (
  currentPath,
  clusterName,
  args,
  packageJsonPath,
  packageJsonDataObject,
  listOfPackages
) => {
  process.chdir("../");
  console.log("Installing clusterapp");
  console.log(process.cwd(), "from changePackageJson");
  shell.exec("npm install " + listOfPackages);

  //   read cluster from package.json
  mainClusterPath = path.join(currentPath, "../", clusterName);
  //   read clusterapp from package.json
  const mainClusterPackageJson = fs.readFileSync(
    path.join(mainClusterPath, "./package.json"),
    "utf8"
  );
  const mainClusterPackageJsonDataObject = JSON.parse(mainClusterPackageJson);
  args.forEach((arg) => {
    packageJsonDataObject.dependencies[arg] =
      mainClusterPackageJsonDataObject.dependencies[arg];
  });
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJsonDataObject, null, 2),
    "utf8",
    (err) => {}
  );
  console.log("Installed clusterapp successfully");
};

const installClusterApp = (args) => {
  const packageObject = {};
  const listOfPackages = args.join(" ");
  const currentPath = process.cwd();
  const packageJsonPath = path.join(currentPath, "./package.json");
  const packageJsonData = fs.readFileSync(packageJsonPath, "utf8");
  const packageJsonDataObject = JSON.parse(packageJsonData);
  const clusterName = packageJsonDataObject.name;
  const clusterapp = packageJsonDataObject.clusterapp;
  if (clusterapp === undefined) {
    console.log("No clusterapp found in package.json");
    return;
  }

  // ---------------------------------------------------------------------------------------

  process.chdir("../");

  shell.exec("npm install " + listOfPackages);

  //   read cluster from package.json
  mainClusterPath = path.join(process.cwd());
  //   read clusterapp from package.json
  const mainClusterPackageJson = fs.readFileSync(
    path.join(mainClusterPath, "./package.json"),
    "utf8"
  );
  const mainClusterPackageJsonDataObject = JSON.parse(mainClusterPackageJson);
  args.forEach((arg) => {
    packageJsonDataObject.dependencies[arg] =
      mainClusterPackageJsonDataObject.dependencies[arg];
  });
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJsonDataObject, null, 2),
    "utf8",
    (err) => {}
  );
  console.log("Installed clusterapp successfully");
  // editReadme();
  endingScreen();
};

module.exports = installClusterApp;
