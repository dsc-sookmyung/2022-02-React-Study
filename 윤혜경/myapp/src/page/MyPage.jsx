import { React, useState } from "react";
import LoginGoogle from '../login/LoginGoogle';
import Profile from '../login/Profile';

function MyPage() {

    const [isLogin, setIsLogin] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    return (
        <>
            {!isLogin
                ? <LoginGoogle setUserInfo={setUserInfo} setIsLogin={setIsLogin} />
                : <Profile userInfo={userInfo} />
            }
        </>
    );
}

export default MyPage;