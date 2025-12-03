// constraints -> 1 <= |A| <= 105
//                0 <= A[i] <= 109

function secondLargest(A) {
  let largest = A[0];
  let secondLargest = -1;

  for (let i = 1; i < A.length; i++) {
    if (A[i] > largest) {
      largest = A[i];
    }
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] > secondLargest && A[i] < largest) {
      secondLargest = A[i];
    }
  }

  return Number(secondLargest);
}
