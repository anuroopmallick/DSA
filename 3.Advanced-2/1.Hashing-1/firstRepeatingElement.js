module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let freq = {};

    A.map((element) => {
      if (freq[element]) {
        freq[element]++;
      } else {
        freq[element] = (freq[element] || 0) + 1;
      }
    });

    for (let i = 0; i < A.length; ++i) {
      if (freq[A[i]] > 1) return A[i];
    }

    return -1;
  },
};
