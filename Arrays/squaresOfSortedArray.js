/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length -1;
    let ans = [];
    let pos = nums.length -1;
    while(left <= right) {
        if(Math.abs(nums[left]) > Math.abs(nums[right])) {
            ans[pos] = nums[left] * nums[left];
            left++;
        } else {
            ans[pos] = nums[right] * nums[right];
            right--;
        }
        pos--;
    }
    return ans;
};