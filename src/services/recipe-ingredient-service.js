function RecipeIngredientService(){

    this.findRecipeIngredientsForRecipe = findRecipeIngredientsForRecipe;
    this.createRecipeIngredient = createRecipeIngredient;
    this.updateRecipeIngredient = updateRecipeIngredient;
    this.deleteRecipeIngredient = deleteRecipeIngredient;
    this.url = `${process.env.REACT_APP_SERVER_API}/api`
    const self = this


    function findRecipeIngredientsForRecipe(recipeId){
        return fetch(`${self.url}/recipes/${recipeId}/ingredients`)
            .then((res)=>{
                return res.json()
            })
    }


    function createRecipeIngredient(recipeId, ri){
        return fetch(`${self.url}/recipes/${recipeId}/ingredients`, {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(ri)
        }).then((res)=>{
            return res.json()
        })
    }

    function updateRecipeIngredient(id, ri){
        return fetch(`${self.url}/ingredients/${id}`, {
            method: "PUT",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(ri)
        }).then((res)=>{
            return res.json()
        })
    }

    function deleteRecipeIngredient(id){
        return fetch(`${self.url}/ingredients/${id}`, {
            method: "DELETE"
        }).then((res)=>{
            return res.json()
        })
    }


}

export default RecipeIngredientService