const transferParser = require('./transferParser.js');

function splitPlaFile(rawPlaFile) {
  const prefixEnd = rawPlaFile.indexOf('{');

  return {
    prefix: rawPlaFile.substring(0, prefixEnd),
    rawTransfers: rawPlaFile.substring(prefixEnd).split('$')
  };
}

module.exports = function plaParser(rawPlaFile) {
  const { rawTransfers } = splitPlaFile(rawPlaFile);
  const transfers = rawTransfers.map(transferParser);

  return transfers;
};
