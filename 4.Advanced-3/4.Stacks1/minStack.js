// stack that keeps track of min value to return in order (1) rather than traversing to find

// Problem Description

// Design a stack that supports push, pop, top, and retrieve the minimum element in constant time.
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
// NOTE:
// All the operations have to be constant time operations.
// getMin() should return -1 if the stack is empty.
// pop() should return nothing if the stack is empty.
// top() should return -1 if the stack is empty.

// Problem Constraints
// 1 <= Number of Function calls <= 106
// It is guaranteed that, atleast one call is made to either getMin() or top().

// Input Format
// Functions will be called by the checker code automatically.

// Output Format
// Each function should return the values as defined by the problem statement.

// Example Input
// Input 1:
// push(1)
// push(2)
// push(-2)
// getMin()
// pop()
// getMin()
// top()
// Input 2:
// getMin()
// pop()
// top()

// Example Output

// Output 1:
//  -2 1 2
// Output 2:
//  -1 -1

class Node {
  constructor(data) {
    this.data = data;
    this.min = null;
    this.next = null;
  }
}

function solve() {
  // Initalize your variables here
  this.head = null;
}

solve.prototype.push = function (e) {
  let newNode = new Node(e);

  if (this.head == null) {
    newNode.min = e;
    this.head = newNode;
  } else {
    newNode.min = Math.min(e, this.head.min);

    newNode.next = this.head;
    this.head = newNode;
  }
};

solve.prototype.pop = function () {
  if (this.head == null) return;

  let temp = this.head;
  this.head = this.head.next;
  temp.next = null;
};

solve.prototype.top = function () {
  // return top
  if (this.head == null) return -1;

  return this.head.data;
};

solve.prototype.getMin = function () {
  // return minimum
  if (this.head == null) return -1;
  else return this.head.min;
};

module.exports = {
  solve: solve,
};

// ES 2105 class  -> upper one is older

// class solve {
//     constructor() {
//         // Initalize your variables here
//         this.head = null;
//     }
//     push(e) {
//         let newNode = new Node(e);

//         if (this.head == null) {
//             newNode.min = e;
//             this.head = newNode;
//         } else {
//             newNode.min = Math.min(e, this.head.min);

//             newNode.next = this.head;
//             this.head = newNode;
//         }
//     }
//     pop() {
//         if (this.head == null) return;

//         let temp = this.head;
//         this.head = this.head.next;
//         temp.next = null;
//     }
//     top() {
//         // return top
//         if (this.head == null) return -1;

//         return this.head.data;
//     }
//     getMin() {
//         // return minimum
//         if (this.head == null) return -1;
//         else return this.head.min;
//     }
// }
