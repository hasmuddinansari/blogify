import React from 'react'
import style from "./style.module.css"

export default function DashBlogCard({ title, author, date }) {
    return (
        <div className={style.myCard}>
            <h3>This is test</h3>
            <p>12/12/12 10:12:12</p>
            <p>Ayaan ansari</p>
            <span>
                <img src="icons/like.png" alt="like" className={style.heart} />
                100
            </span>
        </div>
    )
}
