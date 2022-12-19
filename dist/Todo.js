import { slide } from './Slide';
var importTodo = function () {
    var todoForm = document.getElementById('todo-form');
    var toDoInput = todoForm === null || todoForm === void 0 ? void 0 : todoForm.querySelector('input');
    var todoList = document.getElementById('todo-list');
    var selectAllbtn = document.querySelector('.selectAllbtn');
    var deleteBtn = document.querySelector('.deleteBtn');
    var todos = [];
    var todoKey = 'todos';
    var saveToDos = function () {
        localStorage.setItem(todoKey, JSON.stringify(todos));
    };
    var handleSelectAll = function () {
        var checkbox = document.querySelectorAll('li > input');
        var span = document.querySelectorAll('li > span');
        if (!slide.selectBool) {
            checkbox.forEach(function (v) {
                var todoCheckBox = v;
                todoCheckBox.checked = true;
            });
            todos.forEach(function (e) {
                e.bool = true;
            });
            span.forEach(function (e) {
                e.className = 'underLine';
            });
            selectAllbtn.value = '선택해제';
        }
        else {
            checkbox.forEach(function (v) {
                var todoCheckBox = v;
                todoCheckBox.checked = true;
            });
            todos.forEach(function (e) {
                e.bool = false;
            });
            span.forEach(function (e) {
                e.className = '';
            });
            selectAllbtn.value = '전체선택';
        }
        saveToDos();
        // eslint-disable-next-line no-import-assign
        slide.selectBool = !slide.selectBool;
    };
    var handleDelete = function () {
        var checkbox = document.querySelectorAll('li > input');
        checkbox.forEach(function (e) {
            var todoCheckBox = e;
            if (todoCheckBox.checked) {
                var li_1 = todoCheckBox.parentElement;
                li_1.className = 'spanout';
                setTimeout(function () {
                    li_1.remove();
                    todos = todos.filter(function (toDo) { return toDo.id !== Number(li_1.id); });
                    saveToDos();
                }, 800);
            }
        });
    };
    var patinTodo = function (newTodo) {
        var li = document.createElement('li');
        li.id = String(newTodo.id);
        var span = document.createElement('span');
        span.innerText = newTodo.text;
        var btnDiv = document.createElement('div');
        btnDiv.className = 'xBtn';
        var btn = document.createElement('a');
        btn.innerText = '❌';
        btnDiv.appendChild(btn);
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = newTodo.bool;
        if (newTodo.bool) {
            span.className = 'underLine';
        }
        else {
            span.className = '';
        }
        var underLine = function () {
            // eslint-disable-next-line no-shadow
            var span = li.childNodes[1];
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
        btn.addEventListener('click', function (ev) {
            var eventTarget = ev.target;
            var liChild = eventTarget.parentElement;
            var liDel = liChild.parentElement;
            liDel.className = 'spanout';
            setTimeout(function () {
                liDel.remove();
                todos = todos.filter(function (toDo) { return toDo.id !== Number(liDel.id); });
                saveToDos();
            }, 800);
        });
        checkbox.addEventListener('click', function (ev) {
            var eventTarget = ev.target;
            var liChild = eventTarget.parentElement;
            var liUpdate = liChild.parentElement;
            todos.forEach(function (e) {
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
        li.addEventListener('mouseenter', function () {
            console.log('마우스 들어옴');
            btnDiv.style.display = 'block';
        });
        li.addEventListener('mouseleave', function () {
            btnDiv.style.display = 'none';
        });
    };
    var handleToDoSubmit = function (event) {
        event.preventDefault();
        var newTodo = toDoInput.value;
        if (newTodo === '') {
            slide.slideDiv.className = 'warningMsg';
            todoForm.style.boxShadow = 'inset 0 0 0 1.5px #ff003e, 0 -10px 10px #fff';
            setTimeout(function () {
                slide.slideDiv.className = '';
            }, 1000);
        }
        else {
            toDoInput.value = '';
            todoForm.style.boxShadow = 'inset 0 0 0 1.5px #05c3a7, 0 -10px 10px transparent';
            var objectTodo = {
                id: Date.now(),
                text: newTodo,
                bool: false,
            };
            todos.push(objectTodo);
            patinTodo(objectTodo);
            saveToDos();
        }
    };
    var savedToDos = localStorage.getItem(todoKey);
    if (savedToDos !== null) {
        var parseTodos = JSON.parse(savedToDos);
        todos = parseTodos;
        parseTodos.forEach(patinTodo);
    }
    todoForm.addEventListener('submit', handleToDoSubmit);
    selectAllbtn.addEventListener('click', handleSelectAll);
    deleteBtn.addEventListener('click', handleDelete);
};
