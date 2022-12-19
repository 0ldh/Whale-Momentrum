var importClock = function () {
    var clock = document.querySelector('#clock');
    var getClock = function () {
        var date = new Date();
        var hours = String(date.getHours());
        var minutes = String(date.getMinutes());
        var seconds = String(date.getSeconds());
        clock.innerText = "".concat(hours, ":").concat(minutes, ":").concat(seconds);
    };
    getClock();
    setInterval(getClock, 1000);
};
export default importClock;
