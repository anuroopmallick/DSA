// In this question mod operations are important. also consider negative numbers

// Problem Constraints
// 1 <= size of array A <= 10^5
// -10^9 <= A[i] <= 10^9
// 1 <= B <= size of array

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
  //return an integer
  solve: function (A, B) {
    let maxQueue = new Queue();
    let maxArray = [];
    let minQueue = new Queue();
    let minArray = [];
    let mod = 10 ** 9 + 7;
    let n = A.length;

    function modFix(x, mod) {
      return ((x % mod) + mod) % mod;
    }

    for (let i = 0; i < B; i++) {
      while (maxQueue.isEmpty() == false && A[i] > maxQueue.getRear()) {
        maxQueue.removeRear();
      }
      maxQueue.addRear(A[i]);
    }

    maxArray.push(maxQueue.getFront());

    for (let i = 0; i < B; i++) {
      while (minQueue.isEmpty() == false && A[i] < minQueue.getRear()) {
        minQueue.removeRear();
      }
      minQueue.addRear(A[i]);
    }

    minArray.push(minQueue.getFront());

    for (let i = 1; i < n - B + 1; i++) {
      if (A[i - 1] == maxQueue.getFront()) {
        maxQueue.removeFront();
      }

      let idx = i + B - 1;

      while (maxQueue.isEmpty() == false && A[idx] > maxQueue.getRear()) {
        maxQueue.removeRear();
      }

      maxQueue.addRear(A[idx]);

      maxArray.push(maxQueue.getFront());
    }

    for (let i = 1; i < n - B + 1; i++) {
      if (A[i - 1] == minQueue.getFront()) {
        minQueue.removeFront();
      }

      let idx = i + B - 1;

      while (minQueue.isEmpty() == false && A[idx] < minQueue.getRear()) {
        minQueue.removeRear();
      }

      minQueue.addRear(A[idx]);

      minArray.push(minQueue.getFront());
    }

    let ans = 0;
    for (let i = 0; i < maxArray.length; ++i) {
      ans = modFix(ans + minArray[i] + maxArray[i], mod);
    }

    return ans % mod;
  },
};
