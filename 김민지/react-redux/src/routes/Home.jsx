import { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      {/* store로부터 state 가져오기 */}
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

// Store와 Component를 연결
function mapStateToProps(state, ownProps) {
  return { toDos: state }; // props에 추가
}

function mapDispatchToProps(dispatch) {
  return { addToDo: (text) => dispatch(actionCreators.addToDo(text)) };
}

// connect(): Home으로 보내는 props에 추가될 수 있도록 허용
export default connect(mapStateToProps, mapDispatchToProps)(Home);
