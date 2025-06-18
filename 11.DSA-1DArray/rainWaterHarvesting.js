//rain water harvestiung
//1. create prefix array for largest element on left
//2. create suffix array for largest element on right
//3. Take min of the two minus curr element
//4. Count only if the difference is greater than zero

function solve(A) {
  let n = A.length;
  let pfa = new Array(A.length).fill(0);
  let sfa = new Array(A.length).fill(0);
  let ans = 0;

  pfa[0] = A[0];
  for (let i = 1; i < A.length; ++i) {
    if (A[i] > pfa[i - 1]) {
      pfa[i] = A[i];
    } else {
      pfa[i] = pfa[i - 1];
    }
  }

  sfa[n - 1] = A[n - 1];
  for (let i = n - 2; i >= 0; --i) {
    if (A[i] > sfa[i + 1]) {
      sfa[i] = A[i];
    } else {
      sfa[i] = sfa[i + 1];
    }
  }

  for (let i = 1; i < n - 1; ++i) {
    l = pfa[i - 1];
    r = sfa[i + 1];
    let unit = Math.min(l, r) - A[i];
    if (unit > 0) {
      ans += unit;
    }
  }

  return ans;
}
