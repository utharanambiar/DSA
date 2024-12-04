let number = 7;
let res = 0;

const getSquareSum = (number) => {
  res = 0;
  while (number > 0) {
    let digit = number % 10;
    res = res + digit * digit;
    number = Math.floor(number / 10);
  }
  return res;
};

const getHappy = (number) => {
  const seen = new Set();
  while (number != 1 && !seen.has(number)) {
    seen.add(number);
    number = getSquareSum(number);
  }
  return number === 1;
};

console.log(getHappy(number));
