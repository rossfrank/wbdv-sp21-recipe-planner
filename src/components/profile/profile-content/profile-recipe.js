import React, {useState, useEffect} from 'react'
import '../../homepage/recipe-card.css'
import recipeService from "../../../services/recipe-service";
import {connect} from "react-redux";


function ProfileRecipe({recipeId}) {

    const [recipeDetail, setRecipeDetail] = useState({})

    useEffect(()=>{
        recipeService.findRecipeById(recipeId)
            .then((res)=>setRecipeDetail(res))
    },[recipeId])


    return(
        <div>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-1">
                            {recipeDetail.title}
                    </h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            <a className="stretched-link" href={`/recipes/${recipeDetail.id}`}>
                                <img src={recipeDetail.image} className="w-100" alt="..."/>
                            </a>
                        </div>
                        <div className="col-8">
                            <h6>Ingredients</h6>
                            <div>
                                {recipeDetail.extendedIngredients !== undefined &&
                                recipeDetail.extendedIngredients.map(ingredient=>{return `${ingredient.name}, `})
                                }
                            </div>
                            <small>
                                <span className="card-timer">
                                    <i className="far fa-clock" />
                                    {recipeDetail.readyInMinutes} min
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

export default ProfileRecipe;