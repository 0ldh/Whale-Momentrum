import Page0 from './Page0';
import Page1 from './Page1';

export default function Slide(element: HTMLDivElement, slideBtn:HTMLButtonElement):void {
  const ele = element;
  const btn = slideBtn;

  const page0 = document.createElement('div');
  const page1 = document.createElement('div');

  ele.append(page0);
  ele.append(page1);

  Page0(page0);
  Page1(page1);

  btn.addEventListener('click', (e:MouseEvent) => {
    console.log(e);
  });
}
