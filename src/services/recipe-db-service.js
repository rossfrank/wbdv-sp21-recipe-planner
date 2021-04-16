function RecipeDbService(){

    this.findRecipeDBById = findRecipeDBById;
    this.createRecipeDB = createRecipeDB;
    this.updateRecipeDB = updateRecipeDB;
    this.deleteRecipeDB = deleteRecipeDB;
    this.url = `${process.env.REACT_APP_SERVER_API}/api/recipes`
    const self = this



    function findRecipeDBById(rid){
        return fetch(`${self.url}/${rid}`)
            .then((res)=>{
                return res.json()
            })
    }

    function createRecipeDB(recipe){
        return fetch(`${self.url}`, {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(recipe)
        }).then((res)=>{
            return res.json()
        })
    }

    function updateRecipeDB(rid, recipe){
        return fetch(`${self.url}/${rid}`, {
            method: "PUT",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(recipe)
        }).then((res)=>{
            return res.json()
        })
    }

    function deleteRecipeDB(rid){
        return fetch(`${self.url}/${rid}`, {
            method: "DELETE"
        }).then((res)=>{
            return res.json()
        })
    }

}

export default RecipeDbService