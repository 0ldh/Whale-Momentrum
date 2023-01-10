import feather from 'feather-icons';

interface Todos {
  id: number;
  text: string;
  bool: boolean;
}

export default function Todo(element: HTMLDivElement): void {
  const ele = element;
  const todoForm = document.createElement('div');
  todoForm.className = 'todo__form';

  const todoList = document.createElement('div');
  todoList.className = 'todo__list';

  const todoInputForm = document.createElement('div');
  todoInputForm.className = 'todoInput_form';

  const todoInput = document.createElement('input');
  todoInput.type = 'text';
  todoInput.className = 'todoInput_input';

  const todoInputLabel = document.createElement('label');
  todoInputLabel.className = 'todoInput_label';
  todoInputLabel.innerText = 'Todo';

  todoForm.append(todoList);
  todoInputForm.append(todoInput, todoInputLabel);
  todoForm.append(todoInputForm);
  ele.append(todoForm);

  // eslint-disable-next-line prefer-const
  let todos:Todos[] = [];
  const todoKey = 'todos';

  const saveTodos = (_todos:Todos[]):void => {
    localStorage.setItem(todoKey, JSON.stringify(_todos));
  };
  const deleteTodo = (delTargetId: string, delTargetEle: HTMLElement):void => {
    todos = todos.filter((e) => e.id !== Number(delTargetId));
    saveTodos(todos);
    delTargetEle.remove();
  };

  const paintTodo = (_todos: Todos[]):void => {
    _todos.forEach((e) => {
      const todo = document.createElement('div');
      const todoText = document.createElement('div');
      const delTodoBtn = document.createElement('button');

      todo.id = String(e.id);
      todoText.innerText = e.text;

      delTodoBtn.innerHTML = feather.icons['x-circle'].toSvg({
        'stroke-width': 1,
        color: 'red',
      });

      todo.className = 'todo';
      delTodoBtn.className = 'delTodoBtn';
      delTodoBtn.id = String(e.id);

      todo.append(todoText);
      todo.append(delTodoBtn);

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
  window.addEventListener('load', (): void => {
    const savedTodos = localStorage.getItem(todoKey);
    if (savedTodos) {
      const parseTodos = JSON.parse(savedTodos);
      todos.push(...parseTodos);
      paintTodo(todos);
    }
  });

  window.addEventListener('click', (e:MouseEvent):void => {
    const { target } = e;
    if (target instanceof Element) {
      const { parentElement } = target;
      if (target.tagName === 'line' && parentElement) {
        deleteTodo(parentElement.id, document.getElementById(parentElement.id)!);
      } else if (target.classList.contains('delTodoBtn')) {
        deleteTodo(target.id, document.getElementById(target.id)!);
      }
    }
  });
}
