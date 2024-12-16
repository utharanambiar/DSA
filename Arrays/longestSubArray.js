let arr = [1, 2, 3, 1, 1, 1, 1, 1, 2, 3];

let k = 6;

//sol

let left = 0,
  right = 0,
  sum = arr[0];
let n = arr.length,
  maxLen = 0,
  start = -1,
  end = -1;

while (right < n) {
  while (left <= right && sum > k) {
    sum -= arr[left];
    left++;
  }
  if (sum == k) {
    if (right - left + 1 > maxLen) {
      maxLen = right - left + 1;
      start = left;
      end = right;
    }
  }
  right++;
  sum += arr[right];
}

console.log(maxLen, start, end);
