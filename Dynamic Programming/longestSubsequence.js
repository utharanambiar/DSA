let st = "AABCBDC";
let n = st.length;

let dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

const getLongestSubsequence = (st) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (st[i - 1] === st[j - 1] && i != j) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[n][n];
};

console.log(getLongestSubsequence(st));
