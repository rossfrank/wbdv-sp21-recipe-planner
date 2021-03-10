import React from 'react'
import {Link} from "react-router-dom";

export default () =>
    <>
        <h1>Home</h1>
        <div className="list-group">
            <Link to="/recipe/recipe-profile">
                Recipe Profile
            </Link>
            <Link to="/signup">
                Sign Up
            </Link>
            <Link to="/login">
                Log In
            </Link>
        </div>
    </>
