// Q3. Matrix Median

// Problem Description

// Given a matrix of integers A of size N x M in which each row is sorted.


// Find and return the overall median of matrix A.

// NOTE: No extra memory is allowed.

// NOTE: Rows are numbered from top to bottom and columns are numbered from left to right.



// Problem Constraints

// 1 <= N, M <= 10^5

// 1 <= N*M <= 10^6

// 1 <= A[i] <= 10^9

// N*M is odd



// Input Format

// The first and only argument given is the integer matrix A.



// Output Format

// Return the overall median of matrix A.



// Example Input

// Input 1:

// A = [   [1, 3, 5],
//         [2, 6, 9],
//         [3, 6, 9]   ] 
// Input 2:

// A = [   [5, 17, 100]    ]


// Example Output

// Output 1:

//  5 
// Output 2:

//  17


// Example Explanation

// Explanation 1:

// A = [1, 2, 3, 3, 5, 6, 6, 9, 9]
// Median is 5. So, we return 5. 
// Explanation 2:

// Median is 17.

module.exports = {
  findMedian: function (A) {
    function getCount(val) {
      let ret = 0;
      for (let i = 0; i < A.length; i++) {
        let lo = 1,
          hi = A[i].length,
          mid,
          ans = 0;
        while (lo <= hi) {
          mid = (lo + hi) >> 1;
          if (A[i][mid - 1] <= val) {
            ans = mid;
            lo = mid + 1;
          } else hi = mid - 1;
        }
        ret += ans;
      }
      return ret;
    }

    let need = Math.floor((A.length * A[0].length) / 2);
    let lo = 1;
    let hi = 1e9;

    let mid, ans;
    while (lo <= hi) {
      mid = (lo + hi) >> 1;
      let count = getCount(mid);
      if (count >= need + 1) {
        ans = mid;
        hi = mid - 1;
      } else lo = mid + 1;
    }
    return ans;
  },
};
