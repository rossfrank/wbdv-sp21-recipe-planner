import React, { useEffect, useState } from "react";
import "./recipe-profile.css";
import Ingredients from "./ingredients";
import Directions from "./directions";
import Reviews from "./reviews";
import Favorite from "./favorite";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import recipeService from "../../services/recipe-service";
import cartService from "../../services/cart-service";
import recipeLocalService from "../../services/recipe-db-service";

const RecipeProfile = ({ recipe = [], user, addItemToCart, findRecipeById, findLocalRecipeById }) => {
  const { recipeId } = useParams();
  useEffect(() => {
    if(recipeId.substring(0, 3)==="rcp"){
      findLocalRecipeById(recipeId)
    }else{
      findRecipeById(recipeId);
    }
  }, []);
  function handleClick(){
    if(user.isAuthenticated){
      addItemToCart(user.userId, {userId: user.userId, recipeId: recipeId})
    alert("Successfully Added！")
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
        <Favorite/>
        
      </div>
      <img src={recipe.image} className="image-display" />
      <div className="col-10 align-to-right">
          <i className="fas fa-shopping-basket" onClick={() => handleClick()}/>
      </div>
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
    
    addItemToCart: (userId, item) =>
      cartService.addItemToCart(userId, item).then((item) =>
      dispatch({
        type: "ADD_ITEM_TO_CART",
        item: item,
      })),

      findLocalRecipeById: (recipeId) =>
      recipeLocalService.findRecipeDBById(recipeId).then((theRecipe) =>
        dispatch({
          type: "FIND_RECIPE_BY_ID",
          recipe: theRecipe,
        })
      ),
  };
};

export default connect(stpm, dtpm)(RecipeProfile);
