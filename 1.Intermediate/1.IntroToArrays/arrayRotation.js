// Q . Given an integer array A of size N and an integer B, you have to return the same array after rotating it B times towards the right.

// Brute force  , TC -> O(B * N) , SC -> O(1)
function solve(A, B) {
  let n = A.length;

  for (let i = 0; i < B; i++) {
    let temp = A[n - 1];
    for (let j = n - 1; j > 0; j--) {
      A[j] = A[j - 1];
    }
    A[0] = temp;
  }

  return A;
}

// Optimised Approach, TC -> O(n) , SC -> O(n)

function optimised(A, B) {
  let n = A.length;
  let temp = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let index = (i + B) % n;
    temp[index] = A[i];
  }

  for (let i = 0; i < n; i++) {
    A[i] = temp[i];
  }

  return A;
}

// final optimised approach , TC -> O(n) , SC -> O(1)
function final(A, B) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let n = A.length;

  // this is to handle the edge case where B is greater than array length
  if (B >= n) {
    B = B % n;
  }

  function reverse(array, i, j) {
    while (i < j) {
      swap(array, i, j);
      i++;
      j--;
    }
    return array;
  }

  let C = reverse(A, 0, n - 1);

  let D = reverse(C, 0, B - 1);
  let E = reverse(D, B, n - 1);

  return E;
}
