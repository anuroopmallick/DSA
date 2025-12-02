// Q1. Partition List
// Problem Description
// Given a linked list A and a value B, partition it such that all nodes less than B come before nodes greater than or
// equal to B. You should preserve the original relative order of the nodes in each of the two partitions.

// Problem Constraints
// 1 <= |A| <= 106
// 1 <= A[i], B <= 109

// Input Format
// The first argument of input contains a pointer to the head to the given linked list.
// The second argument of input contains an integer, B.

// Output Format
// Return a pointer to the head of the modified linked list.

// Example Input
// Input 1:
// A = [1, 4, 3, 2, 5, 2]
// B = 3
// Input 2:
// A = [1, 2, 3, 1, 3]
// B = 2

// Example Output
// Output 1:
// [1, 2, 2, 4, 3, 5]
// Output 2:
// [1, 1, 2, 3, 3]

// Example Explanation
// Explanation 1:
//  [1, 2, 2] are less than B wheread [4, 3, 5] are greater than or equal to B.
// Explanation 2:
//  [1, 1] are less than B wheread [2, 3, 3] are greater than or equal to B.

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : integer
  //return the head node in the linked list
  partition: function (A, B) {
    let small = null;
    let smallHead = null;
    let large = null;
    let largeHead = null;

    let head = A;

    if (head == null || head.next == null) {
      return head;
    }

    while (head !== null) {
      if (head.data < B) {
        small = head;
        smallHead = head;
        break;
      }
      head = head.next;
    }

    head = A;
    while (head !== null) {
      if (head.data >= B) {
        large = head;
        largeHead = head;
        break;
      }
      head = head.next;
    }

    head = A;

    while (head !== null) {
      if (head == small || head == large) {
        head = head.next;
      } else {
        if (head.data < B) {
          small.next = head;
          small = small.next;
          head = head.next;
        } else {
          large.next = head;
          large = large.next;
          head = head.next;
          if (large.next !== null && large.next.data < B) {
            large.next = null;
          }
        }
      }
    }

    if (small !== null) small.next = largeHead;

    if (smallHead == null) return largeHead;

    return smallHead;
  },
};

// better approach and easier is to create new nodes while traversing
