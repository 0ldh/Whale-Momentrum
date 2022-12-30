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
  page0Btn.className = 'button';
  page1Btn.className = 'button';
  btnDiv.append(page0Btn, page1Btn);

  Page0(page0);
  Page1(page1);

  const fadePage = (event: MouseEvent) => {
    const btn = event.target as HTMLSpanElement;
    if (page0Btn === btn) {
      page0.style.display = 'block';
      page1.style.display = 'none';
    } else {
      page0.style.display = 'none';
      page1.style.display = 'block';
    }
  };

  page0Btn.addEventListener('click', fadePage);
  page1Btn.addEventListener('click', fadePage);
}
