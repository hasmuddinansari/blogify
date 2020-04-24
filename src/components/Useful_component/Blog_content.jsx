import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom"
import style from "./style.module.css"


export default function Blog_content({ blog, getBack }) {
    if (blog) {
        return (
            <>
                <div className={style.blank}></div>
                <div>
                    <Link to={`/${getBack}`}
                        className="bg-light border border-dark p-2 m-2">
                        {`<< Go Back`}
                    </Link>
                    <div className="container my-4 bg-light shadow shadow-sm p-3">
                        <h1>{blog.title}</h1>
                        <div className="">
                            {ReactHtmlParser(blog.content)}
                        </div>
                        <div className="text-right">
                            <span>
                                {blog.date}--
                        {blog.author}
                            </span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return <h1>No preview available</h1>
}
