const fieldSplitters = {
  dateCurAmmount: require('./dateCurAmmount'),
  senderName: require('./senderName'),
  senderData: require('./senderData'),
  benInfo: require('./benInfo'),
  transferDesc: require('./transferDesc'),
  benBankInfo: require('./benBankInfo')
};

/**
 * Parses field string into Object property
 * @param {String} fieldName   Field name to be set.
 * @param {String} fieldString Raw field string extracted from rawTransfer.
 * @return {Object}            Transfer Object field, see README.md for details.
 */
module.exports = function parseField(fieldName, fieldString) {
  const splitterFunction = fieldSplitters[fieldName] || ((input) => input);

  return splitterFunction(fieldString);
};
