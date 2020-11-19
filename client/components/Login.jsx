import React from 'react';
import ReactModal from 'react-modal';

let Login = function (props) {
  return (
    <div className="loginPrompt">
    <div className="welcome">Welcome Back</div>
    <div className="outside">Let's get you outside</div>
    <div className="apple"><h3 className="appleText">Continue with Apple</h3></div>
    <div className="facebook"><h3 className="facebookText">Continue with Facebook</h3></div>
    <div className="or"><span className="orSpan">or</span></div>
    <div className="email"><h3 className="emailText">Sign in with your email address</h3></div>
    <p className="haveAccount">Don't have a Hipcamp account? <span className="signupText">Sign up!</span></p>
  </div>
  )


}

export default Login