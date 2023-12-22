// Looping Through Arrays

let a = [1, 2, 3, 4, 5, 15, 6, 67, 7, 58, 8];

// For Loop
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}

// ForEach Loop
a.forEach((value, index, array) => {
    console.log(value, index, array);
});

// For example => 1, 0, (11) [1, 2, 3, 4, 5, 15, 6, 67, 7, 58, 8];

let obj = {
    a: 1,
    b: 2,
    c: 3
}

// For in Loop
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}


// For of Loop
let aOf = [1, 2, 3, 4, 5];
for (const iterator of aOf) {
    console.log(iterator);
}


// Squared Values using For loop
let arr = [1, 3, 5, 7, 9, 11, 13];
let new_arr = [];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    new_arr.push(element ** 2);
}
console.log(new_arr);


// Map Method
// Squared Values using map method
let arr2 = [1, 3, 5, 7, 9, 11, 13];

let new_arr2 = arr2.map((e) => {      // Can also be used as map(e, index, array) 
    return e ** 2;
});

console.log(new_arr2);


// Filter Method
const greaterThanSeven = (e) => {
    if (e > 7) {
        return true
    }
    return false
}
console.log(arr2.filter(greaterThanSeven));


// Reduce Method
let red_arr = [1, 2, 3, 4, 5, 6];
const red = (a, b) => {
    return a + b;
}

console.log(red_arr.reduce(red));