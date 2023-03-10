'use strict'
const changesBankList = [['USD', 70], ['EUR', 90], ['RUP', 35], ['RUB', 1]];

function currencyConvertor( sumToChange, incomeCurrency = 'RUB', outcomeCurrency = 'USD' ) {
    let cross = 1;
    if (incomeCurrency != 'RUB') {
        cross = currencyConvertor( sumToChange, 'RUB', outcomeCurrency) / currencyConvertor(sumToChange,'RUB', incomeCurrency)
        return sumToChange * cross;
    };
    let isExist = false; // matchs currency with BANK list
    changesBankList.forEach(function (el) {
     isExist = (el[0] == outcomeCurrency);
     if (isExist) {       
        convertSum = (sumToChange) / el[1] * cross; 
     } 
    });
    return convertSum || false;
};