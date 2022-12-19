var images = {
    morning: [
        // 아침 배경
        'morning1.jpeg',
        'morning2.jpg',
        'morning3.jpeg',
    ],
    noon: [
        'noon1.jpeg',
        'noon2.jpeg',
        'noon3.jpeg',
    ],
    afternoon: [
        'afternoon1.jpeg',
        'afternoon2.jpeg',
        'afternoon3.jpeg',
    ],
    evening: [
        'evening1.jpeg',
        'evening2.jpeg',
        'evening3.jpeg',
    ],
};
var bgdiv = document.querySelector('.bgdiv');
var time;
var times = function () {
    var dateHours = new Date();
    if (dateHours.getHours() >= 6 && dateHours.getHours() < 12) {
        time = 'Morning';
        return images.morning[Math.floor(Math.random() * images.morning.length)];
    }
    if (dateHours.getHours() >= 12 && dateHours.getHours() < 15) {
        time = 'Noon';
        return images.noon[Math.floor(Math.random() * images.noon.length)];
    }
    if (dateHours.getHours() >= 15 && dateHours.getHours() < 20) {
        time = 'Afternoon';
        return images.afternoon[Math.floor(Math.random() * images.afternoon.length)];
    }
    time = 'Evening';
    return images.evening[Math.floor(Math.random() * images.evening.length)];
};
var img = document.createElement('img');
img.src = "img/".concat(times());
img.className = 'bgimg';
bgdiv === null || bgdiv === void 0 ? void 0 : bgdiv.appendChild(img);
var bgOpacity = document.createElement('div');
bgOpacity.className = 'bgop';
bgdiv === null || bgdiv === void 0 ? void 0 : bgdiv.appendChild(bgOpacity);
export default times;
