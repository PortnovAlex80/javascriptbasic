// languages main homework

//init
const input = prompt('Enter your languages: en, ru, de');
switch(input) {
    case 'en':
        console.log('Hello');
        break;
    case 'ru':
        console.log('Privet');
        break;
    case 'de':
        console.log('Gutten tag');
        break;
    default:
        console.log(`I dont understand you expression ${input}`)
}