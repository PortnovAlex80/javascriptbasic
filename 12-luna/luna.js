'use strict'
const cart ='4561-2612-1234-5467';

function luna(cart) {
let acc = 0;

const cartarr = cart.replaceAll('-','').split("");

acc = cartarr.reduce( (acc, element, index) => {
    value = Number(element);
    return acc += ((index+1) % 2 !== 0 ) // even or not 
        ? 
        (
            ((value * 2) < 9) 
            ? (value * 2) 
            : ((value * 2) - 9)
        )
        : value; 
    }, 0);

return acc % 10 == 0 ? true : false;
};