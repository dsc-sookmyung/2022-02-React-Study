import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

const deleteToDo = createAction("DELETE");
// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type: // ADD
      return [{ text: action.payload, id: Date.now() }, ...state]; // 기존 배열에 직접 값을 추가하지 말기! state is immutable(변경 불가)
    case deleteToDo.type: // DELETE
      return state.filter((toDo) => toDo.id !== action.payload); // 삭제하고자 하는 id를 갖고 있지 않은 배열만 필터링
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
