let arr = [6, 7, 1, 3, 8, 2, 4];

let maxLoot = (hval, n) => {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return hval[0];
  }
  let last = hval[0],
    secondLast = 0,
    res = 0;

  for (let i = 1; i < ns; i++) {
    res = Math.max(secondLast + hval[i], last);
    secondLast = last;
    last = res;
  }

  return res;
};

console.log(maxLoot(arr, arr.length));
