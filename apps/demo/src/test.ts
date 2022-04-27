import { runTestApp } from '@nativescript/unit-test-runner';
// import other polyfills here

runTestApp({
  runTests: () => {
    const tests = require.context('./', true, /\.spec\.ts$/);
    tests.keys().map(tests);

    const awarnsTests = require.context('../../../packages/', true, /\.spec\.ts$/);
    awarnsTests.keys().map(awarnsTests);
  },
});
