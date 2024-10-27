let nums = [1, 2, 2, 3, 2];

let count1 = 0,
  count2 = 0,
  ele1,
  ele2;

for (let i = 0; i < nums.length; i++) {
  if (count1 == 0 && nums[i] != ele2) {
    ele1 = nums[i];
    count1 = 1;
  } else if (count2 == 0 && nums[i] != ele1) {
    ele2 = nums[i];
    count2 = 1;
  } else if (ele1 === nums[i]) {
    count1++;
  } else if (ele2 === nums[i]) {
    count2++;
  } else {
    count1--;
    count2--;
  }
}

let k = 0,
  ele1Count = 0,
  ele2Count = 0;
while (k < nums.length) {
  if (nums[k] === ele1) {
    ele1Count++;
  } else if (nums[k] === ele2) {
    ele2Count++;
  }
  k++;
}
let ans = [];
if (ele1Count >= Math.floor(nums.length / 3) + 1) {
  ans.push(ele1);
}
if (ele2Count >= Math.floor(nums.length / 3) + 1) {
  ans.push(ele2);
}
console.log(ans);
