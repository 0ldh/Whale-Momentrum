const importTodo = () => {
    const todoForm = document.getElementById("todo-form"); // todo 할 일 작성 폼 선택
    const toDoInput = todoForm.querySelector("input"); // todo 할 일 입력창 선택
    const todoList = document.getElementById("todo-list"); // todo 할 일 목록 선택

    const selectAllbtn = document.querySelector(".selectAllbtn");
    let todos = [];
    const todoKey = "todos"

    // * 할 일 목록에 할 일 추가 함수
    const deleteTodo = (event) => {
        const li = event.target.parentElement;
        li
            .querySelector("input")
            .className = "slideout2"
        setTimeout(() => {
            li.remove();
            console.log(li.className)
            todos = todos.filter((toDo) => toDo.id !== Number(li.id));
            saveToDos();
        }, 800);

    }

    const updateTodo = (event) => {
        const li = event.target.parentElement;

        todos.forEach(e => {
            if (e.id == li.id) {
                if (e.bool == true) {
                    e.bool = false;
                } else {
                    e.bool = true;
                }
            }
        });
        saveToDos();
        // 얘가 local storage에 있는 얘 object 형태
    }

    const saveToDos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const patinTodo = (newTodo) => {
        const li = document.createElement("li");
        li.id = newTodo.id;

        const span = document.createElement("span");
        span.innerText = newTodo.text;

        const btn = document.createElement("a");
        btn.innerText = "❌";

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = newTodo.bool;
        if (checkbox.checked) {
            span.className = "underLine";
        }
        const underLine = () => {
            const span = li.childNodes[1]
            if (checkbox.checked) {
                span.className = "underLine";
            } else {
                span.className = "";
            };
        }

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(btn);
        todoList.appendChild(li);

        btn.addEventListener("click", deleteTodo);
        checkbox.addEventListener("click", updateTodo)
        checkbox.addEventListener("click", underLine)

    }

    // * form 태그 submit 시 새로고침기능 제어
    const handleToDoSubmit = (event) => {
        event.preventDefault();
        const newTodo = toDoInput.value;
        toDoInput.value = "";
        const objectTodo = {
            id: Date.now(),
            text: newTodo,
            bool: false
        }
        todos.push(objectTodo);
        patinTodo(objectTodo);
        saveToDos();
    }

    const handleSelectAll = (e) => {
        const checkbox = document.querySelectorAll("li > input");
        const span = document.querySelectorAll("li > span")
        if (!selectBool) {
            checkbox.forEach(v => {
                v.checked = true;
            });
            todos.forEach(e => {
                e.bool = "true";
            });
            span.forEach(e => {
                e.className = "underLine"
            })
            saveToDos();
            selectBool = !selectBool;
        } else {
            checkbox.forEach(v => {
                v.checked = false;
            });
            todos.forEach(e => {
                e.bool = "false";
            });
            span.forEach(e => {
                e.className = ""
            })
            saveToDos();
            selectBool = !selectBool;
        }
    }

    const savedToDos = localStorage.getItem(todoKey);

    if (savedToDos !== null) {
        const parseTodos = JSON.parse(savedToDos);
        todos = parseTodos;
        parseTodos.forEach(patinTodo);
    }

    todoForm.addEventListener("submit", handleToDoSubmit);
    selectAllbtn.addEventListener("click", handleSelectAll);
}