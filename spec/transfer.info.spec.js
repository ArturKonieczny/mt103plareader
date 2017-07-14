const { expect } = require('chai');
const parse = require('../index');
const testCases = require('./testCases');

describe('Transfer properties', () => {
  testCases.forEach((testCase) => {
    /* In tests below, result does not change. */
    const result = parse(testCase.input);

    /* We want to test each trasnfer in a file. */
    result.forEach((transfer, index) => {
      const output = testCase.output[index];

      it('should be an object', () => {
        expect(transfer).to.be.an('object');
      });

      it('should have valid refCode', () => {
        expect(transfer.refCode).to.be.a('string');
        expect(transfer.refCode).to.equal(output.refCode);
      });

      it('should have valid swiftCode', () => {
        expect(transfer.swiftCode).to.be.a('string');
        expect(transfer.swiftCode).to.equal(output.swiftCode);
      });

      it('should have valid costDetails', () => {
        expect(transfer.costDetails).to.be.a('string');
        expect(transfer.costDetails).to.equal(output.costDetails);
      });

      it('should have valid transferInfo', () => {
        expect(transfer.transferInfo).to.be.a('string');
        expect(transfer.transferInfo).to.equal(output.transferInfo);
      });

      it('should have valid dateCurAmmount', () => {
        expect(transfer.dateCurAmmount).to.be.an('object');
      });

      it('should have valid dateCurAmmount date', () => {
        expect(transfer.dateCurAmmount.date).to.be.a('string');
        expect(transfer.dateCurAmmount.date).to.equal(output.dateCurAmmount.date);
      });

      it('should have valid dateCurAmmount currency', () => {
        expect(transfer.dateCurAmmount.currency).to.be.a('string');
        expect(transfer.dateCurAmmount.currency).to.equal(output.dateCurAmmount.currency);
      });

      it('should have valid dateCurAmmount ammount', () => {
        expect(transfer.dateCurAmmount.ammount).to.be.a('string');
        expect(transfer.dateCurAmmount.ammount).to.equal(output.dateCurAmmount.ammount);
      });
    });
  });
});
