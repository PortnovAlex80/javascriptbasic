const array = [1,40,-5,110,0, -3,57,-43,2]
const lng = array.length - 1;
for (let i = 0; i < lng; i++) {
    for (let j = i+1; j < (lng+1); j++) 
    {
        if (array[i] > array[j]) { 
            [array[i], array[j]] = [array[j], array[i]] 
        } 
    };
};