const greeting = document.querySelector("h1");
const loginForm = document.querySelector(".loginForm");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");

const USERNAME_KEY = "userName";
const savedUserName = localStorage.getItem(USERNAME_KEY); // 로컬스토리지에 저장된 userName

// userName이 저장되었을 떄 사용되는 함수
function savedUser(userName) {
  loginForm.hidden = true;
  greeting.textContent = `Hi, ${userName}! :)`;
  document.title = `${userName}'s Page!`;
}

function getUserName(event) {
  event.preventDefault();

  let userName = loginInput.value;
  alert(`안녕하세요 ${userName}님!`);

  savedUser(userName); // 입력된 userName으로 실행
  localStorage.setItem(USERNAME_KEY, `${userName}`);
}

if (savedUserName === null) {
  // 유저가 처음 방문했을 떄
  loginForm.hidden = false;
  loginForm.addEventListener("submit", getUserName);
} else {
  // 재방문한 유저일 떄
  savedUser(savedUserName); // 저장되어있는 userName으로 실행
}
