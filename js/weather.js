const API_KEY = "cb91bf2e9f480fdb20114b3a09adb6db"

const onGeoOk = (getCurrentPosition) => {
   const lat = getCurrentPosition.coords.latitude;
   const lnt = getCurrentPosition.coords.longitude;
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lnt}&appid=${API_KEY}&units=metric`
   fetch(url)
   .then((response) => response.json())
   .then((data) => {
      const name = data.name
      const weather = data.weather[0].main
      const temp = Math.floor(data.main.temp)
   });
   
   
}

const onGeoError = () => {
   alert("지억을 찾을 수 없습니다")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)