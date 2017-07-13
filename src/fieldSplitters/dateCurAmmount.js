const dateLength = 6;
const currencyLength = 3;

module.exports = function dateCurAmmount(field) {
  const date = field.substr(0, dateLength);
  const currency = field.substr(dateLength, currencyLength);
  const ammount = field.substr(dateLength + currencyLength);

  return {
    date,
    currency,
    ammount
  };
};
