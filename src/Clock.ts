export default function Clock(element: HTMLDivElement):void {
  const getClock = ():void => {
    const ele = element;
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const year = date.getFullYear();
    const month = date.toLocaleDateString('ko-KR', { month: 'long' });
    const day = date.toLocaleDateString('ko-kr', { day: '2-digit' });
    const weekDay = date.toLocaleDateString('ko-KR', { weekday: 'short' });

    const clock = document.createElement('div');
    const clockForm = document.createElement('div');
    const innerClock = document.createElement('span');
    const dateForm = document.createElement('div');
    const innerDate = document.createElement('span');

    /* 임시 CSS */
    clockForm.style.height = '100%';

    ele.innerHTML = `
    <div style='height:100%'><span class='clock'>${hours}:${minutes}:${seconds}</span></div>
    <div><span class='date'>${year}년 ${month} ${day} ${weekDay}요일</span></div>
    `;
  };
  setInterval(getClock, 1000);
}
