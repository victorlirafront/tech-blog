import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
const clientId = '1038532450717-5sjt921eagtenq8oe19at9548fq4rpea.apps.googleusercontent.com';

function Login() {
  const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log('testte');
    console.log(response);
    // Aqui você pode tratar a resposta conforme necessário
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
