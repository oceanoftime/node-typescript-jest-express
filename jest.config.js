module.exports = {
  rootDir: './src',
  transform: {                                        // Make sure .ts code is converted before running tests
    '.ts': 'ts-jest',
  },
  globalSetup: '<rootDir>/../dotenv-test.js'          // Load dotenv test config through script
};
