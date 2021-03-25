const RECIPES_URL =
    'https://api.spoonacular.com/recipes'

const AUTH_INFO = 'information?apiKey=6b5ad71aebdd4d25a13e1e1352e9f3ae&includeNutrition=true'
export const findRecipeById = (recipeId) =>
    fetch(`${RECIPES_URL}/${recipeId}/${AUTH_INFO}`).then((response) =>
        response.json()
    )
    
const api = {
    findRecipeById,
}

export default api
