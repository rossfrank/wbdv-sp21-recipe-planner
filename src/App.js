import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import RecipeProfile from "./components/recipe-profile/recipe-profile";
import SignUp from "./components/sign-up/sign-up"
import LogIn from "./components/log-in/log-in"

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
            <Route path="/signup" exact>
              <SignUp/>
            </Route>
            <Route path="/login" exact>
              <LogIn/>
            </Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
