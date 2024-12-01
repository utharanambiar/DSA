let num = -50;
let rem = 0,
  q,
  ans = [];
let precision = 4;

let map = new Map([
  ["0", "0"],
  ["1", "1"],
  ["2", "2"],
  ["3", "3"],
  ["4", "4"],
  ["5", "5"],
  ["6", "6"],
  ["7", "7"],
  ["8", "8"],
  ["9", "9"],
  ["10", "A"],
  ["11", "B"],
  ["12", "C"],
  ["13", "D"],
  ["14", "E"],
  ["15", "F"],
]);

let isNegative = num < 0;
num = Math.abs(num);

let integerPart = Math.floor(num);
let fractionalPart = num - integerPart;

while (integerPart > 0) {
  rem = integerPart % 16;
  ans.unshift(map.get(rem.toString()));
  integerPart = Math.floor(integerPart / 16);
}

if (fractionalPart > 0) {
  ans.push(".");
  while (precision > 0) {
    fractionalPart *= 16;
    let digit = Math.floor(fractionalPart);
    ans.push(map.get(digit.toString()));
    fractionalPart -= digit;
    precision--;
  }
}

if (isNegative) {
  ans.unshift("-"); // Add minus sign at the beginning
}

console.log(ans.join(""));
