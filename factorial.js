// Calculating the Factorial

// Using For Loop

let fact1 = 1;

for (let i = 5; i >= 1; i--) {
    fact1 *= i;
}

console.log(`The factorial is ${fact1}`);


// Using Reduce() method

let fact2 = [5, 4, 3, 2, 1];

let new_fact = fact2.reduce((a, b) => {
    return a * b;
});

console.log(new_fact);
