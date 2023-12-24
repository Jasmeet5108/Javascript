document.querySelector(".container");
//<div class=​"container">​…​</div>​
document.querySelector(".box");
//<div class=​"box">​Hey I am a box​</div>​
document.querySelector(".container").innerHTML
//'\n        <div class="box">Hey I am a box</div>\n        <div class="box">Hey I am a box</div>\n    '
document.querySelector(".box").innerHTML;
//'Hey I am a box'
document.querySelector(".box").innerHTML = "Hey I am Jasmeet";
//'Hey I am Jasmeet'
document.querySelector(".container").outerHTML;
//'<div class="container" hidden="">\n        <div class="box">Hey I am a box</div>\n        <div class="box">Hey I am a box</div>\n    </div>'
document.querySelector(".box").outerHTML;
//'<div class="box">Hey I am a box</div>'
document.querySelector(".box").innerText;
//'Hey I am a box'
document.querySelector(".container").innerText;
//'Hey I am a box\nHey I am a box'
document.querySelector(".box").textContent;
//'Hey I am a box'
document.querySelector(".container").textContent;
//'\n        Hey I am a box\n        Hey I am a box\n    '
document.querySelector(".container").hidden;
//false
document.querySelector(".container").hidden = true;
//true
document.querySelector(".box").hasAttribute("style");
//true
document.querySelector(".box").getAttribute("style");
//'display: flex;'
document.querySelector(".box").setAttribute("style", "display:inline");
//undefined
document.querySelector(".box").attributes;
//NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}
document.querySelector(".box").removeAttribute("style");
//undefined
document.designMode = "on";
//'on'
document.querySelector(".box").dataset;
//DOMStringMap {createdby: 'Jasmeet', conceptby: 'Karan'}
let div = document.createElement("div");
//undefined
div.setAttribute("class", "created");
//undefined
document.querySelector(".container").append(div);
//undefined
document.querySelector(".box").remove();
//undefined
document.querySelector(".box").remove();
//undefined
document.querySelector(".container").classList.remove("jasmeet");
//undefined
document.querySelector(".container").classList.toggle("red");
//true
document.querySelector(".container").classList.add("jasmeet");
//undefined
document.querySelector(".container").className;
//'container bg-green red jasmeet'
document.querySelector(".container").classList;
//DOMTokenList(4) ['container', 'bg-green', 'red', 'jasmeet', value: 'container bg-green red jasmeet']
document.querySelector(".box").remove();
//undefined
let div1 = document.createElement("div");
div1.innerHTML = "Hey I have been inserted by Jasmeet";
div1.setAttribute("class", "created");
document.querySelector(".container").append(div1);  // .append gets appended at last
document.querySelector(".container").before(div1);  // .before gets appended at first

let cont = document.querySelector(".container");
cont.insertAdjacentHTML("beforebegin", "<b>Before Begin</b>");
cont.insertAdjacentHTML("afterbegin", "<b>After Begin</b>");
cont.insertAdjacentHTML("beforeend", "<b>Before End</b>");
cont.insertAdjacentHTML("afterend", "<b>After End</b>");
/*Before Begin
After Begin
Hey I am a box
Hey I am a box
Before End
After End*/