import React from 'react'
import style from "./Navbar.module.css"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { logOut } from "../../Redux/Auth/actions"



function Protected_Nav({ logOut, isLoggedIn, curr_user }) {
    return (
        <>
            {isLoggedIn ? <>
                <Link
                    style={{ "textDecoration": "none" }}
                    to="/write"
                    className={`${style.fancy_btn} m-2`}>
                    write a blog
                </Link>
                <button
                    data-toggle="collapse"
                    data-target="#profile"
                    aria-controls="profile"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    className={`${style.circle_btn} btn btn-dark my-1`}>
                    {curr_user.username.slice(0, 1).toUpperCase()}
                </button>
                <ul className="profile collapse" id="profile">
                    <li className={style.ul_li}> {curr_user.username}</li>
                    <li className={style.ul_li} > {curr_user.email}</li>
                    <li className={style.ul_li}>
                        <button onClick={logOut} className="btn btn-outline-danger">Logout</button>
                    </li>
                </ul>
            </> :
                <Link to="/login"
                    className={`btn btn-outline-danger ${style.login_btn} my-2`}>
                    Login/Signup
                </Link>}
            {/* profile section   */}


        </>
    )
}
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        curr_user: state.auth.curr_user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(logOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Protected_Nav)