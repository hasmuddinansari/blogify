import React from 'react'
import Blog_content from "../Useful_component/Blog_content"
import { connect } from "react-redux"

function Preview({ preview }) {
    if (Object.keys(preview).length === 0) {
        return <h1 className="text-white">Not found</h1>
    }
    return (
        <Blog_content blog={preview} getBack={"/write"} disabled={true} />
    )
}
const mapStateToProps = state => {
    return {
        preview: state.blogs.curr_blog
    }
}

export default connect(mapStateToProps)(Preview)
