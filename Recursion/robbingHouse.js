let arr = [6, 7, 1, 3, 8, 2, 4];

const maxLoot = (hval, n) => {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return hval[0];
  }

  let pick = hval[n - 1] + maxLoot(hval, n - 2);
  let notPick = maxLoot(hval, n - 1);

  return Math.max(pick, notPick);
};

console.log(maxLoot(arr, 7));
