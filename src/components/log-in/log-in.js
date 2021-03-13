import React from "react";
import "./log-in.css";

const LogIn = () => {
  return (
    <div className="a-box percentage40-item">
        <div className="a-box-inner">
      <h3>Log In</h3>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input className="form-control"/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input className="form-control"/>
        </div>
        <div className="form-group">
            <a className="btn btn-primary btn-block" href="">
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
  );
};

export default LogIn;
