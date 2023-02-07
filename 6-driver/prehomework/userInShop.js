// check users

let balance = 1200;
let bonusBalance = 0;

let balanceLimit = 1000;
let bonusBalanceLimit = 100;
let isBanned = false;
let isExist = false;
let isSelling = true;

let isAvialable = false;

isAvialable = ((balance > balanceLimit) || (bonusBalance > bonusBalanceLimit)) 
    && !isBanned 
    && !isExist 
    && isSelling;

print(`I can buy games - ${isAvialable ? 'yes' : 'no'}`)

//libs 
function  print(message) {
    console.log(message)
}