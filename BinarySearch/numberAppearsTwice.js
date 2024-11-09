let arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];

//using xor
let twice = 0;
for (let i = 0; i < arr.length; i++) {
  twice = twice ^ arr[i];
}

//console.log(twice);

//using binary search
let low = 1,
  high = arr.length - 2,
  mid,
  n = arr.length;
function findMid() {
  if (n == 1) {
    return arr[n];
  }
  if (arr[0] != arr[1]) {
    return arr[0];
  }
  if (arr[n - 1] != arr[n - 2]) {
    return arr[n - 1];
  }
  while (low <= high) {
    mid = Math.floor((high + low) / 2);

    if (arr[mid] !== arr[mid - 1] && arr[mid] != arr[mid + 1]) {
      return arr[mid];
    }
    //check indexes (even,odd) or (odd,even)
    if (
      (mid % 2 == 0 && arr[mid] == arr[mid + 1]) ||
      (mid % 2 == 1 && arr[mid] == arr[mid - 1])
    ) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}

console.log(findMid());
