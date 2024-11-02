const API_KEY = "e60998a1a76410bc49c50a6a51f4925e";

// getCurrentPosition의 position 속성에서 값 불러오기
function onGeoOk(position) {
  // 위도 값 가져오기
  const lat = position.coords.latitude;
  // 경도 값 가져오기
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather div:first-child");
      const city = document.querySelector(".weather div:last-child");
      city.textContent = data.name;
      weather.textContent = `${data.weather[0].main} / ${(
        Math.round(data.main.temp * 100) / 100
      ).toFixed(1)}°C`;
    });
}
function onGeoError() {
  alert("더 좋은 페이지를 위해 설정에서 위치 정보를 허용해주세요 :)");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
