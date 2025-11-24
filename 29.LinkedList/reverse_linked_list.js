class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

let linkedList;

function reverseLinkedlist(linkedList) {
  let head = linkedList;

  if (head.data == null || head.next == null) {
    head;
  }

  let curr = head;
  let next = null;
  let prev = null;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  head = prev;

  return head;
}
