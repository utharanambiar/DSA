let n = 2,
  k = 4;

const countWays = (n, k) => {
  if (n == 1) {
    return k;
  }
  if (n == 2) {
    return k * k;
  }
  let dp = new Array(n + 1).fill(0);

  dp[1] = k;
  dp[2] = k * k;

  for (let i = 3; i < n; i++) {
    dp[i] = dp[i - 1] * (k - 1) + dp[i - 2] * (k - 1);
  }
  return dp[n];
};

// Using Space Optimized DP – O(n) Time and O(1) Space
const countWays2 = (n, k) => {
  if (n == 1) {
    return k;
  }
  if (n == 2) {
    return k * k;
  }

  let prev1 = k;
  let prev2 = k * k;
  let res = 0;

  for (let i = 3; i < n; i++) {
    res = prev1 * (k - 1) + prev2 * (k - 1);
    prev2 = prev1;
    prev1 = res;
  }
  return res;
};

console.log(countWays2(n, k));
