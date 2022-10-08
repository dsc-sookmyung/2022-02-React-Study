import React from "react";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    // 현재 컴포넌트의 state를 생성자에서 정의
    this.state = {
      liked: false,
    };
    this.setState({
      name: "Mike",
    });
  }
}
