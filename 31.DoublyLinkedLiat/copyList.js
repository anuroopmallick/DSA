// Definition for linked list.
//			function RandomListNode(data){
//				this.data = data
//				this.next = null
//              this.random = null
//			}

module.exports = {
  //param head : head node of linked list
  //return the head node in the linked list
  copyRandomList: function (head) {
    let map = new Map();
    let root = head;

    while (root !== null) {
      let newNode = new RandomListNode(root.data);
      map.set(root, newNode);
      root = root.next;
    }

    root = head;
    while (root !== null) {
      let nextNode = map.get(root.next);
      let currNode = map.get(root);
      currNode.next = nextNode;
      root = root.next;
    }

    root = head;
    while (root !== null) {
      let randomNode = map.get(root.random);
      let currNode = map.get(root);
      currNode.random = randomNode;
      root = root.next;
    }

    return map.get(head);
  },
};
