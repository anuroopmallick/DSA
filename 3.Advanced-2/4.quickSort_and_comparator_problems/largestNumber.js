// Problem Description
// Given an array A of non-negative integers, arrange them such that they form the largest number.
// Note: The result may be very large, so you need to return a string instead of an integer.

module.exports = {
  //param A : array of integers
  //return a strings
  largestNumber: function (A) {
    A.sort((a, b) => {
      let s1 = "" + a + b;
      let s2 = "" + b + a;

      return s2 - s1;
    });

    let s = A.join("");

    if (s < 1) return 0;

    return s;
  },
};
