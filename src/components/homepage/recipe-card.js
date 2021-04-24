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
                    <div className="card-summary">
                        {recipe.extendedIngredients.length > 0 &&
                        recipe.extendedIngredients.map(i => i.name).join(', ')
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