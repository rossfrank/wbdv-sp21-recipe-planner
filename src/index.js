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

import recipeReducer from "./reducers/recipe-reducer";
import reviewReducer from "./reducers/review-reducer";

const reducer = combineReducers({
  recipeReducer: recipeReducer,
  reviewReducer: reviewReducer,
});

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
