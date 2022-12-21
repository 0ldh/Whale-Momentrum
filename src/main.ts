import './css/style.css';
import typescriptLogo from './typescript.svg';
import setupCounter from './counter';
import BackGround from './BackGround';
import Slide from './Slide';
import Page0 from './Page0';
import Todo from './Todo';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id='wrapper'>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div id='slide'>
      <div id='page0'></div>
      <div id='page1'></div>
    </div>
    <button type='button' id='slideBtn'></button>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
BackGround(document.querySelector<HTMLDivElement>('#wrapper')!);
Page0(document.querySelector('#page0')!);
Slide(
  document.querySelector<HTMLDivElement>('#slide')!,
  document.querySelector<HTMLButtonElement>('#slideBtn')!,
);
Todo(document.querySelector<HTMLDivElement>('#page1')!);

/**
 *  * localSotrage에서 불러와서 그려야함 paintTodo(Todo.ts)에 추가
 *  * page1에 Todo 추가 하고 main에서 Todo 지우기
 * first
 */
