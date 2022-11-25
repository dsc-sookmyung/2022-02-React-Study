import { React, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

function DetailPage(props) {
    const navigate = useNavigate();

    const [isUpdated, setIsUpdated] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    
    const handleUpdate = () => {
        setIsUpdated((prevIsUpdated) => !prevIsUpdated);
        navigate(`/update/${postId}`);
    };
    const handleDelete = () => {
        axios.delete(`${server}/posts/${postId}`)
            .then((response)=>(response))
            .catch((error)=>(console.log(error)))

        setIsDeleted((prevIsDeleted) => !prevIsDeleted);
        alert('삭제되었습니다');
        navigate("/");
    };
    
    const {postId} = useParams();
    const [post, setPost] = useState([]);
  
    const server = "https://gdsc-study-server.herokuapp.com";

    useEffect(() => {
          axios.get(`${server}/posts/${postId}`)
            .then((response)=>(setPost(response.data[0])))
            .catch((error)=>(console.log(error)))
    }, [])

    return (
            <div>
                <h2>
                    상세 페이지
                </h2>
                <h3>제목: {post.title}</h3>
                <div>작성자: {post.nickname}</div>
                <div>내용: {post.content}</div>
                <hr />
                <button onClick={handleUpdate} disabled={isUpdated}>
                    수정</button>
                <button onClick={handleDelete} disabled={isDeleted}>
                    삭제</button>
            </div>
    );
}

export default DetailPage;