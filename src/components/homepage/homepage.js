import React, {useState, useEffect} from 'react'
import './homepage.css'
import RecipeCard from "./recipe-card";
import recipeService from "../../services/recipe-service";
import recipeDBService from "../../services/recipe-db-service";
import reviewService from "../../services/review-service"
import {connect} from "react-redux";

function Homepage({userCredential}) {

    const [homeRecipes, setHomeRecipes] = useState([]);
    const [userRecipes, setUserRecipes] = useState([])

    useEffect(()=>{
        recipeService.findRecipeTopRating(4)
            .then((res)=>
                recipeService.findRecipeByIdBulk(res.results.map(r => r.id))
                    .then(x => setHomeRecipes(x))
            )

        reviewService.findReviewForUser(userCredential["userId"])
            .then((res)=>{

                const recipeIds = [...new Set(res.map(r=>r["recipeId"]))];

                recipeIds.map(rId =>{
                    if (rId.substring(0, 3)==="rcp"){
                        recipeDBService.findRecipeDBById(rId)
                            .then(res=>setUserRecipes(prev=> [...prev, res]))
                    }else {
                        recipeService.findRecipeById(rId)
                            .then(res=>setUserRecipes(prev=> [...prev, res]))
                    }
                })
            })

    },[])

    return(
        <div>
            <div className="content-page">

                <div className="row row-cols-1 row-cols-md-4 m-4">
                    {
                        homeRecipes !== undefined &&
                        homeRecipes.map(r => <RecipeCard recipe={r} key={r.id}/>)
                    }
                </div>
                <h4 className="ml-5">Recently Reviewed</h4>


                <div className="row row-cols-1 row-cols-md-4 m-4">
                    &nbsp;
                    {
                        (userRecipes.length === 0) &&
                        <h5 className="ml-1">You haven't left any reviews.</h5>
                    }
                    {
                        (userRecipes.length >= 1) &&
                        userRecipes.map(r => <RecipeCard recipe={r} key={r.id}/>)
                    }
                </div>

            </div>
        </div>
    )
}
const stateToPropMapper = (state) => {
    return {
        userCredential: state.userReducer.userCredential
    }
}

const dispatchToPropMapper =(dispatch)=> {

    return {
        userLogout: ()=>{
            dispatch({
                type: "USER_LOGOUT"
            })
        }
    }
}

export default connect(stateToPropMapper, dispatchToPropMapper)(Homepage);
