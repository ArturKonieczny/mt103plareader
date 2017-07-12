const plaParser = require('./src/plaParser');

module.exports = function parse(rawPlaFile) {
  return plaParser(rawPlaFile);
};
