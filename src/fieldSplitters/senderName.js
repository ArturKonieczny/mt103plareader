module.exports = function senderName(field) {
  const [senderName1, senderName2, senderAddress1, senderAddress2] = field.split(':');

  return {
    senderName1,
    senderName2,
    senderAddress1,
    senderAddress2
  };
};
