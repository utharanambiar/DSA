const arr = [4, 1, 2, 1, 2, 4, 9];
let missing = arr[0];

for (let i = 1; i < arr.length; i++) {
  missing = missing ^ arr[i];
}

console.log(missing);
