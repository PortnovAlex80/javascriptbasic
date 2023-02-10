const arr = [0, 50, 25, 52 , 100, 37, 78, 25, 30];

// manual filter
function arrayFilter(array, deleteParamsFunction) {
    let filteredArray = [];
    for (let  = 0; j < array.length; j++) {
        deleteParamsFunction(array[j]) && filteredArray.push(array[j]);
    };
    return filteredArray;
};

function deleteFn (number) { return (number > 50) };
