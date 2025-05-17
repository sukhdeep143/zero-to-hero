// if (5 === "5"){
//     console.log("This is true");

// }else{
//     console.log("This is false");

// }

function counter() {
  let count = 1;

  return function () {
    count++;
    return count;
  };
}

let checkCount = counter()
console.log(checkCount());
console.log(checkCount());
console.log(checkCount());

