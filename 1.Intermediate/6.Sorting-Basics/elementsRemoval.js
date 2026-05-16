//Given an integer array A of size N. You can remove any element from the array in one operation.
//The cost of this operation is the sum of all elements in the array present before this operation.
//Find the minimum cost to remove all elements from the array.

function solve(A) {
  let sortedArray = A.sort((a, b) => b - a);
  let ans = 0;

  for (let i = 0; i < A.length; i++) {
    ans += (i + 1) * sortedArray[i];
  }

  return ans;
}

// idea 

let arr = [5,7,1,9,4] 
// To find min cost if we romove the largest element first the sum of 
// remaining elements in next iteration will be less.

// THerefore we sort the array in descending order 
let sortedArray = [9,7,5,4,1]
// so the min cost will be 
//1. Remove 9 = cost 26      9,7,5,4,1
//2. Remove 7 = cost 17        7,5,4,1
//3. Remove 5 = cost 10          5,4,1
//4. Remove 4 = cost 5             4,1
//5. Remove 1 = cost 1               1
// Total = 53

//  so the approach first sort in descending order then 
// Removing in above order will resul in 
// a + 2b + 3c + 4d + 5e
//Hence the solution written above

// if we did other way
//  1. remove 1 = cost 26
//  2. remove 4 = cost 25
//  3. remove 5 = cost 21
// you get the idea 