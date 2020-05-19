const td = require('testdouble')
const ought = require('ought')

let subject, commandLine, rot13
module.exports = {
  beforeEach () {
    commandLine = td.replace('./infrastructure/command_line')
    rot13 = td.replace('./logic/rot13')
    const App = require('./code')
    subject = new App(commandLine, rot13)
  },

  /* This is how I default to testing collaborations, but probably would not in
   * this case because the commandLine dependency is stateful in the sense that
   * unintended calls are consequential and everything is clearly order-
   * dependent
   */
  'doing this with straightforward verifications': {
    '0-arg invocation' () {
      td.when(commandLine.args()).thenReturn([])

      subject.run()

      td.verify(commandLine.writeOutput('Usage: run text_to_transform'))
    },

    // Passes unexpectedly, because additional calls to writeOutput mattered
    'multi-arg invocation' () {
      td.when(commandLine.args()).thenReturn([1, 2])

      subject.run()

      td.verify(commandLine.writeOutput('Too many arguments'))
    },

    '1-arg returns rot13 conversion' () {
      td.when(commandLine.args()).thenReturn(['some text'])
      td.when(rot13.transform('some text')).thenReturn('converted text')

      subject.run()

      td.verify(commandLine.writeOutput('converted text'))
    }
  },

  /* Because the collaborator commandLine is stateful and being called multiple
   * times in which order matters, my preference would be for the test to assert
   * the cumulative args passed to it rather than take advantage of advanced
   * test double features that might be error-prone or hard for others to follow
   */
  'doing this with a fake that tracks output': {
    beforeEach () {
      this.output = []
      td.when(commandLine.writeOutput(td.matchers.anything())).thenDo(s =>
        this.output.push(s)
      )
    },

    '0-arg invocation' () {
      td.when(commandLine.args()).thenReturn([])

      subject.run()

      ought.equal(this.output, ['Usage: run text_to_transform'])
    },

    // Fails, as you'd desire, because there's a second element in this.output
    'multi-arg invocation' () {
      td.when(commandLine.args()).thenReturn([1, 2])

      subject.run()

      ought.equal(this.output, ['Too many arguments'])
    },

    '1-arg returns rot13 conversion' () {
      td.when(commandLine.args()).thenReturn(['some text'])
      td.when(rot13.transform('some text')).thenReturn('converted text')

      subject.run()

      ought.equal(this.output, ['converted text'])
    }
  }
}
