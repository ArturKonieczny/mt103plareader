const fieldSplitters = require('./fieldSplitters.js');

module.exports = function TransferObj(transferData) {
  for (const key in transferData) {
    if (fieldSplitters[key]) {
      const fieldsToSplit = fieldSplitters[key](transferData[key]);

      for (const splitKey in fieldsToSplit) {
        this[splitKey] = fieldsToSplit[splitKey];
      }
    } else {
      this[key] = transferData[key];
    }
  }
};
