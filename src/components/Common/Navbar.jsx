import React from 'react'
import style from "./Navbar.module.css"
import { Link } from "react-router-dom"

let auth = true
let name = "M"
export default function Navbar() {
    return (
        <>
            <div className={style.container}>
                <div className="navbar">
                    <div className="navbar-items d-flex">
                        <h2 className="mr-3 border border-dark px-3 bg-dark text-light">Blogify</h2>
                        <input type="text" placeholder="Searh blogs....." className="form-control" />
                    </div>
                    <div className="navbar-item d-flex p-2">
                        <Link style={{ "textDecoration": "none" }} to="/write" className={`${style.fancy_btn} mx-2`}>write a blog</Link>

                        {/* condition if user is logged in then login/signup will disappear and if username's first letter will show */}
                        {auth ? <button className="rounded-circle btn btn-dark">{name}</button> : <button className="btn btn-outline-danger">Login/Signup</button>}
                    </div>
                </div>
            </div>
        </>
    )
}
