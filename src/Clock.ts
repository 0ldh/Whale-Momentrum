export default function Clock(element: HTMLDivElement):void {
  const getClock = ():void => {
    const ele = element;
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    ele.innerText = `${hours}:${minutes}:${seconds}`;
  };
  setInterval(getClock, 1000);
}
