import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./log-in.css";
import {connect} from 'react-redux'
import userService from "../../services/user-service";

const LogIn = ({userCredential, userLogin=()=>{alert("init")}}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clickLogIn, setClickLogIn] = useState(false)

  return (
    <div className="login-page">
      <div className="a-box percentage40-item">
        <div className="a-box-inner">
          <h3>Log In</h3>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control"
                     onChange={(event)=>setEmail(event.target.value)}/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input className={`form-control 
              ${ ((clickLogIn) && (userCredential["isAuthenticated"])) ? "is-invalid": "" }`}
                     type="password"
                     onChange={(e)=>setPassword(e.target.value)}/>
                <div id="validationServer03Feedback" className="invalid-feedback">
                    Please provide valid username and password.
                </div>
            </div>
            <div className="form-group">
              <Link className="btn btn-primary btn-block"
                 to={`${ userCredential["isAuthenticated"]? "/": "/login"}`}
                 onClick={()=>{
                   userLogin({
                     "email": email,
                     "password": password
                   });
                   setClickLogIn(true);
                 }}>
                Log In
              </Link>
            </div>
            <div className="form-group URL-link">
              Do not have an account?
              <Link to="/registration">Create an account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const stateToPropMapper = (state) => {
  return {
    userCredential: state.userReducer.userCredential
  }
}

const dispatchToPropMapper = (dispatch)=> {
  return {
    userLogin: (login) => {
      userService.userLogin(login)
          .then((res) => {
              if (res["status"] === 200){
                  dispatch({
                      type: "USER_LOGIN",
                      payload: res
                  });
              }else {
                  alert("Please check email and password")
              }
          })
    }
  }
}

export default connect(stateToPropMapper, dispatchToPropMapper)(LogIn)
