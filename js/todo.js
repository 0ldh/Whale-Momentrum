const importTodo = () => {
    const todoForm = document.getElementById("todo-form"); // todo 할 일 작성 폼 선택
    const toDoInput = todoForm.querySelector("input"); // todo 할 일 입력창 선택
    const todoList = document.getElementById("todo-list"); // todo 할 일 목록 선택

    const selectAllbtn = document.querySelector(".selectAllbtn");
    const deleteBtn = document.querySelector(".deleteBtn");

    let todos = [];
    const todoKey = "todos"

    // * 할 일 목록에 할 일 추가 함수
    const deleteTodo = (event) => {
        const li = event.target.parentElement;
        li.className = "spanout"
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

    const handleSelectAll = (e) => {
        const checkbox = document.querySelectorAll("li > input");
        const span = document.querySelectorAll("li > span")
        console.log(checkbox);
        console.log(span);
        if (!selectBool) { //* let selectBool = false;
            checkbox.forEach(v => {
                v.checked = true;
            });
            todos.forEach(e => {
                e.bool = true;
            });
            span.forEach(e => {
                e.className = "underLine"
            })
            selectAllbtn.value = "선택해제";
        } else {
            checkbox.forEach(v => {
                v.checked = false;
            });
            todos.forEach(e => {
                e.bool = false;
            });
            span.forEach(e => {
                e.className = ""
            })
            selectAllbtn.value = "전체선택";
        }
        saveToDos();
        selectBool = !selectBool;

    }
    const handleDelete = () => {
        const checkbox = document.querySelectorAll("li > input");
        console.log(checkbox);
        checkbox.forEach((e) => {
            if (e.checked) {
                const li = e.parentElement
                li.className = "spanout"
                setTimeout(() => {
                    li.remove();
                    console.log(li.className)
                    todos = todos.filter((toDo) => toDo.id !== Number(li.id));
                    saveToDos();
                }, 800);
            } 
        })
    }

    const patinTodo = (newTodo) => {
        const li = document.createElement("li");
        li.id = newTodo.id;

        const span = document.createElement("span");
        span.innerText = newTodo.text;

        const btnDiv = document.createElement("div");
        btnDiv.className = "xBtn"

        const btn = document.createElement("a");
        btn.innerText = "❌";

        btnDiv.appendChild(btn);

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = newTodo.bool;
        console.log(typeof newTodo.bool)
        if (newTodo.bool) {
            span.className = "underLine";
        } else {
            span.className = "";
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
        li.appendChild(btnDiv);
        todoList.appendChild(li);

        btn.addEventListener("click", deleteTodo);
        checkbox.addEventListener("click", updateTodo);
        checkbox.addEventListener("click", underLine);
        li.addEventListener("mouseenter", ()=> {
            console.log("마우스 들어옴");
            btnDiv.style.display = "block";
        })
        li.addEventListener("mouseleave", ()=> {
            btnDiv.style.display = "none";
        })

    }

    // * form 태그 submit 시 새로고침기능 제어
    const handleToDoSubmit = (event) => {
        event.preventDefault();
        const newTodo = toDoInput.value;
        if (newTodo === "") {
            slideDiv.className = "warningMsg";
            toDoInput.className = "warningPh"
            todoForm.style.boxShadow = "inset 0 0 0 1.5px #ff003e, 0 -10px 10px #fff";
            setTimeout(() => {
                slideDiv.className = ""
            }, 1000);
        } else {
            toDoInput.value = "";
            todoForm.style.boxShadow = "inset 0 0 0 1.5px #05c3a7, 0 -10px 10px transparent";
            const objectTodo = {
                id: Date.now(),
                text: newTodo,
                bool: false
            }
            todos.push(objectTodo);
            patinTodo(objectTodo);
            saveToDos();
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
    deleteBtn.addEventListener("click", handleDelete);
}