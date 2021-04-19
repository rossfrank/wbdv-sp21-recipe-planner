import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";

const ProfileTabs = ({userCredential}) => {

    const {user, tab} = useParams();
    const [items, setItems] = useState(["Favorites", "Reviews", "My Recipes"])

    useEffect(() => {
        console.log(userCredential)
        if(user === userCredential.userId){
            setItems([...items, "Cart"])
            }
    }, [user])

    const isActive =(item) => {
        return item === tab;
    }
    return(
        <div>
            <ul className="nav nav-pills">
                {
                    items.map(item =>
                        <div key={item} className="nav-item">
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive(item)?'active white':''}`}
                                      to={`/profile/${user}/${item}`}>
                                    {item}
                                </Link>
                            </li>
                        </div>
                    )
                }
            </ul>
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

export default connect(stpm, dtpm)(ProfileTabs)
