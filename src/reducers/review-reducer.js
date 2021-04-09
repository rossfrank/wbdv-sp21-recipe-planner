import React from 'react'

const initialState = {
    reviews: []
}

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_REVIEW':
            const newState = {
                ...state,
                reviews: [...state.reviews, action.review],
            }
            return newState
        case 'FIND_REVIEWS_FOR_RECIPE':
            const newStateA = {
                ...state,
                reviews: action.reviews,
            }
            return newStateA
        case 'FIND_REVIEWS_FOR_USER':
            const newStateB = {
                ...state,
                reviews: action.reviews,
            }
            return newStateB
        default:
            return state
    }
}

export default reviewReducer
