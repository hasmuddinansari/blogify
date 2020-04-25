import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom"
import style from "./style.module.css"
import Like_increaser from "./Like_increaser"

export default function Blog_content({ blog, getBack, disabled }) {
    if (blog) {
        return (
            <>
                <div className="my-3">
                    <Link to={`${getBack}`}
                        className="bg-light border border-dark p-2 my-3">
                        {`<< Go Back`}
                    </Link>
                    <div className={`${style.blog_resize} container my-4 shadow shadow-sm p-3`}>
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
                    <Like_increaser count={blog.likes} blog_id={blog.id} disabled={disabled} curr_user_likes={blog.user_likes} />
                </div>
            </>
        )
    }
    return <h1 className="text-white">No preview available</h1>
}
