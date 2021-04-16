const CART_URL = `${process.env.REACT_APP_SERVER_API}/api/cart`

export const findCartForUser = uId =>
    fetch(`${CART_URL}/${uId}`)
        .then(response => response.json());

export const addItemToCart = (uId, cartItem) =>
    fetch(`${CART_URL}/${uId}/`, {
        method: "POST",
        body: JSON.stringify(cartItem),
        headers: {
            "content-type": "application/json",
        },
    }).then(response => response.json());

export const removeItemFromCart = (uId, cId) =>
    fetch(`${CART_URL}/${uId}/${cId}`, {
        method: "DELETE",
    }).then((response) => response.json())

const api = {
    findCartForUser,
    addItemToCart,
    removeItemFromCart
}

export default api
