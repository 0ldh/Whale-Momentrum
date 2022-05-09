const todoForm = document.getElementById("todo-form");
const toDoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const handleToDoSubmit = (event) => {
   event.preventDefault();
   const newTodo = toDoInput.value;
   toDoInput.value = "";
}

todoForm.addEventListener("submit", handleToDoSubmit)