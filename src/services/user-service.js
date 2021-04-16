const SERVER_URL = process.env.REACT_APP_SERVER_API

function UserService(){

    this.userLogin = userLogin;
    this.userRegister = userRegister;
    this.url = process.env.REACT_APP_SERVER_API
    const self = this

    function userLogin(userCredential){
        return fetch(`${self.url}/login`, {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(userCredential)
        }).then((res)=>{
            return res.json()
        })
    }

    function userRegister(user){
        return fetch(`${self.url}/register`, {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(user)
        }).then((res)=>{
            return res.json()
        })
    }


}

export default UserService
