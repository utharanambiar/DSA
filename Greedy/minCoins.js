let V = 123;
let denominations = [1, 2, 5, 10, 20, 50, 100, 500, 1000];

let i = 0,
  count = 0;

for (let i = denominations.length - 1; i >= 0; i--) {
  while (denominations[i] <= V) {
    V = V - denominations[i];
    count++;
  }
}

console.log(count);
