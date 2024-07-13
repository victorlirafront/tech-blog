import { GoogleLogout } from 'react-google-login';
const clientId = '1038532450717-5sjt921eagtenq8oe19at9548fq4rpea.apps.googleusercontent.com';

function Logout() {
  const onSuccess = function () {
    console.log('Logout');
  };

  return (
    <div id="signOutButton">
      <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={onSuccess} />
    </div>
  );
}

export default Logout;
