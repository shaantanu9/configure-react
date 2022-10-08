const fs = require("fs");

const refreshApp = () => {};

const refreshComponents = () => {
    
};

const refreshPages = () => {};

const refreshContext = () => {};

const refreshRedux = () => {};

const refreshUtils = () => {};

const refreshApi = () => {};

const refresh = (name) => {
  if (name[0] !== ".") {
    return console.log("Please Go Inside the Project Folder");
  }
  // see the folder structure of the project
  const srcFilesExist = fs.readdirSync("./");
  if (!srcFilesExist.includes("src")) {
    return console.log(
      "Please run this command in the root directory of your project"
    );
  }
  const srcFiles = fs.readdirSync("./src");
  switch (true) {
    case srcFiles.includes("app"):
      refreshApp();
    case srcFiles.includes("components"):
      refreshComponents();
    case srcFiles.includes("pages"):
      refreshPages();
    case srcFiles.includes("context"):
      refreshContext();
    case srcFiles.includes("redux"):
      refreshRedux();
    case srcFiles.includes("utils"):
      refreshUtils();
    case srcFiles.includes("api"):
      refreshApi();
    default:
      return console.log(
        "Please run this command in the root directory of your project"
      );
  }
};

module.exports = refresh;
