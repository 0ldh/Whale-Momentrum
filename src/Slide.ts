import Page0 from './Page0';
import Page1 from './Page1';

export default function Slide(element: HTMLDivElement, div:HTMLDivElement):void {
  const ele = element;
  const btnDiv = div;

  const page0 = document.createElement('div');
  const page1 = document.createElement('div');
  const page0Btn = document.createElement('span');
  const page1Btn = document.createElement('span');

  ele.append(page0);
  ele.append(page1);
  btnDiv.append(page0Btn, page1Btn);

  Page0(page0);
  Page1(page1);

  /* 버튼 임시 CSS */
  btnDiv.style.backgroundColor = 'transparent';
  btnDiv.style.padding = '1em';
  btnDiv.style.display = 'flex';

  page0Btn.addEventListener('click', (e:MouseEvent) => {
    console.log(e.target);
  });
  page1Btn.addEventListener('click', (e: MouseEvent) => {
    console.log(e.target);
  });
}
