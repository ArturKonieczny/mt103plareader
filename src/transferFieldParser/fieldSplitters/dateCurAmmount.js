const dateLength = 6;
const currencyLength = 3;

/**
 * Parses the PLA Date-Currency-Ammount field.
 * @param  {String} field YYMMDDCURAMMOUNT e.g. 170612EUR100,50
 * @return {Object}       Object containing due date, transfer currency and ammount.
 */
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
