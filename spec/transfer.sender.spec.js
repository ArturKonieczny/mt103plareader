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

      it('should have valid senderName', () => {
        expect(transfer.senderName).to.be.an('object');
      });

      it('should have valid senderName senderName1', () => {
        expect(transfer.senderName.senderName1).to.be.a('string');
        expect(transfer.senderName.senderName1).to.equal(output.senderName.senderName1);
      });

      it('should have valid senderName senderName2', () => {
        expect(transfer.senderName.senderName2).to.be.a('string');
        expect(transfer.senderName.senderName2).to.equal(output.senderName.senderName2);
      });

      it('should have valid senderName senderAddress1', () => {
        expect(transfer.senderName.senderAddress1).to.be.a('string');
        expect(transfer.senderName.senderAddress1).to.equal(output.senderName.senderAddress1);
      });

      it('should have valid senderName senderAddress2', () => {
        expect(transfer.senderName.senderAddress2).to.be.a('string');
        expect(transfer.senderName.senderAddress2).to.equal(output.senderName.senderAddress2);
      });

      it('should have valid senderData', () => {
        expect(transfer.senderData).to.be.an('object');
      });

      it('should have valid senderData senderAccount', () => {
        expect(transfer.senderData.senderAccount).to.be.a('string');
        expect(transfer.senderData.senderAccount).to.equal(output.senderData.senderAccount);
      });

      it('should have valid senderData senderFeeAccount', () => {
        expect(transfer.senderData.senderFeeAccount).to.be.a('string');
        expect(transfer.senderData.senderFeeAccount).to.equal(output.senderData.senderFeeAccount);
      });

      it('should have valid senderData curAmmount', () => {
        expect(transfer.senderData.curAmmount).to.be.a('string');
        expect(transfer.senderData.curAmmount).to.equal(output.senderData.curAmmount);
      });

      it('should have valid senderData transferCode', () => {
        expect(transfer.senderData.transferCode).to.be.a('string');
        expect(transfer.senderData.transferCode).to.equal(output.senderData.transferCode);
      });
    });
  });
});
