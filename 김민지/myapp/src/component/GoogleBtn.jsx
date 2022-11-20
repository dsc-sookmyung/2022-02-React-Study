import { GoogleLogin } from "@leecheuk/react-google-login";

function GoogleBtn() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId="194829055407-l327u9iqun69ol3sb3s0r267t2vq71gn.apps.googleusercontent.com"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
}

export default GoogleBtn;
