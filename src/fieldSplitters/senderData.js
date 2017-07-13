module.exports = function senderData(field) {
  const [senderAccount, senderFeeAccount, curAmmount, transferCode] = field.split(':');

  return {
    senderAccount,
    senderFeeAccount,
    curAmmount,
    transferCode
  };
};
