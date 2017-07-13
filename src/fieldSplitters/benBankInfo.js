module.exports = function benBankInfo(field) {
  const [benBankName1, benBankName2, benBankAddress1, benBankAddress2] = field.split(':');

  return {
    benBankName1,
    benBankName2,
    benBankAddress1,
    benBankAddress2
  };
};
