// check driver
const age = 14;
const hasLicence = true;
const isDrink = false;
// check is Adult
let isAdult = (age >= 18);
// main check
let isDriveAvailable = isAdult && hasLicence && !isDrink;
let messageCheckAdult = `You are ${isAdult ? 'adult' : 'child'}`;
let messageCheckDriverState = `you can${isDriveAvailable ? '' : ' not'} drive`;
console.log(`${messageCheckAdult} and ${messageCheckDriverState}`);