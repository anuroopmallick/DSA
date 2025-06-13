function Node(data) {
  this.data = data;
  this.next = null;
}

class LinkedList {
  constructor(head) {
    this.root = head;
    this.size = 0;
  }

  insert_node(position, value) {
    let temp = new Node(value);
    let prev = this.root;
    if (position == 1) {
      temp.next = this.root;
      this.root = temp;
    } else {
      let i = 1;
      while (i < position - 1) {
        prev = prev.next;
        i++;
      }
      temp.next = prev.next;
      prev.next = temp;
    }
    this.size++;
  }

  delete_node(position) {
    if (position >= 1 || position <= this.size) {
      let temp = null;
      let prev = this.root;
      if (position == 1) {
        temp = this.root;
        this.root = this.root.next;
      } else {
        let i = 1;
        while (i < position - 1) {
          prev = prev.next;
          i++;
        }
        temp = prev.next;
        prev.next = prev.next.next;
      }
      this.size--;
    }
  }

  print_all() {
    let temp = this.root;
    let flag = 0;
    while (temp != null) {
      if (flag == 0) {
        process.stdout.write(`${temp.data}`);
        flag = 1;
      } else {
        process.stdout.write(" " + `${temp.data}`);
      }
      temp = temp.next;
    }
  }
}

let head = new Node(1);
let linkedList = new LinkedList(head);

linkedList.insert_node(2, 2);
linkedList.insert_node(3, 4);
linkedList.insert_node(4, 6);
linkedList.delete_node(1);
linkedList.print_all(2, 2);
