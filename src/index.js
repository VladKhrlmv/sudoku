module.exports = function solveSudoku(matrix) {
  if (solveGrid(matrix) == true) {
    return matrix;
  }
    
}

let row = 0 ;
let col = 0;

function solveGrid(matrix) {
  var cell = findUnassignedLocation(matrix, row, col);
  row = cell[0];
  col = cell[1];
  console.log(matrix, '1');

  // base case: if no empty cell  
  if (row == -1) {
      return true;
  }

  for (var num = 1; num <= 9; num++) {

      if ( noConflicts(matrix, row, col, num) ) {   
          matrix[row][col] = num;
          console.log(matrix, '2');
          if ( solveGrid(matrix) ) {                
              return true;
          }

                  // mark cell as empty (with 0)    
          matrix[row][col] = 0;
      }
  }

  // trigger back tracking
  return false;
}


function findUnassignedLocation(grid, row, col) {
  for ( ; row < 9 ; col = 0, row++)
      for (; col < 9 ; col++)
          if (grid[row][col] == 0)
              return [row, col];
  return [-1, -1];
}


function noConflicts(matrix, row, col, num) {
  console.log(matrix, '4');
  return isRowOk(matrix, row, num) && isColOk(matrix, col, num) && isBoxOk(matrix, row, col, num);
}

function isRowOk(matrix, row, num) {
  for (var col = 0; col < 9; col++)
      if (matrix[row][col] == num)
          return false;

  return true;
}
function isColOk(matrix, col, num) {
  for (var row = 0; row < 9; row++)
  if (matrix[row][col] == num)
      return false;

  return true;    
}
function isBoxOk(matrix, row, col, num) {
  row = (row / 3) * 3;
  col = (col / 3) * 3;

  for (var r = 0; r < 3; r++)
      for (var c = 0; c < 3; c++)
          if (matrix[row + r][col + c] == num)
              return false;

  return true;
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