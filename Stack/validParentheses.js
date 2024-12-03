class Stack {
  constructor() {
    this.stack = [];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    if (!this.isEmpty()) {
      this.stack.pop();
    } else {
      return "stack is empty";
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1];
    } else {
      return "stack is empty";
    }
  }

  length() {
    return this.stack.length;
  }
}

var isValid = function (s) {
  var stack = new Stack();
  var string = s;

  for (let str of string) {
    if (stack.isEmpty()) {
      stack.push(str);
    } else {
      if (str === ")" && stack.peek() === "(") {
        stack.pop();
      } else if (str === "]" && stack.peek() === "[") {
        stack.pop();
      } else if (str === "}" && stack.peek() === "{") {
        stack.pop();
      } else {
        stack.push(str);
      }
    }
  }

  if (stack.isEmpty()) {
    return true;
  } else {
    return false;
  }
};
