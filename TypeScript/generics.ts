// My Function
function addNums<T extends number>(num1: T, num2: T): number {
  return num1 + num2;
}

const value = addNums(10, 5);
console.log(value); // 15

// Example 1: Basic Generic Function
function identity<T>(value: T): T {
  return value;
}

// Usage
const numberIdentity = identity(5); // Type: number
const stringIdentity = identity("Hello"); // Type: string

// Example 2: Generic Constraints
function logLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}

// Usage
logLength("Hello"); // 5
logLength([1, 2, 3]); // 3
logLength({ length: 10, name: "Item" }); // 10

// Example 3: Multiple Type Parameters
function swap<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}

// Usage
const result = swap("Hello", 42); // Type: [number, string]
console.log(result); //[ 42, 'Hello' ]

// Example 4: Generic Interfaces and Classes
interface Pair<T, U> {
  first: T;
  second: U;
}

const numberStringPair: Pair<number, string> = { first: 1, second: "One" };

// Example 5: Using Generics with Utility Types
function freeze<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

// Usage
const person = { name: "Alice", age: 30 };
const frozenPerson = freeze(person);

// frozenPerson.age = 31; // Error: Cannot assign to 'age' because it is a read-only property

// Example 6: Generics with Type Aliases
type KeyValue<K, V> = {
  key: K;
  value: V;
};

const item: KeyValue<string, number> = {
  key: "id",
  value: 123,
};

// Example 7: Generic Utility Functions with Constraints
function merge<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b };
}

// Usage
const merged = merge({ name: "Alice" }, { age: 30 }); // Type: { name: string; age: number }
