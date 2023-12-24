// Asychronous Programming

console.log("Jasmeet is a hacker");
console.log("Karan is a hecker");

setTimeout(() => {
    console.log("I am inside settimeout");
}, 0);

setTimeout(() => {
    console.log("I am also inside settimeout");
}, 0);

console.log("The End");


// Callback Function

const callback = (args) => {
  console.log(args);
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Jasmeet");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);


// Promises - Promise of code execution

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done");
            resolve("Jasmeet");
        }, 3000);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you as well");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done also");
            resolve("Jasmeet again");
        }, 1000);
    }
})


prom1.then((e) => {
    console.log(e); // console.log with value with each it has resolved.
}).catch((err) => {
    console.log(err); // catch the error
}).finally(console.log("Finally will always execute")); //Finally will always execute


let p3 = Promise.all([prom1, prom2]);
p3.then((e) => {
    console.log(e);
}).catch((err) => {
    console.log(err);
});