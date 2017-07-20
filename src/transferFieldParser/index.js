const getFieldString = require('./getFieldString');
const setField = require('./setField');
const specs = require('./plaspecs.json');

/**
 * Builds a field of the transfer Object from teh raw transfer lines.
 * @param  {Object} transfer       Transfer Object, see README.md for details.
 * @param  {String} transferLine   Single line that might be a start of a field.
 * @param  {Number} fieldLineIndex Index of the first line of the field in transferLines.
 * @param  {Array} transferLines   Array containing all transfer lines.
 * @return {Object}                Transfer Object, see README.md for details.
 */
module.exports = function extractField(transfer, transferLine, fieldLineIndex, transferLines) {
  const [, plaCode, fieldValue] = transferLine.split(/:/);
  const plaField = specs[plaCode];

  if (!plaField) {
    return transfer;
  }

  const { fieldName, fieldLength } = plaField;
  const fieldString = getFieldString(fieldLineIndex, fieldValue, fieldLength, transferLines);

  return setField(transfer, fieldName, fieldString);
};
