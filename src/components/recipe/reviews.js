import React, { useEffect, useState } from "react";
import "./recipe-profile.css";
import User from "./pic/user.jpeg";
import { connect } from "react-redux";
import reviewService from "../../services/review-service";
import {useParams} from "react-router";
import {Link} from "react-router-dom";

const Reviews = ({
  user,
  reviews = [],
  recipe="",
  createReview,
  findReviewsForRecipe,
}) => {
  const { recipeId } = useParams();
  const [newReview, setNewReview] = useState("");
  useEffect(() => {
      findReviewsForRecipe(recipeId)
  }, [recipeId])
  return (
    <div>
      <div className="row center-element percentage70-item">
        <div className="col-8">
          <h4>Reviews</h4>
        </div>
      </div>
      <ul className="percentage70-item center-element">
          {reviews && (reviews.length >= 1) &&
          reviews.map((review) => {
              return (
                  <div key={review.id}>
                      <div className="media">
                          <Link to={`/profile/${review.userId}`}>
                              <img
                                  src={User}
                                  className="align-self-start mr-3 user-photo"
                                  alt="..."
                              />
                          </Link>
                          <div className="media-body">
                              <Link className="mt-0" to={`/profile/${review.user.id}`}>
                                  {review.user.email}
                              </Link>
                              <p>{review.text}</p>
                          </div>
                      </div>
                  </div>
              );
          })}
      </ul>
      <div className="percentage70-item center-element">
        <textarea
          placeholder="Please leave your review here."
          className="form-control"
          onChange={(e) => setNewReview(e.target.value)}
          value={newReview} />
        <br />
        <button
          className="btn btn-warning float-right"
          onClick={() => {
            if (user.isAuthenticated) {
              createReview(user, recipe, recipeId, newReview);
              setNewReview("");
            } else {
              alert("Please Log in first!");
            }
          }}
        >
          Submit
        </button>
      </div>
    </div>
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
    createReview: (user, recipe, recipeId, newReview) => {
      reviewService
        .createReview(recipeId, {
          text: newReview,
          user: {
              id: user.userId,
          },
          user: {id: user.userId},
          recipeName: recipe,
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
