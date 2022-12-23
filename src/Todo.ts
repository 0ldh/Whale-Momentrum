import feather from 'feather-icons';

interface Todos {
  id: number;
  text: string;
  bool: boolean;
}

export default function Todo(element: HTMLLIElement): void {
  const ele = element;
  const todoForm = document.createElement('div');
  const todoList = document.createElement('div');
  const todoInput = document.createElement('input');

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
  const deleteTodo = (delTargetId: string, delTargetEle: HTMLElement):void => {
    delTargetEle.remove();
    // console.log(todos);
    todos = todos.filter((e) => e.id !== Number(delTargetId));
    saveTodos(todos);
  };

  const paintTodo = (_todos: Todos[]):void => {
    _todos.forEach((e) => {
      const todo = document.createElement('div');
      const todoText = document.createElement('div');
      const delTodoBtn = document.createElement('button');

      todo.id = String(e.id);
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
      todo.className = 'todo';
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
    const { target } = e;
    if (target instanceof Element) {
      if (target.tagName === 'line') {
        deleteTodo(
          target.parentElement!.id,
          document.getElementById(target.parentElement!.id)!,
        );
      } else if (target.classList.contains('delTodoBtn')) {
        deleteTodo(
          target.id,
          document.getElementById(target.id)!,
        );
      }
    }
  });
}
