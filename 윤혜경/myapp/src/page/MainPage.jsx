import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../week_02/PostList";

function MainPage(props) {

    const Button = styled.button`
        /* Adapt the colors based on primary prop */
        background: ${props => props.primary ? "palevioletred" : "white"};
        color: ${props => props.primary ? "white" : "palevioletred"};
        
        font-size: 0.8em;
        margin: 1em;
        padding: 0.25em 0.8em;
        border: 2px solid palevioletred;
        border-radius: 3px;
    `;

    const navigate = useNavigate();

    return (
        <div>
            <Button onClick={() => navigate("/create")}>
                새 글 작성하기</Button>
            <PostList />
        </div>
    );
    
}

export default MainPage;