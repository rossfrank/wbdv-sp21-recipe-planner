 import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
 import RecipeService from "../../services/recipe-service";
 import ProfileRecipe from "./profile-recipe";

const ProfileCards = ({}) => {

    const {tab} = useParams();
    const service = new RecipeService()
    const [homeRecipes, setHomeRecipes] = useState([]);

    useEffect(()=>{
        service.findRecipeTopRating(2)
            .then((res)=>{
                setHomeRecipes(res.results)
            })
    },[])

    return(
        <div className="mt-4">
            <div className="container">
                {homeRecipes &&
                    homeRecipes.map(recipe =>
                        <div key={recipe.id}>
                            {
                                (tab === "Favorites" || tab === undefined) &&
                                <ProfileRecipe recipe={recipe} key={recipe.id}>
                                    <p>
                                        {recipe.title}
                                    </p>
                                </ProfileRecipe>
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}
 /*<div key={recipe.id}>
          <div className="card flex-column align-items-start">
              <div className="card-header d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{recipe.title}</h5>
                  <small>{recipe.readyInMinutes} minutes</small>
              </div>
              <div className="card-body">
                  <p className="mb-1">Content</p>
                  <small>{`${recipe.title} ${tab}`}</small>
              </div>
          </div>
          <br/>
      </div>*/
export default ProfileCards
