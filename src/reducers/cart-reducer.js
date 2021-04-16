import React from "react";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      const newState = {
        ...state,
        cart: [...state.cart, action.item],
      };
      return newState;
    case "FIND_CART_FOR_USER":
      const newStateA = {
        ...state,
        cart: action.cart,
      };
      return newStateA;
    case "DELETE_CART_ITEM":
      const newStateD = {
        cart: state.cart.filter((c) => {
          if (c.Id === action.itemToDelete.Id) {
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

export default cartReducer;
