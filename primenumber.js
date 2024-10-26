// let n = 11;
// let arr = [];
// let count = 8;

// arr = new Array(n+1).fill(true);
// (arr[0] = false), (arr[1] = false);
// for (let i = 2; i * i <= n; i++) {
//   if (arr[i]) {
//     for (let j = i * i; j <= n; j = j + i) {
//       arr[j] = false;
//     }
//   }
// }

// let primeCount = 0;
//     for (let i = 2; i <= n; i++) {
//         if (arr[i]) {
//             primeCount++;
//         }
//     }
// console.log(arr, primeCount);

let arr = [1, 1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 8];
// function unique(arr) {
// let hashSet = new Set(arr);
// let unique = Array.from(hashSet)
// for(let i=0;i<unique.length;i++) {
//     arr[i] = unique[i]
// }
// return unique.length
// }

// let k = unique(arr)
// console.log(k)

// let i =0
// for(let j=1;j<arr.length;j++) {
//     if(arr[i] !== arr[j]) {
//         i++;
//         arr[i] = arr[j]
//     }
// }
// for(let k=0;k<=i;k++) {
//     console.log(arr[k])
// }
// console.log(arr, i)

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
