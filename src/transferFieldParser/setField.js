const fieldSplitters = require('./fieldSplitters');

/**
 * Sets transfer Object property.
 * @param {Object} transfer    Transfer Object, see README.md for details.
 * @param {String} fieldName   Field name to be set.
 * @param {String} fieldString Raw field string extracted from rawTransfer.
 * @return {Object}            Transfer Object, see README.md for details.
 */
module.exports = function setField(transfer, fieldName, fieldString) {
  const splitterFunction = fieldSplitters[fieldName];

  transfer[fieldName] = splitterFunction ? splitterFunction(fieldString) : fieldString;

  return transfer;
};
