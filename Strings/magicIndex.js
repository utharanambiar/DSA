let arr = [0, 0, 4, 5, 6];

//distinct elements
const magicIndex = (arr) => {
  let low = 0,
    high = arr.length - 1,
    mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] == mid) {
      return true;
    } else if (arr[mid] < mid) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
};

console.log(magicIndex(arr));


// non distinct elements
const magicIndex2 = (arr, low, high) => {
  if (low > high) {
    return false; // Base case: no magic index
  }
  mid = Math.floor((low + high) / 2);
  if (arr[mid] == mid) {
    return true;
  } 
  
  let leftPart = magicIndex2(arr, low, Math.min(arr[mid], mid -1))
  if (leftPart !== -1) {
    return leftPart
  }
  return magicIndex2(arr, Math.max(arr[mid], mid + 1), high);
};

console.log(magicIndex2(arr, 0, arr.length -1))
