interface Todos {
  id: number;
  text: string;
  bool: boolean;
}

export default function Todo(element: HTMLDivElement): void {
  console.log('todo');
  const todoForm = document.createElement('div');
  const todoList = document.createElement('div');
  const todoInput = document.createElement('input');

  todoForm.append(todoList);
  todoForm.append(todoInput);

  const todos:Todos[] = [];
  const todoKey = 'todos';

  const saveTodos = ():void => { localStorage.setItem(todoKey, JSON.stringify(todos)); };
  const addTodo = (event:Event):void => {
    event.preventDefault();
    const newTodo:string = todoInput.value;
    if (newTodo) {
      todoInput.value = '';
      const objectTodo = {
        id: Date.now(),
        text: newTodo,
        bool: false,
      };
      todos.push(objectTodo);
    }

    saveTodos();
  };
}
