import React from "react";
import './navbar.css'


function NavbarVisitor(){
    return(
        <nav className="navbar navbar-light bg-theme">
            <div className="d-inline-flex">
                <a className="nav-link  bg-theme" href="#" id="navbarScrollingDropdown" role="button"
                   data-toggle="dropdown" aria-expanded="false">
                    <span className="d-inline-block navbar-toggler-icon" />
                    <span className="d-none d-lg-inline-block d-xl-inline-block">explore</span>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                    <a className="dropdown-item" href="#">Breakfast</a>
                    <a className="dropdown-item active" href="#">Lunch</a>
                    <a className="dropdown-item" href="#">Dinner</a>
                </div>
                <a className="navbar-brand float-right ml-4 d-none d-lg-inline-block d-xl-inline-block" href="#">
                    <i className="fab fa-viadeo" />
                    Recipe Planner
                </a>
            </div>
            <div className="d-flex flex-row justify-content-center w-50">
                <div className="form-row w-100">
                    <div className="col-9">
                        <input type="text" className="form-control my-2 mr-sm-2" placeholder="Search"/>
                    </div>
                    <div className="col-3 float-right">
                        <button className="btn my-2 mr-sm-2 bg-theme" type="submit">
                            <i className="fas fa-search" />
                        </button>
                    </div>
                </div>
            </div>
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
        </nav>
    )
}

export default NavbarVisitor