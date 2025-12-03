// Q5. Add Two Numbers as Lists
// Problem Description
// You are given two linked lists, A and B, representing two non-negative numbers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return it as a linked list.

// Problem Constraints
// 1 <= |A|, |B| <= 105

// Input Format
// The first argument of input contains a pointer to the head of linked list A.
// The second argument of input contains a pointer to the head of linked list B.

// Output Format
// Return a pointer to the head of the required linked list.

// Example Input
// Input 1:
//  A = [2, 4, 3]
//  B = [5, 6, 4]
// Input 2:
//  A = [9, 9]
//  B = [1]

// Example Output
// Output 1:
//  [7, 0, 8]
// Output 2:
//  [0, 0, 1]

// Example Explanation
// Explanation 1:
//  A = 342 and B = 465. A + B = 807.

// Explanation 2:
//  A = 99 and B = 1. A + B = 100.

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : head node of linked list
  //return the head node in the linked list
  addTwoNumbers: function (A, B) {
    let head = new Node();
    let carry = 0;
    let headA = A;
    let headB = B;
    let ans = null;
    let flag = 0;

    while (headA !== null || headB !== null) {
      let a = headA !== null ? headA.data : 0;
      let b = headB !== null ? headB.data : 0;

      let number = a + b + carry;
      let value = 0;

      if (number > 9) {
        carry = Math.floor(number / 10);
        value = number % 10;
      } else {
        carry = 0;
        value = number;
      }

      if (flag == 0) {
        head.data = value;
        ans = head;
        flag = 1;
      } else {
        head.next = new Node(value);
        head = head.next;
      }

      headA = headA !== null ? (headA = headA.next) : null;
      headB = headB !== null ? (headB = headB.next) : null;
    }

    if (carry !== 0) head.next = new Node(carry);

    return ans;
  },
};

// TC: o(max(m, n));
// SC: o(max(m, n));
