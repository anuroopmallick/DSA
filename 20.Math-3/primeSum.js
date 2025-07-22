// Problem Description
// Given an even number A ( greater than 2 ), return two prime numbers whose sum will be equal to the given number.

// If there is more than one solution possible, return the lexicographically smaller solution.
// If [a, b] is one solution with a <= b, and [c,d] is another solution with c <= d, then
// [a, b] < [c, d], If a < c OR a==c AND b < d.
// NOTE: A solution will always exist. Read Goldbach's conjecture.

// Problem Constraints
// 4 <= A <= 2*107

// Input Format
// First and only argument of input is an even number A.

// Output Format
// Return a integer array of size 2 containing primes whose sum will be equal to given number.

// Example Input
//  4

// Example Output
//  [2, 2]

// Example Explanation
//  There is only 1 solution for A = 4.

module.exports = {
  //param A : integer
  //return a array of integers
  primesum: function (A) {
    function isPrime(num) {
      let count = 0;

      for (let i = 1; i * i <= num; ++i) {
        if (num % i == 0) {
          count += 2;

          if (i == Math.floor(num / i)) {
            count -= 1;
          }
        }
      }

      if (count == 2) {
        return true;
      } else {
        return false;
      }
    }

    let solutions = [];

    for (let i = 2; i <= A; ++i) {
      if (isPrime(i)) {
        let remaining = A - i;
        if (isPrime(remaining)) {
          return [i, remaining];
        }
      }
    }

    return solutions;
  },
};
