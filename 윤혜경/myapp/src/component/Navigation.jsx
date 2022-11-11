import React from "react";
import { useNavigate } from "react-router-dom";
import MainPage from "../page/MainPage";

function Navigation(props) {
  const navigate = useNavigate();

  return (
    <div>
      <div onClick={() => navigate("/")}>
        My Blog!
      </div>
      <div onClick={() => navigate("/mypage")}>
        My Page!
      </div>
    </div>
  )
}

export default Navigation;