import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "./components/home"
import "./App.css";
import SignUp from "./components/sign-up/sign-up"
import LogIn from "./components/log-in/log-in"
import Homepage from "./components/homepage/homepage";
import SearchResult from "./components/search/search-result";
import Profile from "./components/profile/profile";
import RecipeProfile from "./components/recipe/recipe-profile";
import React from "react";
import Navbar from "./components/homepage/navbar";
import {connect} from "react-redux";
import NewRecipe from "./components/recipe/new-recipe";

function App({userCredential,}) {

  return (
      <BrowserRouter>
        <div>
            <Navbar/>
            <div className="">
                <Switch>
                    <Route path={["/", "/homepage"]} exact>
                        <Homepage/>
                    </Route>

                    <Route exact path="/signup">
                        {userCredential["isAuthenticated"] ? <Redirect to="/homepage" /> : <SignUp />}
                    </Route>

                    <Route exact path="/login">
                        {userCredential["isAuthenticated"] ? <Redirect to="/homepage" /> : <LogIn />}
                    </Route>

                    {/*protect Search function*/}
                    <Route exact path={["/recipes/search", "/recipes/search/:keyword"]}>
                        {userCredential["isAuthenticated"] ?  <SearchResult /> : <Redirect to="/homepage" />}
                    </Route>


                    <Route path="/recipes/:recipeId">
                        <RecipeProfile />
                    </Route>

                    <Route path="/newrecipe" exact>
                        <NewRecipe/>
                    </Route>

                    <Route path={[
                        "/profile",
                        "/profile/:user",
                        "/profile/:user/:tab"
                    ]} exact>
                        <Profile/>
                    </Route>

                </Switch>
            </div>
        </div>
      </BrowserRouter>
  );
}

const stateToPropMapper = (state) => {
    return {
        userCredential: state.userReducer.userCredential
    }
}

const dispatchToPropMapper = (dispatch)=> {
    return {}
}

export default connect(stateToPropMapper, dispatchToPropMapper)(App);
