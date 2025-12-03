module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return a array of integers
  solve: function (A, B) {
    let ans = [];
    let aIndex = 0;
    let bIndex = 0;

    while (aIndex < A.length && bIndex < B.length) {
      if (A[aIndex] <= B[bIndex]) {
        ans.push(A[aIndex]);
        aIndex++;
      } else {
        ans.push(B[bIndex]);
        bIndex++;
      }
    }

    while (aIndex < A.length) {
      ans.push(A[aIndex]);
      aIndex++;
    }

    while (bIndex < B.length) {
      ans.push(B[bIndex]);
      bIndex++;
    }

    return ans;
  },
};
