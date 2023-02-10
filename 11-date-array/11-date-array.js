const dateArray = ['10-02-2022', 'test', '11/12/2023', '00/13/2022', '41/12/2023', '15/ss/2046'];
// check date lenght must be = 10; 
function isLength(date) {
    return (date.length === 10);
};
// devided string by separator
function spliter(date) {
    let arr;
    arr = date; //date.split(""); // str --> array
    arr = (arr.includes('/')
    ? arr.split('/') 
    : (arr.includes('-')) 
        ? arr.split('-') : false );
    return arr;// ret splited arr
};
// Validation data format schema day#month#year
function isDateSchemaValidated(date) {
    const arr = spliter(date); // arr --> a/b/year 
    let [a, b, year] = arr;
    // checking if Number
    a = isNaN(a) ? 0 : Number(a);
    b = isNaN(b) ? 0 : Number(b);
    year = isNaN(year) ? 0 : Number(year);  
    // logger
    // check for correct days and months and years combination
    if (a <= 0 || b <= 0 || year <= 1900) { 
        return false };
    if (a > 12 && b > 12) { 
        return false };
    if (a > 31 || b > 31) {  // nothing can be > 31
        return false };
    return true;
};
function isDateCorrect(date) {
    return (isLength(date) && isDateSchemaValidated(date));
};

console.log(arr.filter( date => isDateCorrect(date) ));
