// Q. Given an array A of N integers and also given two integers B and C.
//    Reverse the elements of the array A within the given inclusive range [B, C].

function reverse(A, B, C) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  while (B < C) {
    swap(A, B, C);
    B++;
    C--;
  }

  return A;
}
