import React from "react";

// 함수형 컴포넌트
function Welcome(props) {
  return <h1>안녕, {props.name}</h1>;
}
export default Welcome;

// 클래스형 컴포넌트
class Welcome extends React.Component {
  render() {
    return <h1>안녕, {this.props.name}</h1>;
  }
}

// const element_a = <div />; // DOM 태그를 사용한 element -> HTML div 태그로 인식
// const element = <Welcome name="abcd" />; // 사용자 정의 컴포넌트를 사용한 elememt -> Welcome이라는 리액트 컴포넌트로 인식
