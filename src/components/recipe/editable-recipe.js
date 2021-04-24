import React, {useState, useEffect} from "react";
import "./recipe-profile.css";
import recipeService from "../../services/recipe-db-service";
import ingredientService from "../../services/recipe-ingredient-service";
import {Link, useParams} from "react-router-dom";
import {connect} from "react-redux";
import IngredientsForm from "./ingredients-form";


const EditableRecipe = ({userCredential}) => {

    const {recipeId} = useParams();
    const [recipe, setRecipe] = useState({});
    const [editAllowed, setEditAllowed] = useState(false)

    useEffect(()=>{
        recipeService.findRecipeDBById(recipeId)
            .then((res)=>{
                setRecipe(res);
                if(res["userId"].toString() === userCredential["userId"].toString()){
                    setEditAllowed(true);
                }
            });

    }, [recipeId])

    const updateRecipe = ()=>{
        recipeService.updateRecipeDB(recipeId, recipe).then(res => res);
    }

    const updateIngredients = (ingred) => {
        setRecipe(prev => {
            return {...prev, extendedIngredients: ingred}
        })
    }

    const deleteRecipe = ()=>{
        recipeService.deleteRecipeDB(recipeId).then(res => res);
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
                                   setRecipe(prev=>{return {...prev, title: e.target.value}})}
                               }
                        />
                    </div>
                    <div className="form-group">
                        <label>Image Link</label>
                        <input className="form-control"
                               value={recipe["image"]}
                               onChange={(e)=>{
                                   setRecipe(prev=>{return {...prev, image: e.target.value}})}
                               }
                        />
                    </div>
                    <div className="form-group">
                        <label>Cooking Time (mins)</label>
                        <input className="form-control"
                               value={recipe["readyInMinutes"]}
                               onChange={(e)=>{
                                   setRecipe(prev=>{return {...prev, readyInMinutes: e.target.value}})}
                               }
                        />
                    </div>
                    <IngredientsForm ingredients={recipe.extendedIngredients} setIngredients={updateIngredients} recipeId={recipeId}/>

                    <div className="form-group">
                        <label>Instructions</label>
                        <textarea
                            placeholder="Type instructions here."
                            className="form-control instruction-box"
                            value={recipe["directions"]}
                            onChange={(e)=>{
                                setRecipe(prev=>{return {...prev, directions: e.target.value}})}
                            }
                        >
                        </textarea>
                    </div>

                    {
                        editAllowed &&
                        <div className="btn-group float-right mb-5 mt-3" role="group" aria-label="Basic example">
                            <Link type="button" className="btn btn-primary border-0 color-me-white"
                                  onClick={()=>{
                                      updateRecipe();
                                      alert("Successfully updated the recipe");
                                  }}
                                  to={`/details/${recipeId}`}>
                                Update
                            </Link>
                            <Link type="button" className="btn btn-danger border-0 mr-2"
                                  onClick={()=>{
                                      deleteRecipe();
                                      alert("Successfully deleted the recipe");
                                  }}
                                  to={`/profile/${userCredential["userId"]}`}>
                                Delete
                            </Link>

                        </div>
                    }

                </form>
            </div>
        </div>
    )

}

const stateToPropMapper = (state) => {
    return {
        userCredential: state.userReducer.userCredential
    }
}

const dispatchToPropMapper = (dispatch)=> {
    return {}
}

export default connect(stateToPropMapper, dispatchToPropMapper)(EditableRecipe)