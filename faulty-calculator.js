/* Create a faulty calculator using javaScript.
This calculator does 2 things:-

1. It takes two numbers as input from user.
2. It performs wrong operations as follows:-

+ --> -
* --> +
- --> /
/ --> *

It performs wrong operations 10% of the times. 
*/

// let check_num = Math.random() < 0.1;
// console.log(check_num);

// console.log(rand_num);

// let num1 = prompt("Enter first number: ");
// let num2 = prompt("Enter second number: ");
// let opr = prompt("Enter the oprression: ");


const checkFunc = (opr, num1, num2) => {
    let rand_num = Math.random();
    if (opr == "+") {
        if (rand_num < 0.1) {
            return num1 + num2;
        }
        else {
            return num1 - num2;
        }
    }
    else if (opr == "*") {
        if (rand_num < 0.1) {
            return num1 * num2;
        }
        else {
            return num1 + num2;
        }
    }
    else if (opr == "-") {
        if (rand_num < 0.1) {
            return num1 - num2;
        }
        else {
            return num1 / num2;
        }
    }
    else if (opr == "/") {
        if (rand_num < 0.1) {
            return num1 / num2;
        }
        else {
            return num1 * num2;
        }
    }
}

let result = checkFunc("+", 1, 2);
console.log(result);

