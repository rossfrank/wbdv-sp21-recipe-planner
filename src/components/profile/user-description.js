import React from 'react'
import stick from "./img.png";

export default class UserDescription extends React.Component {

    state = {
        user_name:"Username",
        user_description: "Description",
        //user_image: "./img.png"
    }

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <img src={stick} alt="User Profile Image"/>
                <h2>{this.state.user_name}</h2>
                <h3>{this.state.user_description}</h3>
            </div>
        )
    }
}
