let arr = [2, 2, 1, 2, 0, 2, 1];

let low = 0,
  mid = 0,
  high = arr.length - 1;

while (mid <= high) {
  if (arr[mid] == 0) {
    [arr[low], arr[mid]] = [arr[mid], arr[low]];
    low++;
    mid++;
  }
  else if (arr[mid] == 1) {
    mid++;
  }
  else if (arr[mid] == 2) {
    [arr[high], arr[mid]] = [arr[mid], arr[high]];
    high--;
  }
}

console.log(arr)
