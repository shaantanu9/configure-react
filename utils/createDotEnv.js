import fs from "fs";

const createEnv = (envPath) => {
  const envData = detail.envData.join("\n");
  // if file not exist, create it
  if (!fs.existsSync(envPath)) {
    shell.touch(envPath);
  }
  // edit .env
  fs.appendFileSync(envPath, makeCodePritter(envData), "utf8", (err) => {
    if (err) throw err;
  });
};

module.exports = createEnv;
