import React from 'react'
import BlogCard from "../Useful_component/BlogCard"
import style from "./dash_style.module.css"
import { connect } from "react-redux"

function Dashboard({ all_blogs, search_key }) {
    let blogs = all_blogs.filter(blog => {
        return blog.title.startsWith(search_key) || blog.title.includes(search_key)
    })
    if (blogs.length == 0) {
        return <h1 className="bg-light text-center">Not Found</h1>
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        {blogs && blogs.map((blog) => {
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
        all_blogs: state.blogs.all_blogs,
        search_key: state.blogs.search_key
    }
}

export default connect(mapStateToProps)(Dashboard)
