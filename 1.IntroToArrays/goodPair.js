// Q . Given an array A and an integer B.
//     A pair(i, j) in the array is a good pair if i != j and (A[i] + A[j] == B).
//     Check if any good pair exist or not.
//     Return 1 if it exists else return 0

for (let i = 0; i < A.length; i++) {
  for (let j = 1; j < A.length; j++) {
    if (A[i] + A[j] == B && i != j) {
      return 1;
    }
  }
}

return 0;

// Optimise using binary search
// Hint -> Sort the array A in increasing order.
// For each i from 0 to n-1 find the first element in the array having a value greater than or equal to B-A[i] using binary search.
// Time complexity : O(nlogn)
