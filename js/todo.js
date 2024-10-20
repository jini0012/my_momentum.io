const todoForm = document.querySelector(".todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todoList");

// 나중에 로컬 스토리지 값에 저장된 값 넣어서 그대로 사용
let toDos = [];
const TODOS_KEY = "todos";

// todo 저장 함수 - 배열 형태로 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// todo X 버튼을 누르면 삭제하는 함수
function deleteTodo(e) {
  const li = e.target.parentNode;
  li.remove();
  // 기존 저장된 배열에 클릭한 아이디값(li.id)과 다른 값 (삭제 버튼을 누르지 않은 값) 만 남기는 배열을 보여준다
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // 삭제된 위의 배열 값 저장(덮어 씌우기)
  saveToDos();
}

// todoList를 작성하는 함수
function mainTodo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerHTML = newToDoObj.value;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";

  deleteBtn.addEventListener("click", deleteTodo);

  li.append(span, deleteBtn);
  todoList.appendChild(li);
}

// input 입력 및 submit 이벤트를 위한 함수
function todoSubmit(e) {
  e.preventDefault();
  // input 값 저장하고 오브젝트에 id와 함께 저장하여 배열에 저장
  const newTodo = todoInput.value;
  todoInput.value = "";

  const newToDoObj = {
    value: newTodo,
    id: Date.now(),
  };

  toDos.push(newToDoObj);
  // input 값 초기화
  mainTodo(newToDoObj);

  // 로컬스토리지에 값 저장
  saveToDos();
}

todoForm.addEventListener("submit", todoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  // 문자열로 저장되어 있는 값을 배열로 가져온다
  const parsedToDos = JSON.parse(savedToDos);

  /* 업데이트 값 */
  // 새로고침 전 기존 todo 저장
  toDos = parsedToDos;
  // 로컬스토리지에 저장된 값들을 li > button 이렇게 값을 넣어서 보여준다
  parsedToDos.forEach(mainTodo);
}
