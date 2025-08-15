//1. count distinct numbers in a window of size B

module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  dNums: function (A, B) {
    let freq = {};

    let count = 0;

    let ans = [];

    for (let i = 0; i < B; ++i) {
      if (freq[A[i]]) {
        freq[A[i]]++;
      } else {
        freq[A[i]] = (freq[A[i]] || 0) + 1;
        count++;
      }
    }

    ans.push(count);

    for (let i = 1; i < A.length - B + 1; ++i) {
      let prev = A[i - 1];
      let next = A[i + B - 1];

      if (freq[prev] > 1) {
        freq[prev] = freq[prev] - 1;
      } else {
        delete freq[prev];
        count--;
      }

      if (freq[next]) {
        freq[next]++;
      } else {
        freq[next] = (freq[next] || 0) + 1;
        count++;
      }

      ans.push(count);
    }

    return ans;
  },
};
