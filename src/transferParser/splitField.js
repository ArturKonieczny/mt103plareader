const fieldSplitters = require('./fieldSplitters');

/**
 * Sets transfer Object property..
 * @param {String} fieldName   Field name to be set.
 * @param {String} fieldString Raw field string extracted from rawTransfer.
 * @return {Object}            Transfer Object field, see README.md for details.
 */
module.exports = function splitField(fieldName, fieldString) {
  const splitterFunction = fieldSplitters[fieldName] || ((input) => input);

  return splitterFunction(fieldString);
};
