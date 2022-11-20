import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <Container>
      <h2>새로운 글 작성</h2>
      <input type="text" name="title" value={title} onChange={handleTitleChange} placeholder="제목" />
      <br />
      <br />
      <textarea name="content" cols="50" rows="10" value={content} onChange={handleContentChange} placeholder="내용"></textarea>
      <hr />
      <CreateBtn onClick={handleCreatePost}>작성 완료</CreateBtn>
    </Container>
  );
}

export default CreatePage;
