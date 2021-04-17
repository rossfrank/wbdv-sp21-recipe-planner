import React from 'react'
import './recipe-card.css'
import {Link} from "react-router-dom";


function RecipeCard({recipe={}}) {

    return(
        <div className="col mb-4">
            <div className="card h-100">
                <img src={recipe.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <Link className="card-title"
                          to={`/recipes/${recipe.id}`}>
                        {recipe.title}
                    </Link>
                    <h6 className="card-subtitle">Ingredients</h6>
                    <div className="card-summary">
                        {recipe.extendedIngredients !== undefined &&
                        recipe.extendedIngredients.map(ingredient=>{return `${ingredient.name}, `})
                        }
                    </div>
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