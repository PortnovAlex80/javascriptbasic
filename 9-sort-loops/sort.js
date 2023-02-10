const array = [1,40,-5,110,0, -3,57,-43,2]
let sortarray = [];
console.log(array);
const lng = array.length - 1;
let startel = array[0];
let min = startel;
let minIndex;
//main loop
for (let i = 0; i < lng; i++) {
    startel = array[i];
    min = array[i];
//second loop
    for (let j = i+1; j < (lng+1); j++) 
    {
    // find minimun
        if (min > array[j]) { 
            minIndex = j;
            min = array[j];      
        } 
    };
    if (min < startel) {
        array[minIndex] = array[i];
        array[i] = min; }
    console.log(array)
};