let arr = [1,2,3,1,1,1,1,1,2,3]

let k = 6;

//sol

// let left = 0, right = 0, sum = arr[0]
// let n = arr.length, maxLen = 0

// while(right < n) {
//     while(left <= right && sum > k) {
//         sum-= arr[left];
//         left++
//     }
//     if(sum  == k) {
//         maxLen = Math.max(maxLen, right - left + 1)
//     }
//     right++;
//     sum+= arr[right]
// }

// console.log(maxLen)

let arr2 = [2,6,5,8,11];

let left = 0, right = arr2.length, target = 14

function test() {
while(left <= right) {
    if(arr2[left] + arr2[right] > target) {
        right--
    } else if (arr2[left] + arr2[right] < target) {
        left++
    } else {
        return true;
    }
    return false;
}
}

let res = test();
console.log(res)