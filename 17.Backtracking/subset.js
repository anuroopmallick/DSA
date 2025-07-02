module.exports = {
  //param A : array of integers
  //return a array of array of integers
  subsets: function (A) {
    A = A.sort((a, b) => a - b);
    let ans = [];

    function generateSubsets(arr, index) {
      if (index == A.length) {
        ans.push([...arr.sort((a, b) => a - b)]);
        return;
      }

      arr.push(A[index]);
      generateSubsets(arr, index + 1);
      arr.pop();
      generateSubsets(arr, index + 1);
    }

    generateSubsets([], 0);

    return ans.sort((a, b) => {
      for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] !== b[i]) return a[i] - b[i];
      }
      return a.length - b.length;
    });
  },
};
