import React from 'react'
import UserDescription from "./user-description";
import "./profile.css";
import ProfileTabs from "./profile-tabs";
import ProfileCards from "./profile-cards";
import {connect} from "react-redux";

const Profile = ({}) => {

    return(
        <div className="profile-page">
            <div className="row">
                <div className="col-3">
                    <UserDescription />
                </div>
                <div className="col-8">
                    <ProfileTabs />
                    <ProfileCards/>
                </div>
            </div>
        </div>
    )
}

const stpm = (state) => {
    return {
        userCredential: state.userReducer.userCredential
    }
}

const dtpm = (dispatch)=> {

    return {}
}

export default connect(stpm, dtpm)(Profile)