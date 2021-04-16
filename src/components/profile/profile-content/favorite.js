import React, {useEffect, useState} from 'react'
import ProfileRecipe from "./../profile-content/profile-recipe";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import favoriteService from "../../../services/favorite-service";

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
                    <div key={favorite.recipeId}>
                        {
                            <ProfileRecipe recipeId={favorite.recipeId} />
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
        myFavorite: state.favoriteReducer.favorites
    };
};
const dtpm = (dispatch) => {
    return {
        findFavoriteForUser: (userId) => {
            favoriteService
                .findFavoriteForUser(userId)
                .then(theFavs =>
                    dispatch({
                        type: "FIND_FAVORITE_FOR_USER",
                        //favorites: theFavs
                        favorites: [{"userId": 3,"id": 1, "recipeId": 1438341}]
                    }))
        },
    };
}

export default connect(stpm, dtpm)(Favorite);