let arr2 = [2, 6, 5, 8, 11];

let left = 0,
  right = arr2.length,
  target = 14;

function test() {
  while (left <= right) {
    if (arr2[left] + arr2[right] > target) {
      right--;
    } else if (arr2[left] + arr2[right] < target) {
      left++;
    } else {
      return true;
    }
    return false;
  }
}

let res = test();
console.log(res);
