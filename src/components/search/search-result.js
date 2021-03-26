import React, {useState, useEffect} from 'react'
import './search-result.css'
import RecipeCard from "../homepage/recipe-card";
import {useParams} from "react-router-dom";


function SearchResult(){

    const {keyword} = useParams();
    const [resultRecipes, setResultRecipes] = useState([]);

    useEffect(()=>{
        setResultRecipes( [{id:1}, {id:2}])
    },[])

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
                        {resultRecipes.map(recipe =>
                            <RecipeCard />)
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchResult