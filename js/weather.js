// getCurrentPosition의 position 속성에서 값 불러오기
function onGeoOk(position) {
  // 위도 값 가져오기
  const lat = position.coords.latitude;
  // 경도 값 가져오기
  const lng = position.coords.longitude;
  console.log(lat, lng);
}
function onGeoError() {
  alert("위치를 못찾았어요");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
e60998a1a76410bc49c50a6a51f4925e;
