//circular integer array
let arr = [5, 7, 1, 2, 6, 0];
// arr is [5, 7, 1, 2, 6, 0, 5, 7, 1, 2, 6, 0]
//ans = [7,-1 ,2 ,6 ,7 ,5]
let n = arr.length;
let nge = [],
  stck = [];

for (let i = 2 * n - 1; i >= 0; i--) {
  while (stck.length !== 0 && stck[stck.length - 1] <= arr[i % n]) {
    stck.pop();
  }
  if (i < n) {
    if (stck.length !== 0) {
      nge[i] = stck[stck.length - 1];
    } else {
      nge[i] = -1;
    }
  }
  stck.push(arr[i % n]);
}

console.log(nge);
