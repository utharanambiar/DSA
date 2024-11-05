let arr = [1, 2, 2],
  ans = [];

function findSubsets(arr) {
  function generateSubset(index, subset) {
    ans.push([...subset]);

    for (let i = index; i < arr.length; i++) {
      if (i > index && arr[i - 1] === arr[i]) continue;
      subset.push(arr[i]);

      generateSubset(i + 1, subset);

      subset.pop();
    }
  }

  generateSubset(0, []);
  return ans;
}

console.log(findSubsets(arr));
