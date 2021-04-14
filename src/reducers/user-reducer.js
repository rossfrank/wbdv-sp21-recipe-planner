const initialState = {
    userCredential: {}
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            return {
                ...state,
                userCredential: action.payload
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