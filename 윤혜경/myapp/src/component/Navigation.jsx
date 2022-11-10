import React from "react";
import { Link, useHistory } from "react-router-dom";
import MainPage from "../page/MainPage";
import MyPage from "../page/MyPage";

function Navigation(props) {
  const navigate = useHistory();

  return (
    <div>
      <div onClick={() => navigate("mainpage")}>
        My Blog!
      </div>
      <div onClick={() => navigate("mypage")}>
        My Page!
      </div>
    </div>
  )
}

export default Navigation;