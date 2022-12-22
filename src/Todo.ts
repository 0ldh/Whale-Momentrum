import feather from 'feather-icons';

interface Todos {
  id: number;
  text: string;
  bool: boolean;
}

export default function Todo(element: HTMLDivElement): void {
  const ele = element;
  const todoForm = document.createElement('div');
  const todoList = document.createElement('div');
  const todoInput = document.createElement('input');

  feather.icons.x.toSvg({ class: 'foo bar', 'stroke-width': 1, color: 'red' });
  todoInput.type = 'Text';
  /*
    만들어진 HTML 요소에 속성 추가

  */

  todoForm.append(todoList);
  todoForm.append(todoInput);
  ele.append(todoForm);

  // eslint-disable-next-line prefer-const
  let todos:Todos[] = [];
  const todoKey = 'todos';

  const saveTodos = (_todos:Todos[]):void => {
    localStorage.setItem(todoKey, JSON.stringify(_todos));
  };
  const deleteTodo = (delTargetId: string):void => {
    console.log(delTargetId);
    // console.log(todos);
    todos = todos.filter((e) => e.id !== Number(delTargetId));
    saveTodos(todos);
  };

  const paintTodo = (_todos: Todos[]):void => {
    _todos.forEach((e) => {
      const todo = document.createElement('div');
      const todoText = document.createElement('div');
      const delTodoBtn = document.createElement('button');

      todoText.innerText = e.text;
      delTodoBtn.className = 'delTodoBtn';
      delTodoBtn.id = String(e.id);

      delTodoBtn.innerHTML = feather.icons['x-circle'].toSvg({
        class: 'delTodoBtn',
        id: String(e.id),
        'stroke-width': 1,
        color: 'red',
      });
      todo.append(todoText);
      todo.append(delTodoBtn);

      /* 임시 css */
      todo.style.display = 'flex';
      todo.style.alignItems = 'center';
      todo.style.justifyContent = 'center';
      /*  */

      todoList.append(todo);
    });
  };
  const updateTodo = (event:Event):void => {
    event.preventDefault();
    const newTodo:string = todoInput.value;
    if (newTodo) {
      todoInput.value = '';
      const objectTodo = [{
        id: Date.now(),
        text: newTodo,
        bool: false,
      }];
      todos.push(objectTodo[0]);
      paintTodo(objectTodo);
      saveTodos(todos);
    }
  };

  todoInput.addEventListener('keypress', (e: KeyboardEvent):void => {
    if (e.key === 'Enter') {
      updateTodo(e);
    }
  });
  window.addEventListener('load', ():void => {
    const savedTodos = localStorage.getItem(todoKey);
    if (savedTodos !== null) {
      const parseTodos = JSON.parse(savedTodos!);
      parseTodos.forEach((e: Todos) => todos.push(e));
      paintTodo(todos);
    }
  });
  window.addEventListener('click', (e:MouseEvent):void => {
    if (e.target instanceof Element) {
      console.log(e.target);
      if (e.target.tagName === 'line') {
        deleteTodo(e.target.parentElement!.id);
      } else if (e.target.classList.contains('delTodoBtn')) {
        deleteTodo(e.target.id);
      }
    }
  });
}
