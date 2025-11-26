// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  deleteDuplicates: function (A) {
    let head = A;

    while (head !== null && head.next !== null) {
      if (head.data == head.next.data) {
        head.next = head.next.next;
      } else {
        head = head.next;
      }
    }

    return A;
  },
};
