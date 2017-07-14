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

      it('should have valid benInfo', () => {
        expect(transfer.benInfo).to.be.an('object');
      });

      it('should have valid benInfo benAccount', () => {
        expect(transfer.benInfo.benAccount).to.be.a('string');
        expect(transfer.benInfo.benAccount).to.equal(output.benInfo.benAccount);
      });

      it('should have valid benInfo benName1', () => {
        expect(transfer.benInfo.benName1).to.be.a('string');
        expect(transfer.benInfo.benName1).to.equal(output.benInfo.benName1);
      });

      it('should have valid benInfo benName2', () => {
        expect(transfer.benInfo.benName2).to.be.a('string');
        expect(transfer.benInfo.benName2).to.equal(output.benInfo.benName2);
      });

      it('should have valid benInfo benAddress1', () => {
        expect(transfer.benInfo.benAddress1).to.be.a('string');
        expect(transfer.benInfo.benAddress1).to.equal(output.benInfo.benAddress1);
      });

      it('should have valid benInfo benAddress2', () => {
        expect(transfer.benInfo.benAddress2).to.be.a('string');
        expect(transfer.benInfo.benAddress2).to.equal(output.benInfo.benAddress2);
      });

      it('should have valid transferDesc', () => {
        expect(transfer.transferDesc).to.be.an('object');
      });

      it('should have valid transferDesc transferDesc1', () => {
        expect(transfer.transferDesc.transferDesc1).to.be.a('string');
        expect(transfer.transferDesc.transferDesc1).to.equal(output.transferDesc.transferDesc1);
      });

      it('should have valid transferDesc transferDesc2', () => {
        expect(transfer.transferDesc.transferDesc2).to.be.a('string');
        expect(transfer.transferDesc.transferDesc2).to.equal(output.transferDesc.transferDesc2);
      });

      it('should have valid transferDesc transferDesc3', () => {
        expect(transfer.transferDesc.transferDesc3).to.be.a('string');
        expect(transfer.transferDesc.transferDesc3).to.equal(output.transferDesc.transferDesc3);
      });

      it('should have valid transferDesc transferDesc4', () => {
        expect(transfer.transferDesc.transferDesc4).to.be.a('string');
        expect(transfer.transferDesc.transferDesc4).to.equal(output.transferDesc.transferDesc4);
      });
    });
  });
});
