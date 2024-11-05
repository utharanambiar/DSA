let arr = [2, 3, 6, 7],
  target = 7,
  ans = [];

function findSubsets(arr) {
  function generateSubArray(index, target1, subarray) {
    if (target1 === 0) {
      ans.push([...subarray]);
      return;
    }

    // Stop if we've processed all elements or target is negative
    if (index === arr.length || target1 < 0) return;
    if (arr[index] <= target1) {
      subarray.push(arr[index]);
      generateSubArray(index, target1 - arr[index], subarray);
      subarray.pop();
    }
    generateSubArray(index + 1, target1, subarray);
  }
  generateSubArray(0, target, []);
  return ans;
}

console.log(findSubsets(arr));
