module.exports = function benInfo(field) {
  const [benAccount, benName1, benName2, benAddress1, benAddress2] = field.split(':');

  return {
    benAccount: benAccount.substr(1),
    benName1,
    benName2,
    benAddress1,
    benAddress2
  };
};
