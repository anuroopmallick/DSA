// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return an integer
  lPalin: function (A) {
    let length = 0;
    let head = A;

    while (head !== null) {
      length++;
      head = head.next;
    }

    let mid = Math.floor(length / 2);

    head = A;

    if (head.data == null || head.next == null) {
      return 1;
    }

    let count = 1;
    let prev = null;
    let p1 = head;
    let p2 = head;
    let next = null;

    while (count < mid + 1) {
      p1 = p1.next;
      count++;
    }

    count = 1;
    while (count < mid) {
      p2 = p2.next;
      count++;
    }

    p2.next = null;

    while (p1 !== null) {
      next = p1.next;
      p1.next = prev;
      prev = p1;
      p1 = next;
    }

    let head1 = A;
    let head2 = prev;

    while (head1 !== null && head2 !== null) {
      if (head1.data !== head2.data) {
        return 0;
      }
      head1 = head1.next;
      head2 = head2.next;
    }

    return 1;
  },
};
