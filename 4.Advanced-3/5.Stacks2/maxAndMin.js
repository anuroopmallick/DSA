// Problem Description
// Given an array of integers A. The value of an array is computed as the difference between the
//  maximum element in the array and the minimum element in the array A.
// Calculate and return the sum of values of all possible subarrays of A modulo 109+7.

// Problem Constraints
// 1 <= |A| <= 100000
// 1 <= A[i] <= 1000000

// Input Format
// The first and only argument given is the integer array A.

// Output Format
// Return the sum of values of all possible subarrays of A modulo 109+7.

// Example Input
// Input 1:
//  A = [1]
// Input 2:
//  A = [4, 7, 3, 8]

// Example Output
// Output 1:
//  0
// Output 2:
//  26

module.exports = {
  //param A : array of integers
  //return an integer
  Stack: class Stack {
    constructor() {
      this.stack = [];
      this.length = 0;
    }

    push(value) {
      this.stack.push(value);
      this.length++;
    }

    pop() {
      let value = this.stack.pop();
      this.length--;
      return value;
    }

    top() {
      if (this.length == 0) return;
      return this.stack[this.length - 1];
    }

    isEmpty() {
      return this.length == 0 ? true : false;
    }
  },
  solve: function (A) {
    let stack = new this.Stack();
    let n = A.length;
    let NSLI = [];

    for (let i = 0; i < A.length; ++i) {
      while (stack.isEmpty() == false && A[i] <= A[stack.top()]) {
        stack.pop();
      }
      if (stack.isEmpty() == true) {
        NSLI.push(-1);
      } else {
        NSLI.push(stack.top());
      }
      stack.push(i);
    }

    let stack2 = new this.Stack();
    let NGLI = [];

    for (let i = 0; i < A.length; ++i) {
      while (stack2.isEmpty() == false && A[i] >= A[stack2.top()]) {
        stack2.pop();
      }
      if (stack2.isEmpty() == true) {
        NGLI.push(-1);
      } else {
        NGLI.push(stack2.top());
      }
      stack2.push(i);
    }

    let stack3 = new this.Stack();
    let NSRI = [];

    for (let i = n - 1; i >= 0; --i) {
      while (stack3.isEmpty() == false && A[i] <= A[stack3.top()]) {
        stack3.pop();
      }
      if (stack3.isEmpty() == true) {
        NSRI[i] = n;
      } else {
        NSRI[i] = stack3.top();
      }
      stack3.push(i);
    }

    let stack4 = new this.Stack();
    let NGRI = [];

    for (let i = n - 1; i >= 0; --i) {
      while (stack4.isEmpty() == false && A[i] >= A[stack4.top()]) {
        stack4.pop();
      }
      if (stack4.isEmpty() == true) {
        NGRI[i] = n;
      } else {
        NGRI[i] = stack4.top();
      }
      stack4.push(i);
    }

    let ans = 0;

    for (let i = 0; i < A.length; ++i) {
      let max = (i - NGLI[i]) * (NGRI[i] - i);
      let min = (i - NSLI[i]) * (NSRI[i] - i);
      let val = A[i] * (max - min);
      ans += val;
    }

    return ans % (10 ** 9 + 7);
  },
};
