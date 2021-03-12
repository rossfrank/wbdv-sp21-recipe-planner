import React from 'react'
import {Link} from "react-router-dom";

export default () =>
    <>
        <h1>Home</h1>
        <div className="list-group">
            <Link className="list-group-item" to="/recipe/recipe">
                Recipe
            </Link>
            <Link className="list-group-item" to="/recipe/profile">
                Profile
            </Link>
        </div>
    </>
