let st = "AABCBDC";
let n = st.length;

const getMaxSubsequenceLength = (i, j, st) => {
  if (i == 0 || j == 0) {
    return 0;
  }
  if (st[i - 1] === st[j - 1] && i != j) {
    return 1 + getMaxSubsequenceLength(i - 1, j - 1, st);
  }

  return Math.max(
    getMaxSubsequenceLength(i - 1, j, st),
    getMaxSubsequenceLength(i, j - 1, st)
  );
};

let res = getMaxSubsequenceLength(n, n, st);

console.log(res);
