'use strict'
const dateArray = ['10-02-2022', 'test', '11/12/2023', '00/13/2022', '41/12/2023', '15/ss/2046'];
function isLength(date) {
    return (date.length === 10);
};

function spliter(date) {
    let arr;
    arr = date; //date.split(""); // str --> array
    arr = (arr.includes('/')
    ? arr.split('/') 
    : (arr.includes('-')) 
        ? arr.split('-') : false );
    return arr;// ret splited arr
};

function isDateSchemaValidated(date) {
    const arr = spliter(date); // arr --> a/b/year 
    const [a, b, year] = arr;
    a = isNaN(a) ? 0 : Number(a);
    b = isNaN(b) ? 0 : Number(b);
    year = isNaN(year) ? 0 : Number(year);  
    if (a <= 0 || b <= 0 || year <= 1900) { 
        return false };
    if (a > 12 && b > 12) { 
        return false };
    if (a > 31 || b > 31) { 
        return false };
    return true;
};

function isDateCorrect(date) {
    return (isLength(date) && isDateSchemaValidated(date));
};

console.log(arr.filter( date => isDateCorrect(date) ));
