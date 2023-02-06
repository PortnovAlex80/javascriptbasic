// check driver

let ageYear = 14;
let hasLicence = true;
let isDrink = false;

// check is Adult
let isAdult = (ageYear>18) && true || false;
// main check
let isDriveAvailable = isAdult && hasLicence && !isDrink;

let messageCheckAdult = `You are ${isAdult ? 'adult' : 'child'}`;
let messageCheckDriverState = `you can${isDriveAvailable ? '' : ' not'} drive`;

print(`${messageCheckAdult} and ${messageCheckDriverState}`);


//libs 
function  print(message) {
    console.log(message)
}