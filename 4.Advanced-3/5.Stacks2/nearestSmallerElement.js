module.exports = {
  //param A : array of integers
  //return a array of integers
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
      return;
    }

    top() {
      if (this.head == null) return;
      return this.head.data;
    }

    isEmpty() {
      return this.head == null ? true : false;
    }
  },
  prevSmaller: function (A) {
    let stack = new this.Stack();
    let ans = [-1];
    stack.push(A[0]);

    for (let i = 1; i < A.length; ++i) {
      while (A[i] <= stack.top() && stack.isEmpty() == false) {
        stack.pop();
      }
      if (stack.isEmpty() == false) {
        ans.push(stack.top());
      } else {
        ans.push(-1);
      }
      stack.push(A[i]);
    }

    return ans;
  },
};
