import React, { useEffect, useState } from "react";
import "./recipe-profile.css";
import User from "./pic/user.jpeg";
import { connect } from "react-redux";
import reviewService from "../../services/review-service"
import { useParams } from "react-router";

const Reviews = ({
  reviews = [],
  createReview,
  findReviewsForRecipe,
  findReviewsForUser
}) => {
    const { recipeId } = useParams()
    useEffect(() => {
      findReviewsForRecipe(recipeId)
  }, [recipeId])
  console.log(reviews)
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
            <a className="mt-0" href="/profile">
              User1
            </a>
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
            <a className="mt-0" href="/profile">
              User2
            </a>
            <p>
              I love this dish so much. I love this dish so much. I love this
              dish so much. I love this dish so much. I love this dish so much.
            </p>
          </div>
        </div>
      </ul>
      <div className="percentage70-item center-element">
        <textarea
          placeholder="Please leave your review here."
          className="form-control"
        ></textarea>
        <br />
        <button className="btn btn-warning float-right">Submit</button>
      </div>
    </>
  );
};

const stpm = (state) => {
  return {
    reviews: state.reviewReducer.reviews,
  };
};

const dtpm = (dispatch) => {
  return {
    createReview: (recipeId) => {
      reviewService
        .createReview(recipeId, {
          userId: "1",
          text: "New Review",
        })
        .then((theReview) =>
          dispatch({
            type: "CREATE_REVIEW",
            review: theReview,
          })
        );
    },
    findReviewsForRecipe: (recipeId) =>
      reviewService.findReviewForRecipe(recipeId).then((theReviews) =>
        dispatch({
          type: "FIND_REVIEWS_FOR_RECIPE",
          reviews: theReviews,
        })
      ),
    findReviewsForUser: (userId) =>
      reviewService.findReviewForUser(userId).then((theReviews) =>
        dispatch({
          type: "FIND_REVIEWS_FOR_USER",
          reviews: theReviews,
        })
      ),
  };
};

export default connect(stpm, dtpm)(Reviews);
