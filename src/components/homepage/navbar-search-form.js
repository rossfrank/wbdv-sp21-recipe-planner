import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";

function NavbarSearchForm(){
    const [query, setQuery] = useState("");


    return(
        <>
            <div className="form-row w-100">
                <div className="col-9">
                    <input type="text" className="form-control my-2 mr-sm-2"
                           placeholder="Search"
                           onChange={(event)=>{
                               setQuery(event.target.value)
                           }}
                    />
                </div>
                <div className="col-3 float-right">
                    <Link to={`/recipes/search/${query}`}
                          className="btn my-2 mr-sm-2 bg-theme"
                    >
                        <i className="fas fa-search"></i>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NavbarSearchForm