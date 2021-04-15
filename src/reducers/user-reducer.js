const initialState = {
    userCredential: {
        userId: "",
        authorization: "",
        isAuthenticated: false,
    }
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            const res = action.payload
            if( action.payload["status"]===200 && action.payload["authorization"].length > 8){
                return {
                    ...state,
                    userCredential: {
                        ...state["userCredential"],
                        ...res,
                        isAuthenticated: true,
                    }
                }
            }else {
                return{
                    ...state,
                    userCredential: {
                        userId: "",
                        authorization: "",
                        isAuthenticated: false,
                    }
                }
            }
        case "USER_LOGOUT":
            return {
                ...state,
                userCredential: {
                    userId: "",
                    authorization: "",
                    isAuthenticated: false,
                }
            }
        default:
            return state
    }
}

export default userReducer