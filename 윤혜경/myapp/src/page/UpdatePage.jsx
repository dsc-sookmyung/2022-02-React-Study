import { React, useEffect , useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

function NewPostPage(props) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const {postId} = useParams();
    const navigate = useNavigate();

    const server = "https://gdsc-study-server.herokuapp.com";
    
    useEffect(() => {
        axios.get(`${server}/posts/${postId}`)
        .then((response)=>{
            (setTitle(response.data[0].title));
            (setContent(response.data[0].content));
        })
        .catch((error)=>(console.log(error)))
    }, [])

    const handleSubmit = (event) => {
        if(document.getElementById("title").value.length < 1
            || document.getElementById("content").value.length < 1) {
            alert("모든 내용을 입력해 주세요.");
        } else {
            axios.patch(`${server}/posts/${postId}`, {
                title: title,
                content: content
              })
                .then((response)=>(console.log(response.data)))
                .catch((error)=>(console.log(error)))

            alert("수정되었습니다.");
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
            <h3>글 수정</h3>
            <div>
                <input id="title" type="text"
                    defaultValue={title} onChange={handleTitle}></input>
            </div>
            <div>
                <textarea id="content" rows="10" cols="50"
                    defaultValue={content} onChange={handleContent}></textarea>
            </div>
            <hr />
            <button type="submit">수정 완료</button>
        </form>
    )
}

export default NewPostPage;