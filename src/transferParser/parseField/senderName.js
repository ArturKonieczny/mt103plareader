/**
 * Parses the PLA sender name data field.
 * @param  {String} field String containing all lines of the field separated by ":"
 * @return {Object}       Object containing sender name data.
 */
module.exports = function senderName(field) {
  const [senderName1, senderName2, senderAddress1, senderAddress2] = field.split(':');

  return {
    senderName1,
    senderName2,
    senderAddress1,
    senderAddress2
  };
};
