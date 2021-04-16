import React, {useEffect} from 'react'
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
        console.log(myFavorite)
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
                        favorites: theFavs
                    }))
        },
    };
}

export default connect(stpm, dtpm)(Favorite);