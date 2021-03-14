import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import "./App.css";
import SignUp from "./components/sign-up/sign-up"
import LogIn from "./components/log-in/log-in"
import RecipeManager from "./components/recipe-manager";
import Homepage from "./components/homepage/homepage";
import SearchResult from "./components/search/search-result";

function App() {
  return (
      <BrowserRouter>
        <>
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
                <RecipeManager />
            </Route>
            <Route path="/homepage">
                <Homepage />
            </Route>
            <Route path="/search">
                <SearchResult />
            </Route>
        </>
      </BrowserRouter>
  );
}

export default App;
