const { editReadme, endingScreen } = require("configure-react/utils");
const fs = require("fs");
const path = require("path");
const shell = require("shelljs");

const firstProject = (currentPath) => {
  shell.mkdir("-p", path.join(currentPath, "./first-project"));
  shell.cd(path.join(currentPath, "./first-project"));
  shell.exec("npm init -y");
};

const startCreatingBigReact = (currentPath) => {
  shell.touch("package.json");
  fs.writeFileSync(
    path.join(currentPath, "./package.json"),
    packageJsonData(),
    "utf8",
    (err) => {}
  );
  shell.exec("npm install");
  firstProject(currentPath);
};

const createBigReact = (args) => {
  if (args.length !== 1) {
    return console.log("Please provide a name for your Big react app.");
  }
  const currentPathbefore = process.cwd();
  folderList = fs.readdirSync(currentPathbefore);
  if (folderList.includes(args[0])) {
    return console.log("A folder with this name already exists.");
  }
  shell.mkdir(args[0]);
  shell.cd(args[0]);
  const currentPath = process.cwd();

  startCreatingBigReact(currentPath);
  editReadme(currentPath, "big-react");
  endingScreen();
};

module.exports = createBigReact;

function packageJsonData() {
  return `  {
            "name": "reactcluster",
            "version": "1.0.0",
            "description": "React Cluster by configure React  ",
            "dependencies": {
              "@testing-library/jest-dom": "^5.16.5",
              "@testing-library/react": "^13.4.0",
              "@testing-library/user-event": "^13.5.0",
              "axios": "^1.1.2",
              "react": "^18.2.0",
              "react-dom": "^18.2.0",
              "react-scripts": "5.0.1",
              "web-vitals": "^2.1.4"
            },
            "keywords": [
              "react",
              "reactcluster",
              "react-cluster",
              "configure-react",
              "react-configure-cluster"
            ],
            "pacakageAuthor": {
              "name": "Shantanu Bombatkar",
              "email": "shantanubombatkar2@gmail.com",
              "url": "https://shantanubombatkar.shodkk.com/",
              "github": "https://github.com/shaantanu9",
              "linkedin": "https://www.linkedin.com/in/shantanu-bombatkar"
            },
            "license": "MIT",
            "bugs": {
              "url": "git+https://github.com/shaantanu9/configure-react/issues"
            }
          }
          `;
}
