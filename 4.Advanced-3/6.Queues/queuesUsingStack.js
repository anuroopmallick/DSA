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

/**
 * Your UserQueue object will be instantiated and called as such:
 * const obj = new UserQueue();
 * obj.push(X);
 * const param2 = obj.pop();
 * const param3 = obj.peek();
 * const param4 = obj.empty();
 */

// TC for pop is still o(1) as we find average
// suppose queue has 4 elements
// so we pop 4 and push 4 from st1 to st2 - 8 operations + 1 pop operation
// then remove 3 constant operations - total 12
// 1 rem = 12 / 4 = 3 ops , which is constant ops o(1)
