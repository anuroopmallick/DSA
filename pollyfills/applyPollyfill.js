Example: function greet(country) {
  return "Hello, " + this.name + " from " + country;
}

const person = {
  name: "John",
};

function applyPolyfill(fn, context, args) {
  // Write your solution here ========================
  context.fn = fn;
  let result = context.fn(...args);
  return result;
}

const result = applyPolyfill(greet, person, ["India"]);
console.log(result);

// Output:
// Hello, John! from India
