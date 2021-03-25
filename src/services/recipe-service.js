function RecipeService() {

    this.findRecipeById = findRecipeById;
    this.findRecipeByKeyword = findRecipeByKeyword;
    this.findRecipeByRandom = findRecipeByRandom;
    this.findRecipeTopRating = findRecipeTopRating;
    this.url = `${process.env.REACT_APP_RECIPE_API}/recipes/`
    this.apiKey = process.env.REACT_APP_RECIPE_API_KEY
    const self = this

    // get recipe by id
    function findRecipeById(id) {
        return fetch(`${self.url}/${id}/information?apiKey=${self.apiKey}`)
            .then(function (res) {
                return res.json()
            })
    }

    // get recipe by search keyword
    function findRecipeByKeyword(keyword) {
        return fetch(`${self.url}/complexSearch?query=${keyword}&apiKey=${self.apiKey}`)
            .then(function (res) {
                return res.json()
            })
    }


    // get random recipe
    function findRecipeByRandom() {
        return fetch(`${self.url}/random?apiKey=${self.apiKey}`)
            .then(function (res) {
                return res.json()
            })
    }

    // top rating recipes
    function findRecipeTopRating(number) {
        return fetch(`${self.url}/complexSearch?sort=popularity&number=${number}&apiKey=${self.apiKey}`)
            .then(function (res) {
                return res.json()
            })
    }



}

export default RecipeService