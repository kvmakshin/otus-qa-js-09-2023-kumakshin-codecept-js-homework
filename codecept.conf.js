const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'src/specs/e2e/*.e2e.spec.js',
  output: 'src/specs/output',
  helpers: {
    Playwright: {
      url: 'https://www.apple.com',
      show: false,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'otus-qa-js-09-2023-kumakshin-codecept-js-homework'
}