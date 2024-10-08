// Promises
const prom1 = new Promise((resolve, reject) => {
    let randNum = Math.random()
    if (randNum > 0.5) {
        resolve("First Promise Resolved")
    }
    else {
        reject("First Promise Rejected")
    }
})

const prom2 = new Promise((resolve, reject) => {
    let randNum = Math.random()
    if (randNum > 0.5) {
        resolve("Second Promise Resolved")
    }
    else {
        reject("Second Promise Rejected")
    }
})

// prom1.then((success) => console.log(`Hogya ${success}`)).catch((err) => console.log(`Nahi hua ${err}`))
let prom3 = Promise.all([prom1, prom2])
prom3.then(success => console.log(`All => ${success}`)).catch(err => console.log(`Error => ${err}`))

// IIFE => Immediately Invoked Function Expression

async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}

(async function main() {
    let a = await sleep();
    console.log(a);
    let b = await sleep();
    console.log(b);
})();


// Destructuring

(async function main() {
    let [x, y] = [1, 5, 7];
    console.log(x, y);
})();

let obj = {
    a: 1,
    b: 2,
    c: 3
}

let { a, b } = obj;

console.log(a, b);


// Spread Operator

(async function main() {
    let [x, y, ...rest] = [1, 5, 7, 9, 11, 13];
    console.log(x, y, rest);
})();


// Spread Syntax

function sum(a, b, c) {
    return a + b + c;
}

let arr = [1, 4, 6];
console.log(sum(...arr));
// console.log(arr[0] + arr[1] + arr[2]);


// Array into Object 

const arr1 = [1, 2, 3];
const obj1 = { ...arr1 };
console.log(obj1);


// Hoisting => only using var keyword

try {
    console.log(a1);
    var a1 = 34;      // Undefined
    // let a1 = 34;   // Error
}
catch (err) {
    console.log(err);
}

hello("Jasmeet");

function hello(name) {
    console.log(`Hello ${name}`);
}