import React, {useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import {connect} from "react-redux";
import reviewService from "../../../services/review-service";

const Reviews = (
    {
        myReviews,
        findReviewForUser}) => {
    const {user} = useParams();

    useEffect(()=>{
        findReviewForUser(user)
    },[user])

    return(
        <div className="mt-4">
            <div className="container">
                {myReviews.length > 0 &&
                myReviews.map(review =>
                    <div key={review.reviewId}>
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <Link className="card-title" to={`/details/${review.recipeId}`}>
                                        <h5 className="mb-1">
                                            {review.recipeName}
                                        </h5>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div>
                                            <h6>Review</h6>
                                            <div>
                                                {review.text}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                )
                }
                {myReviews.length === 0 &&
                <p>
                    No Reviews written
                </p>
                }
            </div>
        </div>
    )
}

const stpm = (state) => {
    return {
        myReviews: state.reviewReducer.reviews
    };
};
const dtpm = (dispatch) => {
    return {
        findReviewForUser: (userId) => {
            reviewService.findReviewForUser(userId)
                .then(theReviews =>
                    dispatch({
                        type: "FIND_REVIEWS_FOR_USER",
                        reviews: theReviews
                    }))
        }
    };
}

export default connect(stpm, dtpm)(Reviews);