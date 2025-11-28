// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  solve: function (A) {
    if (A == null || A.next == null) {
      return A;
    }

    let slow = A;
    let fast = A;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) break;
    }

    slow = A;

    while (slow.next !== fast.next) {
      slow = slow.next;
      fast = fast.next;
    }

    fast.next = null;

    return A;
  },
};
