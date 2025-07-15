// const myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   setTimeout(() => {
//     if (success) {
//       resolve("✅ Promise fulfilled!");
//     } else {
//       reject("❌ Promise rejected!");
//     }
//   }, 2000);
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("✨ Promise settled (either fulfilled or rejected)");
//   });



console.log("This will exexute at first!");


const CheckPromise = new Promise((resolve)=>{
  console.log("This will be the 2nd!!");
  resolve();
  
});

CheckPromise.then(()=>{
  console.log("The last one to execute !!!!");
  
});

console.log("3rd one to execute!!!");


// 📌 Explanation
// ✅ Step 1: console.log("1. Start") runs immediately.
// ✅ Step 2: When you create the promise, its executor runs immediately, so "2. Inside promise executor" is printed.
// ✅ Step 3: resolve() tells JavaScript to schedule the .then() callback for the microtask queue.
// ✅ Step 4: console.log("4. End") finishes the main stack.
// ✅ Step 5: The event loop checks the microtask queue and runs "3. Promise then callback".


// The microtask queue is a place where JavaScript keeps short, high-priority tasks that need to run after the current code finishes, but before other async things (like setTimeout).