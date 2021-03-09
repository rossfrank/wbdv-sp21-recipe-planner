import React from 'react'
import {Link} from "react-router-dom";

function Home(){
    return(
        <>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand">Navbar</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>

            <div className="content-page">
                <h2>Home Page1</h2>
                <h2>Home Page2</h2>
                <h2>Home Page3</h2>
                <h2>Home Page4</h2>
                <h2>Home Page5</h2>
                <h2>Home Page6</h2>
                <h2>Home Page7</h2>
                <h2>Home Page8</h2>
                <h2>Home Page9</h2>
                <h2>Home Page10</h2>
                <h2>Home Page11</h2>
                <h2>Home Page12</h2>
            </div>
        </>
    )
}

export default Home
