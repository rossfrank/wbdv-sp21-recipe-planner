import React, {useEffect} from 'react'
import ProfileRecipe from "./../profile-content/profile-recipe";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import cartService from "../../../services/cart-service";
import recipeService from "../../../services/recipe-service";

const Cart = (
    {
        myCart,
        userCredential,
        findCartForUser}) => {
    const {user} = useParams();

    useEffect(()=>{
        findCartForUser(user)
    },[user])

    return(
        <div className="mt-4">
            <div className="container">
                {myCart.length > 0 && user === userCredential.userId &&
                myCart.map(recipe =>
                    <div key={recipe.recipeId}>
                        {
                            <ProfileRecipe recipe={recipe} ingredients={recipe.extendedIngredients}/>
                        }
                    </div>
                )
                }
                {myCart.length === 0 &&
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
        myCart: state.cartReducer.cart,
        userCredential: state.userReducer.userCredential
    };
};
const dtpm = (dispatch) => {
    return {
        findCartForUser: (userId) => {
            cartService.findCartForUser(userId)
                .then(((res)=>  {
                    if(res.length !== 0) {
                        console.log("test")
                        return recipeService.findRecipeByIdBulk(res.map(r => r.recipeId))
                            .then(theCart =>
                                dispatch({
                                    type: "FIND_CART_FOR_USER",
                                    cart: theCart
                                }))
                    }
                    return []
                }))},
        addItemToCart: (userId, recipeId) => {
            cartService.addItemToCart(userId, recipeId)
                .then(cartItem =>
                    dispatch({
                        type: "ADD_ITEM_TO_CART",
                        item: cartItem
                    }))},
        removeItemFromCart: (userId, cartId) => {
            cartService.removeItemFromCart(userId, cartId)
                .then(cartItem =>
                    dispatch({
                        type: "DELETE_CART_ITEM",
                        itemToDelete: cartItem
                    }))}};
}

export default connect(stpm, dtpm)(Cart);
