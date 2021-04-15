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
                <Switch>
                    <Route path={["/", "/homepage"]} exact>
                        <Homepage/>
                    </Route>
                    <Route path="/signup" exact>
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
                    <Route path={[
                        "/recipes/search",
                        "/recipes/search/:keyword",
                    ]} exact>
                        <SearchResult />
                    </Route>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/signup" exact>
                      <SignUp/>
                    </Route>
                    <Route path="/login" exact>
                      <LogIn/>
                    </Route>
                    <Route path="/recipe/:recipeId">
                        <RecipeProfile />
                    </Route>
                    <Route path="/newrecipe" exact>
                        <NewRecipe/>
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

                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/register" exact>
                      <SignUp/>
                    </Route>
                    <Route path="/login" exact>
                      <LogIn/>
                    </Route>
                    <Route path="/recipes/:recipeId" exact>
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
                </Switch>
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
