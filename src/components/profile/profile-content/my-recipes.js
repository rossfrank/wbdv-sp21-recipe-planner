import React, {useEffect, useState} from 'react'
import ProfileRecipe from "./../profile-content/profile-recipe";
import {Link, useParams} from "react-router-dom";
import recipeService from "../../../services/recipe-db-service";
import {connect} from "react-redux";
import userService from "../../../services/user-service";

const MyRecipes = ({userinfo}) => {
    const {user} = useParams();
    const [recipes, setRecipes] = useState([])
    const [role, setRole] = useState("")

    useEffect(()=>{
        recipeService.findRecipeForUser(user)
            .then(recipe => setRecipes(recipe))
        if(userinfo.isAuthenticated && userinfo.userId === user){
            userService.findUserById(user)
                .then(response => setRole(response.role))
        }
    },[user])

    return(
        <div className="mt-4">
            <div className="container">
                <div>
                    { userinfo.isAuthenticated && role === "CREATOR" &&
                        <div className="container pb-1">
                            <Link to="/details/form">
                                <button className="btn btn-success">Add a Recipe</button>
                            </Link>
                        </div>
                    }
                </div>
                {recipes &&
                recipes.map(recipe =>
                    <div key={recipe.id}>
                        {
                            <ProfileRecipe recipe={recipe} ingredients={recipe.extendedIngredients} />
                        }
                    </div>
                )
                }
                {!recipes &&
                <p>
                    No Recipes Available
                </p>
                }
            </div>
        </div>
    )
}

const stpm = (state) => {
    return {
        userinfo: state.userReducer.userCredential,
    };
};

const dtpm = (dispatch) => {
    return {
    };
};

export default connect(stpm, dtpm)(MyRecipes);