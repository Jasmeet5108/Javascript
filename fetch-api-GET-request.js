// Promise settle means resolve or reject

// resolve means promise has settled successfully

// reject means promise has not settled successfully


async function getData() {
    // Simulate getting data from server.

    let url = 'https://jsonplaceholder.typicode.com/posts';

    let x = await fetch(url);

    let data = await x.json();

    return data;

}

async function main() {

    console.log("Loading Modules");

    console.log("Do something");

    console.log("Load data");

    let data = await getData();

    console.log(data);

    console.log("Process data");

    console.log("Task 2");

}

main();