//  Interface
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "John",
  age: 25,
};

interface Admin extends User {
  role: string;
}

// Type
type Product = {
  id: number;
  name: string;
};

type ID = number | string;
