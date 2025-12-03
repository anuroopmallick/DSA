// if A == 5

// [ [1,   2,  3,  4, 5],
//   [16, 17, 18, 19, 6],
//   [15, 24, 25, 20, 7],
//   [14, 23, 22, 21, 8],
//   [13, 12, 11, 10, 9] ]

//check the edge case where matrix n*n length is odd

function generateMatrix(A) {
  let n = A;
  let matrix = [];

  for (let i = 0; i < n; ++i) {
    let array = new Array(n).fill(0);
    matrix.push(array);
  }

  let row = 0;
  let col = 0;
  let count = 1;

  while (n > 1) {
    for (let i = 0; i < n - 1; ++i) {
      matrix[row][col] = count;
      count++;
      col++;
    }

    for (let i = 0; i < n - 1; ++i) {
      matrix[row][col] = count;
      count++;
      row++;
    }

    for (let i = 0; i < n - 1; ++i) {
      matrix[row][col] = count;
      count++;
      col--;
    }

    for (let i = 0; i < n - 1; ++i) {
      matrix[row][col] = count;
      count++;
      row--;
    }

    n -= 2;
    row++;
    col++;
  }

  if (n == 1) {
    matrix[row][col] = count;
  }

  return matrix;
}
