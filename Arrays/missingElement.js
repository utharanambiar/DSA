let arr4 = [1, 2, 4, 5, 6];
let sum1,
  sum2 = 0;
sum1 = (arr4.length * (arr4.length + 1)) / 2;
for (let i = 0; i < arr4.length - 1; i++) {
  sum2 += arr4[i];
}
console.log(sum1 - sum2);

//method 2 using xor
let xor1, xor2;
for (let i = 0; i < arr4.length - 1; i++) {
  xor1 = xor1 ^ arr4[i];
  xor2 = xor2 ^ (i + 1);
}
xor2 = xor2 ^ arr4.length;

console.log(xor1 ^ xor2);
