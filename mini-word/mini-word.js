const title = document.querySelector("h1");
const colorInput = document.getElementById("color-input");
const numberInput = document.getElementById("number-input");
const fontInput = document.getElementById("font-input");

title.style.fontSize = "32px";

colorInput.addEventListener("input", (e) => {
  title.style.color = e.target.value;
});

numberInput.addEventListener("input", (e) => {
  title.style.fontSize = `${e.target.value}px`;
});

fontInput.addEventListener("input", (e) => {
  title.style.fontFamily = e.target.value;
});
