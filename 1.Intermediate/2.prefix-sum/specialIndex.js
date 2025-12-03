// Q. Given an array, arr[] of size N, the task is to find the count of array indices such that removing an
// element from these indices makes the sum of even-indexed and odd-indexed array elements equal.

//Brute froce solution will be for every element. Run another loops inside one for counting sum of odd and sum of even then comparing. TC will be o(n^2) , SC -> O(n)

// TC -> O(n) SC-> O(n)
function solve(A) {
  let n = A.length;
  let count = 0;

  let PFe = new Array(n).fill(0);
  PFe[0] = A[0];
  for (let i = 1; i < n; i++) {
    if (i % 2 == 0) {
      PFe[i] = PFe[i - 1] + A[i];
    } else {
      PFe[i] = PFe[i - 1];
    }
  }

  let PFo = new Array(n).fill(0);
  PFo[0] = 0;
  for (let i = 1; i < n; i++) {
    if (i % 2 != 0) {
      PFo[i] = PFo[i - 1] + A[i];
    } else {
      PFo[i] = PFo[i - 1];
    }
  }

  for (let i = 0; i < n; i++) {
    let sumOfOdd = 0;
    let sumOfEven = 0;

    if (i == 0) {
      sumOfEven = PFo[n - 1] - PFo[i];
      sumOfOdd = PFe[n - 1] - PFe[i];
    } else {
      sumOfOdd = PFo[i - 1] + (PFe[n - 1] - PFe[i]);
      sumOfEven = PFe[i - 1] + (PFo[n - 1] - PFo[i]);
    }

    if (sumOfEven == sumOfOdd) {
      count += 1;
    }
  }

  return count;
}
