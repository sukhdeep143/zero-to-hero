let age: number = 22;
let Name: string = "Sukhdeep";
let areYouStrong: boolean = true;

function greet(Name: string ): string {return "hello, " + Name};

if (age < 50)
    age +=10;
console.log(age);



// let number = [1,2,3,"5"]
// let number: numbers[] = [1,2,3,4]
let number: number[] = [1,2,3,4];
let powers: string[] = ["fire", "earth", "space", "light", "air"];

let user: [number, string] = [1 ,"sukhdeep"];


const enum Size {Small= 10, Medium, Large= 100};
let mySize: Size = Size.Medium;
console.log(mySize);


function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10,20));





// Objects 

let student: {
    id: number,
    age: number,
    name: string
} = {id : 1, age : 22, name : "Sukhdeep"}

console.log(student);
