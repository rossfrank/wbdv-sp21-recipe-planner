import recipeDbService from "./recipe-db-service"

const RECIPE_HOST = process.env.REACT_APP_RECIPE_API;
const RECIPE_API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
const RECIPE_URL = `https://${RECIPE_HOST}/recipes`

const GET_HEADER = {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": RECIPE_API_KEY,
        "x-rapidapi-host": RECIPE_HOST
    }
}

export const findRecipeById = id => {
    return fetch(`${RECIPE_URL}/${id}/information`, GET_HEADER)
        .then(response => response.json())
}

export const findRecipeByKeyword = keyword =>
    fetch(`${RECIPE_URL}/searchComplex?query=${keyword}&apiKey=${RECIPE_API_KEY}`, GET_HEADER)
        .then(response => response.json())

export const findRecipeByRandom = () =>
    fetch(`${RECIPE_URL}/random?number=1`, GET_HEADER)
        .then(response => response.json())

export const findRecipeTopRating = number =>
    fetch(`${RECIPE_URL}/searchComplex?limitLicense=null&offset=0&number=${number}`, GET_HEADER)
        .then(response => response.json())

export const findRecipeByIdBulk = ids => {
    let db = []
    let spoon = []
    let result = []
    ids.forEach(id => {
        if (id.startsWith("rcp")) {
            db = [...db, id]
        } else {
            spoon = [...spoon, id]
        }
    })
    return fetch(`${RECIPE_URL}/informationBulk?ids=${spoon.join("%2C")}`, GET_HEADER)
        .then(response => recipeDbService.findRecipeDBByIdBulk(db).then(res => {
            return response.json().then(s => {
                console.log(s)
                console.log(res)
                return[...s, ...res]
            })
        }))
}


const api = {
    findRecipeById,
    findRecipeByKeyword,
    findRecipeByRandom,
    findRecipeTopRating,
    findRecipeByIdBulk
}

export default api
