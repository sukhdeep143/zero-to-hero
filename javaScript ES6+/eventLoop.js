console.log('Script start');

setTimeout(() => {
  console.log('setTimeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise callback');
});

console.log('Script end');
