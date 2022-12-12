const importColock = (): void => {
  const clock:HTMLElement = document.querySelector('#clock') as HTMLElement;
  const getClock = (): void => {
    const date:Date = new Date();
    const hours:string = String(date.getHours()).padStart(2, '0');
    const minutes:string = String(date.getMinutes()).padStart(2, '0');
    const seconds:string = String(date.getSeconds()).padStart(2, '0');

    clock.innerText = `${hours}:${minutes}:${seconds}`;
  };

  getClock();
  setInterval(getClock, 1000);
};
