import React from 'react'
import BlogCard from "../Useful_component/BlogCard"
import style from "./dash_style.module.css"
export default function Dashboard() {
    let m = ['a', "b", "c", "d", "e", "f", "g", "h"]
    return (
        <>
            <div className={style.blank}></div>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div>
                        {m.map((i, e) => {
                            return <BlogCard />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
