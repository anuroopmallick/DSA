// TC - o(n)
// Call stack space o(n)
// SC - o(n^2) - since we are creating new string on every recursive call

module.exports = {
  //param A : string
  //return an integer
  solve: function (A) {
    function palin(string) {
      let n = string.length;

      if (n == 1 || n == 0) return 1;

      if (string[n - 1] === string[0]) {
        return palin(string.slice(1, n - 1));
      } else {
        return 0;
      }
    }

    return palin(A);
  },
};

//Improved space complexity - o(n)

module.exports = {
  //param A : string
  //return an integer
  solve: function (A) {
    function palin(string, i, j) {
      let n = j - i + 1;

      if (n == 0 || n == 1) return 1;

      if (string[i] == string[j]) {
        return palin(string, i + 1, j - 1);
      } else {
        return 0;
      }
    }

    return palin(A, 0, A.length - 1);
  },
};
