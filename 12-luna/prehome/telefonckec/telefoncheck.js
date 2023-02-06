
const nums = ['8910 3235 486356','89153105555','+7910 3235356','+7(910)3235656','+7(910) 323-53-56','  +7(910) 323-53-56', '89103235','+7d910d323-53-56','9+7103235356','89103f5356']


nums.forEach((num) => {
    print(`Tel ${num} is ${isCorrect(num) ? 'CORRECT' : 'ERROR'}`)
    isCorrect(num);
})


function isCorrect(telefonNumber) {
  return isLengthCorrect(telefonNumber) 
         //&& isNaN(telefonNumber);

}

function isNumber(telefonNumber) {
    return isNaN(Number(telefonNumber));
}

function isLengthCorrect(telefonNumber) {
oldtelefon = telefonNumber;
telefonNumber = superTrimmer(telefonNumber);
print(`Telefon ${oldtelefon}-->${telefonNumber} length ${telefonNumber.length} and fist ${telefonNumber[0]}`);
return (telefonNumber[0] === '8' && telefonNumber.length === 11); // cleaned number must have 11 chars
}

function superTrimmer(telefonNumber) {
   trimstr = '';
   return trimstr = telefonNumber
   .replaceAll(' ', '')
   .replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll('-', '')
    .replaceAll('+7','8');

}

function  print(message) {
    console.log(message)
};

