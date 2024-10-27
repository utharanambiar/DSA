const nums = [-1, 0, 1, 2, -1, -4];

nums.sort((a, b) => a - b);

let i = 0,
  j,
  k,
  ans = [];

for (let i = 0; i < nums.length; i++) {
  j = i + 1;
  k = nums.length - 1;
  if (i != 0 && nums[i] == nums[i - 1]) continue;
  while (j < k) {
    if (nums[i] + nums[j] + nums[k] === 0) {
      let temp = [nums[i], nums[j], nums[k]];
      ans.push(temp);
      j++;
      k--;
    } else if (nums[i] + nums[j] + nums[k] > 0) {
      k--;
    } else {
      j++;
    }

    while (j < k && nums[j] === nums[j - 1]) j++;
    while (j < k && nums[k] === nums[k + 1]) k--;
  }
}

console.log(ans);
