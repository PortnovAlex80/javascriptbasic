
// initialisation coordinates
let addresLat = 0;
let addressLong = 0;
let positionLat = 10;
let positionLong = 10;
let distance = 0;

// preparing parametrs for calculation
let latDifference = Math.abs(positionLat - addresLat) ; // dX = X2 - X1
let longDifference = Math.abs(positionLong - addressLong); // dY = Y2 - Y1

// function - calculation 2D Distance
distanceCalc();

// libs functions
function distanceCalc() {
    distance = Math.sqrt((latDifference ** 2) +(longDifference ** 2)) // Distance = Sqr (dX2 + dY2)
    logger();
    return distance;
}

// function for check calculations and print in console
function logger() {
    console.log(`dX ${latDifference}`);
    console.log(`dY ${longDifference}`);
    console.log(`Distance ${distance}`);
}



