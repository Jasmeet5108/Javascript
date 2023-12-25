const callbackFunc = (arg) => {
    // console.log(`Hello ${arg}`);
    return `Hello ${arg}`;
}

function greet(callback) {
    setTimeout(() => {
        console.log(callback);
    }, 2000);
}

greet(callbackFunc("Jasmeet"));

// Output - Hello Jasmeet