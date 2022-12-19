const images = {
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
const bgdiv = document.querySelector('.bgdiv');
const times = () => {
    const dateHours = new Date();
    if (dateHours.getHours() >= 6 && dateHours.getHours() < 12) {
        return images.morning[Math.floor(Math.random() * images.morning.length)];
    }
    if (dateHours.getHours() >= 12 && dateHours.getHours() < 15) {
        return images.noon[Math.floor(Math.random() * images.noon.length)];
    }
    if (dateHours.getHours() >= 15 && dateHours.getHours() < 20) {
        return images.afternoon[Math.floor(Math.random() * images.afternoon.length)];
    }
    return images.evening[Math.floor(Math.random() * images.evening.length)];
};
const img = document.createElement('img');
img.src = `img/${times()}`;
img.className = 'bgimg';
bgdiv === null || bgdiv === void 0 ? void 0 : bgdiv.appendChild(img);
const bgOpacity = document.createElement('div');
bgOpacity.className = 'bgop';
bgdiv === null || bgdiv === void 0 ? void 0 : bgdiv.appendChild(bgOpacity);
export default times;
