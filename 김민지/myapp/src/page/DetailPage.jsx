import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
`;

const UpdateBtn = styled.button`
  background-color: white;
  color: #2146c7;
  font-size: 1em;
  padding: 0.25em 1em;
  margin-right: 10px;
  border: 2px solid #2146c7;
  border-radius: 3px;
  cursor: pointer;
`;

const DeleteBtn = styled(UpdateBtn)`
  color: #dc3535;
  border: 2px solid #dc3535;
`;

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
    <Container>
      <h2>상세 페이지</h2>
      <h3>제목: {location.state.title}</h3>
      <div>작성자: {location.state.nickname}</div>
      <div>내용: {location.state.content}</div>
      <hr />
      <UpdateBtn onClick={handleUpdate}>수정</UpdateBtn>
      <DeleteBtn onClick={handleDelete}>삭제</DeleteBtn>
    </Container>
  );
}

export default DetailPage;
