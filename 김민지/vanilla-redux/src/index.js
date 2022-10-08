import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// Reducer: modify state
const reducer = (state = [], action) => {
  // Action
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state]; // 기존 배열에 직접 값을 추가하지 말기! state is immutable(변경 불가)
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

// Store: data area
const store = createStore(reducer);

const addToDo = (text) => {
  store.dispatch({ type: ADD_TODO, text });
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
  });
};

store.subscribe(() => store.getState());
store.subscribe(paintToDos);

// sending message
const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  addToDo(toDo);
};

form.addEventListener("submit", onSubmit);
