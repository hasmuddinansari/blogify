import React from 'react'
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="container ">
            <div className="row justify-content-center">
                <h1 className="text-white col-12 text-center">Page Not found</h1>
                <img src="images/notfound.png" className="" alt="" />
                <div className="col-12 row justify-content-center my-2">
                    <Link to="/" className="btn btn-info ">Go Back</Link>
                </div>
            </div>
        </div >
    )
}
