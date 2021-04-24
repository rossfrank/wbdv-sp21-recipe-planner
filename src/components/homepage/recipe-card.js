import React from 'react'
import './recipe-card.css'
import {Link} from "react-router-dom";
import Ingredients from "../recipe/ingredients";


function RecipeCard({recipe={}}) {

    return(
        <div className="col mb-4">
            <div className="card h-100">
                <img src={recipe.image} className="card-img-top" alt="..."  width="500" height="270"/>
                <div className="card-body">
                    <Link className="card-title"
                          to={`/details/${recipe.id}`}>
                        {recipe.title}
                    </Link>
                    <h6 className="card-subtitle">Ingredients</h6>
                    {
                        (recipe["id"].toString().substring(0, 3)!=="rcp") &&
                        <div className="card-summary">
                            {recipe.extendedIngredients !== undefined &&
                            recipe.extendedIngredients.map(ingredient=>{return `${ingredient.name}, `})
                            }
                        </div>
                    }
                    {
                        (recipe["id"].toString().substring(0, 3) ==="rcp") &&
                        <div className="card-summary">
                            {recipe.ingredientList !== undefined &&
                            recipe.ingredientList.map(ingredient=>{return `${ingredient.name}, `})
                            }
                        </div>
                    }

                    <span className="card-timer">
                        <i className="far fa-clock " />
                        {recipe.readyInMinutes} min
                    </span>
                </div>
            </div>
        </div>
    )
}
export default RecipeCard