//Brute forece
// THis will fail as numbers can become really large and the javascript can handle numbers accurately upto 2**53 -1
function solve1(A) {
  let arr = A.reverse();

  let value = arr.reduce((acc, curr, index) => {
    return (acc += curr * 10 ** index);
  });

  value += 1;

  let ans = String(value);
  let finalArr = ans.split("");

  return finalArr;
}

//This is optimized approach
function solve2(A) {
  let n = A.length;
  let carry = 1;
  let ans = [];
  let value = 0;

  for (let i = n - 1; i >= 0; --i) {
    value = A[i] + carry;

    if (value > 9) {
      carry = Math.floor(value / 10);
      ans.unshift(value % 10);
    } else {
      ans.unshift(value);
      carry = 0;
    }
  }

  if (carry != 0) {
    ans.unshift(carry);
  }

  for (let i = 0; i < ans.length; ++i) {
    if (ans[i] == 0) {
      continue;
    } else {
      return ans.slice(i);
    }
  }
}
