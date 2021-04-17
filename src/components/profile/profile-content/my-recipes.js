import React, {useEffect, useState} from 'react'
import ProfileRecipe from "./../profile-content/profile-recipe";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import recipeService from "../../../services/recipe-db-service";
import ingredientService from "../../../services/recipe-ingredient-service";

const MyRecipes = ({}) => {
    const {user} = useParams();
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        recipeService.findRecipeForUser(user)
            .then(recipe => {if(recipe)
            {
                recipe.map(r =>
                   ingredientService.findRecipeIngredientsForRecipe(r.id)
                   .then(resp => {r.extendedIngredients = resp; return r}))
                setRecipes(recipe)
            }})
    },[user])

    return(
        <div className="mt-4">
            <div className="container">
                {recipes &&
                recipes.map(recipe =>
                    <div key={recipe.id}>
                        {
                            <ProfileRecipe recipe={recipe} />
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

const stpm = (state) => {
    return {
        myRecipes: state.recipeReducer.recipes,
    };
};
const dtpm = (dispatch) => {
    return {
        findFavoriteForUser: (userId) => {
            favoriteService
                .findFavoriteForUser(userId)
                .then(((res)=>
                        recipeService.findRecipeByIdBulk(res.map(r => r.recipeId))
                            .then(theFavs =>
                                dispatch({
                                    type: "FIND_FAVORITE_FOR_USER",
                                    favorites: theFavs
                                }))
                ))

        },
    };
}

export default connect(stpm, dtpm)(MyRecipes);