function greet() {
  return "Hello, " + this.name + "!";
}

const person = {
  name: "John",
};

Function.prototype.customBind = function (obj) {
  obj.fn = this;
  return function () {
    return obj.fn();
  };
};

const boundFunction = greet.customBind(person);
const result = boundFunction();
console.log(result);

// Output:
// Hello, John!
