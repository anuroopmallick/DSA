// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : integer
  //param C : integer
  //return the head node in the linked list
  reverseBetween: function (A, B, C) {
    let head = A;

    if (head == null || head.next == null) {
      return head;
    }

    let count = 1;
    let prev = null;
    let next = null;
    let curr = A;

    let previousNode = null;
    let tail = null;
    while (curr !== null) {
      if (count >= B && count <= C) {
        if (count == B) {
          tail = curr;
        }
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++;
      } else if (count < B) {
        previousNode = curr;
        curr = curr.next;
        count++;
      } else {
        break;
      }
    }

    if (previousNode !== null) previousNode.next = prev;
    tail.next = curr;

    if (previousNode == null) return prev;
    else return A;
  },
};

// TC: o(n)
// TC: o(1)
