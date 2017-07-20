/**
 * Parses the PLA sender account data field.
 * @param  {String} field String containing all lines of the field separated by ":"
 * @return {Object}       Object containing sender account data.
 */
module.exports = function senderData(field) {
  const [senderAccount, senderFeeAccount, curAmmount, transferCode] = field.split(':');

  return {
    senderAccount,
    senderFeeAccount,
    curAmmount,
    transferCode
  };
};
