exports.input = `:01:43216
:02:945,34
:03:3
:04:24900005
:05:sender name

sender address
sender address2
:07:17-07-06-12
{1:F0124900005xxxx0001000001}{2:I100ALBPPLPWxxxxN1}{4:
:20:265765
:32A:170706EUR234,34
:50:sender name

sender address
sender address2
:52D:17249000050000460086241234
17249000050000460086241234
EUR234,34
F50            PL PL
:57A:ALBPPLPW
:59:/15249000050000400036691234
ben Name

ben address
ben address2
:70:title1
 title2
 title3
 title4
:71A:BN1
:72: 00 00 00 00
-}$
{1:F0124901044xxxx0001000002}{2:I100ALBPPLPWxxxxN1}{4:
:20:265832
:32A:170706EUR100,00
:50:sender name

sender address
sender address2
:52D:17249000050000460086241234
17249000050000460086241234
EUR100,00
F50            PL PL
:57A:ALBPPLPW
:59:/57249010440000420059981234
ben name2

ben address12
ben address22
:70:2title1
 2title2
 2title3
 2title4
:71A:BN1
:72: 00 00 00 00
-}$
{1:F0124901044xxxx0001000003}{2:I100ALBPPLPWxxxxN1}{4:
:20:265890
:32A:170706EUR611,00
:50:sender name

sender address
sender address2
:52D:17249000050000460086241234
17249000050000460086241234
EUR611,00
F50            PL PL
:57A:ALBPPLPW
:59:/75249010440000420059981234
ben name 3

ben address3
ben address23
:70:3title1
 3title2
 3title3
 3title4
:71A:BN1
:72: 00 00 00 00
-}`;

exports.output = [{
  refCode: '265765',
  dateCurAmmount: {
    date: '170706',
    currency: 'EUR',
    ammount: '234,34'
  },
  senderName: {
    senderName1: 'sender name',
    senderName2: '',
    senderAddress1: 'sender address',
    senderAddress2: 'sender address2'
  },
  senderData: {
    senderAccount: '17249000050000460086241234',
    senderFeeAccount: '17249000050000460086241234',
    curAmmount: 'EUR234,34',
    transferCode: 'F50            PL PL'
  },
  swiftCode: 'ALBPPLPW',
  benInfo: {
    benAccount: '15249000050000400036691234',
    benName1: 'ben Name',
    benName2: '',
    benAddress1: 'ben address',
    benAddress2: 'ben address2'
  },
  transferDesc: {
    transferDesc1: 'title1',
    transferDesc2: ' title2',
    transferDesc3: ' title3',
    transferDesc4: ' title4'
  },
  costDetails: 'BN1',
  transferInfo: ' 00 00 00 00'
}, {
  refCode: '265832',
  dateCurAmmount: {
    date: '170706',
    currency: 'EUR',
    ammount: '100,00'
  },
  senderName: {
    senderName1: 'sender name',
    senderName2: '',
    senderAddress1: 'sender address',
    senderAddress2: 'sender address2'
  },
  senderData: {
    senderAccount: '17249000050000460086241234',
    senderFeeAccount: '17249000050000460086241234',
    curAmmount: 'EUR100,00',
    transferCode: 'F50            PL PL'
  },
  swiftCode: 'ALBPPLPW',
  benInfo: {
    benAccount: '57249010440000420059981234',
    benName1: 'ben name2',
    benName2: '',
    benAddress1: 'ben address12',
    benAddress2: 'ben address22'
  },
  transferDesc: {
    transferDesc1: '2title1',
    transferDesc2: ' 2title2',
    transferDesc3: ' 2title3',
    transferDesc4: ' 2title4'
  },
  costDetails: 'BN1',
  transferInfo: ' 00 00 00 00'
}, {
  refCode: '265890',
  dateCurAmmount: {
    date: '170706',
    currency: 'EUR',
    ammount: '611,00'
  },
  senderName: {
    senderName1: 'sender name',
    senderName2: '',
    senderAddress1: 'sender address',
    senderAddress2: 'sender address2'
  },
  senderData: {
    senderAccount: '17249000050000460086241234',
    senderFeeAccount: '17249000050000460086241234',
    curAmmount: 'EUR611,00',
    transferCode: 'F50            PL PL'
  },
  swiftCode: 'ALBPPLPW',
  benInfo: {
    benAccount: '75249010440000420059981234',
    benName1: 'ben name 3',
    benName2: '',
    benAddress1: 'ben address3',
    benAddress2: 'ben address23'
  },
  transferDesc: {
    transferDesc1: '3title1',
    transferDesc2: ' 3title2',
    transferDesc3: ' 3title3',
    transferDesc4: ' 3title4'
  },
  costDetails: 'BN1',
  transferInfo: ' 00 00 00 00'
}];
