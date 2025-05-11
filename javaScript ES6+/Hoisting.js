console.log(x); // undefined (due to hoisting)
var x = 10;

console.log(y); // ReferenceError (let in TDZ)
let y = 20;

