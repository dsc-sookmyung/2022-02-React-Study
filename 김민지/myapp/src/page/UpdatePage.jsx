import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

function UpdatePage(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState(location.state.title);
  const [content, setContent] = useState(location.state.content);

  const handleTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };

  const handleContentChange = (e) => {
    setContent(e.currentTarget.value);
  };

  // useEffect(() => {
  //   axios
  //     .get(`https://gdsc-study-server.herokuapp.com/posts/${location.state.id}`)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  const handleUpdatePost = () => {
    if (title === "" || content === "") {
      alert("모든 내용을 입력해주세요.");
    }
    axios
      .patch(`https://gdsc-study-server.herokuapp.com/posts/${location.state.id}`, {
        title: title,
        content: content,
      })
      .then((res) => {
        alert("수정되었습니다.");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container>
      <h2>글 수정</h2>
      <input type="text" name="title" value={title} onChange={handleTitleChange} />
      <br />
      <br />
      <textarea name="content" cols="50" rows="10" value={content} onChange={handleContentChange}></textarea>
      <hr />
      <UpdateBtn onClick={handleUpdatePost}>수정 완료</UpdateBtn>
    </Container>
  );
}

export default UpdatePage;
