import React from "react";
import PostList from "../week_02/PostList";
import { useNavigate } from "react-router-dom";

function MainPage(props) {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate("/create")}>
                새 글 작성하기</button>
            <PostList />
        </div>
    );
    
}

export default MainPage;