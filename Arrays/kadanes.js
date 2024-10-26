const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let n = arr.length, sum =0
let maxx = Number.MIN_SAFE_INTEGER // or use -Infinity
for(let i=0;i<n;i++) {
    sum+= arr[i]
    if(maxx < sum) {
        maxx = sum
    } 
    if(sum < 0) {
        sum = 0
    }
}

console.log(maxx)