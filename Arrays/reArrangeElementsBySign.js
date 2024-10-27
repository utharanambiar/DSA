let A = [1, 2, -4, -5];

let posIndex = 0, negIndex = 1;
let ans = new Array(A.length).fill(0);

for(let i=0;i<A.length;i++) {
    if(A[i] < 0) {
        ans[negIndex] = A[i];
        negIndex+= 2
    } else {
        ans[posIndex] = A[i];
        posIndex+= 2
    }
}

console.log(ans)