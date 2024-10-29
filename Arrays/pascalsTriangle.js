let N = 5,
  r = 5,
  c = 3;

function ncr(n, r) {
  let ans = 1;
  for (let i = 0; i < r; i++) {
    //r = 2, n = 4, ans = 6
    ans = ans * (n - i);
    ans = ans / (i + 1);
  }
  return ans;
}
let res = ncr(r - 1, c - 1);  // r is row number => n, c is col number => r
//console.log(res);

function generateRow(row) {
  let ans = 1;
  let ansRow = [1]; // inserting the 1st element

  // calculate the rest of the elements:
  for (let col = 1; col < row; col++) {
    ans = ans * (row - col);
    ans = ans / col;
    ansRow.push(ans);
  }
  return ansRow;
}

function getTriangle() {
  let ans = [];
  for (let i = 1; i <= N; i++) {
    let temp = generateRow(i);
    ans.push(temp);
  }
  return ans;
}

let res2 = generateRow(N);
//console.log(res2)

let res3 = getTriangle();
console.log(res3);
