import React from "react";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_FAVORITE":
      const newState = {
        ...state,
        favorite: [...state.favorites, action.favorite],
      };
      return newState;
    case "FIND_FAVORITE_FOR_USER":
      const newStateA = {
        ...state,
        favorites: action.favorites,
      };
      return newStateA;
    case "FIND_FAVORITE_FOR_RECIPE":
      const newStateB = {
        ...state,
        favorites: action.favorites,
      };
      return newStateB;
    case "FIND_FAVORITE":
      const newStateC = {
        ...state,
        favorites: action.favorites,
      };
      return newStateC;
    case "DELETE_FAVORITE":
      const newStateD = {
        favorites: state.favorites.filter((f) => {
          if (f.id === action.itemToDelete.id) {
            return false;
          } else {
            return true;
          }
        }),
      };
      return newStateD;
    default:
      return state;
  }
};

export default favoriteReducer;
