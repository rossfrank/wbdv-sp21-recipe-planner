import React from 'react'
import "./recipe.css";

export default class Recipe extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return(
            <div>
                <h1>Recipe</h1>
            </div>
        )
    }
}