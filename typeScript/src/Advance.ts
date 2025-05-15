// Type Alia here we are using tThe DRY Principle stands for "Don't Repeat Yourself", and it's a fundamental concept in software development.
type Student1 = {
    id: number,
    age: number,
    name: string

};


let sukhdep: Student1 = {
    id: 28,
    age: 22,
    name: "Sukhdeep"
};

console.log(sukhdep);


type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";
console.log(currentStatus);

// Union Types (|)
let value: string | number;

function printId(id: string | number) {
  console.log("Your ID is: " + id);
}

printId(101);      // OK
printId("abc123"); // OK

// ntersection Types (&)
type A = { name: string };
type B = { age: number };

type C = A & B; // Must have both name and age


// keyof Operator
type Person = { name: string; age: number };
type PersonKeys = keyof Person; // "name" | "age"

function getProperty(obj: Person, key: keyof Person) {
  return obj[key];
}

const p = { name: "John", age: 30 };
console.log(getProperty(p, "name")); // John
