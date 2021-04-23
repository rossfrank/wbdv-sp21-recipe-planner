import React from 'react'
import {useParams} from "react-router-dom";
import Favorite from "./profile-content/favorite";
import Cart from "./profile-content/cart";
import Reviews from "./profile-content/reviews";
import MyRecipes from "./profile-content/my-recipes";

const ProfileCards = () => {

    const {tab} = useParams();

    const isFavorite = () => {
        return (tab === "Favorites" || tab === undefined)
    }

    return(
        <div className="mt-4">
            <div className="container">
                {isFavorite() &&
                    <Favorite />
                }
                {
                    tab === "Cart" &&
                    <Cart />
                }
                {
                    tab === "Reviews" &&
                    <Reviews />
                }
                {
                    tab === "My Recipes" &&
                    <MyRecipes />
                }
            </div>
        </div>
    )
}

export default ProfileCards
