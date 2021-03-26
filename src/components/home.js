import React from 'react'
import {Link} from "react-router-dom";

export default () =>
    <div>
        <h1>Home</h1>
        <div className="list-group">
            <Link className="list-group-item" to="/details/656481">
                Recipe
            </Link>
            <Link className="list-group-item" to="/profile">
                Profile
            </Link>
            <Link className="list-group-item" to="/signup">
                Sign Up
            </Link>
            <Link className="list-group-item" to="/login">
                Log In
            </Link>
            <Link className="list-group-item" to="/homepage">
                Homepage
            </Link>
            <Link className="list-group-item" to="/search">
                Search
            </Link>
        </div>
    </div>
