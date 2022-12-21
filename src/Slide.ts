export default function Slide(element: HTMLDivElement, slideBtn:HTMLButtonElement):void {
  const ele = element;
  const btn = slideBtn;

  const page0 = document.createElement('div');
  const page1 = document.createElement('div');

  // test용
  page0.style.width = '10px';
  page0.style.height = '10px';
  page1.style.width = '10px';
  page1.style.height = '10px';

  ele.append(page0);
  ele.append(page1);

  btn.addEventListener('click', (e:MouseEvent) => {
    console.log(e);
  });
}
