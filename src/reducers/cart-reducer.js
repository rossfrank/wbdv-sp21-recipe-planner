const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "FIND_CART_FOR_USER":
      return {
        ...state,
        cart: action.cart,
      };
    case "DELETE_CART_ITEM":
      return {
        cart: state.cart.filter((c) => {
          return c.Id !== action.itemToDelete.Id;
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
