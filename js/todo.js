const todoForm = document.getElementById("todo-form"); // todo 할 일 작성 폼 선택
const toDoInput = todoForm.querySelector("input"); // todo 할 일 입력창 선택
const todoList = document.getElementById("todo-list"); // todo 할 일 목록 선ㅌ택

// * 할 일 목록에 할 일 추가 함수
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