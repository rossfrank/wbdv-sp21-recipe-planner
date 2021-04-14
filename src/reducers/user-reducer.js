const initialState = {
    userCredential: {
        userId: "",
        Authorization: "",
        isAuthenticated: false,
    }
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            const res = action.payload
            let isAuthenticated = false;
            if(res["Authorization"] !== null && res["Authorization"].length > 8){
                isAuthenticated = true
            }
            return {
                ...state,
                userCredential: {
                    ...state["userCredential"],
                    ...res,
                    isAuthenticated: isAuthenticated,
                }
            }
        case "USER_LOGOUT":
            return {
                ...state,
                userCredential: {
                    userId: "",
                    Authorization: "",
                    isAuthenticated: false,
                }
            }
        default:
            return state
    }
}

export default userReducer