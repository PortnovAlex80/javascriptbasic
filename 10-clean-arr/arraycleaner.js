const arr = [0, 50, 25, 52 , 100, 37, 78, 25, 30];

// tests
console.log(deleteFn(50));
console.log(deleteFn(52));
console.log(arr);
arrayFilter(arr, deleteFn);
console.log(arr);

// manual filter
function arrayFilter(array, deleteParamsFunction) {
    let i = array[0];
    for (let j = 0; j < array.length; j++) {
        (deleteParamsFunction(array[j])) && array.splice(j,1);
    };
};

function deleteFn (number) { return (number > 51) };