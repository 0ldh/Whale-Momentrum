const importTodo = () => {
    const todoForm = document.getElementById("todo-form"); // 할 일 작성 폼 선택
    const toDoInput = todoForm.querySelector("input"); // 할 일 입력창 선택
    const todoList = document.getElementById("todo-list"); // 할 일 목록 선택

    const selectAllbtn = document.querySelector(".selectAllbtn"); // 전체선택 태그 선택
    const deleteBtn = document.querySelector(".deleteBtn"); // 선택삭제 버튼 태그 선택

    let todos = []; // 할 일 목록, localStorage 값을 담아서 js로 다루기 위한 변수
    const todoKey = "todos" // localStorage에 있는 todos Key값 

    //* toDos 저장 함수
    const saveToDos = () => { 
        localStorage.setItem(todoKey, JSON.stringify(todos)); // 
    };

    // * `X버튼`클릭 시 할 일 목록 삭제 함수
    const deleteTodo = (event) => { // 
        const li = event.target.parentElement.parentElement; // 클릭한 `X`버튼의 부모요소인 div의 부모요소 li태그 선택
        li.className = "spanout" // 오른쪽으로 밀려서 fadeOut 애니메이션 용 class 할당
        setTimeout(() => { // 애니메이션 완료 후 실행하기 위해 사용
            li.remove(); // 할 일 목록 (li) 태그 제거
            todos = todos.filter((toDo) => toDo.id !== Number(li.id)); // 제거 후 할 일 목록 갱신
            saveToDos(); // 갱신 후 localStorage 저장
        }, 800); // 0.8초 딜레이

    }
    //* checkBox 체크 바로 반영해서 localStorage에 저장하는 함수
    const updateTodo = (event) => {
        const li = event.target.parentElement; // checkBox 상위 요소인 li태그 선택
        todos.forEach(e => { // 할 일 목록 요소들 하나씩 매개변수로 사용
            if (e.id == li.id) { // li태그의 아이디는 할 일 목록들의 키값과 동일 해야함
                if (e.bool == true) { // 체크상태가 이미 true라면 
                    e.bool = false; // false로 변경
                } else {
                    e.bool = true; // 체크상태가 false라면 true로 변경
                }
            }
        });
        saveToDos(); // 최종적으로 localStorage에 저장
    }


    //* 체크박스 전체선택 함수
    const handleSelectAll = (e) => {
        const checkbox = document.querySelectorAll("li > input"); // 체크박스 태그 전체 선택 변수 (배열 형태)
        const span = document.querySelectorAll("li > span") // 할 일 목록 태그 선택
        console.log(checkbox);
        console.log(span);
        if (!selectBool) { //* let selectBool = false; // 선택상태가 false(미선택) 상태라면 
            checkbox.forEach(v => { // check박스를 선택된 상태(true)로 바꾼다
                v.checked = true;
            });
            todos.forEach(e => { // 할 일 목록의 체크박스 상태 업데이트를 위해 true로 변경
                e.bool = true;
            });
            span.forEach(e => { // span 태그에 선택된 상태이기 때문에 밑줄 추가
                e.className = "underLine"
            })
            selectAllbtn.value = "선택해제"; // 전체선택 버튼을 click했을 경우 버튼이름을 선택해제로 변경
        } else { // 전체선택된 상태일 시 실행
            checkbox.forEach(v => { 
                v.checked = false; // checkbox 선택해제 
            });
            todos.forEach(e => { 
                e.bool = false; //localStorage bool값 false로 변경
            });
            span.forEach(e => {
                e.className = "" // underline 클래스 제거를 위해서 클래스명 비워줌
            })
            selectAllbtn.value = "전체선택"; // 다시 전체선택 버튼으로 변경
        }
        saveToDos(); // 바꿔준 bool값 저장을 위해서 saveToDos 한번 더 실행
        selectBool = !selectBool;

    }
    //* 할 일 목록 제거 함수
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

//? fillter => 거름망, 
//? JSON.stringify(x) => x를 그대로 문자열화 (ex, ["3","4"] => "["+"3"+","+"4"+"]")