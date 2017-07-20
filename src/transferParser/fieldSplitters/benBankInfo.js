/**
 * Parses the PLA Beneficient Bank Information field.
 * @param  {String} field String containing all lines of the field separated by ":"
 * @return {Object}       Object containing Beneficient Bank Info.
 */
module.exports = function benBankInfo(field) {
  const [benBankName1, benBankName2, benBankAddress1, benBankAddress2] = field.split(':');

  return {
    benBankName1,
    benBankName2,
    benBankAddress1,
    benBankAddress2
  };
};
