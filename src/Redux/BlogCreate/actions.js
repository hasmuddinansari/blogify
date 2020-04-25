export const add_blog = (blog_object) => {
    return {
        type: "ADD_BLOG",
        payload: blog_object
    }
}

export const curr_user_blogs = (email) => {
    return {
        type: "CURR_USER_BLOG",
        email: email
    }
}

export const set_curr_blog = (cur_blog) => {
    return {
        type: "CURR_BLOG",
        payload: cur_blog,
    }
}

// this ob is help for searching the blog
export const search_blog = (search_key) => {
    return {
        type: "SEARCH",
        search_key: search_key
    }
}


export const do_like_on_blog = (blog_id, email) => {
    return {
        type: "LIKE_ME",
        blog_id: blog_id,
        email: email
    }
}
