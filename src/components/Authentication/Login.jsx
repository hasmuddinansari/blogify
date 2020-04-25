import React, { useState } from 'react'
import { LoginValidation } from "./Validation/LoginValidation"
import { connect } from "react-redux"
import { Link, Redirect } from "react-router-dom"
import { loginUser } from '../../Redux/Auth/actions'

function Login({ history, loginUser, isLoggedIn }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState({})
    const [token] = useState(localStorage.getItem("token"))
    const submit = (event) => {
        console.log(token)
        setError({})
        event.preventDefault()
        const userData = { "email": email, "password": password }
        const err = LoginValidation({ state: userData })
        if (Object.keys(err).length !== 0) {
            setError(err)
        }
        else {
            loginUser(userData)
        }
    }
    if (isLoggedIn) {
        history.push("/")
    }
    return (
        <div className="container p-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-6 col-12  border p-5 bg-light ">
                    <form onSubmit={submit} >
                        <h2 className="text-center">Login </h2>

                        <label htmlFor="email">Email</label>

                        <input
                            className="form-control"
                            type="text"
                            onChange={(e) => setEmail(e.target.value)} />

                        {error.email && <p className="text-danger">{error.email}</p>}

                        <label htmlFor="email">Password</label>
                        <input
                            className="form-control"
                            type="password"
                            onChange={(e) => { setPassword(e.target.value) }} />

                        {error.password && <p className="text-danger">{error.password}</p>}

                        <input
                            // disabled={Auth.loading}
                            type="submit" className="btn btn-success my-2" value="Login" /> <br />

                        <Link to="/signup">Not Registered yet?</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        Auth: state.auth,
        message: state.auth.message,
        err: state.auth.error,
        isLoggedIn: state.auth.isLoggedIn
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loginUser: (user_info) => dispatch(loginUser(user_info))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)