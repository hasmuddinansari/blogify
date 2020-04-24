import React from 'react'
import style from "./style.module.css"
import { Link } from "react-router-dom"

export default function DashBlogCard({ title, author, date, likes, id }) {
    return (
        <div className="">
            <div className={`${style.myCard}`}>
                <Link to={`/blogs/${id}`}><h3>{title}</h3></Link>
                <p>{date}</p>
                <p>@{author}</p>
                <span>
                    <img src="icons/like.png" alt="like" className={style.heart} />
                    {likes}
                </span>
            </div>
        </div >
    )
}
