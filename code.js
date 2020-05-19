const CommandLine = require("./infrastructure/command_line");
const Rot13 = require("./logic/rot13");

module.exports = class App {

  constructor(commandLine, rot13) {
    this._commandLine = commandLine;
    this._rot13 = rot13;
  }

  run() {
    const args = this._commandLine.args();

    if (args.length === 0) {
      this._commandLine.writeOutput("Usage: run text_to_transform");
      return;
    }
    if (args.length !== 1) {
      this._commandLine.writeOutput("Too many arguments");
    }

    const input = args[0];
    const output = this._rot13.transform(input);
    this._commandLine.writeOutput(output);
  }

};
