// for (let i = 0; i < 5; i++) {
//   console.log("Count: " + i);
// }


// let i = 0;
// while (i < 5) {
//   console.log("While Count: " + i);
//   i++;
// }

// let i = 0;
// do {
//   console.log("Do While Count: " + i);
//   i++;
// } while (i < 5);

const person = {name: "Alice", age: 25, city: "Delhi"};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}

for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // skip 2
  if (i === 4) break;    // stop loop at 4
  console.log(i);
}
