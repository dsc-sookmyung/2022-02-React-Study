import React from "react";

function Navigation(props) {

  return (
    <div id="root">
      <a href="/">
        <div>My Blog!</div>
      </a>
      <a href="/mypage">
        <div>
          My Page!
        </div>
      </a>
    </div>
  )
}

export default Navigation;