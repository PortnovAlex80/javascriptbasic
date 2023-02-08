// hours rate

// initializaion
let hourRateUSD = 80;
let workingDaysLimit = 5;
let workingHoursInDayLimit = 5;

let orderHoursRequired = 40; 
let workingDaysAvailable = 11;
let totalWorkingHours = 0;

let isCanPossibleToDoFlag = false;
let priceOrder = 0;

// Algotitms
// 1 Calculation total working hours available for job = workingDaysAvailable * workingHoursInDayLimit, hours
// 2 Comprare total available hours with orderHoursRequired (inCanPossibleToDo)
// 3 Calc priceOrder = hourRateUSD * orderHoursRequired

// main
totalWorkingHours = totalWorkingHoursNeed();
isCanPossibleToDoFlag = isCanPossibleToDo();
priceOrder = calcOrderSum();

// print
print(`Total working hours is ${totalWorkingHours} hours`);
print(`Can take the Order ${isCanPossibleToDoFlag}`);
print(`Total order price is ${priceOrder} USD`);

// libs
// 1 Calculation total working hours available for job = workingDaysAvailable * workingHoursInDayLimit, hours
function totalWorkingHoursNeed () {
    return (workingDaysAvailable * workingHoursInDayLimit);
}

// 2 Comprare total available hours with orderHoursRequired (inCanPossibleToDo)
function isCanPossibleToDo() {
    return ((orderHoursRequired > totalWorkingHours) ? 'NO' : 'YES');
}

// 3 Calc priceOrder = hourRateUSD * orderHoursRequired
function calcOrderSum () {
    return (hourRateUSD * orderHoursRequired);
}

// Print function
function print(message) {
    console.log(message);
}