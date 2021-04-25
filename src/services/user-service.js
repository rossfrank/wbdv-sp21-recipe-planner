const SERVER_URL = process.env.REACT_APP_SERVER_API


export const userLogin = userCredential =>
    fetch(`${SERVER_URL}/login`, {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(userCredential)
        }).then((res)=>{
            return res.json()
    })

export const userRegister = user =>
    fetch(`${SERVER_URL}/register`, {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(user)
        }).then((res)=>res.json())

export const findUserById = (uId) =>
    fetch(`${SERVER_URL}/api/users/${uId}`)
        .then((response) => response.json())

export const updateUser = (uId, user) =>
    fetch(`${SERVER_URL}/api/users/${uId}`,{
        method: "PUT",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(user)
    })
        .then((response) => response.json())

const api = {
    userLogin,
    userRegister,
    findUserById,
    updateUser
}

export default api
