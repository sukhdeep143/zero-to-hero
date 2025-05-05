let age = 25;
console.log(age);

age = 27; // ✅ This is allowed
console.log(age);

const API = "https://api.example.com";
console.log(API);


// API = "https://newapi.com"; // ❌ This will cause an error

// console.log(API);


const greet = (name) => `Hello, ${name}`;
console.log(greet("Sukhdeep")); // Hello, Sukhdeep

function Car(name) {
    this.brand = name;
}
  
let carData = new Car("Maruti");
console.log(carData); // ✅ Works fine

// const Car = (name) => {
//     this.brand = name;
//   };
  
// let carData = new Car("Maruti"); // ❌ Error: Car is not a constructor

const name = "Sukhdeep";
console.log(`Welcome, ${name}!`); // Welcome, Sukhdeep!

function sayHello(name = "Guest") {
    console.log(`Hello, ${name}`);
}
  
sayHello(); // Hello, Guest

const colors = ["red", "green"];
const [first, second] = colors;
console.log(first); // red


const a = [1, 2];
const b = [...a, 3]; // [1, 2, 3]

const obj1 = { x: 1 };
const obj2 = { ...obj1, y: 2 }; // { x: 1, y: 2 }


function sum(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}
  
console.log(sum(1, 2, 3)); // 6
  
  
  