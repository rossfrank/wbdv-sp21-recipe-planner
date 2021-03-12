import React from 'react'
import {Route} from "react-router-dom";
import Profile from "./profile/profile";
import Recipe from "./recipe/recipe";

class RecipeManager extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return(
            <div>
                <div className="container p-0 m-0">
                    <div className="row">
                        <div className="col-sm-auto">
                            <i className="fas fa fa-2x fa-bars"/>
                        </div>
                        <div className="d-none d-lg-table-cell">
                            <h3>WEB</h3>
                        </div>
                        <div className="col">
                            <input className="form-control" placeholder="Recipe"/>
                        </div>
                    </div>
                </div>
                <Route path="/recipe/profile" exact={true}>
                    <Profile/>
                </Route>
                <Route path="/recipe/recipe" exact={true}>
                    <Recipe/>
                </Route>
            </div>
        )
    }
}

export default RecipeManager