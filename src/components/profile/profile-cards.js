 import React from 'react'
import {useParams} from "react-router-dom";
 import Favorite from "./profile-content/favorite";

const ProfileCards = ({}) => {

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
            </div>
        </div>
    )
}

export default ProfileCards
