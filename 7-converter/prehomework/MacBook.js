// check driver

let ageYear = 24;
let money = 1500;
let productPrice = 2000;
let credit = 0;

let hasWork = true;
let isAge = false;
let isCanBuy = false;

// check is Adult
isCreditAge = (age) => (Number(age) >= 24);
isAge = isCreditAge(ageYear);


let messageCheckAdult = `You are ${ageYear} age old`;
print(messageCheckAdult);

function avialableCreditSum(isAge, hasWork = false) {
    return ( isAge ? (hasWork ? 500 : 100) : 0);
};

credit = avialableCreditSum(isAge, hasWork);
print(`You can take a credit = ${credit}`)

function canBuy(money, productPrice, avialableCreditSum = 0){
    return ((money + avialableCreditSum) >= productPrice )
};

isCanBuy = canBuy(money, productPrice, credit);
print(`You can ${isCanBuy ? '' : 'not'} buy a product`)

//libs 
function  print(message) {
    console.log(message)
}