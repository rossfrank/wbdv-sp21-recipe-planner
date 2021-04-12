import React, {useState, useEffect} from 'react'
import './homepage.css'
import RecipeCard from "./recipe-card";
import RecipeService from "../../services/recipe-service";
import {loadFromLocalStorage} from "../../reducers/local-storage-util";

function Homepage() {

    const service = new RecipeService();
    const [homeRecipes, setHomeRecipes] = useState([]);

    useEffect(()=>{

        const persistedState = loadFromLocalStorage();
        console.log(persistedState)

        service.findRecipeTopRating(2)
            .then((res)=>{
                setHomeRecipes(res.results)
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

            </div>
        </div>
    )
}

export default Homepage
