// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return an integer
  solve: function (A) {
    let head = A;

    if (head == null) return 0;

    if (head.next == null) return 1;

    let curr = A;
    let prev = null;
    let next = null;
    let tempPrev = null;
    let tempCurr = null;

    let maxEvenLength = 0;
    let maxOddLength = 0;
    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;

      tempPrev = prev;
      tempCurr = curr;

      // for even length
      let evenLength = 0;
      while (prev !== null && curr !== null) {
        if (prev.data == curr.data) {
          evenLength += 2;
          prev = prev.next;
          curr = curr.next;
        } else {
          break;
        }
      }
      maxEvenLength = Math.max(evenLength, maxEvenLength);
      prev = tempPrev;
      curr = tempCurr;

      // for odd length
      let oddLength = 0;
      while ((prev.next !== null) & (curr !== null)) {
        if (prev.next.data == curr.data) {
          oddLength += 2;
          prev = prev.next;
          curr = curr.next;
        } else {
          break;
        }
      }
      maxOddLength = Math.max(oddLength, maxOddLength);
      prev = tempPrev;
      curr = tempCurr;
    }

    if (maxOddLength > 0) maxOddLength += 1;

    return Math.max(maxEvenLength, maxOddLength);
  },
};
