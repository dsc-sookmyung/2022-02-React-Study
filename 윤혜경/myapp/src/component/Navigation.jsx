import React from "react";
import styled from "styled-components";

function Navigation(props) {

  const Title = styled.div`
    font-size: 1.2em;
    text-align: center;
    float: left;
    width: 50%;
    color: palevioletred;
  `;

  const Wrapper = styled.div`
    height: 3em;
    line-height: 3em;
    background: papayawhip;
  `;

  return (
    <Wrapper id="root">
        <a href="/">
          <Title>My Blog!</Title>
        </a>
        <a href="/mypage">
          <Title>My Page!</Title>
        </a>
    </Wrapper>
  )
  
}

export default Navigation;