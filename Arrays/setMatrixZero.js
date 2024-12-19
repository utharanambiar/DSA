const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
let m = matrix.length;
let n = matrix[0].length;
let col0 = 1;

//step 1: traverse and mark row 0 and col 0 as 0 if any 0 element is found

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (matrix[i][j] === 0) {
      matrix[i][0] = 0; // mark col 0 as 0 
      if (j != 0) {
        matrix[0][j] = 0;
      } else {
        col0 = 0;
      }
    }
  }
}

//step 2: leave row and col 0 and mark others as 0

for(let i=1;i<m;i++) {
    for(let j=1;j<n;j++) {
        if(matrix[i][j]!= 0) {
            if(matrix[0][j] == 0 || matrix[i][0] == 0) {
                matrix[i][j] = 0
            }
        }
    }
}

//step 3: now mark all row 0 and col 0 as 0
if(matrix[0][0] == 0) {
    for(let j=0;j<n;j++) {
        matrix[0][j] = 0
    }
}

if(col0 == 0) {
    for(let i=0;i<m;i++) {
        matrix[i][0] = 0
    }
}

console.log(matrix)
