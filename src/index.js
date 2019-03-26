module.exports = function solveSudoku(matrix) {
  if (solveGrid(matrix) == true)
    return matrix;
}


function solveGrid(matrix) {


  if (findFreeLocation(matrix))
    return true;

  for (let value = 1; value <=9; value++) {
    if (isSafe(matrix, row, col, value)) {
      matrix[row][col] = value;
      if (solveGrid(matrix))
        return true;
      matrix[row][col] = 0  ;
    }
  }
  return false;
}

function findFreeLocation(matrix) {
  for (row = 0; row < 9; row++) 
    for (col = 0; col < 9; col++) 
      if (matrix[row][col] == 0) 
        return false; 
  return true; 
}

function isSafe(matrix, row, col, value) {
  return !usedInRow(matrix, row, value) && 
           !usedInCol(matrix, col, value) && 
           !usedInBox(matrix, row - row%3 , col - col%3, value)&& 
           matrix[row][col]==0; 
}

function usedInRow(matrix, row, value) {
  for (let col = 0; col < 9; col++) 
    if (matrix[row][col] == value) 
      return true; 
  return false;
}

function usedInCol(matrix, col, value) {
  for (let row = 0; row < 9; row++) 
    if (matrix[row][col] == value) 
      return true; 
  return false; 
}

function usedInBox(matrix, boxStartRow , boxStartCol, value) {
  for (let row = 0; row < 3; row++) 
    for (let col = 0; col < 3; col++) 
      if (matrix[row+boxStartRow][col+boxStartCol] == value) 
        return true; 
  return false; 
}
// const initial = [
//   [6, 5, 0, 7, 3, 0, 0, 8, 0],
//   [0, 0, 0, 4, 8, 0, 5, 3, 0],
//   [8, 4, 0, 9, 2, 5, 0, 0, 0],
//   [0, 9, 0, 8, 0, 0, 0, 0, 0],
//   [5, 3, 0, 2, 0, 9, 6, 0, 0],
//   [0, 0, 6, 0, 0, 0, 8, 0, 0],
//   [0, 0, 9, 0, 0, 0, 0, 0, 6],
//   [0, 0, 7, 0, 0, 0, 0, 5, 0],
//   [1, 6, 5, 3, 9, 0, 4, 7, 0]
// ];

// console.log(a(initial));
