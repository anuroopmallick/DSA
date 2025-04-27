const rows = A.length;
const columns = A[0].length;

let ans = [];

for (let c = 0; c < columns; ++c) {
  let sum = 0;
  for (let r = 0; r < rows; ++r) {
    sum += A[r][c];
  }
  ans.push(sum);
}

return ans;
