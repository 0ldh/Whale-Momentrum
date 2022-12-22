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

  const todos:Todos[] = [];
  const todoKey = 'todos';

  const saveTodos = ():void => {
    localStorage.setItem(todoKey, JSON.stringify(todos));
  };
  const deleteTodo = ():void => {
    saveTodos();
  };

  const paintTodo = (_todos: Todos[]):void => {
    _todos.forEach((e) => {
      const todo = document.createElement('div');
      const todoText = document.createElement('div');
      const delTodoBtn = document.createElement('button');

      todoText.innerText = e.text;
      delTodoBtn.id = 'delTodoBtn';

      delTodoBtn.innerHTML = feather.icons.x.toSvg({
        class: 'foo bar', 'stroke-width': 1, color: 'red', id: 'delTodoBtn',
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
      saveTodos();
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
    console.log(e.target);
  });
}
