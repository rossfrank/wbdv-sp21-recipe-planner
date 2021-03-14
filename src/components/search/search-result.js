import React from 'react'
import NavbarUser from "../homepage/navbar-user";
import './search-result.css'
import RecipeCard from "../homepage/recipe-card";


function SearchResult(){
    const recipes = [
        {title: 'recipe1'},
        {title: 'recipe2'},
        {title: 'recipe3'},
        {title: 'recipe4'},
        {title: 'recipe5'},
        {title: 'recipe6'},
        {title: 'recipe7'},
        {title: 'recipe8'},
    ];

    return(
        <>
            <NavbarUser/>
            <div className="content-page">

                <span className="search-results-header-pads"></span>
                <div className="search-results-header-wrapper">
                    <div className="search-results-header border-dark">
                        <div className="search-results-header-group">
                            <h4 className="mt-2 mb-0" aria-live="assertive" aria-atomic="true">
                                Recipe Results for KEYWORD
                            </h4>
                        </div>

                    </div>
                </div>

                <div className="container mb-4">
                    <div className="row row-cols-1 row-cols-md-4">
                        {recipes.map(recipe => <RecipeCard recipe={recipe} />)}

                    </div>
                </div>





            </div>
        </>
    )
}
export default SearchResult