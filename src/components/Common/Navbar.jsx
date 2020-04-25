import React from 'react'
import style from "./Navbar.module.css"
import { Link } from "react-router-dom"
import Protected_Nav from "./Protected_Nav"
import { connect } from "react-redux"
import { search_blog } from "../../Redux/BlogCreate/actions"

// search_blog

function Navbar({ search_blog }) {
    function searchBlog() {
        let val = document.getElementById("search").value
        search_blog(val)
    }
    function debaunce(fn, delay) {
        let timer;
        return () => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                fn()
            }, delay)
        }
    }

    return (
        <nav className={`navbar navbar-expand-lg  navbar-light ${style.container}`} >
            <Link to="/" className="mr-3 navbar-brand border border-dark px-3 bg-dark text-light">Blogify</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between align-items-center" id="navbarNavAltMarkup">
                <div className="navbar-nav ">
                    <input id="search" onChange={debaunce(searchBlog, 500)} type="text" placeholder="Search blogs....." className="form-control p-3 nav-item" />
                </div>
                <div className="navbar-nav">
                    <Protected_Nav />
                </div>
            </div>
        </ nav>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        search_blog: (search_key) => dispatch(search_blog(search_key))
    }
}

export default connect(null, mapDispatchToProps)(Navbar)