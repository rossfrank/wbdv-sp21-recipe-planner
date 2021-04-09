function UserService(){

    this.userLogin = userLogin;

    function userLogin(userCredential){
        return fetch("https://wbdv-recipe-planner-server.herokuapp.com/login", {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(userCredential)
        }).then((res)=>{
            return res.json()
        })
    }


}

export default UserService