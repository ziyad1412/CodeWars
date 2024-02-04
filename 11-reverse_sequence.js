const reverseSeq = (n) => [...Array(n)].map((_, i) => n - i);
console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]
