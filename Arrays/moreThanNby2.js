const arr = [2, 2, 1, 3, 1, 1, 3, 1, 1];
let n = arr.length;

function greaterThanNBy2() {
  let newMap = new Map();

  for (let i = 0; i < n; i++) {
    if (newMap.has(arr[i])) {
      newMap.set(arr[i], newMap.get(arr[i]) + 1);
    } else {
      newMap.set(arr[i], 1);
    }
  }

  for (let [value, count] of newMap) {
    if (count > Math.floor(n / 2)) {
      return value;
    }
  }

  return -1;
}

let res = greaterThanNBy2();
console.log(res);

//optimal solution - Moore's voting
let count = 0,
  ele;
let i = 0;
for (let i = 0; i < arr.length; i++) {
  if (count == 0) {
    ele = arr[i];
  }
  if (arr[i] === ele) {
    count++; // count = 4
  } else {
    count--; // count = 1
  }
}
let k = 0,
  countofEle = 0;
while (count > 0 && k < arr.length) {
  if (arr[k] === ele) {
    countofEle++;
  }
  k++;
}

console.log(countofEle > arr.length / 2 ? ele : 0);
