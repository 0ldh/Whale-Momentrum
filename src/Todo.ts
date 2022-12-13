interface Todos {
  id: number;
  bool: boolean;

}

const importTodo = () => {
  const todoForm = document.getElementById('todo-form');
  const toDoInput = todoForm?.querySelector('input');
  const todoList = document.getElementById('todo-list');

  const selectAllbtn = document.querySelector('.selectAllbtn');
  const deleteBtn = document.querySelector('.deleteBtn');

  let todos:Todos[] = [];
  const todoKey = 'todos';

  const saveToDos = () => {
    localStorage.setItem(todoKey, JSON.stringify(todos));
  };

  const deleteTodo = (event:MouseEvent) => {
    const li = event?.target.parentElement.parentElement;
    li.className = 'spanout';
    setTimeout(() => {
      li.remove();
      todos = todos.filter((toDo:Todos) => toDo.id !== Number(li.id));
      saveToDos();
    }, 800);
  };
  const updateTodo = (event) => {
    const li = event.target.parentElement;
    todos.forEach((e) => {
      if (e.id === li.id) {
        if (e.bool === true) {
          e.bool = false;
        } else {
          e.bool = true;
        }
      }
    });
    saveToDos();
  };

  const handleSelectAll = (e) => {
    const checkbox = document.querySelectorAll('li > input');
    const span = document.querySelectorAll('li > span');
    if (!selectBool) { //* let selectBool = false; // 선택상태가 false(미선택) 상태라면
      checkbox.forEach((v) => {
        v.checked = true;
      });
      todos.forEach((e) => {
        e.bool = true;
      });
      span.forEach((e) => {
        e.className = 'underLine';
      });
      selectAllbtn.value = '선택해제';
    } else {
      checkbox.forEach((v) => {
        v.checked = false;
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
    selectBool = !selectBool;
  };
  //* 할 일 목록 제거 함수
  const handleDelete = () => {
    const checkbox = document.querySelectorAll('li > input');
    checkbox.forEach((e) => {
      if (e.checked) {
        const li = e.parentElement;
        li.className = 'spanout';
        setTimeout(() => {
          li.remove();
          todos = todos.filter((toDo) => toDo.id !== Number(li.id));
          saveToDos();
        }, 800);
      }
    });
  };

  //* 할 일 목록 그리는 함수
  const patinTodo = (newTodo) => {
    const li = document.createElement('li');
    li.id = newTodo.id;

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
    } else {
      span.className = '';
    }
    //* 체크박스 확인하여 밑줄 긋는 함수
    const underLine = () => {
      const span = li.childNodes[1];
      if (checkbox.checked) {
        span.className = 'underLine';
      } else {
        span.className = '';
      }
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnDiv);
    todoList.appendChild(li);

    btn.addEventListener('click', deleteTodo);
    checkbox.addEventListener('click', updateTodo);
    checkbox.addEventListener('click', underLine);

    //* X버튼 hover시 보이는 효과
    li.addEventListener('mouseenter', () => {
      console.log('마우스 들어옴');
      btnDiv.style.display = 'block';
    });
    li.addEventListener('mouseleave', () => {
      btnDiv.style.display = 'none';
    });
  };

  // * todo form에 할 일 입력 함수
  const handleToDoSubmit = (event) => {
    event.preventDefault();
    const newTodo = toDoInput.value;
    if (newTodo === '') {
      slideDiv.className = 'warningMsg';
      todoForm.style.boxShadow = 'inset 0 0 0 1.5px #ff003e, 0 -10px 10px #fff';
      setTimeout(() => {
        slideDiv.className = '';
      }, 1000);
    } else {
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

  //* 할 일 목록이 비어있지 않다면 할 일 목록을 todoList에 그린다는 조건문
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

// ? fillter => 거름망,
// ? JSON.stringify(x) => x를 그대로 문자열화 (ex, ["3","4"] => "["+"3"+","+"4"+"]")
