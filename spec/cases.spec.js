const parse = require('../index');
/* eslint-env mocha */
/* eslint max-nested-callbacks: [ 'error', 5 ] */
/* eslint no-magic-numbers: 0 */
const { expect } = require('chai');
const testCases = require('./testCases');

describe('parser results', () => {
  testCases.forEach((testCase) => {
    it('should be an array', () => {
      const result = parse(testCase.input);

      expect(result).to.be.an('array');
    });

    it(`should return ${testCase.output.length} transfer(s)`, () => {
      const result = parse(testCase.input);

      expect(result.length).to.equal(3);
    });
  });
});
