const CommandLine = require("./infrastructure/command_line");
const Rot13 = require("./logic/rot13");

module.exports = class App {

  constructor(commandLine, rot13) {
    this._commandLine = commandLine;
    this._rot13 = rot13;
  }

  run() {
    let output
    const args = this._commandLine.args();

    if (args.length === 0) {
      output = "Usage: run text_to_transform"
    } else if (args.length !== 1) {
      output = "Too many arguments"
    } else {
      const input = args[0];
      output = this._rot13.transform(input);
    }

    this._commandLine.writeOutput(output);
  }

};
