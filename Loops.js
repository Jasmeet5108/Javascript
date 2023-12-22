console.log("I am a tutorial on loops.");

let i = 0;
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let obj = {
    name: "Jasmeet Singh",
    role: "Developer",
    company:"Reliance corp"
}

for (const key in obj) {
        console.log(key)
}

for (const char of "Jasmeet") {
    console.log(char);
}

let i1 = 0;
while (i1 < 6) {
    console.log(i1);
    i1 += 1;
}

let i2 = 0;
do {
    console.log(i2);
    i2++;
} while (i2 < 6);