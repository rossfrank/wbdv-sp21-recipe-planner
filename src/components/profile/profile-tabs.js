import React from 'react'
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";

const ProfileTabs = ({}) => {

    const items = ["Favorites", "Basket", "Basket Recipes", "Reviews", "My Recipes"];

    const {tab} = useParams();

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
                                      to={`/profile/${item}`}>
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

export default ProfileTabs
