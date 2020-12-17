module.exports = {
  rootDir: './src',
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
  ],
  globalSetup: '<rootDir>/../dotenv-test.js'
};
