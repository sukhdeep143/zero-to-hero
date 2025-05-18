const user = {
  name: "Sukhdeep",
  greet: function () {
    const arrow = () => {
      console.log("Hello, " + this.name);
    };
    arrow();
  },
};

user.greet(); // Output: Hello, Sukhdeep
