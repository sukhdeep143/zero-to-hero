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
