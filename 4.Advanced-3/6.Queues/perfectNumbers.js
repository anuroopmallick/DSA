// Problem Description
// Given an integer A, you have to find the Ath Perfect Number.
// A Perfect Number has the following properties:
// It comprises only 1 and 2.
// The number of digits in a Perfect number is even.
// It is a palindrome number.
// For example, 11, 22, 112211 are Perfect numbers, where 123, 121, 782, 1 are not.

// Problem Constraints
// 1 <= A <= 100000

// Input Format
// The only argument given is an integer A.

// Output Format
// Return a string that denotes the Ath Perfect Number.

// Example Input
// Input 1:
//  A = 2
// Input 2:
//  A = 3

// Example Output
// Output 1:
//  22
// Output 2:
//  1111

// Example Explanation
// Explanation 1:
// First four perfect numbers are:
// 1. 11
// 2. 22
// 3. 1111
// 4. 1221
// Return the 2nd Perfect number.

// Explanation 2:
// First four perfect numbers are:
// 1. 11
// 2. 22
// 3. 1111
// 4. 1221
// Return the 3rd Perfect number.

class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }

  push(val) {
    this.stack.push(val);
    this.size++;
  }

  pop() {
    if (this.stack.length == 0) return -1;
    let val = this.stack.pop();
    this.size--;
    return val;
  }

  peek() {
    if (this.stack.length == 0) return -1;
    let val = this.stack[this.size - 1];
    return val;
  }

  isEmpty() {
    if (this.stack.length == 0) return true;
    else return false;
  }
}

class UserQueue {
  constructor() {
    // Initialize your data structure here.
    this.st1 = new Stack();
    this.st2 = new Stack();
  }

  push(X) {
    // Push element X to the back of queue.
    this.st1.push(X);
  }

  pop() {
    // Removes the element from in front of queue and returns that element.
    let removed;
    if (this.st1.isEmpty() && this.st2.isEmpty()) {
      return -1;
    } else if (this.st2.isEmpty()) {
      while (this.st1.isEmpty() == false) {
        let val = this.st1.pop();
        this.st2.push(val);
      }

      removed = this.st2.pop();
    } else {
      removed = this.st2.pop();
    }
    return removed;
  }

  peek() {
    // Get the front element of the queue.
    if (this.st1.isEmpty() && this.st2.isEmpty()) {
      return -1;
    } else if (this.st2.isEmpty()) {
      while (this.st1.isEmpty() == false) {
        let val = this.st1.pop();
        this.st2.push(val);
      }

      return this.st2.peek();
    } else {
      return this.st2.peek();
    }
  }

  empty() {
    // Returns whether the queue is empty.
    if (this.st1.isEmpty() && this.st2.isEmpty()) return true;
    else return false;
  }
}

module.exports = {
  //param A : integer
  //return a strings
  solve: function (A) {
    let queue = new UserQueue();

    if (A == 1) return "11";
    if (A == 2) return "22";

    queue.push(1);
    queue.push(2);

    for (let i = 3; i <= A; i += 2) {
      let val = queue.pop();
      let val1 = val * 10 + 1;
      let val2 = val * 10 + 2;
      queue.push(val1);
      queue.push(val2);
      if (i == A)
        return val1.toString() + val1.toString().split("").reverse().join("");
      if (i + 1 == A)
        return val2.toString() + val2.toString().split("").reverse().join("");
    }
  },
};
