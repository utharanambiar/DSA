let arr = [3, 1, 2, 4],
  k = 6;
let count = 0,
  left = 0,
  right = 0,
  sum = 0;

while (right <= arr.length) {
  while (left <= right && sum > k) {
    sum -= arr[left];
    left++;
  }
  if (sum == k) {
    count++;
  }
  sum += arr[right];
  right++;
}

console.log(count);
