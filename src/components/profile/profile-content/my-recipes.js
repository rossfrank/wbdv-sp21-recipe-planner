import React, {useEffect, useState} from 'react'
import ProfileRecipe from "./../profile-content/profile-recipe";
import {useParams} from "react-router-dom";
import recipeService from "../../../services/recipe-db-service";

const MyRecipes = ({}) => {
    const {user} = useParams();
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        recipeService.findRecipeForUser(user)
            .then(recipe => setRecipes(recipe))
    },[user])

    return(
        <div className="mt-4">
            <div className="container">
                {recipes &&
                recipes.map(recipe =>
                    <div key={recipe.id}>
                        {
                            <ProfileRecipe recipe={recipe} ingredients={JSON.parse(recipe.ingredients)} />
                        }
                    </div>
                )
                }
                {!recipes &&
                <p>
                    No Recipes Available
                </p>
                }
            </div>
        </div>
    )
}


export default MyRecipes;