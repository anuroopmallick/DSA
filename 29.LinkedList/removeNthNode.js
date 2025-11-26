// Q3. Remove Nth Node from List End

// Problem Description
// Given a linked list A, remove the B-th node from the end of the list and return its head.
// For example, given linked list: 1->2->3->4->5, and B = 2.
// After removing the second node from the end, the linked list becomes 1->2->3->5.

// NOTE: If B is greater than the size of the list, remove the first node of the list.

// Try doing it using constant additional space.

// Problem Constraints
// 1 <= |A| <= 106

// Input Format
// The first argument of input contains a pointer to the head of the linked list. The second argument of input contains the integer B.

// Output Format
// Return the head of the linked list after deleting the B-th element from the end.

// Example Input

// Input 1:
// A = 1->2->3->4->5
// B = 2

// Input 2:
// A = 1
// B = 1

// Example Output

// Output 1:
// 1->2->3->5
// Output 2:

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : integer
  //return the head node in the linked list
  removeNthFromEnd: function (A, B) {
    let length = 0;
    let head = A;
    while (head !== null) {
      length++;
      head = head.next;
    }

    head = A;
    if (B >= length) {
      head = head.next;
      return head;
    }

    let pos = length - B;
    let curr = A;
    let count = 1;
    while (curr !== null) {
      if (count == pos) {
        curr.next = curr.next.next;
      }
      curr = curr.next;
      count++;
    }

    return A;
  },
};
