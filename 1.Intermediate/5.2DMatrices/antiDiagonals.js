// input
// 1 2 3
// 4 5 6
// 7 8 9

//output
// 1 0 0
// 2 4 0
// 3 5 7
// 6 8 0
// 9 0 0

function solve(A) {
  let rows = A.length;
  let cols = A[0].length;

  let ans = [];

  for (let i = 0; i < cols; i++) {
    let temp = [];
    let r = 0;
    let c = i;
    while (c >= 0 && r < rows) {
      temp.push(A[r][c]);
      --c;
      ++r;
    }
    while (temp.length < rows) {
      temp.push(0);
    }
    ans.push(temp);
  }

  for (let j = 1; j < rows; j++) {
    let r = j;
    let c = cols - 1;
    let temp = [];
    while (c >= 0 && r < rows) {
      temp.push(A[r][c]);
      ++r;
      --c;
    }
    while (temp.length < rows) {
      temp.push(0);
    }
    ans.push(temp);
  }

  return ans;
}
