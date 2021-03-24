import React from 'react'
import './homepage.css'
import RecipeCard from "./recipe-card";


function Homepage(){
    const recipes = [
        {title: 'recipe1'},
        {title: 'recipe2'},
        {title: 'recipe3'},
        {title: 'recipe4'},
        {title: 'recipe5'},
        {title: 'recipe6'},
        {title: 'recipe7'},
        {title: 'recipe8'},
    ]
    return(
        <div>
            <div className="content-page">

                <div className="row row-cols-1 row-cols-md-5 m-4">
                    {recipes.map(recipe => <RecipeCard recipe={recipe} />)}

                </div>

            </div>
        </div>
    )
}

export default Homepage
