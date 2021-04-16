import React, {useState, useEffect} from "react";
import "./recipe-profile.css";
import RecipeDbService from "../../services/recipe-db-service";
import RecipeIngredientService from "../../services/recipe-ingredient-service";
import UserService from "../../services/user-service";
import {connect} from "react-redux";

const RecipeForm = ({userCredential}) =>{

    const recipeService = new RecipeDbService();
    const ingredientService = new RecipeIngredientService();

    const [recipe, setRecipe] = useState({
        title: "",
        image: "",
        directions: "",
        readyInMinutes: 0,
        userId: userCredential["userId"]
    })
    const [ingredients, setIngredients] = useState([{name:"first", unit:"", amount:1}])


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
                    <div className="form-group">
                        <label>Ingredients</label>
                        {JSON.stringify(recipe)}

                        {ingredients.map((each,i) => (
                            <div className="row mb-2" key={i}>
                                <div className="col-6">
                                    <input className="form-control" placeholder="Ingredient Name"
                                           value={each["name"]}
                                           onChange={(e)=>{
                                               const newArr = ingredients.map((item, index) =>{
                                                   if (index === i){
                                                       item.name = e.target.value;
                                                       return item
                                                   }
                                                   return item
                                               })
                                               setIngredients(newArr)
                                           }}
                                    />
                                </div>
                                <div className="col-3">
                                    <input className="form-control" placeholder="amount"
                                           value={each["amount"]}
                                           onChange={(e)=>{
                                               const newArr = ingredients.map((item, index) =>{
                                                   if (index === i){
                                                       item.amount = e.target.value;
                                                       return item
                                                   }
                                                   return item
                                               })
                                               setIngredients(newArr)
                                           }}
                                    />
                                </div>
                                <div className="col-3">
                                    <input className="form-control" placeholder="unit"
                                           value={each["unit"]}
                                           onChange={(e)=>{
                                               const newArr = ingredients.map((item, index) =>{
                                                   if (index === i){
                                                       item.unit = e.target.value;
                                                       return item
                                                   }
                                                   return item
                                               })
                                               setIngredients(newArr)
                                           }}
                                    />
                                </div>
                            </div>
                        ))}
                        <div className="row">
                            <a className="col-6 pwd-info"
                               onClick={()=>{
                                   setIngredients(prev=>{
                                       return [...prev,
                                           { name: "", amount: "1", unit: ""}]
                                   })
                               }}>
                                Add new ingredients
                            </a>
                        </div>
                    </div>

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
                        <a className="btn btn-primary btn-block wbdv-login bg-theme border-0"
                           onClick={()=>{
                               createRecipe()
                                   .then((res)=>{
                                       createIngredients(res)
                                   })
                           }}
                        >
                            Upload
                        </a>
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
