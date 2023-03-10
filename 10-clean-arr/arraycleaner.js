'use strict'
const arr = [0, 50, 25, 52 , 100, 37, 78, 25, 30];

function arrayFilter(array, deleteParamsFunction) {
    let filteredArray = [];
    for (let j = 0; j < array.length; j++) {
        deleteParamsFunction(array[j]) && filteredArray.push(array[j]);
    };
    return filteredArray;
};

function deleteFn (number) { return (number > 50) };
