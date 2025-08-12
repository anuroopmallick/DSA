module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let freq = {};

    A.map((element) => {
      if (freq[element]) freq[element]++;
      else freq[element] = (freq[element] || 0) + 1;
    });

    let ans = 0;

    for (let key in freq) {
      if (freq[key] == 1) ans++;
    }

    return ans;
  },
};
