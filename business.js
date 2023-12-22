// Business Name Generator

/*

Adjectives:

crazy
amazing
fire


Shop name:

Engine
garments
foods


Another word:

bros
limited
hub

*/

let adj1 = "crazy";
let adj2 = "amazing";
let adj3 = "fire";

let adj4 = "Engine";
let adj5 = "garments";
let adj6 = "foods";

let adj7 = "bros";
let adj8 = "Limited";
let adj9 = "hub";

let randNo = Math.ceil(Math.random() * 10);
console.log(randNo);

if (randNo >= 0 && randNo <= 3) {
    console.log(`${adj1} ${adj4} ${adj7}`);
}
else if (randNo >= 4 && randNo <= 7) {
    console.log(`${adj2} ${adj5} ${adj8}`);
}
else if (randNo >= 8 && randNo <= 10) {
    console.log(`${adj3} ${adj6} ${adj9}`);
}