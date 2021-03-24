import React from "react";
import "./sign-up.css";

const SignUp = () => {
  return (
    <div className="signup-page">
      <div className="a-box percentage40-item">
        <div className="a-box-inner">
          <h3>Create Account</h3>
          <form>
            <div className="form-group">
              <label>Username</label>
              <input className="form-control" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                placeholder="At least 6 characters"
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
              <input className="form-control" />
            </div>
            <div className="form-group">
              <a className="btn btn-primary btn-block wbdv-login" href="">
                Sign Up
              </a>
            </div>
            <div className="form-group URL-link">
              Already have an account?
              <a href="/login">Sign in</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
