//Also kniwn parking ice cream truck
// check i-pad for question
// basically return maximum of each window in an array

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addFront(val) {
    let newNode = new Node(val);
    if (this.head == null && this.tail == null) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  addRear(val) {
    let newNode = new Node(val);
    if (this.head == null && this.tail == null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  removeFront() {
    if (this.head === null) return null;

    if (this.head == this.tail) {
      this.head = this.tail = null;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      this.head.prev = null;
      return temp.data;
    }
  }

  removeRear() {
    if (this.tail === null) return null;

    if (this.head == this.tail) {
      this.head = this.tail = null;
    } else {
      let temp = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
      return temp.data;
    }
  }

  getFront() {
    if (this.head == null) return;
    else {
      return this.head.data;
    }
  }

  getRear() {
    if (this.tail == null) return;
    else {
      return this.tail.data;
    }
  }

  isEmpty() {
    if (this.head == null && this.tail == null) return true;
    else return false;
  }
}

module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  slidingMaximum: function (A, B) {
    let queue = new Queue();
    let n = A.length;
    let ans = [];

    for (let i = 0; i < B; i++) {
      while (queue.isEmpty() == false && A[i] > queue.getRear()) {
        queue.removeRear();
      }
      queue.addRear(A[i]);
    }

    ans.push(queue.getFront());

    for (let i = 1; i < n - B + 1; i++) {
      if (A[i - 1] == queue.getFront()) {
        queue.removeFront();
      }

      let idx = i + B - 1;

      while (queue.isEmpty() == false && A[idx] > queue.getRear()) {
        queue.removeRear();
      }

      queue.addRear(A[idx]);

      ans.push(queue.getFront());
    }

    return ans;
  },
};
