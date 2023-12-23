let btn = document.getElementById("btn");
let box = document.querySelector(".box");

// Mouse Click Events

btn.addEventListener("click", () => {
    box.innerHTML = "Changed";
})

btn.addEventListener("dblclick", () => {
    box.innerHTML = "Changed";
})

btn.addEventListener("contextmenu", () => {
    alert("Don't hack us by Right click please");
})

btn.addEventListener("keydown", (e) => {
    console.log(e.code, e.keyCode);
})