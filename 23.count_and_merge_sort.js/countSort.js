module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    let maxElelemt = 0;

    for (let i = 0; i < A.length; ++i) {
      if (A[i] > maxElelemt) {
        maxElelemt = A[i];
      }
    }

    let freq = new Array(Number(maxElelemt + 1n)).fill(0);

    for (let i = 0; i < A.length; ++i) {
      let value = A[i];

      freq[value]++;
    }

    let ans = [];

    for (let i = 1; i < freq.length; ++i) {
      let occurence = freq[i];

      for (let j = 0; j < occurence; ++j) {
        ans.push(i);
      }
    }

    return ans;
  },
};
