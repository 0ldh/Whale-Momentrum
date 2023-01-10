export default function Clock(element: HTMLDivElement):void {
  const getClock = ():void => {
    const ele = element;
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    ele.innerHTML = `<div class='clock'>${hours}:${minutes}:${seconds}</div>`;

    const year = date.getFullYear();
    const month = date.toLocaleDateString('ko-KR', { month: 'long' });
    const day = date.toLocaleDateString('ko-kr', { day: '2-digit' });
    const weekDay = date.toLocaleDateString('ko-KR', { weekday: 'short' });

    ele.innerHTML += `<div class='date'>${year}년 ${month} ${day} ${weekDay}요일</div>`;
  };

  setInterval(getClock, 1000);
  getClock();
}
