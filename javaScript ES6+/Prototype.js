function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, I’m ${this.name}`);
};

const user = new Person("Sukhdeep");
user.greet(); // Hello, I’m Sukhdeep
