import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
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
                {myReviews &&
                myReviews.map(review =>
                    <div key={review.reviewId}>
                        {
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-1">
                                        {review.recipeName}
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <a className="stretched-link" href={`/recipes/${review.recipeId}`} />
                                        <div>
                                            <h6>Review</h6>
                                            <div>
                                                {review.text}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                )
                }
                {!myReviews &&
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