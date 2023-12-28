let a = parseInt(prompt("Enter first number: "));

let b = parseInt(prompt("Enter second number: "));

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed");
}

// Whenever we throw error, script stops executing.
// Since both the numbers are valid, It won't go inside if-else block.
// function stops executing after return. Finally executes even after return.

let sum = a + b;

function main() {

    try {
        console.log(`The sum is ${sum}`);
        return true;
    }

    catch (error) {
        console.log(`Error aa gya bhai - ${error}`);
        return false;
    }

    finally {
        console.log("Files are being closed and db connection is being closed.");
    }
}

let c = main()