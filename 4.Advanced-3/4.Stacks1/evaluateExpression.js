// Problem Description

// An arithmetic expression is given by a string array A of size N. Evaluate the value of an arithmetic expression in
// Reverse Polish Notation.

// Valid operators are +, -, *, /. Each string may be an integer or an operator.
// Note: Reverse Polish Notation is equivalent to Postfix Expression, where operators are written after their operands.

// Problem Constraints
// 1 <= N <= 105

// Input Format
// The only argument given is string array A.

// Output Format
// Return the value of arithmetic expression formed using reverse Polish Notation.

// Example Input
// Input 1:
// A =   ["2", "1", "+", "3", "*"]
// Input 2:
// A = ["4", "13", "5", "/", "+"]

// Example Output
// Output 1:
// 9
// Output 2:
// 6

// Example Explanation

// Explaination 1:
// starting from backside:
//     * : () * ()
//     3 : () * (3)
//     + : (() + ()) * (3)
//     1 : (() + (1)) * (3)
//     2 : ((2) + (1)) * (3)
//     ((2) + (1)) * (3) = 9

// Explaination 2:
// starting from backside:
//     + : () + ()
//     / : () + (() / ())
//     5 : () + (() / (5))
//     13 : () + ((13) / (5))
//     4 : (4) + ((13) / (5))
//     (4) + ((13) / (5)) = 6

// approach: start from the begining, check isNaN and push in stack if encounter a symbol pop two numbers
//evaluate them and push the result on the stack
//finally only one node will remain, return head.data

module.exports = {
  //param A : array of strings
  //return an integer
  evalRPN: function (A) {
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
      } else {
        node.next = head;
        head = node;
      }
    }

    function pop() {
      if (head == null) return;

      let temp = head;
      head = head.next;
      temp.next = null;
      return temp.data;
    }

    function isEmpty() {
      return head == null ? true : false;
    }

    function peek() {
      if (head == null) return;
      else {
        return head.data;
      }
    }

    for (let i of A) {
      let isNaN = Number.isNaN(Number(i));

      if (!isNaN) {
        push(Number(i));
      } else {
        let val1 = pop();
        let val2 = pop();
        let result;
        if (i == "*") {
          result = val2 * val1;
        } else if (i == "+") {
          result = val2 + val1;
        } else if (i == "-") {
          result = val2 - val1;
        } else if (i == "/") {
          result = Math.floor(val2 / val1);
        }
        push(result);
      }
    }

    return head.data;
  },
};
