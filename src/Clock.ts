const importClock = (): void => {
  const clock:HTMLElement = document.querySelector('#clock') as HTMLElement;
  const getClock = (): void => {
    const date:Date = new Date();
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());
    const seconds = String(date.getSeconds());

    clock.innerText = `${hours}:${minutes}:${seconds}`;
  };

  getClock();
  setInterval(getClock, 1000);
};

export default importClock;
