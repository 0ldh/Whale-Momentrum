const importClock = () => {
    const clock = document.querySelector('#clock');
    const getClock = () => {
        const date = new Date();
        const hours = String(date.getHours());
        const minutes = String(date.getMinutes());
        const seconds = String(date.getSeconds());
        clock.innerText = `${hours}:${minutes}:${seconds}`;
    };
    getClock();
    setInterval(getClock, 1000);
};
export default importClock;
