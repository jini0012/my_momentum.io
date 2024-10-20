const time = document.querySelector(".clock");

function clock() {
  const today = new Date();
  const hours = String(
    today.getHours() > 12 ? today.getHours() - 12 : today.getHours()
  ).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");
  const seconds = String(today.getSeconds()).padStart(2, "0");
  time.textContent = `${hours}:${minutes}:${seconds}`;
}

// 페이지를 열면 시계 바로 동작
clock();

// 1초마다 변화되는 시계 동작
setInterval(() => {
  clock();
}, 1000);
