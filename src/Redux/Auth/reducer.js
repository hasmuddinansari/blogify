
const intialState = {
    isLoggedIn: false,
    curr_user: {},
    all_user_list: [],
    message: "",
    error: false,
}

const reducer = (state = intialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case "SIGNUP":
            let existense = state.all_user_list.some((user) => user.email === action.payload.email)
            if (!existense) {
                return {
                    ...state,
                    all_user_list: [...state.all_user_list, { ...action.payload }],
                    message: "Registeration Succesfull",
                    error: false,
                }
            }
            else {
                return {
                    ...state,
                    message: "User is alredy exist",
                    error: true,
                }
            }
        case "LOGIN":
            let find_user = state.all_user_list.some((user) => user.email === action.payload.email)
            if (find_user) {
                let user = state.all_user_list.find((user) => user.email === action.payload.email)

                let requested_user = action.payload

                if (user.email === requested_user.email && user.password === requested_user.password) {
                    return {
                        ...state,
                        isLoggedIn: true,
                        message: "Login successfully",
                        curr_user: { "username": user.username, "email": user.email }
                    }
                }
                else {
                    return {
                        ...state,
                        message: "wrong password",
                        isLoggedIn: false,
                        error: true
                    }
                }
            }
            else {
                return {
                    ...state,
                    message: "User is not registered yet",
                    isLoggedIn: false,
                    error: true
                }
            }



        default: return state
    }
}

export default reducer