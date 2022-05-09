const todoForm = document.getElementById("todo-form");
const toDoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const patinTodo = (newTodo) =>{
   const li = document.createElement("li");
   const span = document.createElement("span");
   li.appendChild(span);
   span.innerText = newTodo;
   todoList.appendChild(li);
} 

const handleToDoSubmit = (event) => {
   event.preventDefault();
   const newTodo = toDoInput.value;
   toDoInput.value = "";
   patinTodo(newTodo);
}



todoForm.addEventListener("submit", handleToDoSubmit)