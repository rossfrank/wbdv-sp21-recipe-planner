import React from 'react'
import UserDescription from "./user-description";
import "./profile.css";
import ProfileTabs from "./profile-tabs";
import ProfileCards from "./profile-cards";
import {connect} from "react-redux";
import {Redirect, Route, useParams} from "react-router";

const Profile = ({userCredential}) => {
    const {user} = useParams()
    const userId = (user !== undefined ? user: userCredential.userId)

    return(
        <div className="profile-page">
            { userId !== "" &&
                <div className="row">
                    <div className="col-3 d-none d-md-block d-lg-block d-xl-block">
                        <UserDescription user={userId}/>
                    </div>
                    <div className="col-8">
                        <ProfileTabs user={userId}/>
                        <ProfileCards user={userId}/>
                    </div>
                </div>
            }
            { userId === "" &&
                <h1>Must be logged in to see this page</h1>
            }
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
