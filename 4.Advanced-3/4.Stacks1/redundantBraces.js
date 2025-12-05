// Problem Description
// Given a string A denoting an expression. It contains the following operators '+', '-', '*', '/'.

// Check whether A has redundant braces or not.
// NOTE: A will be always a valid expression and will not contain any white spaces.

// Problem Constraints
// 1 <= |A| <= 105

// Input Format
// The only argument given is string A.

// Output Format
// Return 1 if A has redundant braces else, return 0.

// Example Input
// Input 1:
//  A = "((a+b))"
// Input 2:
//  A = "(a+(a+b))"

// Example Output
// Output 1:
//  1
// Output 2:
//  0

// Example Explanation
// Explanation 1:
//  ((a+b)) has redundant braces so answer will be 1.
// Explanation 2:
//  (a+(a+b)) doesn't have have any redundant braces so answer will be 0.

module.exports = {
  //param A : string
  //return an integer
  braces: function (A) {
    class Node {
      constructor(data) {
        this.data = data;
        this.next = null;
      }
    }

    let head = null;

    function push(value) {
      let node = new Node(value);

      if (head == null) {
        head = node;
      }

      node.next = head;
      head = node;
    }

    function pop() {
      if (head == null) return;

      let temp = head;
      head = head.next;
      temp.next = null;
      return temp;
    }

    function peek() {
      if (head == null) return;
      else {
        return head.data;
      }
    }

    for (let i in A) {
      let charCode = A.charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) {
        continue;
      } else if (A[i] == "(") {
        push(A[i]);
      } else if (A[i] == ")") {
        if (peek() == "(") return 1;
        else {
          while (peek() !== "(") {
            pop();
          }
          pop();
        }
      } else {
        push(A[i]);
      }
    }

    return 0;

    return 0;
  },
};
