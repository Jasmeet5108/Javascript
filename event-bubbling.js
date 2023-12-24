let child = document.querySelector(".child");
child.addEventListener("click", (e) => {
    e.stopPropagation() // Only shows child and stops propagation.
    alert("Child was clicked");
});

let childCont = document.querySelector(".childContainer");
childCont.addEventListener("click", (e) => {
    e.stopPropagation() // Only shows child container and stops propagation.
    alert("Child container was clicked");
});

let cont = document.querySelector(".container");
cont.addEventListener("click", (e) => {
    // e.stopPropagation()
    alert("Container was clicked");
});