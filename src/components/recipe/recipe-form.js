import React, {useState} from "react";
import "./recipe-profile.css";
import recipeService from "../../services/recipe-db-service";
import ingredientService from "../../services/recipe-ingredient-service";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import IngredientsForm from "./ingredients-form";

const RecipeForm = ({userCredential}) =>{

    const [recipe, setRecipe] = useState({
        title: "",
        image: "",
        directions: "",
        readyInMinutes: 0,
        userId: userCredential["userId"]
    })
    const [ingredients, setIngredients] = useState([{name:"", unit:"", amount:1}])


    const createRecipe = ()=>{
        return recipeService.createRecipeDB(recipe)
            .then((res)=>{
                return res["id"];
            });
    }

    const createIngredients = (recipeId)=>{
        for(let i=0; i<ingredients.length; i++){
            if (ingredients[i]["name"] !== "" ){
                ingredientService.createRecipeIngredient(recipeId, ingredients[i]).then(r => r);
            }
        }

    }

    return(
        <div className="whole-page">
            <div className="percentage70-item center-element">
                <form>
                    <div className="form-group">
                        <label>Dish Name</label>
                        <input className="form-control"
                               value={recipe["title"]}
                               onChange={(e)=>{
                                   setRecipe(prev=>{
                                       return {...prev, title: e.target.value}
                                   })
                               }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Image Link</label>
                        <input className="form-control"
                               value={recipe["image"]}
                               onChange={(e)=>{
                                   setRecipe(prev=>{
                                       return {...prev, image: e.target.value}
                                   })
                               }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Cooking Time (mins)</label>
                        <input className="form-control"
                               value={recipe["readyInMinutes"]}
                               onChange={(e)=>{
                                   setRecipe(prev=>{
                                       return {...prev, readyInMinutes: e.target.value}
                                   })
                               }}
                        />
                    </div>
                    <IngredientsForm ingredients={ingredients} setIngredients={setIngredients} recipeId={""}/>

                    <div className="form-group">
                        <label>Instructions</label>
                        <textarea
                            placeholder="Type instructions here."
                            className="form-control instruction-box"
                            value={recipe["directions"]}
                            onChange={(e)=>{
                                setRecipe(prev=>{
                                    return {...prev, directions: e.target.value}
                                })
                            }}
                        >
            </textarea>
                    </div>
                    <div className="form-group">
                        <Link className="btn btn-primary btn-block wbdv-login bg-theme border-0"
                           onClick={()=>{
                               createRecipe()
                                   .then((res)=>{
                                       createIngredients(res)
                                   })
                           }}
                           to={`/profile/${userCredential["userId"]}`}
                        >
                            Upload
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
};
const stateToPropMapper = (state) => {
    return {
        userCredential: state.userReducer.userCredential
    }
}

const dispatchToPropMapper = (dispatch)=> {
    return {}
}

export default connect(stateToPropMapper, dispatchToPropMapper)(RecipeForm);
