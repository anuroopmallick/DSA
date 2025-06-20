function solve(A) {
  let n = A.length;
  let m = A[0].length;
  let ans = 0;

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      let occurences = (i + 1) * (j + 1) * ((n - i) * (m - j));
      ans += occurences * A[i][j];
    }
  }

  return ans;
}
