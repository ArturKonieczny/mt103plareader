const { specs } = require('./plaspecs.json');
const TransferObj = require('./TransferObj.js');

function processTransferLines(transferLines) {
  const transfer = {};

  transferLines.forEach((element, index) => {
    const [, plaCode, fieldValue] = element.split(/:/);

    if (specs[plaCode]) {
      let fullField = fieldValue;

      for (let subFieldIndex = 1; subFieldIndex < specs[plaCode].fieldLength; subFieldIndex++) {
        fullField += `:${transferLines[index + subFieldIndex]}`;
      }

      transfer[specs[plaCode].fieldName] = fullField;
    }
  });

  return transfer;
}

module.exports = function parse(rawTransfer) {
  const transferLines = rawTransfer.split(/\r\n|\n/);

  return new TransferObj(processTransferLines(transferLines));
};
