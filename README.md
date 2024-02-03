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
