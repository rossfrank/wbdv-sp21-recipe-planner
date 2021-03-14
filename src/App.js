import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import "./App.css";
import SignUp from "./components/sign-up/sign-up"
import LogIn from "./components/log-in/log-in"
import Homepage from "./components/homepage/homepage";
import SearchResult from "./components/search/search-result";
import NavbarVisitor from "./components/homepage/navbar-vistor";
import Profile from "./components/profile/profile";
import RecipeProfile from "./components/recipe/recipe-profile";
import React from "react";

function App() {
  return (
      <BrowserRouter>
        <div>
            <NavbarVisitor/>
            <div className="">
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/signup" exact>
                  <SignUp/>
                </Route>
                <Route path="/login" exact>
                  <LogIn/>
                </Route>
                <Route path="/recipe">
                    <RecipeProfile />
                </Route>
                <Route path={[
                    "/profile",
                    "/profile/:tab"
                ]} exact>
                    <Profile/>
                </Route>
                <Route path="/homepage">
                    <Homepage />
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
