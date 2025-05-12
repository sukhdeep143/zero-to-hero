function identity<T>(value: T): T {
  return value;
}

const result = identity<string>("hello"); // Type is string


