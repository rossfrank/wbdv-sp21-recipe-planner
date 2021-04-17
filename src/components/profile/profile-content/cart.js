import React, {useEffect} from 'react'
import ProfileRecipe from "./../profile-content/profile-recipe";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import cartService from "../../../services/cart-service";
import recipeService from "../../../services/recipe-service";

<<<<<<< HEAD:src/components/profile/profile-content/basket.js
const Basket = ({myCart, findCartForUser}) => {
=======
const Cart = (
    {
        myCart,
        findCartForUser}) => {
>>>>>>> fix api on cart:src/components/profile/profile-content/cart.js
    const {user} = useParams();

    useEffect(()=>{
        findCartForUser(user)
    },[user])

    return(
        <div className="mt-4">
            <div className="container">
                {myCart &&
                myCart.map(recipe =>
                    <div key={recipe.Id}>
                        {
                            <ProfileRecipe recipe={recipe} />
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
                .then(((res)=>
                        recipeService.findRecipeByIdBulk(res.map(r => r.id))
                            .then(theCart =>
                                dispatch({
                                    type: "FIND_CART_FOR_USER",
                                    cart: theCart
                                }))
                ))
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

<<<<<<< HEAD:src/components/profile/profile-content/basket.js
export default connect(stpm, dtpm)(Basket);
=======
export default connect(stpm, dtpm)(Cart);
>>>>>>> fix api on cart:src/components/profile/profile-content/cart.js
