const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let n = arr.length,
  sum = 0;
let start = 0,
  end = 0;
let maxx = Number.MIN_SAFE_INTEGER; // or use -Infinity
for (let i = 0; i < n; i++) {
  sum += arr[i];
  if (sum > maxx) {
    maxx = sum;
  }
  if (sum < 0) {
    sum = 0;
  }
}

console.log(maxx);

//with subarray
for (let i = 0; i < n; i++) {
  if (sum == 0) {
    start = i;
    end = i;
  }
  sum += arr[i];
  if (maxx < sum) {
    maxx = sum;
    end = i;
  }
  if (sum < 0) {
    sum = 0;
  }
}

for (let i = start; i <= end; i++) {
  console.log(arr[i]);
}

