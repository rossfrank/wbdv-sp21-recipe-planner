// const USERS_URL = "http://localhost:8080/api/users";
// const RECIPES_URL = "http://localhost:8080/api/recipes";

const USERS_URL = "https://wbdv-recipe-planner-server.herokuapp.com/api/users";
const RECIPES_URL = "https://wbdv-recipe-planner-server.herokuapp.com/api/recipes";

export const createReview = (rId, review) =>
  fetch(`${RECIPES_URL}/${rId}/reviews`, {
    method: "POST",
    body: JSON.stringify(review),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => {
    return response.json()
  });

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
