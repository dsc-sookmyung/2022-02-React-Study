import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state]; // 기존 배열에 직접 값을 추가하지 말기! state is immutable(변경 불가)
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id); // 삭제하고자 하는 id를 갖고 있지 않은 배열만 필터링
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
