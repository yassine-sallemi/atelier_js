const nameInput = document.getElementById("name-input");
const contentInput = document.getElementById("content-input");
const addTodo = document.getElementById("todo-btn");
const todoList = document.getElementById("todo-list");

addTodo.addEventListener("click", (e) => {
  e.preventDefault();
  if (nameInput.value.trim() === "" || contentInput.value.trim() === "") {
    alert("Please fill in both fields.");
    return;
  }
  const html = `
    <li class="list-group-item">
      <div class="todo-item">
        <span><strong>${
          nameInput.value[0].toUpperCase() + nameInput.value.substring(1)
        }:</strong> ${contentInput.value}</span>
        <button class="btn btn-danger"><i class="fa fa-trash"></i></button>
      </div>
    </li>`;
  todoList.insertAdjacentHTML("beforeend", html);
  const deleteBtn = todoList.lastChild.querySelector("button");
  deleteBtn.addEventListener("click", (e) => {
    deleteBtn.parentElement.parentElement.remove();
  });
  nameInput.value = "";
  contentInput.value = "";
});
