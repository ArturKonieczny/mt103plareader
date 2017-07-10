const dateLength = 6;
const currencyLength = 3;

function dateCurAmmount(field) {
  const date = field.substr(0, dateLength);
  const currency = field.substr(dateLength, currencyLength);
  const ammount = field.substr(dateLength + currencyLength);

  return {
    date,
    currency,
    ammount
  };
}

function senderName(field) {
  const [senderName1, senderName2, senderAddress1, senderAddress2] = field.split(':');

  return {
    senderName1,
    senderName2,
    senderAddress1,
    senderAddress2
  };
}

function senderData(field) {
  const [senderAccount, senderFeeAccount, curAmmount, transferCode] = field.split(':');

  return {
    senderAccount,
    senderFeeAccount,
    curAmmount,
    transferCode
  };
}

function benInfo(field) {
  const [benAccount, benName1, benName2, benAddress1, benAddress2] = field.split(':');

  return {
    benAccount: benAccount.substr(1),
    benName1,
    benName2,
    benAddress1,
    benAddress2
  };
}

function transferDesc(field) {
  const [transferDesc1, transferDesc2, transferDesc3, transferDesc4] = field.split(':');

  return {
    transferDesc1,
    transferDesc2,
    transferDesc3,
    transferDesc4
  };
}

module.exports = {
  dateCurAmmount,
  senderName,
  senderData,
  benInfo,
  transferDesc
};
