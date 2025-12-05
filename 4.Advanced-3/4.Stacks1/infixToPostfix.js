// Problem Description
// Given string A denoting an infix expression. Convert the infix expression into a postfix expression.

// String A consists of ^, /, *, +, -, (, ) and lowercase English alphabets where lowercase English alphabets are operands
// and ^, /, *, +, - are operators.

// Find and return the postfix expression of A.
// NOTE:
// ^ has the highest precedence.
// / and * have equal precedence but greater than + and -.
// + and - have equal precedence and lowest precedence among given operators.

// Problem Constraints
// 1 <= length of the string <= 500000

// Input Format
// The only argument given is string A.

// Output Format
// Return a string denoting the postfix conversion of A.

// Example Input
// Input 1:
//  A = "x^y/(a*z)+b"

// Input 2:
//  A = "a+b*(c^d-e)^(f+g*h)-i"

// Example Output
// Output 1:
//  "xy^az*/b+"
// Output 2:
//  "abcd^e-fgh*+^*+i-"

// Example Explanation
// Explanation 1:
// Ouput dentotes the postfix expression of the given input.

module.exports = {
  //param A : string
  //return a strings
  solve: function (A) {
    class Node {
      constructor(data) {
        this.data = data;
        this.next = null;
      }
    }

    let head = null;

    function push(data) {
      let newNode = new Node(data);
      if (head == null) head = newNode;
      else {
        newNode.next = head;
        head = newNode;
      }
    }

    function pop() {
      if (head == null) return;

      let temp = head;
      head = head.next;
      temp.next = null;
      return temp.data;
    }

    function peek() {
      if (head !== null) return head.data;
    }

    function isEmpty() {
      return head == null ? true : false;
    }

    function checkPreceedence(str) {
      if (str == "^") {
        return 3;
      } else if (str == "/" || str == "*") {
        return 2;
      } else if (str == "+" || str == "-") {
        return 1;
      } else {
        return 0;
      }
    }

    let ans = "";

    for (let i in A) {
      let charCode = A.charCodeAt(i);

      if (charCode >= 97 && charCode <= 122) {
        ans += A[i];
      } else {
        if (isEmpty()) {
          push(A[i]);
        } else {
          if (A[i] == "(") {
            push(A[i]);
            continue;
          }

          let currPreceedence = checkPreceedence(A[i]);

          if (A[i] == ")") {
            while (peek() !== "(") {
              let value = pop();
              ans += value;
            }
            pop();
            continue;
          }

          while (
            isEmpty() == false &&
            checkPreceedence(peek()) >= currPreceedence
          ) {
            ans += pop();
          }

          push(A[i]);
        }
      }
    }

    while (isEmpty() == false) {
      ans += pop();
    }

    return ans;
  },
};
