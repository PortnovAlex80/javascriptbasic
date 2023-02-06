// input
// string - summainRUB
// input promt - USD EUR DM RUP
let incomeRUB = 1000;
let convertSum = 0; 
let inputcurrency = 'USD';

// curruncy list
const changesBankList = [['USD', 70], ['EUR', 90], ['RUP', 35]];

//promt
inputcurrency = prompt('USD EUR RUP');
incomeRUB = prompt('How many RUBLES do you have?');

//main
print(convertor());

//libs 
function convertor() {
let isExist = false; // if includes
changesBankList.forEach(function (el) {
    isExist = (el[0] === inputcurrency);
    convertSum = (isExist) 
    ? (incomeRUB / el[1]) : convertSum;
    } );
return convertSum || null;
};

function  print(message) {
    console.log(message)
}