import React, { useEffect, useState } from "react";
import "./recipe-profile.css";
import Ingredients from "./ingredients";
import Directions from "./directions";
import Reviews from "./reviews";
import Favorite from "./favorite";
import { connect } from "react-redux";
import {Link, useParams} from "react-router-dom";

import recipeService from "../../services/recipe-service";
import cartService from "../../services/cart-service";
import recipeLocalService from "../../services/recipe-db-service";

const RecipeProfile = ({ recipe = [],
                           user,
                           addItemToCart,
                           removeItemFromCart,
                           findRecipeById,
                           findLocalRecipeById}) => {
  const { recipeId } = useParams();

  const [addCart, setAddCart] = useState(false);
  const [cartId, setCartId] = useState("")
  const [editAllowed, setEditAllowed] = useState(false);


  useEffect(() => {
    if(recipeId.substring(0, 3)==="rcp"){
        findLocalRecipeById(recipeId);
        recipeLocalService.findRecipeDBById(recipeId)
            .then((res)=>{
                if (res["userId"].toString() === user["userId"].toString()){
                    setEditAllowed(true)

                }
            })
    }else{
      findRecipeById(recipeId);
    }

    cartService.findCartForUser(user["userId"])
        .then((res)=>{
            res.map((eachItem)=>{
                if(eachItem["recipeId"] === recipeId){
                    setAddCart(true);
                    setCartId(eachItem["id"]);
                }
            })
        })


  }, []);

  function handleCartClick(){
    if(user.isAuthenticated){
        if (addCart){
            removeItemFromCart(user["userId"], cartId);
            setAddCart(false);
            alert("Successfully removed the item from your cart.")
        }else {
            addItemToCart(user.userId, {userId: user.userId, recipeId: recipeId});
            setAddCart(true);
            alert("Successfully added the item from your cart.")
        }
    }else{
      alert("Please Log In First!")
    }
    
  }
  return (
    <div className="container whole-page">
      <div className="row">
        <h3>{`${recipe.title}`}</h3>
      </div>
      <div className="row">
        <div className="col-2">
          {recipe.spoonacularScore && (
            <h6>{`Score: ${recipe.spoonacularScore}/100`}</h6>
          )}
        </div>
        <div className="col-3">
          <a>{recipe.sourceName}</a>
        </div>
      </div>
        <div className="row mr-5 mb-2">
            <div className="col-9 "></div>
            <div className="col-1 collect-op pr-1 pl-0">
                <i className={`fas fa-shopping-cart ${addCart ? "color-me-orange": ""}`}
                   onClick={() => {handleCartClick()}}/>
            </div>
            <Favorite/>
            {
                editAllowed &&
                <div className="col-1 collect-op pr-1">
                    <Link to={`/details/${recipeId}/form`}>
                        <i className="fas fa-edit color-me-black"></i>
                    </Link>
                </div>
            }



        </div>

      <img src={recipe.image} className="image-display" />

      <Ingredients ingred={recipe.extendedIngredients} />
      &nbsp;
      <Directions recipe={recipe} />
      &nbsp;
      <Reviews recipe={recipe.title}/>
    </div>
  );
};

const stpm = (state) => {
  return {
    recipe: state.recipeReducer.recipe,
    user: state.userReducer.userCredential,
  };
};
const dtpm = (dispatch) => {
  return {
    findRecipeById: (recipeId) =>
      recipeService.findRecipeById(recipeId).then((theRecipe) =>
        dispatch({
          type: "FIND_RECIPE_BY_ID",
          recipe: theRecipe,
        })
      ),

      findLocalRecipeById: (recipeId) =>
      recipeLocalService.findRecipeDBById(recipeId).then((theRecipe) =>
        dispatch({
          type: "FIND_RECIPE_BY_ID",
          recipe: theRecipe,
        })
      ),

      addItemToCart: (userId, item) =>
          cartService.addItemToCart(userId, item).then((item) =>
              dispatch({
                  type: "ADD_ITEM_TO_CART",
                  item: item,
              })),

      removeItemFromCart: (userId, cartId) => {
          cartService.removeItemFromCart(userId, cartId)
              .then(cartItem =>
                  dispatch({
                      type: "DELETE_CART_ITEM",
                      itemToDelete: cartItem
                  })
              )}
  };
};

export default connect(stpm, dtpm)(RecipeProfile);
