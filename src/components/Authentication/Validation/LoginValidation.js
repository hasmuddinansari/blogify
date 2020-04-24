import validator from "validator"


export function LoginValidation({ state }) {
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

    return (
        errors
    )
}
