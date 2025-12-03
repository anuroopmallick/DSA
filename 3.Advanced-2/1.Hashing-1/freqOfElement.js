module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return a array of integers
  solve: function (A, B) {
    let freq = {};

    A.map((element) => {
      if (freq[element]) {
        freq[element]++;
      } else {
        freq[element] = (freq[element] || 0) + 1;
      }
    });

    let ans = B.map((element) => {
      if (freq[element]) return freq[element];
      else return 0;
    });

    return ans;
  },
};
