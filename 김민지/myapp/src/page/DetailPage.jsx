import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function DetailPage(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleUpdate = () => {
    navigate(`/update/${id}`, {
      state: {
        id: location.state.id,
        title: location.state.title,
        content: location.state.content,
      },
    });
  };

  const handleDelete = () => {
    axios
      .delete(`https://gdsc-study-server.herokuapp.com/posts/${id}`)
      .then((res) => {
        alert("삭제되었습니다.");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h2>상세 페이지</h2>
      <h3>제목: {location.state.title}</h3>
      <div>작성자: {location.state.nickname}</div>
      <div>내용: {location.state.content}</div>
      <hr />
      <button onClick={handleUpdate}>수정</button>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}

export default DetailPage;
