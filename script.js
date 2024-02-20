//checking script is connected

const header = document.querySelector("h1");
const colorBtn = document.querySelector("button");

colorBtn.addEventListener("click",()=> {
    header.style.color = "blue"
});