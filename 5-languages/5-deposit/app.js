// deposit module prehomework


//init
let depositUSD = 12000;
let yearRate = 7;
let capitalisationPeriodinMonth = 1;

let goalSummaUSD = 13500; // we want buy a new house
let savingPeriodYear = 2;

let currentCount = 0; // accumulator

// //check calcs in logs
// print(calcCapitalisation());
// print(isCanBuy(calcCapitalisation(),goalSummaUSD));

// main
print(`You ${isCanBuy(calcCapitalisation(),goalSummaUSD)} buy house by ${goalSummaUSD}. Your rest is ${currentCount - goalSummaUSD}`)

/// libs
function calcCapitalisation() {
    // calc prepare 
    let yearRateMonth = (yearRate / 1200) // /100 - % 12 - months in years = 1200
    let savingPeriodInMonth = savingPeriodYear * 12; // calc months in saving period
    // calc
    currentCount = depositUSD * (1 + yearRateMonth) ** savingPeriodInMonth
    return currentCount;
}

function isCanBuy(bank, goal) {
    // bank - how money in bank account
    // goal - how money need
    if (bank > goal) {
        return 'can'
    } 
    return 'can not'
}

function  print(message) {
    console.log(message)
}