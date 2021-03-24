import React from 'react'

const initialState = {
    recipe: []
}

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FIND_RECIPE_BY_ID':
            const newState = {
                ...state,
                recipe: action.recipe,
            }
            console.log(newState)
            return newState
        default:
            return state
    }
}

export default recipeReducer
