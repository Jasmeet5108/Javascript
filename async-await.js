async function getData() {
    // Simulate getting data from server.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
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

// data.then((v) => {
//     console.log(data);

//     console.log("Process data");

//     console.log("Task 2");
// });