import { React, useCallback } from "react";
import GoogleLogin from 'react-google-login';

function LoginGoogle(setUserInfo, setIsLogin) {

    const googleLogin = useCallback((response) => {
        const userInfo = {
            profileImg: response.profileObj.imageUrl,
            email: response.profileObj.email,
            name: response.profileObj.name
        }
        setUserInfo(userInfo);
        setIsLogin(true);
    }, [])

    return (
        <GoogleLogin
            clientId="758738058855-a203bv78faa4f8dft0tp5od6coelqhgu.apps.googleusercontent.com"
            buttonText="구글로 로그인하기"
            onSuccess={googleLogin}
            onFailure={(res) => console.log(res)}
            cookiePolicy={'single_host_origin'}/>
    );
}

export default LoginGoogle;