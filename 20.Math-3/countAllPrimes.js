// Given an array of integers A, find and return the count of divisors of each element of the array.
// NOTE: The order of the resultant array should be the same as the input array.

//TIme Complexity: O(n * sqrt(m))
//Space Complexity: O(n)

module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    function countDivisors(num) {
      let count = 0;

      for (let i = 1; i * i <= num; ++i) {
        if (num % i == 0) {
          count += 2;

          if (i == Math.floor(num / i)) {
            count -= 1;
          }
        }
      }

      return count;
    }

    let ans = [];

    for (let i = 0; i < A.length; ++i) {
      ans[i] = countDivisors(A[i]);
    }

    return ans;
  },
};
