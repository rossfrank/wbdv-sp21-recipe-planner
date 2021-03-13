import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import "./App.css";
import SignUp from "./components/sign-up/sign-up"
import LogIn from "./components/log-in/log-in"
import RecipeManager from "./components/recipe-manager";
function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
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
        </div>
      </BrowserRouter>
  );
}

export default App;
