import React, {useState, useEffect} from "react";
import "./recipe-profile.css";
import recipeDBService from "../../services/recipe-db-service";
import ingredientService from "../../services/recipe-ingredient-service";
import UserService from "../../services/user-service";
import {connect} from "react-redux";

const NewRecipe = ({userCredential}) => {

  const [count, setCount] = useState(1);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState(0);
  const [instructions, setInstructions] = useState("");
  const [newRecipeId, setNewRecipeId] = useState("")

  const [ingredientNames, setIngredientNames] = useState({ 0:"", 1:"", 2:"", 3:"", 4:"", 5:"", 6: "", 7: "", 8:"", 9:""});
  const [ingredientAmounts, setIngredientAmounts] = useState({ 0:"1", 1:"1", 2:"1", 3:"1", 4:"1", 5:"1", 6: "1", 7: "1", 8:"1", 9:"1"});
  const [ingredientUnits, setIngredientUnits] = useState({ 0:"", 1:"", 2:"", 3:"", 4:"", 5:"", 6: "", 7: "", 8:"", 9:""});

  const createTable = () => {
    let table = []

    for (let i = 0; i < count; i++) {

      table.push(
          <div className="row mb-2">
            <div className="col-6">
              <input className="form-control" placeholder="Ingredient Name"
                     value={ingredientNames[i]}
                     onChange={(e)=>{
                       setIngredientNames(prevState=>{return {...prevState, [i]: e.target.value}});
                     }}
              />
            </div>
            <div className="col-3">
              <input className="form-control" placeholder="amount"
                     value={ingredientAmounts[i]}
                     onChange={(e)=>{
                       setIngredientAmounts(prevState=>{return {...prevState, [i]: e.target.value}});
                     }}
              />
            </div>
            <div className="col-3">
              <input className="form-control" placeholder="unit"
                     value={ingredientUnits[i]}
                     onChange={(e)=>{
                       setIngredientUnits(prevState=>{return {...prevState, [i]: e.target.value}});
                     }}/>
            </div>
          </div>
      )
    }
    return table
  }

  const createRecipeIngredients = (rid)=>{

    for(let i=0; i<count; i++){
      if (ingredientNames[i]!==""){
        const ingredient = {
          recipeId: rid,
          name: ingredientNames[i],
          unit: ingredientUnits[i],
          amount: ingredientAmounts[i]
        };
        ingredientService.createRecipeIngredient(rid, ingredient)
            .then((res)=>{
              return res["id"];
            })
      }

    }


  }

  const createNewRecipe = ()=>{

    const recipe = {
      title: title,
      imageUrl: image,
      time: time,
      directions: instructions,
      score: 0,
      userId: userCredential["userId"]
    }

    recipeDBService.createRecipeDB(recipe)
        .then((res)=>{
          return res["id"];
        })
        .then((recipeId)=>{
          createRecipeIngredients(recipeId);
        })

    // return rid

  }



  return (
    <div className="whole-page">
      <div className="percentage70-item center-element">
        <form>
          <div className="form-group">
            <label>Dish Name</label>
            <input className="form-control"
                   value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label>Image Link</label>
            <input className="form-control"
                   value={image} onChange={(e)=>{setImage(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label>Cooking Time (mins)</label>
            <input className="form-control"
                   value={time} onChange={(e)=>{setTime(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label>Ingredients</label>


            {createTable()}
            <br />


            <div className="row">
              <a className="col-6 pwd-info" onClick={()=>{
                if (count<=9){
                  setCount(count+1);
                }else {
                  alert("Can at most have 10 ingredients");
                }
              }}>
                Add new ingredients
              </a>
            </div>
          </div>

          <div className="form-group">
            <label>Instructions</label>
            <textarea
                placeholder="Type instructions here."
                className="form-control instruction-box" value={instructions}
                onChange={(e)=>{setInstructions(e.target.value)}}>
            </textarea>
          </div>
          <div className="form-group">
            <a className="btn btn-primary btn-block wbdv-login bg-theme border-0" onClick={createNewRecipe}>
              Upload
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
const stateToPropMapper = (state) => {
  return {
    userCredential: state.userReducer.userCredential
  }
}

const dispatchToPropMapper = (dispatch)=> {
  return {}
}

export default connect(stateToPropMapper, dispatchToPropMapper)(NewRecipe);
