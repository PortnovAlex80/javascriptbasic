const dateArray = ['10-02-2022', 
                    'test',
                    '11/12/2023', 
                    '00/13/2022', 
                    '41/12/2023', 
                    '15/ss/2046'];

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
    logger(`Splitter servet: return - ${arr}`);
    return arr;// ret splited arr
};
// Validation data format schema day#month#year
function isDateSchemaValidated(date) {
    arr = spliter(date); // arr --> a/b/year 
    let [a, b, year] = arr;
    // checking if Number
    a = isNaN(a) ? 0 : Number(a);
    b = isNaN(b) ? 0 : Number(b);
    year = isNaN(year) ? 0 : Number(year);  
    // logger
    logger(`Server Schema a=${a} b=${b} y=${year}`);
    // check for correct days and months and years combination
    if (a <= 0 || b <= 0 || year <= 1900) { 
        logger(`invalid date code 1`) 
        return false };
    if (a > 12 && b > 12) { 
        logger(`invalid date code 2`) // only one parametr can be >12
        return false };
    if (a > 31 || b > 31) {  // nothing can be > 31
        logger(`invalid date code 3`) 
        return false };
    logger(`Schema is true`);
    return true;
};
function isDateCorrect(date) {
    return (isLength(date) && isDateSchemaValidated(date));
};
function correctDate(arr) {
    logger(arr.filter( date => isDateCorrect(date) ));
};
function  logger(message) {
    console.log(message);
};

// start
correctDate(dateArray);