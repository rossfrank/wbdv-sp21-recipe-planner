import React, {useState, useEffect} from 'react'
import './homepage.css'
import RecipeCard from "./recipe-card";
import RecipeService from "../../services/recipe-service";

function Homepage() {
    const recipes = [
        {title: 'recipe1'},
        {title: 'recipe2'},
        {title: 'recipe3'},
        {title: 'recipe4'},
        {title: 'recipe5'},
        {title: 'recipe6'},
        {title: 'recipe7'},
        {title: 'recipe8'},
    ]

    const service = new RecipeService();
    const [recipe, setRecipe] = useState({});

    useEffect(()=>{
        service.findRecipeByRandom()
            .then((res)=>{setRecipe(res)})
    },[])

    return(
        <div>
            <div className="content-page">
                {console.log(recipe.recipes)}

                <div className="row row-cols-1 row-cols-md-5 m-4">
                    {recipes.map(recipe => <RecipeCard recipe={recipe} />)}

                </div>

            </div>
        </div>
    )
}

export default Homepage
