import { useNavigate } from "react-router-dom";
import PostList from "../week02/PostList";

function MainPage(props) {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/create");
  };

  return (
    <>
      <button onClick={handleCreate}>새 글 작성하기</button>
      <PostList />
    </>
  );
}

export default MainPage;
