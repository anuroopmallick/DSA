// Q1. Factors sort
// Solved
// feature icon
// Using hints except Complete Solution is Penalty free now
// Use Hint
// Problem Description

// You are given an array A of N elements. Sort the given array in increasing order of number of distinct factors of each element, i.e., element having the least number of factors should be the first to be displayed and the number having highest number of factors should be the last one. If 2 elements have same number of factors, then number with less value should come first.

// Note: You cannot use any extra space

module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    function countFactors(num) {
      let count = 0;

      let i = 1;
      while (i * i <= num) {
        if (num % i === 0) {
          count += 2;

          if (i == Math.floor(num / i)) {
            count -= 1;
          }
        }
        i++;
      }

      return count;
    }

    A.sort((a, b) => {
      let num1 = countFactors(a);
      let num2 = countFactors(b);

      if (num1 === num2) {
        return a - b;
      }
      return num1 - num2;
    });

    return A;
  },
};
