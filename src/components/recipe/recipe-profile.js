import React, { useEffect, useState } from "react";
import "./recipe-profile.css";
import Ingredients from "./ingredients";
import Directions from "./directions";
import Reviews from "./reviews";
import Favorite from "./favorite";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import recipeService from "../../services/recipe-service";

const RecipeProfile = ({ recipe = [], findRecipeById }) => {
  const { recipeId } = useParams();

  useEffect(() => {
    findRecipeById(recipeId);
  }, []);
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
      <Ingredients ingred={recipe.extendedIngredients} />
      &nbsp;
      <Directions recipe={recipe} />
      &nbsp;
      <Reviews />
    </div>
  );
};

const stpm = (state) => {
  return {
    recipe: state.recipeReducer.recipe,
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
  };
};

export default connect(stpm, dtpm)(RecipeProfile);
