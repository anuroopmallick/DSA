// You are given a sorted array A of size N and a target value B.
// Your task is to find the index (0-based indexing) of the target value in the array.

// If the target value is present, return its index.
// If the target value is not found, return the index of least element greater than equal to B.
// If the target value is not found and least number greater than equal to target is also not present, return the length of array
// (i.e. the position where target can be placed)
// Your solution should have a time complexity of O(log(N)).

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  searchInsert: function (A, B) {
    let l = 0;
    let r = A.length - 1;

    let currIndex = 0;

    while (l <= r) {
      let m = Math.floor((l + r) / 2);

      if (A[m] === B) {
        currIndex = m;
        break;
      } else if (A[m] > B) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }

    if (A[currIndex] !== B) {
      return l;
    } else {
      return currIndex;
    }
  },
};
