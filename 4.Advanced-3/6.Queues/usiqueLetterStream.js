// Problem Description

// Imagine you're a teacher. You ask students to call out a letter one by one. After each letter, you jot down the very first
// letter that's only been called out once. If all letters have been repeated, you write "#".
// Here's a scenario:
// A student says "a". It's the first letter. You write "a".
// Next, a student says "b", "a" is still unique, so you add "a". Now it's "aa".
// A student says "a" again. Now, "b" is the unique one. You add "b", making it "aab".
// A student says "b". All letters so far are repeated. You add "#". It becomes "aab#".
// A student says "c". "c" is unique. You add "c". The final is "aab#c".
// Your task? Given the sequence the students call out A, determine the string on the board.

// Problem Constraints
// 1 <= |A| <= 100000

// Input Format
// The only argument given is string A.

// Output Format
// Return a string after processing the stream of lowercase alphabets A.

// Example Input
// Input 1:
//  A = "abadbc"
// Input 2:
//  A = "abcabc"

// Example Output
// Output 1:
// "aabbdd"
// Output 2:
// "aaabc#"

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
  //param A : string
  //return a strings
  solve: function (A) {
    let queue = new Queue();
    let map = new Map();
    let str = "";

    for (let i of A) {
      if (map.has(i)) {
        map.set(i, map.get(i) + 1);
      } else {
        map.set(i, 1);
      }

      queue.addRear(i);

      while (queue.isEmpty() == false && map.get(queue.getFront()) > 1) {
        queue.removeFront();
      }

      if (queue.isEmpty()) {
        str += "#";
      } else {
        str += queue.getFront();
      }
    }

    return str;
  },
};
