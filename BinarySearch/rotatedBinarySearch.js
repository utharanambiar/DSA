let nums = [5, 6, 7, 8, 9, 1, 2, 3];
let low = 0,
  high = nums.length - 1,
  mid,
  target = 6;

function rotatedBS() {
    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        if (nums[mid] === target) {
            return mid;
        }
        //left half
        if (nums[low] <= nums[mid]) {
            if (target < nums[mid] && target >= nums[low]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }
  return -1
}

console.log(rotatedBS())
