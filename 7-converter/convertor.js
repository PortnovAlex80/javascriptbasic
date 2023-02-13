const changesBankList = [['USD', 70], ['EUR', 90], ['RUP', 35], ['RUB', 1]];

console.log(currencyConvertor(2000, 'RUB', 'RUB'));

function currencyConvertor( sumToChange, incomeCurrency = 'RUB', outcomeCurrency = 'USD' ) {
    // calculate cross-change RUB as base.
    let cross = 1; // default cross-change
    if (incomeCurrency != 'RUB') {
        cross = currencyConvertor( sumToChange, 'RUB', outcomeCurrency) / currencyConvertor(sumToChange,'RUB', incomeCurrency)
        return sumToChange * cross;
    };
    let isExist = false; // matchs currency
    changesBankList.forEach(function (el) {
     isExist = (el[0] == outcomeCurrency);
     if (isExist) {       
        convertSum = (sumToChange) / el[1] * cross; 
     } 
    });
    return convertSum || null;
};
