import React from 'react'
import '../../homepage/recipe-card.css'


function ProfileRecipe({recipe}) {

    return(
        <div>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-1">
                            {recipe.title}
                    </h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            <a className="stretched-link" href={`/recipes/${recipe.id}`}>
                                <img src={recipe.image} className="w-100" alt="..."/>
                            </a>
                        </div>
                        <div className="col-8">
                            <h6>Ingredients</h6>
                            <div>
                                {recipe.extendedIngredients !== undefined &&
                                recipe.extendedIngredients.map(ingredient=>{return `${ingredient.name}, `})
                                }
                            </div>
                            <small>
                                <span className="card-timer">
                                    <i className="far fa-clock" />
                                    {recipe.readyInMinutes} min
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