 import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
 import RecipeService from "../../services/recipe-service";
 import ProfileRecipe from "./profile-content/profile-recipe";
 import Favorite from "./profile-content/favorite";

const ProfileCards = ({}) => {

    const {tab} = useParams();
    const service = new RecipeService()
    const [homeRecipes, setHomeRecipes] = useState([]);

    const isFavorite = () => {
        return (tab === "Favorites" || tab === undefined)
    }

    return(
        <div className="mt-4">
            <div className="container">
                {isFavorite() &&
                    <Favorite />
                }
            </div>
        </div>
    )
}

export default ProfileCards
