//Find nth root of M
let N = 4, M = 69

let low = 1, high = M, mid

function getRoot(){
while(low <= high){
    mid = Math.floor((low + high)/2)
    if(Math.pow(mid,N) === M){
        return mid
    }
    else if(Math.pow(mid,N) > M){
        high = mid - 1
    } else {
        low = mid + 1
    }
}
return -1
}
console.log(getRoot())
