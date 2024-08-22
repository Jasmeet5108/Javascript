console.log("I am a tutorial on loops.");

// for loop
let i = 0;
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let obj = {
    name: "Jasmeet Singh",
    role: "Developer",
    company: "Reliance corp"
}

// for in loop
for (const key in obj) {
    console.log(key)
}

// for of loop
for (const char of "Jasmeet") {
    console.log(char);
}

// while loop
let i1 = 0;
while (i1 < 6) {
    console.log(i1);
    i1 += 1;
}

// do while loop
let i2 = 0;
do {
    console.log(i2);
    i2++;
} while (i2 < 6);