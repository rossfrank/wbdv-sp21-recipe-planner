import React from 'react'
import UserDescription from "./user-description";
import "./profile.css";

export default class Profile extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return(
            <div>
                <h1>Profile</h1>
                <div className="row">
                    <div className="col-4">
                        <UserDescription />
                    </div>
                    <div className="col-8">
                        <h2>Content</h2>
                    </div>
                </div>
            </div>
        )
    }
}