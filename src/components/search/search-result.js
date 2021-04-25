import React, {useState, useEffect} from 'react'
import './search-result.css'
import RecipeCard from "../homepage/recipe-card";
import {useParams} from "react-router-dom";
import recipeService from "../../services/recipe-service";


function SearchResult(){
    const {keyword} = useParams();
    const [resultRecipes, setResultRecipes] = useState([]);

    useEffect(()=>{
        recipeService.findRecipeByKeyword(keyword)
            .then((res)=>{
                const ids = res.results.map(r=>r["id"]);
                if (ids.length>0){
                    return recipeService.findRecipeByIdBulk(ids)
                } else {
                    return []
                }
            })
            .then(x => setResultRecipes(x))
    },[keyword])

    return(
        <div>
            <div className="content-page">
                <span className="search-results-header-pads" />
                <div className="search-results-header-wrapper">
                    <div className="search-results-header border-dark">
                        <div className="search-results-header-group">
                            <h4 className="mt-2 mb-0" aria-live="assertive" aria-atomic="true">
                                Recipe Results for this {keyword}
                            </h4>
                        </div>

                    </div>
                </div>
                <div className="container mb-4">
                    <div className="row row-cols-1 row-cols-md-4">
                        {
                            resultRecipes !== undefined &&
                            resultRecipes.map(r =><RecipeCard key={r.id} recipe={r}/>)
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchResult
