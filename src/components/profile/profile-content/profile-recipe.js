import React, {useState, useEffect} from 'react'
import '../../homepage/recipe-card.css'
import RecipeService from "../../../services/recipe-service";
import {connect} from "react-redux";


function ProfileRecipe({recipeId, findRecipeById, myRecipe}) {


    useEffect(()=>{
        console.log(recipeId)
        findRecipeById(recipeId)
    },[recipeId])


    return(
        <div>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-1">
                            {myRecipe.title}
                    </h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            <a className="stretched-link" href={`/recipes/${myRecipe.id}`}>
                                <img src={myRecipe.image} className="w-100" alt="..."/>
                            </a>
                        </div>
                        <div className="col-8">
                            <h6>Ingredients</h6>
                            <div>
                                {myRecipe.extendedIngredients !== undefined &&
                                myRecipe.extendedIngredients.map(ingredient=>{return `${ingredient.name}, `})
                                }
                            </div>
                            <small>
                                <span className="card-timer">
                                    <i className="far fa-clock" />
                                    {myRecipe.readyInMinutes} min
                                </span>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}


const stpm = (state) => {
    return {
        myRecipe: state.recipeReducer.recipe
    };
};
const dtpm = (dispatch) => {
    return {
        findRecipeById: (recipeId) => {
            (new RecipeService())
                .findRecipeById(recipeId)
                .then(theRecipe =>
                    dispatch({
                        type: "FIND_RECIPE_BY_ID",
                        recipe: theRecipe
                    }))
        }
    };
}

export default connect(stpm, dtpm)(ProfileRecipe);