const arr = [10, 22, 12, 3, 0, 6]; // 7 , 1, 0 are leaders
let temp = [];
let max = arr[arr.length - 1];
temp.push(arr[arr.length - 1]);
for (let i = arr.length - 2; i >= 0; i--) {
  if (arr[i] > max) {
    temp.push(arr[i]);
    max = arr[i];
  }
}

console.log("temp", temp);
