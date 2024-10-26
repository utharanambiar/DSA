let arr = [1, 0, 1, 1, 1, 0, 1];
let max1 = 0,
  max2 = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    max1++;
  } else {
    max1 = 0;
  }
  max2 = Math.max(max1, max2);
}

console.log(max2);
