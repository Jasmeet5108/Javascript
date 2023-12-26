// Promise settle means resolve or reject

// resolve means promise has settled successfully

// reject means promise has not settled successfully


async function postData() {
    // Posting data to the server

    let bodyData = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }

    let options = {
        method: 'POST',
        body: JSON.stringify(bodyData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }

    let url = 'https://jsonplaceholder.typicode.com/posts';

    let x = await fetch(url, options);
    let data = await x.json();
    return data;

}

async function main() {

    console.log("Loading Modules");

    console.log("Do something");

    console.log("Load data");

    let data = await postData();

    console.log(data);

    console.log("Process data");

    console.log("Task 2");

}

main();