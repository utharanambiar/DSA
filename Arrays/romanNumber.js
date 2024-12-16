let map = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);
let s = "LVIII"; //op: 58 = 50 + 5 + 1 + 1 + 1
//let s = "LIX"; // Expected output: 61 = 50 + (10 - 1) + 1 + 1
let sum = 0;
for (let i = 0; i < s.length; i++) {
  if (i < s.length - 1 && map.get(s[i]) < map.get(s[i + 1])) {
    sum = sum + map.get(s[i + 1]) - map.get(s[i]);
    i++;
  } else {
    sum = sum + map.get(s[i]);
  }
}

console.log(sum);
