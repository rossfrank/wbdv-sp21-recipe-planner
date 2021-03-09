import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import RecipeProfile from "./components/recipe-profile/recipe-profile";

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/recipe/recipe-profile" exact>
              <RecipeProfile/>
            </Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
