// Document.createElement()
// Node.appendChild()
// Document.createTextNode()
// document.getElementsByTagName()
// document.getElementById()

let spaceX = document.getElementById("space-X");
console.log(spaceX);
console.log(spaceX.src);
console.log(spaceX.alt);

let link = document.querySelector("a");
console.log(link);
link.textContent = "Mozilla Developer Network";

// Example-1
// let's create a new paragraph using Document.createElement()
// give it some text content in the same way as before:

let parent = document.querySelector("section");
let para = document.createElement("p");
para.textContent = "this is new Tag of javascript";

// setAttribute
para.setAttribute("name", "para");

para.className = "para";
para.id = "newEle";
para.style.backgroundColor = "red";
para.style.color = "white";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

parent.appendChild(para);
