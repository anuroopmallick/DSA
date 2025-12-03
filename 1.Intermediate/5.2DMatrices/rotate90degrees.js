function solve(A) {
  const rows = A.length;
  const cols = rows;

  function swap(array, r, c) {
    let temp = array[r][c];
    array[r][c] = array[c][r];
    array[c][r] = temp;
  }

  function swap2(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  for (let r = 0; r < rows; ++r) {
    for (let c = r + 1; c < cols; ++c) {
      swap(A, r, c);
    }
  }

  for (let r = 0; r < rows; ++r) {
    let k = 0;
    let m = rows - 1;
    while (k < m) {
      swap2(A[r], k, m);
      ++k;
      --m;
    }
  }

  return A;
}
