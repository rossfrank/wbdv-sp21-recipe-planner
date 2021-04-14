const USERS_URL = `${process.env.REACT_APP_SERVER_API}/api/users`;
const RECIPES_URL = `${process.env.REACT_APP_SERVER_API}/api/recipes`;

export const createReview = (rId, review) =>
  fetch(`${RECIPES_URL}/${rId}/reviews`, {
    method: "POST",
    body: JSON.stringify(review),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) =>
    response.json()
  );

export const findReviewForRecipe = (rId) =>
  fetch(`${RECIPES_URL}/${rId}/reviews`).then((response) =>
   response.json());

export const findReviewForUser = (uId) =>
  fetch(`${USERS_URL}/${uId}/reviews`).then((response) => response.json());

const api = {
    createReview,
    findReviewForRecipe,
    findReviewForUser,
};

export default api
