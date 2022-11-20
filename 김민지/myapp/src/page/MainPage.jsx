import { useNavigate } from "react-router-dom";
import PostList from "../week02/PostList";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
`;

const CreateBtn = styled.button`
  background-color: white;
  color: #6d9886;
  font-size: 1em;
  padding: 0.25em 1em;
  margin-right: 10px;
  border: 2px solid #6d9886;
  border-radius: 3px;
  cursor: pointer;
`;

function MainPage(props) {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/create");
  };

  return (
    <Container>
      <CreateBtn onClick={handleCreate}>새 글 작성하기</CreateBtn>
      <PostList />
    </Container>
  );
}

export default MainPage;
