// Dynamic Website => CodeWithHarry Video 73 of Sigma Web Dev Course 2023-24

let container = document.querySelector(".container");

function createCard(ImgSrc, heading, channelName, numOfViews, duration) {
    ihtml = `<div class="card">
    <div class="left">
    <img class="thumbnail" src=${ImgSrc} width="200" alt="">
    </div>

    <div class="right">
        <p class="bold">${heading}</p>
        <div class="down-right">
            <p>${channelName}</p>
            <p>${numOfViews}k views</p>
            <p>${duration} months</p>
        </div>
    </div>`;

    container.innerHTML = ihtml
}

createCard("Images/Card-Img.webp", "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 727, 2);