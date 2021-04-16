const USERS_URL = `${process.env.REACT_APP_SERVER_API}/api/users`;
const FAVORITES_URL = `${process.env.REACT_APP_SERVER_API}/api/favorites`;

export const createFavorite = (uId, rid, favorite) =>
  fetch(`${USERS_URL}/${uId}/recipe/${rid}/favorite`, {
    method: "POST",
    body: JSON.stringify(favorite),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());

export const findFavoriteForUser = (uId) =>
  fetch(`${USERS_URL}/${uId}/favorites`).then((response) => response.json());

export const findFavorite = (uId, rId) =>
  fetch(`${USERS_URL}/${uId}/recipe/${rId}/favorite`).then((response) => 
    response.json());

export const deleteFavorite = (fId) =>
  fetch(`${FAVORITES_URL}/${fId}`, {
    method: "DELETE",
  });
  //.then((response) => response.json())

const api = {
  createFavorite,
  findFavoriteForUser,
  deleteFavorite,
  findFavorite,
};

export default api;
