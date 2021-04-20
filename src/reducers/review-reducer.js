const initialState = {
    reviews: []
}

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_REVIEW':
            return {
                ...state,
                reviews: [...state.reviews, action.review],
            }
        case 'FIND_REVIEWS_FOR_RECIPE':
            return {
                ...state,
                reviews: action.reviews,
            }
        case 'FIND_REVIEWS_FOR_USER':
            return {
                ...state,
                reviews: action.reviews,
            }
        default:
            return state
    }
}

export default reviewReducer
