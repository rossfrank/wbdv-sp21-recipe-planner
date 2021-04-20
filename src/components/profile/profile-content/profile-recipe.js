import React from 'react'
import '../../homepage/recipe-card.css'
import {Link} from "react-router-dom";


function ProfileRecipe({recipe , ingredients}) {
    return(
        <div className="col">
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-1">
                        <Link className="card-title"
                              to={`/details/${recipe.id}`}>
                            {recipe.title}
                        </Link>
                    </h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            <img src={recipe.image} className="w-100" alt="..."/>
                        </div>
                        <div className="col-8">
                            <h6 className="card-subtitle">Ingredients</h6>
                            <div className="card-summary">
                                {ingredients !== undefined &&
                                ingredients.map(i => i.name).join(', ')
                                }
                            </div>
                            <small>
                                <span className="card-timer">
                                    <i className="far fa-clock " />
                                    {recipe.readyInMinutes} min
                                </span>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default ProfileRecipe;