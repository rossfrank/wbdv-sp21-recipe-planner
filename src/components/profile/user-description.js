import React, {useEffect, useState} from 'react'
import stick from "./img.png";
import {useParams} from "react-router-dom";
import userService from "../../services/user-service";

const UserDescription = ({}) => {

    const {user} = useParams();
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        userService.findUserById(user)
            .then(response => setUserInfo(response))
    }, [user])

    return(
        <div className="container">
            <img src={stick} alt="User Profile Image"/>
            <h2>{userInfo.email}</h2>
        </div>
    )
}

export default UserDescription