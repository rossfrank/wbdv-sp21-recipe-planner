import React, {useState} from "react";
import "./sign-up.css";
import userService from "../../services/user-service";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const SignUp = ({userLogin}) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [validPassword, setValidPassword] = useState("")
  const [role, setRole] = useState("")


  function ValidateEmail(email)
  {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    {
      return true;
    }
    alert("You have entered an invalid email address!")
    return false;
  }

  const userRegister = ()=>{
    userService.userRegister({
      email: email,
      name: username,
      password: password,
      role: role,
    })
        .then((res)=>{
          if (res["status"] === 200){
            userLogin({
              email: email,
              password: password
            })
          }else {
            alert("Email already registered!")
          }
        })
  }

  return (
    <div className="signup-page">
      <div className="a-box percentage40-item">
        <div className="a-box-inner">
          <h3>Create Account</h3>
          <form>
            <div className="form-group">
              <label>Username</label>
              <input className="form-control"
                     onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control"
                     onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control" type="password"
                placeholder="At least 6 characters"
                onChange={(e)=>setPassword(e.target.value)}
              />
              <div className="info-box">
                <i className="fas fa-info-circle col-1" />
                <div className="col-11 pwd-info">
                  Passwords needs at least 6 characters.
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Verify Password</label>
              <input className="form-control" type="password"
                     onChange={(e)=>setValidPassword(e.target.value)}/>
            </div>

            <div className="form-check form-check-inline">
              <label>
                <input type="radio"
                       name="group1" onClick={()=> setRole("SHOPPER")}/>
                As Shopper
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label>
                <input type="radio"
                       name="group1" onClick={()=> setRole("CREATOR")}/>
                As Creator
              </label>
            </div>


            <div className="form-group">
              <Link className="btn btn-primary btn-block wbdv-login"
                 onClick={()=>{
                   if (validPassword !== password){
                     alert("Please verify your passwords.")
                   }else if(ValidateEmail(email)){
                     userRegister();
                   }
                 }}>
                Sign Up
              </Link>
            </div>
            <div className="form-group URL-link">
              Already have an account?
              <Link to="/login">Sign in</Link>
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
            dispatch({
              type: "USER_LOGIN",
              payload: res
            });
          })
    }
  }
}

export default connect(stateToPropMapper, dispatchToPropMapper)(SignUp);
