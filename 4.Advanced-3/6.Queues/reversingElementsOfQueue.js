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
  //param A : array of integers
  //param B : integer
  //return a array of integers
  solve: function (A, B) {
    let queue = new UserQueue();

    for (let i of A) {
      queue.push(i);
    }

    let ans = [];

    let count = 0;
    while (queue.empty() == false) {
      if (count < B) {
        ans.unshift(queue.pop());
        count++;
      } else {
        ans.push(queue.pop());
      }
    }

    return ans;
  },
};
