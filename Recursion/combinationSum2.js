//Find all unique combinations

let arr = [10, 1, 2, 7, 6, 1, 5],
  target = 8,
  ans = [];

arr.sort();

function findSubsets() {
  function generateSubset(index, target1, subarray) {
    if (target1 === 0) {
      ans.push([...subarray]);
      return;
    }
    if (index === arr.length || target1 < 0) return;
    for (let i = index; i < arr.length; i++) {
      if (i > index && arr[i - 1] === arr[i]) continue;
      if (arr[i] <= target1) {
        subarray.push(arr[i]);

        generateSubset(i + 1, target1 - arr[i], subarray);

        subarray.pop();
      }
    }
  }
  generateSubset(0, target, []);
  return ans;
}

console.log(findSubsets(arr));
