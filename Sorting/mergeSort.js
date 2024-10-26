function mergeSort(arr, low, high) {
  if (low >= high) {
    return;
  }
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
  let temp = [];
  let left = low,
    right = mid + 1;
  while (left <= mid && right <= high) {
    if (arr[left] < arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    console.log(i, temp[i]);
    arr[i] = temp[i - low]; // Copy back sorted data into original array
  }
}

let arr1 = [7, 5, 9, -2, 8]; // Example array to be sorted
mergeSort(arr1, 0, arr1.length - 1); // Call the function
console.log(arr1);
