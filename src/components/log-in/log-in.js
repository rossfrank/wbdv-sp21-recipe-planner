import React, {useState} from "react";
import "./log-in.css";
import {connect} from 'react-redux'
import UserService from "../../services/user-service";

const LogIn = ({userCredential, userLogin=()=>{alert("init")}}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")



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
              <input className="form-control" type="password"
                     onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
              <a className="btn btn-primary btn-block"
                 onClick={()=>{
                   userLogin({
                     "username": email,
                     "password": password
                   });
                 }}>
                Log In
              </a>
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
      console.log(login)

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
