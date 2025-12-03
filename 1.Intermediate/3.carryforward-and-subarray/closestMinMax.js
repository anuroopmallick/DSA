// Q. Given an array A, find the size of the smallest subarray such that it contains at least
// one occurrence of the maximum value of the array and at least one occurrence of the minimum value of the array.

// Brute force, TC - o(n^3) , SC -> o(1)
function solve(A) {
  let n = A.length;
  let ans = n;

  let min = Math.min(...A);
  let max = Math.max(...A);

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let minI = false;
      let maxI = false;
      for (let k = i; k <= j; k++) {
        if (A[k] == min) {
          minI = true;
        }
        if (A[k] == max) {
          maxI = true;
        }
      }

      if (minI == true && maxI == true) {
        if (ans > j - i + 1) {
          ans = j - i + 1;
        }
      }
    }
  }

  return ans;
}

// Optimise 1 -> TC - o(n^2) SC = O(1)

function optimised(A) {
  let n = A.length;
  let ans = n;

  let min = Math.min(...A);
  let max = Math.max(...A);

  for (let i = 0; i < n; i++) {
    let minI = false;
    let maxI = false;
    for (let j = i; j < n; j++) {
      if (A[j] == min) {
        minI = true;
      }
      if (A[j] == max) {
        maxI = true;
      }

      if (minI == true && maxI == true) {
        if (ans > j - i + 1) {
          ans = j - i + 1;
        }
      }
    }
  }

  return ans;
}

// TC - o(n) , sc - o(1)

function final(A) {
  let n = A.length;
  let ans = n;

  let min = Math.min(...A);
  let max = Math.max(...A);

  let minI = -1;
  let maxI = -1;
  let length = A.length;

  for (let i = 0; i < n; i++) {
    if (A[i] == min) {
      minI = i;
      if (maxI != -1) {
        length = minI - maxI + 1;
        if (ans > length) {
          ans = length;
        }
      }
    }

    if (A[i] == max) {
      maxI = i;
      if (minI != -1) {
        length = maxI - minI + 1;
        if (ans > length) {
          ans = length;
        }
      }
    }
  }

  return ans;
}
