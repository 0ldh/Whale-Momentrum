var API_KEY = 'cb91bf2e9f480fdb20114b3a09adb6db';
export var viewportSub = document.querySelector('.viewport-sub');
var weatherDiv = viewportSub.querySelector('.weather_icon');
var docTemp = viewportSub.querySelector('span:nth-child(2)');
var docLocat = viewportSub.querySelector('span:nth-child(3)');
var weatherMain;
var onGeoError = function () {
    alert('지역을 찾을 수 없습니다');
};
var onGeoOk = function (getCurrentPosition) {
    var lat = getCurrentPosition.coords.latitude;
    var lnt = getCurrentPosition.coords.longitude;
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lnt, "&appid=").concat(API_KEY, "&units=metric");
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var name = data.name;
        weatherMain = data
            .weather[0]
            .main;
        var temp = Math.floor(data.main.temp);
        var weatherIcon;
        if (weatherMain === 'Clouds') {
            weatherIcon = '<i class="fa-solid fa-cloud fa-3x"></i>';
        }
        else if (weatherMain === 'Clear') {
            weatherIcon = '<i class="fa-solid fa-sun fa-3x"></i>';
        }
        else if (weatherMain === 'Rain') {
            weatherIcon = '<i class="fa-solid fa-cloud-showers"></i>';
        }
        else {
            weatherIcon = '<i class="fa-solid fa-meteor fa-3x"></i>';
        }
        weatherDiv.innerHTML = weatherIcon;
        docLocat.innerText = name;
        docTemp.innerText = "".concat(temp, "'C");
        console.log(name, temp, weatherMain);
        console.log('url', url);
    });
};
var weather = viewportSub.querySelector('.weather');
weather.addEventListener('click', function () {
    // eslint-disable-next-line no-restricted-globals
    location.href = 'https://google.com/search?q=날씨';
});
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
export default viewportSub;
