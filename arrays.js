let arr = ["Jasmeet", 21, true, 5.6, null];

// Array is mutable => Can be changed. Strings are immutable => Cannot be changed.

console.log(arr);
console.log(arr.length);
console.log(arr[0]);

arr[2] = 'Harsh';
console.log(arr);

console.log(arr.toString());  // Converts to String
console.log(arr.join(" and "));

console.log(arr.pop());
console.log(arr);

console.log(arr.push(300));
console.log(arr);

console.log(arr.shift());
console.log(arr);

console.log(arr.unshift("Rahul"));
console.log(arr);


// Shift Pop ka Bhai & Unshift Push ka Bhai 

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];


// Doesn't Change Original Array.
console.log(a1.concat(a2, a3));
console.log(a1);


// Changes Original Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.splice(1, 2, 999, 888);  //.splice(Index, Number of items to be Deleted, to be Added)
console.log(numbers);
