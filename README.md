# MT103PLAReader

MT103 PLA file format parser. Reads a PLA format file and returns a JavaScript Object.
Example MT103 PLA file format description can be found at:
https://www.danskebank.com/en-uk/ci/Products-Services/Transaction-Services/Online-Services/Integration-Services/Documents/Formats/FormatDescription_PLA/PLA.pdf

DEMO: coming soon
Example: test.js

```js
transfer {
  refCode, // refference number
  dateCurAmmount: {
    date, // transfer due date YYMMDD
    currency, // transfer currency, 3 chars e.g. EUR, USD, PLN...
    ammount }, // transfer ammount, separator: comma
  senderName: {
    senderName1,
    senderName2,
    senderAddress1,
    senderAddress2 },
  senderData: {
    senderAccnount,
    senderFeeAccount,
    curAmmount, // redundant field from PLA file, example value EUR600,00
    transferCode }, // field used in PLA format. transaction type code + country code e.g. 'F50            PL PL'
  swiftCode,
  benInfo: {
    benAccount,
    benName1,
    benName2,
    benAddress1,
    benAddress2 },
  benBankInfo: {
    benBankName1,
    benBankName2,
    benBankAddress1,
    benBankAddress2 },
  transferDesc: {
    transferDesc1,
    transferDesc2,
    transferDesc3,
    transferDesc4 },
  costDetails, // code for who pays the transfer fees, 3 chars, e.g. 'BN1'. See PLA specs for more details
  transferInfo // redundant PLA format code. See PLA specs for more details
}
```

## Installation

Coming soon:
```bash
npm install mt103plareader
```

or simply download and "require" this repository.

## Usage

```js
const mt103plareader = require('mt103plareader');

const transferObjectArray = mt103plareader(plaFile);
```
