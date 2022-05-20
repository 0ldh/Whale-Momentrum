const importTodo = () => {
   const todoForm = document.getElementById("todo-form"); // todo 할 일 작성 폼 선택
   const toDoInput = todoForm.querySelector("input"); // todo 할 일 입력창 선택
   const todoList = document.getElementById("todo-list"); // todo 할 일 목록 선ㅌ택
   let todos = [];
   const todoKey = "todos"

   
   // * 할 일 목록에 할 일 추가 함수
   const deleteTodo = (event) => {
      const li = event.target.parentElement;
      li.remove();
      todos = todos.filter((toDo) => toDo.id !== Number(li.id));
      saveToDos();
   }

   const updateTodo = (event) => {
      const li = event.target.parentElement;

      for (let i = 0; i < todos.length; i++){
         if(li.id == todos[i].id){
            if(todos[i].bool == true){
               todos[i].bool = false
            } else {
               todos[i].bool = true
            }
         } 
      }
      console.log(todos);
      saveToDos();
      // 얘가 local storage에 있는 얘 object 형태
   }
   
   const saveToDos = () => {
      localStorage.setItem("todos",JSON.stringify(todos));
   };
   
   const patinTodo = (newTodo) =>{
      const li = document.createElement("li");
      li.id = newTodo.id;

      const span = document.createElement("span");
      span.innerText = newTodo.text;

      const btn = document.createElement("a");
      btn.innerText = "❌";

      const checkbox = document.createElement("input")
      checkbox.type = "checkbox"
      checkbox.checked = newTodo.bool;
      if(checkbox.checked){
         span.style.textDecoration = "line-through";
      } 
      const 밑줄긋기 = ()=> {
         const span = li.childNodes[1]
         if(checkbox.checked) {
         span.style.textDecoration = "line-through";
         }
         else { 
         span.style.textDecoration = "";
         }
         ;
      }

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(btn);
      todoList.appendChild(li);
   
      btn.addEventListener("click",deleteTodo);
      checkbox.addEventListener("click", updateTodo)
      checkbox.addEventListener("click", 밑줄긋기)
      
   }
   
   // * form 태그 submit 시 새로고침기능 제어
   const handleToDoSubmit = (event) => {
      event.preventDefault();
      const newTodo = toDoInput.value;
      toDoInput.value = "";
      const objectTodo = {
         id : Date.now(),
         text : newTodo,
         bool : false
      }
      todos.push(objectTodo);
      patinTodo(objectTodo);
      saveToDos();
   }

   const savedToDos = localStorage.getItem(todoKey);
   
   if(savedToDos !== null) {
      const parseTodos = JSON.parse(savedToDos);
      todos = parseTodos;
      parseTodos.forEach(patinTodo);
   }

   todoForm.addEventListener("submit", handleToDoSubmit);
   
}