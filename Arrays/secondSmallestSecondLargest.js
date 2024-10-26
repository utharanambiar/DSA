let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let small = Infinity,
  secondSmallest = Infinity,
  large = -Infinity,
  secondLargest = -Infinity;
function findSecondSmallest() {
  if (arr.length <= 2) {
    return -1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      secondSmallest = small;
      small = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] != small) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
}

function findSecondLargest() {
  if (arr.length <= 2) {
    return -1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      secondLargest = large;
      large = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != large) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

const res = max3();
console.log(res);
