# Example Test for James Shore

This is just a throwaway repo in response to [this twitter
thread](https://twitter.com/jamesshore/status/1262591868094701568?s=20)

# Usage

```
npm it
```

This will install testdouble, teenytest, and ought, then run the tests which are
expected to fail.

## Test output

This is the output you should see

```
> james-testdouble-example@1.0.0 test /Users/justin/code/searls/james-testdouble-example
> teenytest test.js

TAP version 13
1..6
ok 1 - "doing this with straightforward verifications 0-arg invocation" - test #1 in `test.js`
ok 2 - "doing this with straightforward verifications multi-arg invocation" - test #2 in `test.js`
ok 3 - "doing this with straightforward verifications 1-arg returns rot13 conversion" - test #3 in `test.js`
ok 4 - "doing this with a fake that tracks output 0-arg invocation" - test #4 in `test.js`
not ok 5 - "doing this with a fake that tracks output multi-arg invocation" - test #5 in `test.js`
  ---
  AssertionError [ERR_ASSERTION]: Expected actual to equal expected, but it did not:  [
    'Too many arguments',
-   undefined,
  ]
    at new AssertionError (internal/assert/assertion_error.js:425:11)
    at throwError (/Users/justin/code/searls/james-testdouble-example/node_modules/ought/lib/throw-error.js:5:9)
    at Object.equal (/Users/justin/code/searls/james-testdouble-example/node_modules/ought/index.js:13:35)
    at Object.multi-arg invocation (/Users/justin/code/searls/james-testdouble-example/test.js:73:13)
    at /Users/justin/code/searls/james-testdouble-example/node_modules/teenytest/lib/plugins/callbackify.js:14:21
    at runX (/Users/justin/code/searls/james-testdouble-example/node_modules/teenytest/lib/plugins/wrap.js:22:7)
    at Object.userFunction [as wrap] (/Users/justin/code/searls/james-testdouble-example/node_modules/teenytest/plugins/uncaught-exception.js:16:9)
    at callable (/Users/justin/code/searls/james-testdouble-example/node_modules/teenytest/lib/plugins/wrap.js:29:24)
    at runX (/Users/justin/code/searls/james-testdouble-example/node_modules/teenytest/lib/plugins/wrap.js:22:7)
    at Object.userFunction [as wrap] (/Users/justin/code/searls/james-testdouble-example/node_modules/teenytest/plugins/results.js:10:9)
  ...
ok 6 - "doing this with a fake that tracks output 1-arg returns rot13 conversion" - test #6 in `test.js`
# Test run failed!
#   Passed: 5
#   Failed: 1
#   Total:  6
#
# Failures:
#
#   5 - "doing this with a fake that tracks output multi-arg invocation" - test #5 in `test.js`
#
#     AssertionError [ERR_ASSERTION]: Expected actual to equal expected, but it did not:  [
#         'Too many arguments',
#     -   undefined,
#       ]
#         at new AssertionError (internal/assert/assertion_error.js:425:11)
#         at throwError (/Users/justin/code/searls/james-testdouble-example/node_modules/ought/lib/throw-error.js:5:9)
#         at Object.equal (/Users/justin/code/searls/james-testdouble-example/node_modules/ought/index.js:13:35)
#         at Object.multi-arg invocation (/Users/justin/code/searls/james-testdouble-example/test.js:73:13)
#         at /Users/justin/code/searls/james-testdouble-example/node_modules/teenytest/lib/plugins/callbackify.js:14:21
#         at runX (/Users/justin/code/searls/james-testdouble-example/node_modules/teenytest/lib/plugins/wrap.js:22:7)
#         at Object.userFunction [as wrap] (/Users/justin/code/searls/james-testdouble-example/node_modules/teenytest/plugins/uncaught-exception.js:16:9)
#         at callable (/Users/justin/code/searls/james-testdouble-example/node_modules/teenytest/lib/plugins/wrap.js:29:24)
#         at runX (/Users/justin/code/searls/james-testdouble-example/node_modules/teenytest/lib/plugins/wrap.js:22:7)
#         at Object.userFunction [as wrap] (/Users/justin/code/searls/james-testdouble-example/node_modules/teenytest/plugins/results.js:10:9)
```
