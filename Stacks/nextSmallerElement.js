//circular integer array
let arr = [0, 6, 2, 1, 7, 5];
// arr is [0, 6, 2, 1, 7, 5, 0, 6, 2, 1, 7, 5]
//ans = [-1, 2, 1, 0, 5, 0]
let n = arr.length,
  stck = [],
  nse = [];
for (let i = 2 * n - 1; i >= 0; i--) {
  while (stck.length != 0 && stck[stck.length - 1] >= arr[i % n]) {
    stck.pop();
  }
  if (i < n) {
    if (stck.length != 0) {
      nse[i] = stck[stck.length - 1];
    } else {
      nse[i] = -1;
    }
  }
  stck.push(arr[i % n]);
}

console.log(nse);
