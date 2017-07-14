module.exports = {
  extends: 'qb',
  root: true,
  env: {
    mocha: true
  },
  rules: {
    'no-console': ['off'],
    'no-magic-numbers': ['off'],
    'max-nested-callbacks':  [ 'error', 5 ]
  }
};
