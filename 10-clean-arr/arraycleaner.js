
arr = [0, 50, 25, 52 , 100, 37, 78, 25, 30];


print(deleteFn(50));
print(deleteFn(52));
print(arr);
arrayFilter(arr, deleteFn);
print(arr);


function arrayFilter(array, deleteParamsFunction) {
    let i = array[0];
    for (let j = 0; j < array.length; j++) {
        (deleteParamsFunction(array[j])) && array.splice(j,1) 
    };

};

function deleteFn (number) { return (number > 51)};


function  print(message) {
    console.log(message)
}