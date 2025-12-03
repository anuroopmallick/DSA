// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of the first linked list
  //param B : head node of the second linked list
  //return the intersection node
  solve: function (A, B) {
    let lengthA = 0;
    let headA = A;
    while (headA !== null) {
      lengthA++;
      headA = headA.next;
    }

    let lengthB = 0;
    let headB = B;
    while (headB !== null) {
      lengthB++;
      headB = headB.next;
    }

    headA = A;
    headB = B;
    while (lengthA !== lengthB) {
      if (lengthA > lengthB) {
        headA = headA.next;
        lengthA--;
      } else {
        headB = headB.next;
        lengthB--;
      }
    }

    while (headA !== headB) {
      headA = headA.next;
      headB = headB.next;
    }

    return headA;
  },
};
