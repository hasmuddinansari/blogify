export const signupUser = (user_info) => {
    return {
        type: "SIGNUP",
        payload: user_info
    }
}

export const logOut = () => {
    return {
        type: "LOGOUT",
    }
}

export const loginUser = (user_info) => {
    return {
        type: "LOGIN",
        payload: user_info
    }
}