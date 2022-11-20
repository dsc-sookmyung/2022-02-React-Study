import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  const { id } = useParams();
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));

  return (
    <div>
      <h1>{toDo.text}</h1>
      <h5>created at: {toDo.id}</h5>
    </div>
  );
}

function mapStateToProps(state) {
  // 주의: react-router-dom 6버전부터는 더이상 history, location, match 등의 props를 component에서 받을 수 없다.
  return { toDos: state }; // props에 추가
}

export default connect(mapStateToProps)(Detail);
