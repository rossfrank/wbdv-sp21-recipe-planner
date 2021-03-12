import React from 'react'
import stick from "./img.png";

export default class UserDescription extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return(
            <div>
                <img src={stick} alt="User Profile Image"/>
                <h2>User's Name</h2>
                <h3>Description</h3>
            </div>
        )
    }
}
