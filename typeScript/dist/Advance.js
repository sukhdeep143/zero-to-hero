"use strict";
let sukhdep = {
    id: 28,
    age: 22,
    name: "Sukhdeep"
};
console.log(sukhdep);
let currentStatus = "success";
console.log(currentStatus);
// Union Types (|)
let value;
function printId(id) {
    console.log("Your ID is: " + id);
}
printId(101); // OK
printId("abc123"); // OK
function getProperty(obj, key) {
    return obj[key];
}
const p = { name: "John", age: 30 };
console.log(getProperty(p, "name")); // John
