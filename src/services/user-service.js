function UserService(){

    this.userLogin = userLogin;
    this.userRegister = userRegister;
    this.url = "http://localhost:8080"
    // this.url = "https://wbdv-recipe-planner-server.herokuapp.com"
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
