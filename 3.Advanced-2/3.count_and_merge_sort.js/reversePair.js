// Given an array of integers A, we call (i, j) an important reverse pair if i < j and A[i] > 2*A[j].
// Return the number of important reverse pairs in the given array A

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let count = 0;

    function mergesort(array, l, r) {
      if (l == r) return;

      let mid = Math.floor((l + r) / 2);
      mergesort(array, l, mid);
      mergesort(array, mid + 1, r);
      merge(array, l, mid, r);
    }

    function merge(arr, l, mid, r) {
      let leftLength = mid - l + 1;
      let rightLength = r - mid;

      let leftArray = new Array(leftLength).fill(0);
      let rightArray = new Array(rightLength).fill(0);

      let index = 0;
      for (let i = l; i <= mid; ++i) {
        leftArray[index] = arr[i];
        index++;
      }

      index = 0;
      for (let i = mid + 1; i <= r; ++i) {
        rightArray[index] = arr[i];
        index++;
      }

      let leftIndex = 0;
      let rightIndex = 0;
      index = l;

      let leftPointer = 0;
      let rightPointer = 0;

      while (leftPointer < leftLength && rightPointer < rightLength) {
        if (leftArray[leftPointer] > 2 * rightArray[rightPointer]) {
          count += leftLength - leftPointer;
          rightPointer++;
        } else {
          leftPointer++;
        }
      }

      while (leftIndex < leftLength && rightIndex < rightLength) {
        if (leftArray[leftIndex] <= rightArray[rightIndex]) {
          arr[index] = leftArray[leftIndex];
          leftIndex++;
          index++;
        } else {
          arr[index] = rightArray[rightIndex];
          rightIndex++;
          index++;
        }
      }

      while (leftIndex < leftLength) {
        arr[index] = leftArray[leftIndex];
        leftIndex++;
        index++;
      }

      while (rightIndex < rightLength) {
        arr[index] = rightArray[rightIndex];
        rightIndex++;
        index++;
      }
    }

    mergesort(A, 0, A.length - 1);

    return count;
  },
};
