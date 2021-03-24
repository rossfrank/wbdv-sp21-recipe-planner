import React, { useEffect } from "react";
import "./recipe-profile.css";
import RecipeImage from "./recipe-image";
import Ingredients from "./ingredients";
import Directions from "./directions";
import Reviews from "./reviews";
import { connect } from "react-redux";

import recipeService from "../services/recipe-service";

const RecipeProfile = ({recipe = [], findRecipeById}) => {
  useEffect(() => {
    findRecipeById("716429");
  }, []);
  return (
    <div className="container whole-page">
      <div className="row">
        <h3>Delicious Egg Salad</h3>
      </div>
      <div className="row">
        <div className="col-2">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
        </div>
        <div className="col-3">
          <a>Author Name</a>
        </div>
        <div className="col-7 collect-op">
          <i className="far fa-heart fa-lg" />
          &nbsp;
          <i className="far fa-star fa-lg" />
        </div>
      </div>
      <RecipeImage />
      <Ingredients />
      &nbsp;
      <Directions />
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
