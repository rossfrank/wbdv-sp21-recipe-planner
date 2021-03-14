import React from 'react'
import UserDescription from "./user-description";
import "./profile.css";
import ProfileTabs from "./profile-tabs";

export default class Profile extends React.Component {

    constructor(props) {
        super(props)
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
                        <ProfileTabs/>
                    </div>
                </div>
            </div>
        )
    }
}