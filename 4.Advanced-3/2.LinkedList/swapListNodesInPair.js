// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  swapPairs: function (A) {
    let curr = A;

    while (curr !== null && curr.next !== null) {
      let temp = curr.data;
      let next = curr.next.data;

      curr.data = next;
      curr.next.data = temp;

      curr = curr.next.next;
    }

    return A;
  },
};

// TC: o (n)
// sc: o (1)
