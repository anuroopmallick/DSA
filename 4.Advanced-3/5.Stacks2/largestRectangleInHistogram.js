// Problem Description
// Given an array of integers A.
// A represents a histogram i.e A[i] denotes the height of the ith histogram's bar. Width of each bar is 1.
// Find the area of the largest rectangle formed by the histogram.

// Problem Constraints
// 1 <= |A| <= 100000
// 1 <= A[i] <= 10000

// Input Format
// The only argument given is the integer array A.

// Output Format
// Return the area of the largest rectangle in the histogram.

// Example Input
// Input 1:
//  A = [2, 1, 5, 6, 2, 3]
// Input 2:
//  A = [2]

// Example Output
// Output 1:
//  10
// Output 2:
//  2

// Example Explanation
// Explanation 1:
// The largest rectangle has area = 10 unit. Formed by A[3] to A[4].
// Explanation 2:
// Largest rectangle has area 2.

module.exports = {
  //param A : array of integers
  //return an integer
  Node: class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  },
  Stack: class Stack {
    constructor() {
      this.head = null;
    }

    push(data) {
      let node = new Node(data);

      if (this.head == null) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
    }

    pop() {
      if (this.head == null) return;

      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      return temp.data;
    }

    top() {
      if (this.head == null) return;
      return this.head.data;
    }

    isEmpty() {
      return this.head == null ? true : false;
    }
  },
  largestRectangleArea: function (A) {
    let length = A.length;
    let stack = new this.Stack();
    let NSLI = [];
    let NSRI = [];

    for (let i = 0; i < A.length; ++i) {
      while (stack.isEmpty() == false && A[stack.top()] >= A[i]) {
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

    for (let i = length - 1; i >= 0; --i) {
      while (stack2.isEmpty() == false && A[stack2.top()] >= A[i]) {
        stack2.pop();
      }
      if (stack2.isEmpty() == true) {
        NSRI.unshift(length); //take care of this part
      } else {
        NSRI.unshift(stack2.top());
      }
      stack2.push(i);
    }

    let ans = 0;

    for (let i in A) {
      let area = A[i] * (NSRI[i] - NSLI[i] - 1);
      ans = Math.max(area, ans);
    }

    return ans;
  },
};
// THis one is slower as stack using linked list in js create memory overhead. Therefore in js we should use array based stacks.

module.exports = {
  largestRectangleArea: function (A) {
    const n = A.length;

    let NSLI = Array(n);
    let NSRI = Array(n);

    let stack = [];

    // next smaller left
    for (let i = 0; i < n; i++) {
      while (stack.length && A[stack[stack.length - 1]] >= A[i]) {
        stack.pop();
      }

      NSLI[i] = stack.length ? stack[stack.length - 1] : -1;

      stack.push(i);
    }

    stack = [];

    // next smaller right
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length && A[stack[stack.length - 1]] >= A[i]) {
        stack.pop();
      }

      NSRI[i] = stack.length ? stack[stack.length - 1] : n; // n is length of the array

      stack.push(i);
    }

    let ans = 0;

    for (let i = 0; i < n; i++) {
      let width = NSRI[i] - NSLI[i] - 1;
      ans = Math.max(ans, A[i] * width);
    }

    return ans;
  },
};
