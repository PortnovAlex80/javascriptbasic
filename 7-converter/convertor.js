// input
// string - summainRUB
// input promt - USD EUR DM RUP
const incomeRUB = 1000;
const inputcurrency = 'USD';
let convertSum = 0; 
// curruncy list
const changesBankList = [['USD', 70], ['EUR', 90], ['RUP', 35]];
//promt
inputcurrency = prompt('USD EUR RUP');
incomeRUB = prompt('How many RUBLES do you have?');
//main
console.log(convertor());
//libs 
function convertor() {
let isExist = false; // if includes
changesBankList.forEach(function (el) {
    isExist = (el[0] === inputcurrency);
    convertSum = (isExist) 
    ? (incomeRUB / el[1]) : convertSum; // convertation rubles/currency
    } );
return convertSum || null;
};