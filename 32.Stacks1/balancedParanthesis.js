module.exports = {
  //param A : string
  //return an integer
  solve: function (A) {
    class Node {
      constructor(data) {
        this.data = data;
        this.next = null;
      }
    }

    let head = null;

    function push(value) {
      let node = new Node(value);

      if (head == null) {
        head = node;
      } else {
        node.next = head;
        head = node;
      }
    }

    function pop() {
      if (head == null) return;

      let temp = head;
      head = head.next;
      temp.next = null;
      return temp;
    }

    function peek() {
      if (head == null) return;
      else {
        return head.data;
      }
    }

    function isEmpty() {
      return head == null ? true : false;
    }

    for (let i of A) {
      if (isEmpty()) {
        push(i);
      } else {
        let peekVal = peek();
        if (peekVal == "(" && i == ")") {
          pop();
        } else if (peekVal == "{" && i == "}") {
          pop();
        } else if (peekVal == "[" && i == "]") {
          pop();
        } else {
          push(i);
        }
      }
    }

    if (head == null) return 1;
    else return 0;
  },
};
