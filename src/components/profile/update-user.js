import React, {useState} from "react";
import "./../sign-up/sign-up.css";
import userService from "../../services/user-service";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {useParams} from "react-router";

const UpdateUser = ({userCredential, updateUser}) => {

  const {user} = useParams()

  const [username, setUsername] = useState(userCredential.username);
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState(userCredential.email)
  const [validPassword, setValidPassword] = useState("")
  const [role, setRole] = useState(userCredential.role)
  const [passwordUpdate, setPasswordUpdate] = useState(false)

  const userUpdate = () => {
    const newUser = {
      name: username,
      email: email,
      password: (passwordUpdate ? password: null),
      role: role
    }
    updateUser(user, newUser)
  }

  return (
    <div className="signup-page">
      <div className="a-box percentage40-item">
        <div className="a-box-inner">
          <h3>Update User</h3>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" value={email} disabled={true}/>
            </div>
            <div className="form-group">
              <label>Name</label>
              <input className="form-control" value={username}
                     onChange={(e)=>setUsername(e.target.value)}/>
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
            <div>
              <label>
                <input type="checkbox"
                       name="password" onClick={(e) =>
                    setPasswordUpdate(e.target.checked)}/>
                Update Password
              </label>
            </div>
            <div className="form-check form-check-inline">
              <p>
                Role
              </p>
            </div>
            <div className="form-check form-check-inline">
              <label>
                <input type="radio" checked={role === "SHOPPER" ? "checked":""}
                       name="role" onChange={()=> setRole("SHOPPER")}/>
                As Shopper
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label>
                <input type="radio" checked={role === "CREATOR" ? "checked":""}
                       name="role" onChange={()=> setRole("CREATOR")}/>
                As Creator
              </label>
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block wbdv-login"
                 onClick={()=>{
                   if (validPassword !== password){
                     alert("Please verify your passwords are the same")
                   }else{
                     userUpdate();
                   }
                 }}>
                Update
              </button>
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
    updateUser: (user, userData) => {
      userService.updateUser(user, userData)
          .then((res) => {
            dispatch({
              type: "UPDATE_USER",
              payload: res
            });
          })
    }
  }
}

export default connect(stateToPropMapper, dispatchToPropMapper)(UpdateUser);
