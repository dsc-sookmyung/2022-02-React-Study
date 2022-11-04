import React from "react";
import { Link } from "react-router-dom";
import MainPage from "../page/MainPage";
import MyPage from "../page/MainPage"

const Navigation = () => {
  return (
    <nav className="wrapper">
      <div>
        <Link to='/MainPage'>
            My Blog!
        </Link>
        </div>
      <div>
        <Link to='/MyPage'>
            My Page
        </Link>
        </div>
    </nav>
  );
};

export default Navigation;