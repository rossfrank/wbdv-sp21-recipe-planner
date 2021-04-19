import React, {useState, useEffect} from 'react'
import './homepage.css'
import RecipeCard from "./recipe-card";
import recipeService from "../../services/recipe-service";
import {loadFromLocalStorage} from "../../reducers/local-storage-util";

function Homepage() {

    const [homeRecipes, setHomeRecipes] = useState([]);

    useEffect(()=>{

        const persistedState = loadFromLocalStorage();
        recipeService.findRecipeTopRating(2)
            .then((res)=>
                recipeService.findRecipeByIdBulk(res.results.map(r => r.id))
                    .then(x => setHomeRecipes(x))
            )
    },[])

    return(
        <div>
            <div className="content-page">
                <div className="row row-cols-1 row-cols-md-4 m-4">
                    {
                        homeRecipes !== undefined &&
                        homeRecipes.map(r => <RecipeCard recipe={r} key={r.id}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Homepage
