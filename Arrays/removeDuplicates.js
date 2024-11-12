let arr = [1, 1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 8];

//brute force
function unique(arr) {
let hashSet = new Set(arr);
let unique = Array.from(hashSet)
for(let i=0;i<unique.length;i++) {
    arr[i] = unique[i]
}
return unique.length
}

let k = unique(arr)
console.log(k)

//optimal
let i =0
for(let j=1;j<arr.length;j++) {
    if(arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j]
    }
}
for(let k=0;k<=i;k++) {
    console.log(arr[k])
}
console.log("duplicate",arr, i)
