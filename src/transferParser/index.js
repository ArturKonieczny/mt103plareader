const getFieldString = require('./getFieldString');
const setField = require('./setField');
const specs = require('./plaspecs.json');

/**
 * Converts single transfer string from PLA format file into transfer Object
 * @param  {String} rawTransfer Single transfer from PLA format file.
 * @return {Object}             Transfer Object, see README.md for details.
 */
module.exports = function transferParser(rawTransfer) {
  const transferLines = rawTransfer.split(/\r\n|\n/);

  return transferLines.reduce((transfer, transferLine, fieldLineIndex) => {
    const [, plaCode, fieldValue] = transferLine.split(/:/);
    const plaField = specs[plaCode];

    if (!plaField) {
      return transfer;
    }

    const { fieldName, fieldLength } = plaField;
    const fieldString = getFieldString(fieldLineIndex, fieldValue, fieldLength, transferLines);

    return setField(transfer, fieldName, fieldString);
  }, {});
};
