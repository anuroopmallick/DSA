// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : head node of linked list
  //return the head node in the linked list
  mergeTwoLists: function (A, B) {
    let headA = A;
    let headB = B;

    if (headA == null) {
      return headB;
    }

    if (headB == null) {
      return headA;
    }

    let mainHead = null;

    if (headA.data < headB.data) {
      mainHead = headA;
      headA = headA.next;
    } else {
      mainHead = headB;
      headB = headB.next;
    }

    let ans = mainHead;

    while (headA !== null && headB !== null) {
      if (headA.data < headB.data) {
        mainHead.next = headA;
        mainHead = mainHead.next;
        headA = headA.next;
      } else {
        mainHead.next = headB;
        mainHead = mainHead.next;
        headB = headB.next;
      }
    }

    while (headA !== null) {
      mainHead.next = headA;
      mainHead = mainHead.next;
      headA = headA.next;
    }

    while (headB !== null) {
      mainHead.next = headB;
      mainHead = mainHead.next;
      headB = headB.next;
    }

    return ans;
  },
};

// TC: o(n + m)
// SC: o(1)
