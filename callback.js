const greet = (callback) => {
    console.log(`Hello ${callback}`);
}

const naam = (name) => {
    return name;
}

greet(naam("Jasmeet"))
