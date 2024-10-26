let arr = [2, 2, 4, 3, 4, 8, 9];

function isSorted() {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

const res = isSorted();
console.log(res);
