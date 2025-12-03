// Q. Find all primes from 1 to A (inclusive).
// A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers.
// For example, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, etc. are prime numbers.
// Return an array of all prime numbers from 1 to A (inclusive).

//Time Complexity: O(n log log n)
//Space Complexity: O(n)

module.exports = {
  //param A : integer
  //return a array of integers
  solve: function (A) {
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

      if (count == 2) return true;
    }

    let primeNumbers = new Array(A + 1).fill(true);

    for (let i = 2; i * i <= A; ++i) {
      if (isPrime(i)) {
        for (let j = i * i; j <= A; j += i) {
          primeNumbers[j] = false;
        }
      }
    }

    let ans = [];

    for (let i = 0; i < primeNumbers.length; ++i) {
      if (i == 0 || i == 1) continue;

      if (primeNumbers[i]) ans.push(i);
    }

    return ans;
  },
};
