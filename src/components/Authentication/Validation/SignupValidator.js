import validator from "validator"

const SignupValidator = ({ state }) => {
    const errors = {}
    if (validator.isEmpty(state.email)) {
        errors["email"] = "this field is required"
    }
    else if (!validator.isEmail(state.email)) {
        errors["email"] = "email is not valid"
    }
    if (validator.isEmpty(state.password)) {
        errors["password"] = "this field is required"
    }
    else if (state.password.length < 4) {
        errors["password"] = "password length must be greater than 6 characters"
    }
    if (validator.isEmpty(state.username)) {
        errors["username"] = "this field is required"
    }
    else if (state.username.length < 4) {
        errors["username"] = "username length must be greater than 4 characters"
    }

    return (
        errors
    )
}

export default SignupValidator