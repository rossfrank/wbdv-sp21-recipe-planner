const initialState = {
    userCredential: {
        userId: "",
        Authorization: ""
    }
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            const res = action.payload
            return {
                ...state,
                userCredential: {
                    ...state["userCredential"],
                    ...res,
                }
            }
        case "USER_LOGOUT":
            return {
                ...state,
                userCredential: {}
            }
        default:
            return state
    }
}

export default userReducer