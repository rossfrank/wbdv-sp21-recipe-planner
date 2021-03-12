import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import RecipeManager from "./components/recipe-manager";
import "./App.css";

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
            <Route path="/" exact={true}>
                <Home/>
            </Route>
            <Route path="/recipe">
                <RecipeManager />
            </Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
