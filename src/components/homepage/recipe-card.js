import React, {useState, useEffect} from 'react'
import './recipe-card.css'
import RecipeService from "../../services/recipe-service";
import {Link} from "react-router-dom";


function RecipeCard({recipe={}}) {

    const service = new RecipeService();
    const [recipeDetail, setRecipeDetail] = useState({})

    useEffect(()=>{
        service.findRecipeById(recipe.id)
            .then((res)=>setRecipeDetail(res))
    },[])


    return(
        <div className="col mb-4">
            <div className="card h-100">
                <img src={recipeDetail.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <Link className="card-title"
                          to={`/recipes/${recipeDetail.id}`}>
                        {recipeDetail.title}
                    </Link>

                    <h6 className="card-subtitle">Ingredients</h6>
                    <div className="card-summary">
                        {recipeDetail.extendedIngredients !== undefined &&
                        recipeDetail.extendedIngredients.map(ingredient=>{return `${ingredient.name}, `})
                        }
                    </div>

                    <span className="card-timer">
                        <i className="far fa-clock " />
                        {recipeDetail.readyInMinutes} min
                    </span>
                </div>
            </div>
        </div>
    )
}
export default RecipeCard