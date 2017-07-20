const extractField = require('./transferFieldParser');

/**
 * Sets up transfer fields
 * @param  {string} rawTransfer PLA file format single transfer string.
 * @return {Object}             Transfer Object, see README.md for details.
 */
module.exports = function transferParser(rawTransfer) {
  const transferLines = rawTransfer.split(/\r\n|\n/);

  return transferLines.reduce(extractField, {});
};
