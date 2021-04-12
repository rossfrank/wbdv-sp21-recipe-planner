import React, {useState, useEffect} from 'react'
import './navbar.css'
import NavbarSearchForm from "./navbar-search-form";
import {Link} from "react-router-dom";
import UserService from "../../services/user-service";
import {connect} from "react-redux";

function Navbar({userCredential, userLogout}){


    return(
        <nav className="navbar navbar-light bg-theme">
            <div className="d-inline-flex">
                <a className="nav-link  bg-theme" href="#" id="navbarScrollingDropdown" role="button"
                   data-toggle="dropdown" aria-expanded="false">
                    <span className="d-inline-block navbar-toggler-icon"></span>
                    <span className="d-none d-lg-inline-block d-xl-inline-block">explore</span>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                    <Link to="/recipes/search/breakfast" type="button" className="dropdown-item btn btn-outline-warning">
                        Breakfast
                    </Link>
                    <Link to="/recipes/search/lunch" type="button" className="dropdown-item btn btn-outline-warning">
                        Lunch
                    </Link>
                    <Link to="/recipes/search/dinner" type="button" className="dropdown-item btn btn-outline-warning">
                        Dinner
                    </Link>
                </div>

                <Link to="/" className="navbar-brand float-right ml-4 d-none d-lg-inline-block d-xl-inline-block">
                    <i className="fab fa-viadeo"></i>
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
                            <a className="float-left bg-theme mr-4 my-2 d-none d-lg-inline-block d-xl-inline-block"
                               href="/signup">
                                Register
                            </a>
                            <a className="float-left bg-theme mr-4 my-2 d-none d-lg-inline-block d-xl-inline-block"
                               href="/login">
                                Login
                            </a>
                            <a className="btn border-0 bg-theme" href='/login'>
                                <i className="fas fa-user-lock" />
                            </a>
                        </div>
                    </>
            }


            {
                userCredential["isAuthenticated"] &&
                <div className="d-inline-flex flex-row-reverse">
                    <button className="border-0 bg-theme mr-3">
                        <i className="fas fa-shopping-cart"></i>
                    </button>

                    <button type="button" className="btn bg-theme mr-1" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-user mr-1"></i>
                        <span className="d-none d-lg-inline-block d-xl-inline-block">Profile</span>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Your Account</a>
                        <a className="dropdown-item" href="#">Your Recipe</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#" onClick={userLogout}>Log Out</a>
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

const dispatchToPropMapper = (dispatch)=> {

    return {
        userLogout: ()=>{
            dispatch({
                type: "USER_LOGOUT"
            })
        }
    }
}

export default connect(stateToPropMapper, dispatchToPropMapper)(Navbar);
