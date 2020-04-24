import React, { useState } from 'react'
import SignupValidator from "./Validation/SignupValidator"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { signupUser } from "../../Redux/Auth/actions"
import swal from "sweetalert"

function Register({ signupUser, err, message }) {
    const [loader, setloader] = useState(false)
    const [state, setState] =
        useState({ "username": "", "password": "", "email": "" })
    const [error, setError] = useState({})
    const [msg, setMsg] = useState("")

    const handleChange = (event) => {
        let newState = state
        newState[event.target.name] = event.target.value
        setState(newState)
    }
    const submit = (event) => {
        setError({})
        setMsg("")
        event.preventDefault()
        const err = SignupValidator({ state: state })
        if (Object.keys(err).length !== 0) {
            setError(err)
        }
        else {
            signupUser(state)
        }

    }
    return (
        <div className="container p-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-6 col-12  border p-5 bg-light ">
                    <form onSubmit={submit} >
                        {msg && <span className="text-right border p-2">{msg}</span>}
                        <h2 className="text-center">Register </h2>
                        <label htmlFor="username">Username</label>
                        <input name="username" className="form-control my-1" type="text" onChange={handleChange} />
                        {error.username && <p className="text-danger">{error.username}</p>}
                        <label htmlFor="email">Email</label>
                        <input name="email" className="form-control my-1" type="text" onChange={handleChange} />
                        {error.email && <p className="text-danger">{error.email}</p>}

                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" className="form-control my-1" onChange={handleChange} />
                        {error.password && <p className="text-danger">{error.password}</p>}
                        <input disabled={loader} type="submit" className="btn btn-success my-2" value="Signup" /> <br />
                        <Link to="/login">Already have an account.</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

//connecting to state, and dispatch
const mapStateToProps = state => {
    return {
        Auth: state.auth,
        message: state.auth.message,
        err: state.auth.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signupUser: (user_info) => dispatch(signupUser(user_info))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)