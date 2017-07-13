const fieldSplitters = require('./fieldSplitters');

module.exports = function TransferObj(transferData) {
  for (const key in transferData) {
    this[key] = fieldSplitters[key] ? fieldSplitters[key](transferData[key]) : transferData[key];
  }
};
