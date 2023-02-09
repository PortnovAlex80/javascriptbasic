let acc = 0; // init accum
const cart ='4561-2612-1234-5467';
// trim all "-" and get array str --> array
const cartarr = trimstr(cart).split("");
// check it
console.log((cartarr));

// reducing 
acc = cartarr.reduce( (acc, element, index) => {
    value = Number(element);
    return acc += ((index+1) % 2 !== 0 ) // even or not 
        ? 
         (((value * 2) < 9) ? (value * 2) : ((value * 2) - 9)) // more than 9 or not
        : value; 
}, 0);

console.log(`Cart number ${cart} ${acc % 10 == 0 ? 'validated luna OK' : 'ERROR VALIDATION'}`);

function trimstr(str) {
    return str.replaceAll('-','');
}