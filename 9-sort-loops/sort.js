const array = [1,40,-5,110,0, -3,57,-43,2]
let sortarray = [];

let lng = array.length - 1;

    print(array)
    let startel = array[0];
    let min = startel;
    let minIndex;

for (let i = 0; i < lng; i++) {
    startel = array[i];
    min = array[i]
     for (let j = i+1; j < (lng+1); j++) 
     {
        // find minimun
        if (min > array[j]) { 
             minIndex = j;
           // print(`new min is ${array[j]} index ${minIndex}`);
            min = array[j];      
        } 
     };
      
     if (min < startel) {
     array[minIndex] = array[i];
        array[i] = min; }


     print(array)

}




function  print(message) {
    console.log(message)
}