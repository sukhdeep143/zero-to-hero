// EFunction that takes another function as an argument


function greet(name) {
  return `Hello, ${name}`;
}

function processUserInput(callback) {
  const name = "Alice";
  console.log(callback(name));
}

processUserInput(greet); // Output: Hello, Alice

function multiplier(factor) {
    return function (number) {
      return number * factor;
        };
}
const double = multiplier(2);
console.log(double(5)); // Output: 10

const numbers = [1, 2, 3, 4];

// map takes a function and applies it to each item
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]