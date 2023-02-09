
// initialisation coordinates
const addresLat = 0;
const addressLong = 0;
const positionLat = 10;
const positionLong = 10;
let distance = 0;

// preparing parametrs for calculation
let latDifference = Math.abs(positionLat - addresLat) ; // dX = X2 - X1
let longDifference = Math.abs(positionLong - addressLong); // dY = Y2 - Y1
distance = Math.sqrt((latDifference ** 2) +(longDifference ** 2)) // Distance = Sqr (dX2 + dY2)

console.log(`dX ${latDifference}`);
console.log(`dY ${longDifference}`);
console.log(`Distance ${distance}`);




