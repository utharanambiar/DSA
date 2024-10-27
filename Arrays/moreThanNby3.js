let arr = [1,2,2,3,2];

let count1 = 0, count2 = 0,
  ele1, ele2;

for (let i = 0; i < arr.length - 1; i++) {
    if(count1 == 0 && arr[i] !=ele2) {
        ele1 = arr[i]
        count1++
    } else if(count2 == 0 && arr[i] !=ele1) {
        ele2 = arr[i]
        count2++
    }
    else if(ele1 === arr[i]) {
        count1++
    }
    else if(ele2 === arr[i]) {
        count2++
    } else {
        count1--;
        count2--;
    }
}

let k=0, ele1Count = 0, ele2Count =0;
while(k<arr.length) {
    if(arr[k] === ele1) {
        ele1Count++;
    } else if(arr[k] === ele2) {
        ele2Count++
    }
    k++;
}
let ans = []
if(ele1Count> arr.length/3) {
    ans.push(ele1)
}
if(ele2Count> arr.length/3) {
    ans.push(ele2)
}
console.log(ans)
//console.log(eleCount> arr.length/3 ? ele : 0)
