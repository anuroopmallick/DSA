// Q3. Subarray Sum Equals K
// Solved
// feature icon
// Using hints except Complete Solution is Penalty free now
// Use Hint
// Problem Description

// Given an array of integers A and an integer B.
// Find the total number of subarrays having sum equals to B.

// Problem Constraints
//  1 <= length of the array <= 50000
// -1000 <= A[i] <= 1000

// Input Format
// The first argument given is the integer array A.
// The second argument given is integer B.

// Output Format
// Return the total number of subarrays having sum equals to B.
// Example Input
// Input 1:
// A = [1, 0, 1]
// B = 1
// Input 2:
// A = [0, 0, 0]
// B = 0

// Example Output
// Output 1
// 4
// Output 2:
// 6

// Example Explanation

// Explanation 1:
// [1], [1, 0], [0, 1] and [1] are four subarrays having sum 1.
// Explanation 1:
// All the possible subarrays having sum 0.

//1. Brute forse traves through all sub array
// 2. Create prefix sum

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let count = 0;

    let PFa = new Array(A.length).fill(0);
    PFa[0] = A[0];
    for (let i = 1; i < A.length; ++i) {
      PFa[i] = PFa[i - 1] + A[i];
    }

    for (let i = 0; i < PFa.length; ++i) {
      for (let j = i; j < PFa.length; ++j) {
        if (i == 0) {
          if (PFa[j] == B) {
            count++;
          }
        } else {
          if (PFa[j] - PFa[i - 1] == B) {
            count++;
          }
        }
      }
    }

    return count;
  },
};

// 3. use carry forward

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let count = 0;

    for (let i = 0; i < A.length; ++i) {
      let sum = 0;
      for (let j = i; j < A.length; ++j) {
        sum += A[j];

        if (sum == B) count++;
      }
    }

    return count;
  },
};

// 4. Use hashmap with prefix sum or carryforward

// 💡 Key Concept: Prefix Sum
// Imagine we’re walking through the list and keeping track of the sum of all numbers we've seen so far.
// That running total is called the prefix sum or cumulative sum.
// 🧠 Big Idea
// Here’s the trick:
// Let’s say, at some point, your current sum is current_sum.
// If current_sum - k has happened before, then there’s a subarray that sums to k.
// Why?
// Because:
// (current_sum - old_sum) == k
// ⟹ current_sum - k == old_sum
// So, if we’ve already seen a prefix sum equal to current_sum - k, that means the numbers between then and now must sum to k.

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let map = { 0: 1 };

    let count = 0;

    let currSum = 0;

    for (let i = 0; i < A.length; ++i) {
      currSum += A[i];

      if (map[currSum - B]) {
        count += map[currSum - B];
      }

      map[currSum] = (map[currSum] || 0) + 1;
    }

    return count;
  },
};
