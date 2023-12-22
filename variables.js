let a = 45;
let b = 33;

{
    let a = 333;  // Variable declared with latest var keyword becomes global.
    console.log("inner a = " + a);
}

console.log("outer a = " + a);

let arr = ["Jasmeet, Karan, Shubham"];

let obj = {
    name: "Jasmeet",
    age: 21,
    language: "Javascript",
}

console.log(`The Object consists some things. ${obj.name}`);


let mapped_Arr = arr.map((a) => {
    console.log(`The names of the boys are ${a}`);
})

let x = "Jasmeet";
let y = 22;
let z = 3.55;
let p = true;
let q = undefined;
let n = null;

console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof n);