const initialState = {
    all_blogs: [],
    curr_user_blogs: [],
    curr_blog: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BLOG":
            return {
                ...state,
                all_blogs: [...state.all_blogs, { ...action.payload }]
            }
        case "CURR_USER_BLOG":
            let blogs = state.all_blogs.filter((blog) => {
                return blog.email == action.email
            })
            return {
                ...state,
                curr_user_blogs: blogs
            }
        case "CURR_BLOG":
            return {
                ...state,
                curr_blog: action.payload
            }
        case "LIKE_ME":
            let like_blog = state.all_blogs.find((blog) => {
                return blog.id === action.blog_id
            })
            let older_blog_history = state.all_blogs.filter((blog) => {
                return blog.id !== action.blog_id
            })
            //if user is already liked any blog then just marking that blog is liked by curr use
            if (like_blog.user_likes.indexOf(action.email) == -1) {
                like_blog["user_likes"] = [...like_blog.user_likes, action.email]
                like_blog["likes"] = like_blog["user_likes"].length
            }
            else {
                if (like_blog.user_likes.length > 0) {
                    let removing_like = [...like_blog.user_likes]
                    let index = like_blog.user_likes.indexOf(action.email)
                    if (index !== -1) {
                        removing_like.splice(index, 1)
                        like_blog["user_likes"] = removing_like
                        like_blog["likes"] = like_blog["user_likes"].length
                    }
                }
            }
            return {
                ...state,
                all_blogs: [...older_blog_history, { ...like_blog }]
            }
        default: return state
    }
}

export default reducer