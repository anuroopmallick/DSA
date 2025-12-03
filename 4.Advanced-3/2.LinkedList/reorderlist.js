// Q2. Reorder List

// Problem Description
// Given a singly linked list A

//  A: A0 → A1 → … → An-1 → An
// reorder it to:

//  A0 → An → A1 → An-1 → A2 → An-2 → …
// You must do this in-place without altering the nodes' values.

// Problem Constraints
// 1 <= |A| <= 106

// Input Format
// The first and the only argument of input contains a pointer to the head of the linked list A.

// Output Format
// Return a pointer to the head of the modified linked list.

// Example Input
// Input 1:
//  A = [1, 2, 3, 4, 5]
// Input 2:
//  A = [1, 2, 3, 4]

// Example Output
// Output 1:
//  [1, 5, 2, 4, 3]
// Output 2:
//  [1, 4, 2, 3]

// Example Explanation
// Explanation 1:
//  The array will be arranged to [A0, An, A1, An-1, A2].
// Explanation 2:
//  The array will be arranged to [A0, An, A1, An-1, A2].

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  reorderList: function (A) {
    let slow = A;
    let fast = A;

    while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    let nextToMid = slow.next;

    slow.next = null;

    let prev = null;
    let next = null;
    while (nextToMid !== null) {
      next = nextToMid.next;
      nextToMid.next = prev;
      prev = nextToMid;
      nextToMid = next;
    }

    let head1 = A;
    let head2 = prev;

    while (head1 !== null && head2 !== null) {
      let temp1 = head1.next;
      let temp2 = head2.next;

      head1.next = head2;
      head2.next = temp1;

      head1 = temp1;
      head2 = temp2;
    }

    return A;
  },
};

// TC: o(n);
// SC: o(1);
