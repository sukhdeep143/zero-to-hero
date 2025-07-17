// Synchronous code runs line by line, and each line waits for the previous one to finish before moving on.

console.log("Start");
console.log("Middle");
console.log("End");

// Output:
// Start
// Middle
// End

// Asynchronous code doesn't wait for a task to finish. It moves on to the next line while the previous task runs in the background (e.g., fetching data, timers, API calls).
console.log("Start");

setTimeout(() => {
  console.log("After 2 seconds");
}, 2000);

console.log("End");

// Start
// End
// After 2 seconds
