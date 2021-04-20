const initialState = {
    recipes: []
}

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FIND_RECIPE_BY_ID':
            return {
                ...state,
                recipe: action.recipe,
            }
        default:
            return state
        case 'FIND_RECIPES':
            return {
                ...state,
                recipes: action.recipes,
            }
    }
}

export default recipeReducer
