const INGREDIENTS_URL = `${process.env.REACT_APP_SERVER_API}/api`

export const findRecipeIngredientsForRecipe = (recipeId) =>
        fetch(`${INGREDIENTS_URL}/recipes/${recipeId}/ingredients`)
            .then((res)=>
                res.json()
            )

export const createRecipeIngredient = (recipeId, ri) =>
        fetch(`${INGREDIENTS_URL}/recipes/${recipeId}/ingredients`, {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(ri)
        }).then((res)=>
            res.json()
        )

export const updateRecipeIngredient = (id, ri) =>
        fetch(`${INGREDIENTS_URL}/ingredients/${id}`, {
            method: "PUT",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(ri)
        }).then((res)=>
            res.json()
        )

 export const deleteRecipeIngredient = (id) =>
     fetch(`${INGREDIENTS_URL}/ingredients/${id}`, {
            method: "DELETE"
        }).then((res)=>
            res.json()
        )

const api = {
    findRecipeIngredientsForRecipe,
    createRecipeIngredient,
    updateRecipeIngredient,
    deleteRecipeIngredient
}

export default api