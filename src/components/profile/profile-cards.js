 import React from 'react'
import {useParams} from "react-router-dom";
 import Favorite from "./profile-content/favorite";
 import Cart from "./profile-content/cart";

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
                {
                    tab === "Cart" &&
                        <Cart />
                }
            </div>
        </div>
    )
}

export default ProfileCards
