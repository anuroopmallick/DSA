// Problem Description
// Given two strings A and B. Each string represents an expression consisting of lowercase English alphabets, '+', '-', '(' and ')'.
// The task is to compare them and check if they are similar. If they are identical, return 1 else, return 0.
// NOTE: It may be assumed that there are at most 26 operands from ‘a’ to ‘z’, and every operand appears only once.

// Problem Constraints
// 1 <= length of the each String <= 100

// Input Format
// The given arguments are string A and string B.

// Output Format
// Return 1 if they represent the same expression else return 0.

// Example Input
// Input 1:
//  A = "-(a+b+c)"
//  B = "-a-b-c"
// Input 2:
//  A = "a-b-(c-d)"
//  B = "a-b-c-d"

// Example Output
// Output 1:
//  1
// Output 2:
//  0

// Example Explanation
// Explanation 1:
//  The expression "-(a+b+c)" can be written as "-a-b-c" which is equal as B.
// Explanation 2:
//  Both the expression are different.

module.exports = {
  //param A : string
  //param B : string
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

    push(value) {
      let node = new Node(value);

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
  solve: function (A, B) {
    function compareSign(str1, str2) {
      if (str1 == "+" && str2 == "-") {
        return "-";
      } else if (str1 == "-" && str2 == "+") {
        return "-";
      } else if (str1 == "+" && str2 == "+") {
        return "+";
      } else if (str1 == "-" && str2 == "-") {
        return "+";
      }
    }

    function findSimplifiedExpressionMap(str) {
      let map = new Map();
      let currSign = "+";
      let stack = new this.Stack();
      stack.push("+");

      for (let i in str) {
        let charCode = str.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) {
          let sign = compareSign(currSign, stack.top());
          map.set(str[i], sign);
          continue;
        } else if (str[i] == "(") {
          let sign = compareSign(stack.top(), currSign);
          stack.push(sign);
          currSign = "+";
          continue;
        } else if (str[i] == ")") {
          stack.pop();
          continue;
        } else {
          currSign = str[i];
        }
      }

      return map;
    }

    let map1 = findSimplifiedExpressionMap.call(this, A);
    let map2 = findSimplifiedExpressionMap.call(this, B);

    function findSimplifiedString(map) {
      let str = "";
      for (let i in A) {
        let charCode = A.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) {
          str += map.get(A[i]) + A[i];
        }
      }
      return str;
    }

    let str1 = findSimplifiedString(map1);
    let str2 = findSimplifiedString(map2);

    if (str1 == str2) {
      return 1;
    } else {
      return 0;
    }
  },
};
