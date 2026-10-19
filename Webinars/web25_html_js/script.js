const title = document.getElementById("title");
console.log(title);

const title1 = document.querySelector("#title");
console.log(title1);

console.log(title1 === title);


const classElem = document.querySelector(".description");
console.log(classElem);

console.log(title1 === document.querySelector("h1"));

title.textContent = "We changed the title!";

console.log(document);