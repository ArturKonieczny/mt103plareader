const { expect } = require('chai');
const parse = require('../index');
const testCases = require('./testCases');

describe('parser results', () => {
  testCases.forEach((testCase) => {
    it('should be an array', () => {
      const result = parse(testCase.input);

      expect(result).to.be.an('array');
    });

    it(`should return ${testCase.output.length} transfer(s)`, () => {
      const result = parse(testCase.input);

      expect(result.length).to.equal(testCase.output.length);
    });
  });
});
