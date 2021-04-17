import React, {useEffect} from 'react'
import ProfileRecipe from "./../profile-content/profile-recipe";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import favoriteService from "../../../services/favorite-service";
import recipeService from "../../../services/recipe-service";

const Favorite = (
    {
        myFavorite,
        findFavoriteForUser}) => {
    const {user} = useParams();

    useEffect(()=>{
        findFavoriteForUser(user)
    },[user])

    return(
        <div className="mt-4">
            <div className="container">
                {myFavorite &&
                myFavorite.map(favorite =>
                    <div key={favorite.id}>
                        {
                            <ProfileRecipe recipe={favorite} />
                        }
                    </div>
                )
                }
                {!myFavorite &&
                    <p>
                        No Favorites Available
                    </p>
                }
            </div>
        </div>
    )
}

const stpm = (state) => {
    return {
        myRecipes: state.recipeReducer.recipes,
        myFavorite: state.favoriteReducer.favorites
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

export default connect(stpm, dtpm)(Favorite);