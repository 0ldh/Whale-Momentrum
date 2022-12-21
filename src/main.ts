import './css/style.css';
import typescriptLogo from './typescript.svg';
import setupCounter from './counter';
import BackGround from './BackGround';
import Clock from './Clock';

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
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <div id='clock'></div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
BackGround(document.querySelector<HTMLDivElement>('#wrapper')!);
Clock(document.querySelector<HTMLDivElement>('#clock')!);
