// brute force , TC - o(n^3) sc- o(1)

function solve(A) {
  ans = [];
  n = A.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      var temp = [];
      for (let k = i; k < j + 1; k++) {
        temp.push(A[k]);
      }
      ans.push(temp);
    }
  }

  return ans;
}

// optimised TC - o(n^2) , SC - o(1)

function optimised(A) {
  ans = [];
  n = A.length;

  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = i; j < n; j++) {
      temp.push(A[j]);
      //pushing a copy , since pushing the same array will make changes in other array as well due to referencing
      ans.push([...temp]);
    }
  }

  return ans;
}
