const plaParser = require('./src/plaParser');

exports.parse = function parse(rawPlaFile) {
  return plaParser(rawPlaFile);
};
