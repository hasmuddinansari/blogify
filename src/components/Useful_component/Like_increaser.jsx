import React, { useState, useEffect } from 'react'
import style from "./style.module.css"
import { connect } from "react-redux"
import { do_like_on_blog } from "../../Redux/BlogCreate/actions"
import swal from "sweetalert"

function Like_increaser({ curr_user_likes, count, do_like_on_blog, blog_id, curr_user, disabled }) {
    let srcs = ["/icons/like.png", "/icons/unlike.png"]
    const [like_index, setLike] = useState(0)
    const [no_of_likes, inc_dec_like] = useState(count)
    //checking if user is liked or not
    useEffect(() => {
        console.error("use effect user", curr_user)
        console.log("use effect likes", curr_user_likes)
        if (curr_user_likes.includes(curr_user.email)) {
            setLike(0)
        }
        else {
            setLike(1)
        }
    }, [])


    function like_me() {
        if (curr_user.email === undefined) {
            swal("", "You have to login first.", "warning")
            return
        }

        if (disabled === false) {
            if (like_index) {
                setLike(0)
                let num = no_of_likes + 1
                inc_dec_like(num)
                do_like_on_blog(blog_id, curr_user.email)
            }
            else {
                if (no_of_likes !== 0) {
                    setLike(1)
                    let num = no_of_likes - 1
                    inc_dec_like(num)
                    do_like_on_blog(blog_id, curr_user.email)
                }
            }
        }
        else {
            swal("", "This page is only preview mode can't change likes.", "warning")
        }
    }
    return (
        <div className={style.fixed_footer}>
            <img onClick={like_me} src={srcs[like_index]} alt="like_unlike" className={style.like_img} />
            <span className="p-2">{no_of_likes} Loves</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        do_like_on_blog: (blog_id, count, email) => dispatch(do_like_on_blog(blog_id, count, email))
    }
}
const mapStateToProps = state => {
    return {
        curr_user: state.auth.curr_user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Like_increaser)