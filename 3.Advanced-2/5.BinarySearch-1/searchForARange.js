// Q2. Search for a Range
// Problem Description
// Given a sorted array of integers A (0-indexed) of size N, find the left most and the right most index of a given integer B in
//  the array A.
// Return an array of size 2, such that
//           First element = Left most index of B in A
//           Second element = Right most index of B in A.
// If B is not found in A, return [-1, -1].
// Note : Note: The time complexity of your algorithm must be O(log n)..

function ub(A, b) {
  let lo = 0,
    hi = A.length - 1,
    ans = -1,
    mid;
  while (lo <= hi) {
    mid = (lo + hi) >> 1;
    if (A[mid] == b) ans = mid;
    if (A[mid] <= b) lo = mid + 1;
    else hi = mid - 1;
  }
  return ans;
}
function lb(A, b) {
  let lo = 0,
    hi = A.length - 1,
    ans = -1,
    mid;
  while (lo <= hi) {
    mid = (lo + hi) >> 1;
    if (A[mid] == b) ans = mid;
    if (A[mid] < b) lo = mid + 1;
    else hi = mid - 1;
  }
  return ans;
}
module.exports = {
  searchRange: function (A, B) {
    return [lb(A, B), ub(A, B)];
  },
};
