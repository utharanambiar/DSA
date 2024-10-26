let arr1 = [1, 2, 3, 4, 5];
function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
    start++;
    end--;
  }
}

let k = 2;
let n = arr1.length;
//right
reverse(arr, 0, n - 1);
// Reverse the first k elements
reverse(arr, 0, k - 1);
// Reverse the remaining n-k elements
reverse(arr, k, n - 1);

//left
reverse(arr1, 0, n - 1);
// Reverse the first n-k elements
reverse(arr1, 0, n - k - 1);
// Reverse the remaining k elements
reverse(arr1, n - k, n - 1);
console.log(arr1);
