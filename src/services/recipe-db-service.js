const RECIPES_URL = `${process.env.REACT_APP_SERVER_API}/api/recipes`

export const findRecipeDBById = (rid)=>
        fetch(`${RECIPES_URL}/${rid}`)
            .then((res)=>
                res.json()
            )


export const createRecipeDB = (recipe) =>
        fetch(`${RECIPES_URL}`, {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(recipe)
        }).then((res)=>
            res.json()
        )


export const updateRecipeDB = (rid, recipe) =>
        fetch(`${RECIPES_URL}/${rid}`, {
            method: "PUT",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(recipe)
        }).then((res)=>
            res.json()
        )


export const deleteRecipeDB = (rid) =>
        fetch(`${RECIPES_URL}/${rid}`, {
            method: "DELETE"
        }).then((res)=>
            res.json()
        )

const api = {
    findRecipeDBById,
    createRecipeDB,
    updateRecipeDB,
    deleteRecipeDB
}


export default api