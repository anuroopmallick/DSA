// different than actual transpose
// A = [[1, 2],[1, 2],[1, 2]]
// ans = [[1, 1, 1], [2, 2, 2]]

function solve(A) {
  const rows = A.length;
  const cols = A[0].length;
  let ans = [];

  for (let c = 0; c < cols; ++c) {
    let temp = [];
    for (let r = 0; r < rows; ++r) {
      temp.push(A[r][c]);
    }
    ans.push(temp);
  }

  return ans;
}
