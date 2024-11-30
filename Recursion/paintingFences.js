let n = 2,
  k = 4;

const countWays = (n, k) => {
  if (n == 1) {
    return k;
  }
  if (n == 2) {
    return k * k;
  }

  let res1 = countWays(n - 1, k - 1) * (k - 1);
  let res2 = countWays(n - 2, k - 1) * (k - 1);
  return res1 + res2;
};

console.log(countWays(n,k))
