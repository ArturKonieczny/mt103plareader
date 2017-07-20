const transferParser = require('./transferParser');

/**
 * Splits the PLA file into redundant prefix and array of raw transfer strings.
 * @param  {String} rawPlaFile Raw MT103 PLA format file content.
 * @return {Array}            Array containing raw transfer strings.
 */
function splitPlaFile(rawPlaFile) {
  const prefixEnd = rawPlaFile.indexOf('{');

  return {
    prefix: rawPlaFile.substring(0, prefixEnd),
    rawTransfers: rawPlaFile.substring(prefixEnd).split('$')
  };
}

/**
 * Parses a MT103 PLA format file into an Array of js Object.
 * See README.md for object specs.
 * @param  {String} rawPlaFile Raw MT103 PLA format file content.
 * @return {Array}            Array containing transfer Objects.
 */
module.exports = function plaParser(rawPlaFile) {
  const { rawTransfers } = splitPlaFile(rawPlaFile);

  return rawTransfers.map(transferParser);
};
