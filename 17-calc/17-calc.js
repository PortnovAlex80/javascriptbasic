// const buttonPlus = document.createElement('button');
// buttonPlus.setAttribute('class','plus');
// buttonPlus.innerHTML = '+';

// const buttonMunis = document.createElement('button');
// buttonPlus.setAttribute("class","minus");
// buttonMunis.innerHTML = '-';

// const buttonMult = document.createElement('button');
// buttonPlus.setAttribute("class","mult");
// buttonMult.innerHTML = '*';

// const buttonDev = document.createElement('button');
// buttonPlus.setAttribute("class","dev");
// buttonDev.innerHTML = '/';

// const buttonEnter = document.createElement('button');
// buttonPlus.setAttribute("class","enter");
// buttonEnter.innerHTML = '=';

// const inputA = document.createElement('input');
// inputA.setAttribute('class','a')
// const inputB = document.createElement('input');
// inputB.setAttribute('class','b')
// const inputC = document.createElement('input');
// inputC.setAttribute('class','c')

// document.body.appendChild(inputA);
// document.body.appendChild(buttonPlus)
// document.body.appendChild(buttonMunis)
// document.body.appendChild(buttonMult)
// document.body.appendChild(buttonDev)
// document.body.appendChild(inputB);
// document.body.appendChild(buttonEnter)
// document.body.appendChild(inputC);

let operation = '+';
let a = 0;
let b = 0;
let res = 0;

addEventListener('load', () =>{print('loaded') })
print(document.querySelector('.a').value);

function clickPlus() {
    operation = '+'
    print(`New operation is ${operation}`)
};
function clickMinus() {
    operation = '-'
    print(`New operation is ${operation}`)
};
function clickMult() {
    operation = '*'
    print(`New operation is ${operation}`)
};
function clickDev() {
    operation = '/'
    print(`New operation is ${operation}`)
};
function clickCalc() {
    print('Start calc')
    a = (document.querySelector('.a').value);
    b = (document.querySelector('.b').value)
    print(`Calc operation is ${operation}`)
    res = calculation(Number(a), Number(b));
    print(`Calc operatin is ${res}`)
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


function  print(message) {
    console.log(message)
}

