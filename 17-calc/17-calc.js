'use strict'
let operation = '+'
let res = 0;

function clickPlus() {
    operation = '+'
};
function clickMinus() {
    operation = '-'
};
function clickMult() {
    operation = '*'
};
function clickDev() {
    operation = '/'
};
function clickCalc() {
    const a = (document.querySelector('.a').value);
    const b = (document.querySelector('.b').value)
    const res = calculation(Number(a), Number(b));
    document.querySelector('.res').value = res;
};

function calculation(a = 0, b = 0) {
    return ( operation === '+') ? a + b :
        ( (( operation === '-') ? a - b :
            (( operation === '*')) ? a * b : a / b ))
}

document.querySelector('.plus').addEventListener('click', clickPlus);
document.querySelector('.minus').addEventListener('click', clickMinus);
document.querySelector('.dev').addEventListener('click', clickDev);
document.querySelector('.mult').addEventListener('click', clickMult);
document.querySelector('.enter').addEventListener('click', clickCalc);
