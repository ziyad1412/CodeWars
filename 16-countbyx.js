const countBy = (x, n) => [...Array(n)].map((_, i) => x * (i + 1));
console.log(countBy(1, 5)); // [1, 2, 3, 4, 5]
console.log(countBy(2, 5)); // [2, 4, 6, 8, 10]
