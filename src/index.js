import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import {saveToLocalStorage, loadFromLocalStorage} from "./reducers/local-storage-util"
import recipeReducer from "./reducers/recipe-reducer";
import userReducer from "./reducers/user-reducer";
import {saveToLocalStorage, loadFromLocalStorage} from "./reducers/local-storage-util"
import recipeReducer from "./reducers/recipe-reducer";
import reviewReducer from "./reducers/review-reducer";
import favoriteReducer from "./reducers/favorite-reducer";



const persistedState = loadFromLocalStorage();
const reducer = combineReducers({
    recipeReducer: recipeReducer,
    userReducer: userReducer,
    reviewReducer: reviewReducer,
    favoriteReducer: favoriteReducer,
});

const store = createStore(reducer, persistedState);


store.subscribe(() => {
    saveToLocalStorage({
        userReducer: store.getState().userReducer
    })
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
