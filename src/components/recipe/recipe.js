import React from 'react'

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