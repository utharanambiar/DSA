let n = 11;
let arr = [];
let count = 8;

arr = new Array(n + 1).fill(true);
(arr[0] = false), (arr[1] = false);
for (let i = 2; i * i <= n; i++) {
  if (arr[i]) {
    for (let j = i * i; j <= n; j = j + i) {
      arr[j] = false;
    }
  }
}

let primeCount = 0;
for (let i = 2; i <= n; i++) {
  if (arr[i]) {
    primeCount++;
  }
}
console.log(arr, primeCount);
