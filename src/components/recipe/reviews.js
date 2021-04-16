import React, { useEffect, useState } from "react";
import "./recipe-profile.css";
import User from "./pic/user.jpeg";
import { connect } from "react-redux";
import reviewService from "../../services/review-service";
import { useParams } from "react-router";

const Reviews = ({
  user,
  reviews = [],
  createReview,
  findReviewsForRecipe,
  findReviewsForUser,
}) => {
  const { recipeId } = useParams();
  const [newReview, setNewReview] = useState("");
  useEffect(() => {
    reviews = findReviewsForRecipe(recipeId);
  }, [recipeId, newReview]);
  console.log(reviews);
  return (
    <>
      <div className="row center-element percentage70-item">
        <div className="col-8">
          <h4>Reviews</h4>
        </div>
      </div>
      <ul className="percentage70-item center-element">
        {
          reviews.map((review) => {
            return (
              <div key={review[0]}>
                <div className="media">
                  <img
                    src={User}
                    className="align-self-start mr-3 user-photo"
                    alt="..."
                  />
                  <div className="media-body">
                    <a className="mt-0" href="/profile">
                      {review[4]}
                    </a>
                    <p>{review[2]}</p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </ul>
      <div className="percentage70-item center-element">
        <textarea
          placeholder="Please leave your review here."
          className="form-control"
          onChange={(e) => setNewReview(e.target.value)}
          value={newReview}
        ></textarea>
        <br />
        <button
          className="btn btn-warning float-right"
          onClick={() => {
            createReview(user, recipeId, newReview);
            setNewReview("");
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

const stpm = (state) => {
  return {
    reviews: state.reviewReducer.reviews,
    user: state.userReducer.userCredential,
  };
};

const dtpm = (dispatch) => {
  return {
    createReview: (user, recipeId, newReview) => {
      reviewService
        .createReview(recipeId, {
          userId: user.userId,
          text: newReview,
          userName: user.name,
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
