
const API_KEY = "1896e08be305b6f5c92e4f7657bcaaf3";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherContainer = document.querySelector("#weather");
        const city = weatherContainer.querySelector("#city");
        const weather = weatherContainer.querySelector("#weather");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }) ; // api 불러오기 - 당장 일어나는 건 아니고, 시간이 좀 걸린다음에 실행. 서버의 응답 기다리기. then! 
}

function onGeoError(){
    alert("We Can't find you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);