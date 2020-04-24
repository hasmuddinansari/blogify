import React from 'react'
import BlogCard from "../Useful_component/BlogCard"
import style from "./dash_style.module.css"
import { connect } from "react-redux"

function Dashboard({ all_blogs }) {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        {all_blogs && all_blogs.map((blog) => {
                            return <BlogCard
                                key={blog.id}
                                title={blog.title}
                                date={blog.date}
                                likes={blog.likes}
                                author={blog.author}
                                id={blog.id}
                            />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        all_blogs: state.blogs.all_blogs
    }
}

export default connect(mapStateToProps)(Dashboard)
