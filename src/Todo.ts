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

  todoInput.type = 'Text';
  /*
    만들어진 HTML 요소에 속성 추가

  */

  todoForm.append(todoList);
  todoForm.append(todoInput);
  ele.append(todoForm);

  const todos:Todos[] = [];
  const todoKey = 'todos';

  const saveTodos = (_newTodo: string):void => {
    localStorage.setItem(todoKey, JSON.stringify(todos));
  };

  const paintTodo = (_todos: Todos[]):void => {
    _todos.forEach((e) => {
      const todo = document.createElement('div');
      const todoText = document.createElement('div');

      todoText.innerText = e.text;

      todo.append(todoText);

      todoList.append(todo);
    });
  };
  const addTodo = (event:Event):void => {
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
      saveTodos(newTodo);
      paintTodo(objectTodo);
    }
  };

  todoInput.addEventListener('keypress', (e: KeyboardEvent):void => {
    if (e.key === 'Enter') {
      console.log('first');
      addTodo(e);
    }
  });
  window.addEventListener('load', ():void => {
    const savedTodos = localStorage.getItem(todoKey) as string;
    const parseTodos = JSON.parse(savedTodos);
    parseTodos.forEach((e: Todos) => todos.push(e));
    paintTodo(todos);
  });
}
