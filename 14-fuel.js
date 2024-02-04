const zeroFuel = (jarak, mpg, bensin) => bensin >= jarak / mpg;
console.log(zeroFuel(50, 25, 2)); // true
console.log(zeroFuel(100, 50, 1)); // false
