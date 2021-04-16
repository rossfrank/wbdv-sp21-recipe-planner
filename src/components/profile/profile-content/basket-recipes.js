import React, {useEffect} from 'react'
import ProfileRecipe from "./../profile-content/profile-recipe";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import cartService from "../../../services/cart-service";

const BasketRecipe = (
    {
        myCart,
        findCartForUser}) => {
    const {user} = useParams();

    useEffect(()=>{
        findCartForUser(user)
    },[user])

    return(
        <div className="mt-4">
            <div className="container">
                {myCart &&
                myCart.map(recipe =>
                    <div key={recipe.recipeId}>
                        {
                            <ProfileRecipe recipeId={recipe.recipeId} />
                        }
                    </div>
                )
                }
                {!myCart &&
                <p>
                    No Recipes in the Cart
                </p>
                }
            </div>
        </div>
    )
}

const stpm = (state) => {
    return {
        myCart: state.cartReducer.cart
    };
};
const dtpm = (dispatch) => {
    return {
        findCartForUser: (userId) => {
            cartService.findCartForUser(userId)
                .then(theCart =>
                    dispatch({
                        type: "FIND_CART_FOR_USER",
                        cart: theCart
                    }))
        },
        addItemToCart: (userId, recipeId) => {
            cartService.addItemToCart(userId, recipeId)
                .then(cartItem =>
                    dispatch({
                        type: "ADD_ITEM_TO_CART",
                        item: cartItem
                    }))
        },
        removeItemFromCart: (userId, cartId) => {
            cartService.removeItemFromCart(userId, cartId)
                .then(cartItem =>
                    dispatch({
                        type: "ADD_ITEM_TO_CART",
                        itemToDelete: cartItem
                    }))
        }
    };
}

export default connect(stpm, dtpm)(BasketRecipe);