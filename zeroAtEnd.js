let arr = [1, 0, 2, 3, 0, 4, 0, 1];

// let j =0;
// //use 2 pointers
// for(let i=0;i<arr.length;i++) {
//     if(arr[i] == 0) {
//         j = i
//         break;
//     }
// }

// for(let k=j + 1;k<arr.length;k++) {
//     if(arr[k] !== 0) {
//         [arr[k], arr[j]] =  [arr[j], arr[k]]
//         j++;
//     }
// }

// console.log(arr)

// let arr1 =[1,2,3,4,5]
// let arr2 =[0,2,2,3,5, 9 , 70] //and 1
// let left = 0, right = 0;
// let res = []

// while(left<arr1.length && right<arr2.length) {
//     if(arr2[right] < arr1[left]) {
//         if (res[res.length - 1] !== arr2[right]) { // Check for duplicates
//             res.push(arr2[right]);
//         }
//         right++
//     } else if(arr2[right] == arr1[left]) {
//         if (res[res.length - 1] !== arr1[left]) { // Add only one of the equal elements
//             res.push(arr1[left]);
//         }
//         right++;
//         left++;
//     } else {
//         res.push(arr1[left])
//         left++;
//     }
// }

// console.log(res)

let arr4 = [1,2,4,5,6]
// let sum1, sum2 =0;
// sum1 = (arr4.length * (arr4.length + 1))/2
// for(let i=0;i<arr4.length - 1;i++) {
//     sum2+= arr4[i];
// }
// console.log(sum1 - sum2)

// let xor1, xor2
// for(let i=0;i<arr4.length-1;i++) {
//     xor1 = xor1 ^ arr4[i]
//     xor2 = xor2 ^ (i+1)
// }
// xor2 = xor2 ^ arr4.length

// console.log(xor1 ^ xor2)

// let arr3 = [1,0,1,1,1,0,1]
// let max1 = 0, max2 = 0
// for(let i=0;i<arr3.length;i++) {
//     if(arr3[i] === 1) {
//         max1++;
//     } else {
//         max1 =0;
//     }
//     max2 = Math.max(max1, max2)
// }

// console.log(max2)

const arr5 = [4, 1, 2, 1, 2, 4, 9];
let missing = arr5[0];
for(let i=1;i<arr5.length;i++) {
    missing = missing ^ arr5[i]
}

//console.log(missing)
let a = 5;
let b = 10;

console.log("Before Swap: a =", a, "b =", b);

// XOR swap
a = a ^ b; // Step 1: a becomes the result of a XOR b
b = a ^ b; // Step 2: b becomes the original value of a
a = a ^ b; // Step 3: a becomes the original value of b

console.log("After Swap: a =", a, "b =", b);