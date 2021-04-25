import React, {useEffect, useState} from 'react'
import stick from "./img.png";
import {Link, useParams} from "react-router-dom";
import userService from "../../services/user-service";
import {connect} from "react-redux";

const UserDescription = ({userCredential}) => {

    const {user} = useParams();

    return(
        <div className="container">
            <img src={stick} alt="User Profile"/>
            <h2>{userCredential.username}</h2>
            <h2>{userCredential.email}</h2>
            {user ===userCredential.userId &&
            <Link to={`/profile/${user}/update`}>
                <button className="btn btn-success">Update User Info</button>
            </Link>
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

export default connect(stpm, dtpm)(UserDescription)
