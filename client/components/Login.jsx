import React from 'react';
import ReactModal from 'react-modal';
import { AiFillApple }  from "react-icons/ai";
import { FaFacebook }  from "react-icons/fa";


let Login = function (props) {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)
  return (
    <div className="loginPrompt">
    <div className="welcome">Welcome Back</div>
    <div className="outside">Let's get you outside.</div>
    <div className="apple"><h3 className="appleText"><span className="logo"><AiFillApple color="white" size="18px" /></span>Continue with Apple</h3></div>
    <div className="facebook"><h3 className="facebookText"><span className="facebookLogo"><FaFacebook color="white" size="20px"/></span>Continue with Facebook</h3></div>
    <div className="or"><div className="orSpan">or</div></div>
    {showResults ? <div className="loginPopup">
      <input className="inputPopup input-1" placeholder="Email address"></input>
      <div><input className="inputPopup input-1" placeholder="Password"></input></div>
    </div> : null}
    <div onClick={onClick} className="email"><h3 className="emailText">Sign in with your email address</h3></div>
    <div className="signup">
    <p className="haveAccount">Don't have a Hipcamp account? <span className="signupText">Sign up!</span></p>
    </div>

  </div>
  )


}

export default Login