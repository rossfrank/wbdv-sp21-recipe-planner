import React from "react";
import "./recipe-profile.css";
import User from "./pic/user.jpeg";

const Reviews = () => {
  return (
    <>
      <div className="row center-element percentage70-item">
        <div className="col-8">
          <h4>Reviews</h4>
        </div>
      </div>
      <ul className="percentage70-item center-element">
        <div className="media">
          <img
            src={User}
            className="align-self-start mr-3 user-photo"
            alt="..."
          />
          <div className="media-body">
            <a className="mt-0">User1</a>
            <p>This dish is healthy and super delicious.</p>
          </div>
        </div>

        <div className="media">
          <img
            src={User}
            className="align-self-start mr-3 user-photo"
            alt="..."
          />
          <div className="media-body">
            <a className="mt-0">User2</a>
            <p>
              I love this dish so much. I love this dish so much. I love this
              dish so much. I love this dish so much. I love this dish so much.
            </p>
          </div>
        </div>
      </ul>
    </>
  );
};

export default Reviews;
