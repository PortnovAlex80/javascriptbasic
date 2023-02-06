// deposit module prehomework


//init
let input = 'I am not a robot';
let question = 'How is 7 plus or minus 15?';
let alerts = ['Succeful','You are robot!'];
let answers = [22, -8, 'I am not a robot'];

input = prompt(question);
print(isCheckSucceful() ? alerts[0] : alerts[1])

function isCheckSucceful() {
    return (answers.includes(input));
}


/// libs

function  print(message) {
    console.log(message)
}