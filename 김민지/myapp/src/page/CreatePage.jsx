import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePage(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };

  const handleContentChange = (e) => {
    setContent(e.currentTarget.value);
  };

  const handleCreatePost = () => {
    if (title === "" || content === "") {
      alert("모든 내용을 입력해주세요.");
    }
    axios
      .post(`https://gdsc-study-server.herokuapp.com/posts`, {
        title: title,
        content: content,
        nickname: "김눈송",
      })
      .then((res) => {
        alert("생성되었습니다.");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <h2>새로운 글 작성</h2>
      <input type="text" name="title" value={title} onChange={handleTitleChange} placeholder="제목" />
      <br />
      <br />
      <textarea name="content" cols="50" rows="10" value={content} onChange={handleContentChange} placeholder="내용"></textarea>
      <hr />
      <button onClick={handleCreatePost}>작성 완료</button>
    </div>
  );
}

export default CreatePage;
