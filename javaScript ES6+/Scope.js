const a = 5;

function outer() {
  let b = 10;
  function inner() {
    console.log(a); // 5 (global)
    console.log(b); // 10 (from outer)
    let c = 55;
  }
  inner();
  
}


// console.log(c);

outer();
