import React, {useState, useEffect} from "react";
import "./recipe-profile.css";
import recipeService from "../../services/recipe-db-service";
import ingredientService from "../../services/recipe-ingredient-service";
import {useParams} from "react-router-dom";


const EditableRecipe = () => {

    const {recipeId} = useParams();

    const [recipe, setRecipe] = useState({});

    const [ingredients, setIngredients] = useState([])



    useEffect(()=>{
        recipeService.findRecipeDBById(recipeId)
            .then((res)=>{
                setRecipe(res);
            });

        ingredientService.findRecipeIngredientsForRecipe(recipeId)
            .then((res)=>{
                setIngredients(res);
            })

    }, [])


    const updateRecipe = ()=>{
        recipeService.updateRecipeDB(recipeId, recipe);
    }

    const updateIngredients = ()=>{
        for(let i=0; i<ingredients.length; i++){
            if (ingredients[i]["id"] !== undefined && ingredients[i]["id"] !== ""){
                ingredientService.updateRecipeIngredient(ingredients[i]["id"], ingredients[i]);
            }else {
                ingredientService.createRecipeIngredient(recipeId, ingredients[i])
                    .then((res)=>{});
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
                    <div className="form-group">
                        <label>Ingredients</label>

                        {ingredients.map((ingredient) => (
                            <div className="row mb-2">
                                <div className="col-6">
                                    <input className="form-control" placeholder="Ingredient Name"
                                           value={ingredient["name"]}
                                           onChange={(e)=>{
                                               const newArr = ingredients.map(item =>{
                                                   if (item.id === ingredient.id){
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
                                           value={ingredient["amount"]}
                                           onChange={(e)=>{
                                               const newArr = ingredients.map(item =>{
                                               if (item.id === ingredient.id){
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
                                           value={ingredient["unit"]}
                                           onChange={(e)=>{
                                               const newArr = ingredients.map(item =>{
                                                   if (item.id === ingredient.id){
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
                                           { name: "", amount: "1", unit: "", recipeId: recipeId}]
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
                                setRecipe(prev=>{return {...prev, directions: e.target.value}})}
                            }
                        >
            </textarea>
                    </div>
                    <div className="form-group">
                        <a className="btn btn-primary btn-block wbdv-login bg-theme border-0"
                           onClick={()=>{
                               updateRecipe();
                               updateIngredients()
                           }}
                        >
                            Update
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default EditableRecipe