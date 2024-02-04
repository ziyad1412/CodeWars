# CodeWars Challenges

### Challenge 1: Odd Even

```bash
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
```

### Challenge 2: Negative

```bash
function makeNegative(num) {
  return num > 0 ? -num : num;
}
```

### Challenge 3: Sum Positive

```bash
function positiveSum(arr) {
  return arr.reduce((acc, cur) => (cur > 0 ? acc + cur : acc), 0);
}
```

### Challenge 4: Reversed String

```bash
function solution(str) {
  return str.split("").reverse().join("");
}
```

### Challenge 5: Remove First & Last Char

```bash
const removeChar = (str) => str.slice(1, -1);
```

### Challenge 6: Square Sum

```bash
const squareSum = (numbers) => numbers.reduce((acc, cur) => acc + cur * cur, 0);
```

### Challenge 7: Repeat Str

```bash
const repeatStr = (n, s) => s.repeat(n);
```

### Challenge 8: Grasshopper

```bash
const summation = (num) => (num * (num + 1)) / 2;
```

### Challenge 9: No Space String

```bash
const noSpace = (x) => x.split(' ').join('');
```

### Challenge 10: Count Sheep

```bash
const countSheeps = (sheep) => sheep.filter(Boolean).length;
```

### Challenge 11: Reverse Seq

```bash
const reverseSeq = (n) => [...Array(n)].map((_, i) => n - i);
```

### Challenge 12: Hero vs Dragons

```bash
const hero = (bullets, dragons) => (bullets / 2 >= dragons ? true : false);
```

### Challenge 13: Array to String

```bash
const smash = (words) => words.join(" ");
```

### Challenge 14: Fuel

```bash
const zeroFuel = (jarak, mpg, bensin) => bensin >= jarak / mpg;
```

### Challenge 15: DNA to RNA

```bash
const DNAtoRNA = (dna) => dna.replace(/T/g, "U");
```

### Challenge 16: Array Count by x

```bash
const countBy = (x, n) => [...Array(n)].map((_, i) => x * (i + 1));
```

### Challenge 17: Remove Duplicate Word

```bash
function removeDuplicateWords(str) {
  const words = str.split(" ");

  const uniqueWords = words.filter(
    (word, index) => words.indexOf(word) === index
  );

  return uniqueWords.join(" ");
}
```
