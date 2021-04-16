import React from 'react'
import UserDescription from "./user-description";
import "./profile.css";
import ProfileTabs from "./profile-tabs";
import ProfileCards from "./profile-cards";

export default class Profile extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="profile-page">
                <h1>Profile</h1>
                <div className="row">
                    <div className="col-2">
                        <UserDescription />
                    </div>
                    <div className="col-8">
                        <ProfileTabs/>
                        <ProfileCards/>
                    </div>
                </div>
            </div>
        )
    }
}