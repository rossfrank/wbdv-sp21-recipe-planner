import React from 'react'
import './navbar.css'
import NavbarSearchForm from "./navbar-search-form";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

function Navbar({userCredential, userLogout}){

    return(
        <nav className="navbar navbar-light bg-theme">
            <div className="d-inline-flex">
                <Link className="nav-link  bg-theme" to="#" id="navbarScrollingDropdown" role="button"
                   data-toggle="dropdown" aria-expanded="false">
                    <span className="d-inline-block navbar-toggler-icon" />
                    <span className="d-none d-lg-inline-block d-xl-inline-block">explore</span>
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                    <Link to="/search/breakfast" type="button" className="dropdown-item btn btn-outline-warning">
                        Breakfast
                    </Link>
                    <Link to="/search/lunch" type="button" className="dropdown-item btn btn-outline-warning">
                        Lunch
                    </Link>
                    <Link to="/search/dinner" type="button" className="dropdown-item btn btn-outline-warning">
                        Dinner
                    </Link>
                </div>
                <Link to="/" className="navbar-brand float-right ml-4 d-none d-lg-inline-block d-xl-inline-block">
                    <i className="fab fa-viadeo"/>
                    Recipe Planner
                </Link>
            </div>
            <div className="d-flex flex-row justify-content-center w-50">
                <NavbarSearchForm/>
            </div>
            {
                !userCredential["isAuthenticated"] &&
                    <>
                        <div className="d-inline-flex flex-row-reverse">
                            <Link className="float-left bg-theme mr-4 my-2 d-none d-lg-inline-block d-xl-inline-block"
                               to="/registration">
                                Register
                            </Link>
                            <Link className="float-left bg-theme mr-4 my-2 d-none d-lg-inline-block d-xl-inline-block"
                               to="/login">
                                Login
                            </Link>
                            <Link className="btn border-0 bg-theme" to='/login'>
                                <i className="fas fa-user-lock" />
                            </Link>
                        </div>
                    </>
            }
            {
                userCredential["isAuthenticated"] &&
                <div className="d-inline-flex flex-row-reverse">

                    <button className="border-0 bg-theme mr-3">
                        <Link to={`/profile/${userCredential["userId"]}/Cart`}>
                            <i className="fas fa-shopping-cart bg-theme"/>
                        </Link>
                    </button>

                    <button type="button" className="btn bg-theme mr-1" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-user mr-1"/>
                        <span className="d-none d-lg-inline-block d-xl-inline-block">Profile</span>
                    </button>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to={`/profile/`}>Your Account</Link>
                        <div className="dropdown-divider"/>
                        <Link className="dropdown-item" to="#" onClick={userLogout}>Log Out</Link>
                    </div>
                </div>
            }
        </nav>
    )
}
const stateToPropMapper = (state) => {
    return {
        userCredential: state.userReducer.userCredential
    }
}

const dispatchToPropMapper =(dispatch)=> {

    return {
        userLogout: ()=>{
            dispatch({
                type: "USER_LOGOUT"
            })
        }
    }
}

export default connect(stateToPropMapper, dispatchToPropMapper)(Navbar);
