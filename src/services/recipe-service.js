function RecipeService() {

    this.findRecipeById = findRecipeById;
    this.findRecipeByKeyword = findRecipeByKeyword;
    this.findRecipeByRandom = findRecipeByRandom;
    this.findRecipeTopRating = findRecipeTopRating;
    this.url = `https://${process.env.REACT_APP_RECIPE_API}/recipes`
    this.apiKey = process.env.REACT_APP_RECIPE_API_KEY
    const self = this

    // get recipe by id
    function findRecipeById(id) {
        return fetch(`${self.url}/${id}/information`,
            {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": process.env.REACT_APP_RECIPE_API_KEY,
                    "x-rapidapi-host": process.env.REACT_APP_RECIPE_API
                }
            })
            .then(function (res) {
                return res.json()
            })
    }

    // get recipe by search keyword
    function findRecipeByKeyword(keyword) {
        //TODO: Change limit of search
        // return fetch(`${self.url}/searchComplex?query=${keyword}&apiKey=${self.apiKey}`)
        return fetch(`${self.url}/searchComplex?limitLicense=null&offset=0&number=10&query=${keyword}`,
            {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": process.env.REACT_APP_RECIPE_API_KEY,
                    "x-rapidapi-host": process.env.REACT_APP_RECIPE_API
                }
            })
            .then(function (res) {
                return res.json()
            })
    }


    // get random recipe
    function findRecipeByRandom() {
        return fetch(`${self.url}/random?number=1`,
            {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": process.env.REACT_APP_RECIPE_API_KEY,
                    "x-rapidapi-host": process.env.REACT_APP_RECIPE_API
                }
            })
            .then(function (res) {
                return res.json()
            })
    }

    // top rating recipes
    function findRecipeTopRating(number) {
        return fetch(`${self.url}/searchComplex?limitLicense=null&offset=0&number=${number}`,
            {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": process.env.REACT_APP_RECIPE_API_KEY,
                    "x-rapidapi-host": process.env.REACT_APP_RECIPE_API
                }
            })
            .then(function (res) {
                return res.json()
            })
    }



}

export default RecipeService;
