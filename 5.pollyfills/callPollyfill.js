function greet() {
  return "Hello, " + this.name + "!";
}

const person = {
  name: "John",
};

Function.prototype.customCall = function (obj) {
  obj.fn = this;
  let result = obj.fn();
  return result;
};

const result = greet.customCall(person);
console.log(result);

// Output:
// Hello, John!
