import React from 'react'
import BlogCard from "../Useful_component/BlogCard"
import style from "./dash_style.module.css"
export default function Dashboard() {
    let m = ['a', "b", "c", "d", "e", "f", "g", "h"]
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        {m.map((i, e) => {
                            return <BlogCard />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
