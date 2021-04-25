import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
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
import EditableRecipe from "./components/recipe/editable-recipe";
import RecipeForm from "./components/recipe/recipe-form";
import UpdateUser from "./components/profile/update-user";

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
                    <Route exact path="/registration">
                        {userCredential["isAuthenticated"] ? <Redirect to="/homepage" /> : <SignUp />}
                    </Route>

                    <Route exact path="/login">
                        {userCredential["isAuthenticated"] ? <Redirect to="/homepage" /> : <LogIn />}
                    </Route>
                    {/*protect Search function*/}
                    <Route exact path={["/search", "/search/:keyword"]}>
                        <SearchResult /> 
                    </Route>

                    { !userCredential["isAuthenticated"] &&
                        <Route path={["/details/form", "/details/:recipeId/form"]} exact>
                            <Redirect to="/login" />
                        </Route>
                    }
                    {
                        (userCredential["isAuthenticated"]) && (userCredential["role"] === "CREATOR") &&
                        <Route path="/details/form" exact>
                            <RecipeForm />
                        </Route>
                    }

                    {
                        (userCredential["isAuthenticated"]) && (userCredential["role"] === "CREATOR") &&
                        <Route path="/details/:recipeId/form" exact>
                            <EditableRecipe />
                        </Route>
                    }


                    <Route path="/details/:recipeId" exact>
                        <RecipeProfile />
                    </Route>
                    <Route path="/profile/:user/update">
                        <UpdateUser />
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
