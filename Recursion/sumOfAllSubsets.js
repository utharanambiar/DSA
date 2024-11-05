let arr = [5, 2, 1];

let ans = [];
function findSubsets(arr) {
  function generateSum(index, currSum) {
    if (index === arr.length) {
      ans.push(currSum);
      return;
    }
    //include
    generateSum(index + 1, currSum + arr[index]);

    //exclude
    generateSum(index + 1, currSum);
  }
  generateSum(0, 0);

  return ans.sort();
}

console.log(findSubsets(arr))
