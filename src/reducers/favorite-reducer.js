const initialState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_FAVORITE":
      return {
        ...state,
        favorite: [...state.favorites, action.favorite],
      };
    case "FIND_FAVORITE_FOR_USER":
      return {
        ...state,
        favorites: action.favorites,
      };
    case "FIND_FAVORITE_FOR_RECIPE":
      return {
        ...state,
        favorites: action.favorites,
      };
    case "FIND_FAVORITE":
      return {
        ...state,
        favorites: action.favorites,
      };
    case "DELETE_FAVORITE":
      return {
        favorites: state.favorites.filter((f) => {
          return f.id !== action.itemToDelete.id;
        }),
      };
    default:
      return state;
  }
};

export default favoriteReducer;
