// Problem Description

// You have a string, denoted as A.
// To transform the string, you should perform the following operation repeatedly:
// Identify the first occurrence of consecutive identical pairs of characters within the string.
// Remove this pair of identical characters from the string.
// Repeat steps 1 and 2 until there are no more consecutive identical pairs of characters.
// The final result will be the transformed string.

// Problem Constraints
// 1 <= |A| <= 100000

// Input Format
// First and only argument is string A.

// Output Format
// Return the final string.

// Example Input
// Input 1:
//  A = "abccbc"
// Input 2:
//  A = "ab"

// Example Output
// Output 1:
//  "ac"
// Output 2:
//  "ab"

// Example Explanation

// Explanation 1:
// The Given string is "abccbc".
// Remove the first occurrence of consecutive identical pairs of characters "cc".
// After removing the string will be "abbc".
// Again Removing the first occurrence of consecutive identical pairs of characters "bb".
// After remvoing, the string will be "ac".
// Now, there is no consecutive identical pairs of characters.
// Therefore the string after this operation will be "ac".

// Explanation 2:
//  No removals are to be done.

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
      return temp;
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
      if (isEmpty()) {
        push(i);
      } else {
        let peekVal = peek();
        if (i == peekVal) {
          pop();
        } else {
          push(i);
        }
      }
    }

    let ans = "";

    while (head !== null) {
      ans += head.data;
      head = head.next;
    }

    return ans.split("").reverse().join("");
  },
};
