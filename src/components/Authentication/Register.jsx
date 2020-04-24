import React, { useState } from 'react'
import SignupValidator from "./common/SignupValidator"
import { Link } from "react-router-dom"

function Register() {
    const [loader, setLoader] = useState(false)
    const [state, setState] =
        useState({ "username": "", "password": "", "email": "", "name": "" })
    const [error, setError] = useState({})
    const [msg, setMsg] = useState("")

    const handleChange = (event) => {
        let newState = state
        newState[event.target.name] = event.target.value
        setState(newState)
        console.log(state)
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
            // setLoader(true)
        }

    }
    return (
        <div className="container p-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-6 col-12  border p-5 bg-light ">
                    <form onSubmit={submit} >
                        {msg && <span className="text-right border p-2">{msg}</span>}
                        <h2 className="text-center">Register </h2>
                        <label htmlFor="name">Name</label>
                        <input name="name" className="form-control" type="text" onChange={handleChange} />
                        {error.name && <p className="text-danger">{error.name}</p>}

                        <label htmlFor="username">Username</label>
                        <input name="username" className="form-control" type="text" onChange={handleChange} />
                        {error.username && <p className="text-danger">{error.username}</p>}

                        <label htmlFor="email">Email</label>
                        <input name="email" className="form-control" type="text" onChange={handleChange} />
                        {error.email && <p className="text-danger">{error.email}</p>}
                        <label htmlFor="password">Password</label>
                        <input name="password" className="form-control" type="text" onChange={handleChange} />
                        {error.password && <p className="text-danger">{error.password}</p>}
                        <input disabled={loader} type="submit" className="btn btn-success my-2" value="Signup" /> <br />
                        <Link to="/login">Already have an account.</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register