import React, {useEffect, useState} from 'react'
import stick from "./img.png";
import {Link, useParams} from "react-router-dom";
import userService from "../../services/user-service";
import {connect} from "react-redux";

const UserDescription = ({userCredential, user}) => {

    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        userService.findUserById(user)
            .then(response => setUserInfo(response))
    }, [user, userCredential])

    return(
        <div className="container">
            <img src={stick} alt="User Profile"/>
            <h2>{userInfo.name}</h2>
            {user ===userCredential.userId &&
            <div>
                <h2 className="d-none d-lg-block">{userInfo.email}</h2>
                <Link to={`/profile/${user}/update`}>
                    <button className="btn btn-success">Update User Info</button>
                </Link>
            </div>
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
