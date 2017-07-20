const transferParser = require('./parseTransfer');

/**
 * Parses a MT103 PLA format file into an Array of js Object.
 * See README.md for object specs.
 * @param  {String} rawPlaFile Raw MT103 PLA format file content.
 * @return {Array}            Array containing transfer Objects.
 */
module.exports = function parsePla(rawPlaFile) {
  const prefixEnd = rawPlaFile.indexOf('{');
  const rawTransfers = rawPlaFile.substring(prefixEnd).split('$');

  return rawTransfers.map(transferParser);
};
