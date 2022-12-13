import viewportSub from './ViewportSub';
import importClock from './Clock';
import importGreeting from './Greeting';

interface localStorageData {
  bool: boolean;
}
interface TodoData {
  bool: boolean;
  text: string;
}

const slidebtnDiv = document.querySelector('.slidebtn') as HTMLElement;
const slideBtn1 = slidebtnDiv.querySelector('.page1') as HTMLButtonElement;
const slideBtn2 = slidebtnDiv.querySelector('.page2') as HTMLButtonElement;

const slideDiv = document.querySelector('#slide_div')as Element;

const subBtn = viewportSub.querySelector('.btn') as HTMLButtonElement;
const selectBool = false;

const todosCountUpdate = ():void => {
  const savedToDos = JSON.parse(localStorage.getItem('todos') as string);
  let todosCount = 0;

  subBtn.className = 'btn-todo';
  subBtn.innerHTML = '<span>할 일 목록</span>';

  if (savedToDos !== null) {
    savedToDos.forEach((e:localStorageData) => {
      if (e.bool === false) {
        todosCount += 1;
      }
    });
    subBtn.innerHTML += `<span>${todosCount}</span>`;
  }
};

const page1ToDo = ():void => {
  const popToDos:TodoData[] = [];
  let popToDoCount = 0;
  const toDoContent = document.querySelector('.pop-content')as Element;
  const savedToDos = localStorage.getItem('todos');
  toDoContent.innerHTML = '';
  if (savedToDos !== null) {
    const parseTodos:TodoData[] = JSON.parse(savedToDos);
    parseTodos.forEach((e:TodoData) => {
      if (!e.bool) {
        popToDos.push(e);
      }
    });
    popToDos.forEach((e):void => {
      popToDoCount++;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = `${popToDoCount}. ${e.text}`;
      input.disabled = true;
      toDoContent.appendChild(input);
    });
  }
};

const loadPage = ():void => {
  slideBtn1.disabled = true;
  slideBtn1.style.background = 'hsla(0,0%,100%,1)';
  slideBtn2.style.background = 'hsla(0,0%,100%,0.4)';
  slideDiv.id = 'slide_div1';
  slideDiv.innerHTML = `
    <div id="clock"></div>
    <form class="hidden" id="login-form">
    <p class="nameQ">What is your name?</p>
    <input required="" maxlength="15" type="text">
    </form>
    <div id="greeting" class=""></div>
    `;
  importClock();
  importGreeting();
  todosCountUpdate();
  page1ToDo();
};
