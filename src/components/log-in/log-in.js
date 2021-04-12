import React, {useState} from "react";
import {Route, Redirect, NavLink, Link} from "react-router-dom";
import "./log-in.css";
import {connect} from 'react-redux'
import UserService from "../../services/user-service";
import Homepage from "../homepage/homepage";

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
              ${ ((clickLogIn) && (userCredential["Authorization"].length < 8)) ? "is-invalid": "" }`}
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
                   console.log(userCredential["Authorization"]);
                 }}>
                Log In
              </Link>
            </div>
            <div className="form-group URL-link">
              Do not have an account?
              <a href="/signup">Create an account</a>
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
  const userService = new UserService();
  return {
    userLogin: (login) => {

      userService.userLogin(login)
          .then((res) => {
            dispatch({
              type: "USER_LOGIN",
              payload: res
            });
          })
    }
  }
}

export default connect(stateToPropMapper, dispatchToPropMapper)(LogIn)
