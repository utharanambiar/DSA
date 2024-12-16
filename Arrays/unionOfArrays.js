let arr1 = [1, 2, 3, 4, 5];
let arr2 = [0, 2, 2, 3, 5, 9, 70]; //and 1
let left = 0,
  right = 0;
let res = [];

while (left < arr1.length && right < arr2.length) {
  if (arr2[right] < arr1[left]) {
    if (res[res.length - 1] !== arr2[right]) {
      // Check for duplicates
      res.push(arr2[right]);
    }
    right++;
  } else if (arr2[right] == arr1[left]) {
    if (res[res.length - 1] !== arr1[left]) {
      // Add only one of the equal elements
      res.push(arr1[left]);
    }
    right++;
    left++;
  } else {
    if (res[res.length - 1] !== arr1[left]) {
      res.push(arr1[left]);
    }
    left++;
  }
}

console.log(res);
