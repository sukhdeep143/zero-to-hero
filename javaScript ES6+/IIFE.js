// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is executed immediately after it is defined.

var globalVar = "I'm global!";

(function() {
    var localVar = "I'm local to the IIFE!";
    console.log(globalVar);  // Accessible
    console.log(localVar);   // Local to this function
})();

console.log(typeof localVar);  // undefined

