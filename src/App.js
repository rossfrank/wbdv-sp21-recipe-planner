import {BrowserRouter, Route, Switch} from "react-router-dom";
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
import NewRecipe from "./components/recipe/new-recipe";

function App() {
  return (
      <BrowserRouter>
        <div>
            <Navbar/>
            <div className="">
                <Route path={["/", "/homepage"]} exact>
                    <Homepage/>
                </Route>
                <Route path="/register" exact>
                  <SignUp/>
                </Route>
                <Route path="/login" exact>
                  <LogIn/>
                </Route>
                <Route path="/recipe">
                    <Profile />
                </Route>
                <Route path={[
                    "/profile",
                    "/profile/:tab"
                ]} exact>
                    <Profile/>
                </Route>
                <Route path="/search">
                    <SearchResult />
                </Route>
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
