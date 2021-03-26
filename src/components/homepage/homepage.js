import React, {useState, useEffect} from 'react'
import './homepage.css'
import RecipeCard from "./recipe-card";
import RecipeService from "../../services/recipe-service";

function Homepage() {

    const service = new RecipeService();
    // const [homeRecipes, setHomeRecipes] = useState([]);

    // useEffect(()=>{
    //     service.findRecipeTopRating(2)
    //         .then((res)=>{
    //             setHomeRecipes(res.results)
    //         })
    // },[])

    const [homeRecipes, setHomeRecipes] = useState([{id:1},{id:2}]);


    return(
        <div>
            <div className="content-page">
                <div className="row row-cols-1 row-cols-md-4 m-4">

                    {/*{homeRecipes.map(*/}
                    {/*    r => <RecipeCard recipe={r} key={r.id}/>*/}
                    {/*)}*/}

                    <RecipeCard recipe={{id:1}}/>

                </div>

            </div>
        </div>
    )
}

export default Homepage
