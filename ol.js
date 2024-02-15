const li = document.querySelectorAll("li");
li.forEach((el) => {
  el.addEventListener("click", (e) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.color = `#${randomColor}`;
  });
});
