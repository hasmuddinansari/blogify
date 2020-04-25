import React from 'react'
import Blog_content from "../Useful_component/Blog_content"
import { connect } from "react-redux"

function Blog({ match, all_blogs }) {
    let blog = all_blogs.find((blg) => {
        return blg.id === match.params.id
    })
    return (
        <>
            <Blog_content blog={blog} getBack="/" disabled={false} />
        </>
    )
}
const mapStateToProps = state => {
    return {
        all_blogs: state.blogs.all_blogs
    }
}

export default connect(mapStateToProps)(Blog)


