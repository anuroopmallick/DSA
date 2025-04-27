let sum = 0;

let rows = A.length;
let cols = A[0].length;

let i = 0;
let j = 0;
while (i < rows && j < rows) {
  sum += A[i][j];
  ++i;
  ++j;
}

return sum;
