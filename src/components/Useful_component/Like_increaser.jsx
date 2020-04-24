import React, { useState } from 'react'
import style from "./style.module.css"
import { connect } from "react-redux"
import { do_like_on_blog } from "../../Redux/BlogCreate/actions"

function Like_increaser({ count, do_like_on_blog, blog_id, curr_user, disabled }) {
    let srcs = ["/icons/like.png", "/icons/unlike.png"]
    const [like_index, setLike] = useState(1)
    const [no_of_likes, inc_dec_like] = useState(count)
    function like_me() {
        if (like_index) {
            setLike(0)
            let num = no_of_likes + 1
            inc_dec_like(num)
            do_like_on_blog(blog_id, num, curr_user.email)
        }
        else {
            setLike(1)
            let num = no_of_likes - 1
            inc_dec_like(num)
            do_like_on_blog(blog_id, num, curr_user.email)
        }
    }
    return (
        <div className={style.fixed_footer}>
            <img disabled={disabled} onClick={like_me} src={srcs[like_index]} alt="like_unlike" className={style.like_img} />
            <span className="p-2">{no_of_likes} Loves</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        do_like_on_blog: (blog_id, count) => dispatch(do_like_on_blog(blog_id, count))
    }
}
const mapStateToProps = state => {
    return {
        curr_user: state.auth.curr_user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Like_increaser)