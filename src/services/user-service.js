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

const api = {
    userLogin,
    userRegister
}

export default api
