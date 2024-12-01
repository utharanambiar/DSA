let str = "aaabbddccc";

let map = new Map();
for (let i = 0; i < str.length; i++) {
  if (!map.has(str[i])) {
    map.set(str[i], 1);
  } else {
    map.set(str[i], map.get(str[i]) + 1);
  }
}

let ans = "";
for ([key, val] of map) {
  let strVal = val === 1 ? "" : val;
  ans = ans + key + strVal;
}

console.log(ans);
