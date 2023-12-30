const parent = (n) => {
    const num = n;
    return function (num) {
        return num;
    }
}

console.log(parent(10));

// [Function (anonymous)]