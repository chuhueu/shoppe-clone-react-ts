import React, { useState } from "react";
import FacebookLogin, { ReactFacebookLoginInfo } from "react-facebook-login";
import { useHistory } from "react-router-dom";
const Facebook = () => {
  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();
  const responseFacebook = (response: ReactFacebookLoginInfo) => {
    console.log(response);
  };
  const componentClicked = () => {
    console.log("component clicked");
  };
  return (
    <div>
      <FacebookLogin
        appId="480873606742394"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
};
export default Facebook;
