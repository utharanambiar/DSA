function findIslands(grid) {
  if (grid == null || grid.length == 0) {
    return 0;
  }
  let rows = grid.length;
  let cols = grid[0].length;
  let noOfIslands = 0;
  function dfs(row, col) {
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      grid[row][col] == "0"
    ) {
      return;
    }

    grid[row][col] = "0";

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] == "1") {
        noOfIslands++;
        dfs(i, j);
      }
    }
  }
  return noOfIslands;
}

// Example usage:
let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "1"],
];

console.log(findIslands(grid));
