import { React ,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function NewPostPage(props) {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const server = "https://gdsc-study-server.herokuapp.com";

    const handleSubmit = (event) => {
        if(document.getElementById("title").value.length < 1
            || document.getElementById("content").value.length < 1) {
            alert("모든 내용을 입력해 주세요.");
        } else {
            axios.post(`${server}/posts/`, {
                title: title,
                content: content,
                nickname: "윤눈송"
              })
                .then((response)=>(console.log(response.data)))
                .catch((error)=>(console.log(error)))

            alert("생성되었습니다.");
            event.preventDefault();
            navigate("/");
        }
    }

    const handleTitle = (event) => {
        setTitle(event.currentTarget.value);
    }
    const handleContent = (event) => {
        setContent(event.currentTarget.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>새로운 글 작성</h3>
            <div>
                <input id="title" placeholder="제목"
                    value={title} onChange={handleTitle}></input>
            </div>
            <div>
                <textarea id="content" rows="10" cols="50" placeholder="내용"
                    value={content} onChange={handleContent}></textarea>
            </div>
            <hr />
            <button type="submit">작성 완료</button>
        </form>
    )
}

export default NewPostPage;