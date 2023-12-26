console.log("Hello Jasmeet");

let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor = "red";

// select all boxes using forEach() loop
document.querySelectorAll(".box").forEach((e) => {
    return e.style.backgroundColor = "blue";
})

// .map() is an array method. It doesn't work on HTML collections. Convert the HTML collection into array using the following method and then proceed
Array.from(document.querySelectorAll(".box")).map((e) => {
    return e.style.backgroundColor = "blue";
});