import swal from "sweetalert"

const intialState = {
    isLoggedIn: true,
    curr_user: { "username": "test", email: "test@gmail.com" },
    all_user_list: [],
    message: "",
    error: false,
}

const reducer = (state = intialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case "SIGNUP":
            let existense = state.all_user_list.some((user) => user.email === action.payload.email)

            //saving data to backup in local storage



            if (!existense) {
                swal("", "Registeration Succesfull", "success")
                return {
                    ...state,
                    all_user_list: [...state.all_user_list, { ...action.payload }],
                    message: "Registeration Succesfull",
                    error: false,
                }
            }
            else {
                swal("", "User is alredy exist, please login", "warning")
                return {
                    ...state,
                    message: "User is alredy exist please login",
                    error: true,
                }
            }
        case "LOGIN":
            let find_user = state.all_user_list.some((user) => user.email === action.payload.email)
            if (find_user) {
                let user = state.all_user_list.find((user) => user.email === action.payload.email)

                let requested_user = action.payload

                if (user.email === requested_user.email && user.password === requested_user.password) {
                    swal("", "Login successfully", "success")
                    return {
                        ...state,
                        isLoggedIn: true,
                        message: "Login successfully",
                        curr_user: { "username": user.username, "email": user.email }
                    }
                }
                else {
                    swal("", "wrong password", "warning")
                    return {
                        ...state,
                        message: "wrong password",
                        isLoggedIn: false,
                        error: true
                    }
                }
            }
            else {
                swal("", "User is not registered yet", "warning")
                return {
                    ...state,
                    message: "User is not registered yet",
                    isLoggedIn: false,
                    error: true
                }
            }

        case "LOGOUT":
            return {
                ...state,
                isLoggedIn: false
            }


        default: return state
    }
}

export default reducer