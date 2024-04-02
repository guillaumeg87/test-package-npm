"use strict";
// import * as fs from "fs";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
console.log("Custom package");

class SetupCLI {
  setup() {
    fs.cp("./webpack.config.js.dist", "../webpack.config.js.plop", (err) => {
      if (err) {
        console.error(err);
      } else console.log("Configuration created ! ");
    });
  }
}

module.exports = SetupCLI;
