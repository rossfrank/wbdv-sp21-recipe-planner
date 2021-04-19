import React from 'react'

const initialState = {
    recipes: []
}

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FIND_RECIPE_BY_ID':
            const newState = {
                ...state,
                recipe: action.recipe,
            }
            return newState
        default:
            return state
        case 'FIND_RECIPES':
            const newStateA = {
                ...state,
                recipes: action.recipes,
            }
            return newStateA
    }
}

export default recipeReducer
