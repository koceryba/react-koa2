module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  plugins: [
    'babel',
    'mocha',
  ],
  rules: {
    'global-require': 0,
    'mocha/no-exclusive-tests': 'error',
    'padded-blocks': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 1,
    'max-len': 0,
    'no-underscore-dangle': 0,
    'jsx-a11y/href-no-hash': 0,
    'class-methods-use-this': 0,
    'no-throw-literal': 0,
    'guard-for-in': 0,
    'no-bitwise': 0,
    'no-use-before-define': 0,
    camelcase: 0,
    'new-cap': 0,
    'no-await-in-loop': 0,
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      spread: true,
    },
  },
  env: {
    node: true,
    mocha: true,
  },
};
