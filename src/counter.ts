export default function setupCounter(element: HTMLButtonElement) {
  const ele:HTMLButtonElement = element;
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    ele.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}
