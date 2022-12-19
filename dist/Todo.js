import { slide } from './Slide';
const importTodo = () => {
    const todoForm = document.getElementById('todo-form');
    const toDoInput = todoForm === null || todoForm === void 0 ? void 0 : todoForm.querySelector('input');
    const todoList = document.getElementById('todo-list');
    const selectAllbtn = document.querySelector('.selectAllbtn');
    const deleteBtn = document.querySelector('.deleteBtn');
    let todos = [];
    const todoKey = 'todos';
    const saveToDos = () => {
        localStorage.setItem(todoKey, JSON.stringify(todos));
    };
    const handleSelectAll = () => {
        const checkbox = document.querySelectorAll('li > input');
        const span = document.querySelectorAll('li > span');
        if (!slide.selectBool) {
            checkbox.forEach((v) => {
                const todoCheckBox = v;
                todoCheckBox.checked = true;
            });
            todos.forEach((e) => {
                e.bool = true;
            });
            span.forEach((e) => {
                e.className = 'underLine';
            });
            selectAllbtn.value = '선택해제';
        }
        else {
            checkbox.forEach((v) => {
                const todoCheckBox = v;
                todoCheckBox.checked = true;
            });
            todos.forEach((e) => {
                e.bool = false;
            });
            span.forEach((e) => {
                e.className = '';
            });
            selectAllbtn.value = '전체선택';
        }
        saveToDos();
        // eslint-disable-next-line no-import-assign
        slide.selectBool = !slide.selectBool;
    };
    const handleDelete = () => {
        const checkbox = document.querySelectorAll('li > input');
        checkbox.forEach((e) => {
            const todoCheckBox = e;
            if (todoCheckBox.checked) {
                const li = todoCheckBox.parentElement;
                li.className = 'spanout';
                setTimeout(() => {
                    li.remove();
                    todos = todos.filter((toDo) => toDo.id !== Number(li.id));
                    saveToDos();
                }, 800);
            }
        });
    };
    const patinTodo = (newTodo) => {
        const li = document.createElement('li');
        li.id = String(newTodo.id);
        const span = document.createElement('span');
        span.innerText = newTodo.text;
        const btnDiv = document.createElement('div');
        btnDiv.className = 'xBtn';
        const btn = document.createElement('a');
        btn.innerText = '❌';
        btnDiv.appendChild(btn);
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = newTodo.bool;
        if (newTodo.bool) {
            span.className = 'underLine';
        }
        else {
            span.className = '';
        }
        const underLine = () => {
            // eslint-disable-next-line no-shadow
            const span = li.childNodes[1];
            if (checkbox.checked) {
                span.className = 'underLine';
            }
            else {
                span.className = '';
            }
        };
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(btnDiv);
        todoList.appendChild(li);
        btn.addEventListener('click', (ev) => {
            const eventTarget = ev.target;
            const liChild = eventTarget.parentElement;
            const liDel = liChild.parentElement;
            liDel.className = 'spanout';
            setTimeout(() => {
                liDel.remove();
                todos = todos.filter((toDo) => toDo.id !== Number(liDel.id));
                saveToDos();
            }, 800);
        });
        checkbox.addEventListener('click', (ev) => {
            const eventTarget = ev.target;
            const liChild = eventTarget.parentElement;
            const liUpdate = liChild.parentElement;
            todos.forEach((e) => {
                if (e.id === Number(liUpdate.id)) {
                    if (e.bool === true) {
                        e.bool = false;
                    }
                    else {
                        e.bool = true;
                    }
                }
            });
            saveToDos();
        });
        checkbox.addEventListener('click', underLine);
        li.addEventListener('mouseenter', () => {
            console.log('마우스 들어옴');
            btnDiv.style.display = 'block';
        });
        li.addEventListener('mouseleave', () => {
            btnDiv.style.display = 'none';
        });
    };
    const handleToDoSubmit = (event) => {
        event.preventDefault();
        const newTodo = toDoInput.value;
        if (newTodo === '') {
            slide.slideDiv.className = 'warningMsg';
            todoForm.style.boxShadow = 'inset 0 0 0 1.5px #ff003e, 0 -10px 10px #fff';
            setTimeout(() => {
                slide.slideDiv.className = '';
            }, 1000);
        }
        else {
            toDoInput.value = '';
            todoForm.style.boxShadow = 'inset 0 0 0 1.5px #05c3a7, 0 -10px 10px transparent';
            const objectTodo = {
                id: Date.now(),
                text: newTodo,
                bool: false,
            };
            todos.push(objectTodo);
            patinTodo(objectTodo);
            saveToDos();
        }
    };
    const savedToDos = localStorage.getItem(todoKey);
    if (savedToDos !== null) {
        const parseTodos = JSON.parse(savedToDos);
        todos = parseTodos;
        parseTodos.forEach(patinTodo);
    }
    todoForm.addEventListener('submit', handleToDoSubmit);
    selectAllbtn.addEventListener('click', handleSelectAll);
    deleteBtn.addEventListener('click', handleDelete);
};
