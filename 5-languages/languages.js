// languages main homework

//init
const input = prompt('Enter your languages: en, ru, de');

switch(input) {
    case 'en':
        print('Hello');
        break;
    case 'ru':
        print('Privet');
        break;
    case 'de':
        print('Gutten tag');
        break;
    default:
        print(`I dont understand you expression ${input}`)
}

//libs 
function  print(message) {
    console.log(message)
}