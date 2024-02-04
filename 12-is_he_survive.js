const hero = (bullets, dragons) => (bullets / 2 >= dragons ? true : false);
console.log(hero(10, 5)); // true
console.log(hero(7, 4)); // false
